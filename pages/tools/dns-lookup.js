(function() {
  window.__pages = window.__pages || {};

  window.__pages['/tools/dns-lookup'] = function() {
    return `
      <div class="mx-auto max-w-4xl px-6 py-20">
        <h1 class="text-4xl font-bold text-[#1B1B4B] mb-3">DNS Lookup</h1>
        <p class="text-[#4a4a6a] text-lg mb-10">Look up DNS records for any domain using Cloudflare DNS.</p>

        <div class="flex gap-3 mb-8">
          <label for="dns-domain-input" class="sr-only">Domain</label>
          <input
            id="dns-domain-input"
            type="text"
            placeholder="example.com"
            class="flex-1 bg-white border border-[#F9A825]/20 rounded-lg px-4 py-3 text-[#1B1B4B] placeholder-[#6a6a8a] focus:outline-none focus:border-[#F9A825] transition-colors"
          />
          <button
            id="dns-lookup-btn"
            class="bg-[#F9A825] hover:bg-[#FFB830] text-[#1B1B4B] font-semibold px-6 py-3 rounded-lg transition-colors whitespace-nowrap"
          >Lookup</button>
        </div>

        <div id="dns-loading" class="hidden text-center py-16">
          <div class="inline-block w-8 h-8 border-2 border-[#F9A825] border-t-transparent rounded-full animate-spin mb-4"></div>
          <p class="text-[#4a4a6a]">Querying DNS records...</p>
        </div>

        <div id="dns-error" class="hidden bg-red-500/10 border border-red-500/30 rounded-xl p-6 mb-6">
          <p class="text-red-400 font-medium" id="dns-error-msg"></p>
        </div>

        <div id="dns-results" class="hidden">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-[#1B1B4B] font-semibold text-lg">DNS Records</h3>
            <p id="dns-domain-display" class="text-[#6a6a8a] text-sm"></p>
          </div>

          <div class="bg-white border border-[#F9A825]/15 rounded-xl overflow-hidden mb-6">
            <div class="overflow-x-auto">
              <table class="w-full text-left">
                <thead>
                  <tr class="border-b border-[#F9A825]/15">
                    <th class="px-6 py-3 text-[#4a4a6a] text-sm font-medium">Type</th>
                    <th class="px-6 py-3 text-[#4a4a6a] text-sm font-medium">Name</th>
                    <th class="px-6 py-3 text-[#4a4a6a] text-sm font-medium">Value</th>
                    <th class="px-6 py-3 text-[#4a4a6a] text-sm font-medium">TTL</th>
                  </tr>
                </thead>
                <tbody id="dns-table-body" class="divide-y divide-[#F9A825]/15">
                </tbody>
              </table>
            </div>
          </div>

          <p id="dns-record-count" class="text-[#6a6a8a] text-sm text-center"></p>
        </div>

        <div class="mt-16 text-center border-t border-[#F9A825]/15 pt-12">
          <h2 class="text-2xl font-bold text-[#1B1B4B] mb-3">Track DNS changes automatically</h2>
          <p class="text-[#4a4a6a] mb-6">Get alerted when DNS records change unexpectedly. Catch hijacking and misconfigurations.</p>
          <a href="/register" class="inline-block bg-[#F9A825] hover:bg-[#FFB830] text-[#1B1B4B] font-semibold px-6 py-3 rounded-lg transition-colors">Start Free Monitoring</a>
        </div>
      </div>
    `;
  };

  window.__pages['/tools/dns-lookup'].init = function() {
    var input = document.getElementById('dns-domain-input');
    var btn = document.getElementById('dns-lookup-btn');
    var loading = document.getElementById('dns-loading');
    var results = document.getElementById('dns-results');
    var errorEl = document.getElementById('dns-error');
    var errorMsg = document.getElementById('dns-error-msg');
    var tableBody = document.getElementById('dns-table-body');
    var domainDisplay = document.getElementById('dns-domain-display');
    var recordCount = document.getElementById('dns-record-count');

    var typeColors = {
      A: 'bg-blue-500/20 text-blue-400',
      AAAA: 'bg-purple-500/20 text-purple-400',
      MX: 'bg-orange-500/20 text-orange-400',
      TXT: 'bg-[#6a6a8a]/20 text-[#4a4a6a]',
      NS: 'bg-[#F9A825]/20 text-[#F9A825]',
      CNAME: 'bg-yellow-500/20 text-yellow-400'
    };

    var typeNumbers = { A: 1, AAAA: 28, MX: 15, TXT: 16, NS: 2, CNAME: 5 };

    function formatTTL(seconds) {
      if (seconds >= 86400) return Math.floor(seconds / 86400) + 'd';
      if (seconds >= 3600) return Math.floor(seconds / 3600) + 'h';
      if (seconds >= 60) return Math.floor(seconds / 60) + 'm';
      return seconds + 's';
    }

    function getTypeName(typeNum) {
      var map = { 1: 'A', 28: 'AAAA', 15: 'MX', 16: 'TXT', 2: 'NS', 5: 'CNAME' };
      return map[typeNum] || 'TYPE' + typeNum;
    }

    function renderRow(type, name, value, ttl) {
      var colorClass = typeColors[type] || 'bg-[#6a6a8a]/20 text-[#4a4a6a]';
      return '<tr>' +
        '<td class="px-6 py-3"><span class="inline-block text-xs font-mono font-semibold px-2 py-1 rounded ' + colorClass + '">' + type + '</span></td>' +
        '<td class="px-6 py-3 text-[#4a4a6a] text-sm font-mono">' + escapeHtml(name) + '</td>' +
        '<td class="px-6 py-3 text-[#1B1B4B] text-sm font-mono break-all max-w-xs">' + escapeHtml(value) + '</td>' +
        '<td class="px-6 py-3 text-[#4a4a6a] text-sm">' + formatTTL(ttl) + '</td>' +
        '</tr>';
    }

    function escapeHtml(str) {
      var div = document.createElement('div');
      div.textContent = str;
      return div.innerHTML;
    }

    function runLookup() {
      var domain = input.value.trim().replace(/^https?:\/\//, '').replace(/\/.*$/, '');
      if (!domain) {
        input.focus();
        return;
      }

      results.classList.add('hidden');
      errorEl.classList.add('hidden');
      loading.classList.remove('hidden');
      tableBody.innerHTML = '';

      var types = ['A', 'AAAA', 'MX', 'TXT', 'NS', 'CNAME'];
      var allRecords = [];
      var completed = 0;
      var hadError = false;

      types.forEach(function(type) {
        fetch('https://cloudflare-dns.com/dns-query?name=' + encodeURIComponent(domain) + '&type=' + type, {
          headers: { 'Accept': 'application/dns-json' }
        })
          .then(function(res) { return res.json(); })
          .then(function(data) {
            if (data.Answer && data.Answer.length > 0) {
              data.Answer.forEach(function(record) {
                allRecords.push({
                  type: getTypeName(record.type),
                  name: record.name,
                  value: record.data,
                  ttl: record.TTL
                });
              });
            }
          })
          .catch(function() {
            hadError = true;
          })
          .finally(function() {
            completed++;
            if (completed === types.length) {
              loading.classList.add('hidden');

              if (allRecords.length === 0 && hadError) {
                errorMsg.textContent = 'Failed to query DNS records. Please check the domain and try again.';
                errorEl.classList.remove('hidden');
                return;
              }

              if (allRecords.length === 0) {
                errorMsg.textContent = 'No DNS records found for ' + domain + '.';
                errorEl.classList.remove('hidden');
                return;
              }

              var typeOrder = { A: 0, AAAA: 1, CNAME: 2, MX: 3, NS: 4, TXT: 5 };
              allRecords.sort(function(a, b) {
                return (typeOrder[a.type] || 99) - (typeOrder[b.type] || 99);
              });

              var html = '';
              allRecords.forEach(function(r) {
                html += renderRow(r.type, r.name, r.value, r.ttl);
              });

              tableBody.innerHTML = html;
              domainDisplay.textContent = domain;
              recordCount.textContent = allRecords.length + ' record' + (allRecords.length !== 1 ? 's' : '') + ' found';
              results.classList.remove('hidden');
            }
          });
      });
    }

    btn.addEventListener('click', runLookup);
    input.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') runLookup();
    });
  };
})();
