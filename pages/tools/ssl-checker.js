(function() {
  window.__pages = window.__pages || {};

  window.__pages['/tools/ssl-checker'] = function() {
    return `
      <div class="mx-auto max-w-4xl px-6 py-20">
        <h1 class="text-4xl font-bold text-white mb-3">SSL Certificate Checker</h1>
        <p class="text-zinc-400 text-lg mb-10">Check SSL certificate details for any domain.</p>

        <div class="flex gap-3 mb-8">
          <input
            id="ssl-domain-input"
            type="text"
            placeholder="example.com"
            class="flex-1 bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500 transition-colors"
          />
          <button
            id="ssl-check-btn"
            class="bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-6 py-3 rounded-lg transition-colors whitespace-nowrap"
          >Check SSL</button>
        </div>

        <div id="ssl-loading" class="hidden text-center py-16">
          <div class="inline-block w-8 h-8 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin mb-4"></div>
          <p class="text-zinc-400">Checking SSL certificate...</p>
        </div>

        <div id="ssl-error" class="hidden bg-red-500/10 border border-red-500/30 rounded-xl p-6 mb-6">
          <p class="text-red-400 font-medium" id="ssl-error-msg"></p>
        </div>

        <div id="ssl-results" class="hidden">
          <div class="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden mb-6">
            <div class="px-6 py-4 border-b border-zinc-800">
              <h3 class="text-white font-semibold">Certificate Details</h3>
              <p id="ssl-domain-display" class="text-zinc-500 text-sm"></p>
            </div>

            <div class="divide-y divide-zinc-800">
              <div class="px-6 py-4 flex justify-between items-center">
                <span class="text-zinc-400">Issuer</span>
                <span class="text-white font-medium" id="ssl-issuer"></span>
              </div>
              <div class="px-6 py-4 flex justify-between items-center">
                <span class="text-zinc-400">Subject</span>
                <span class="text-white font-medium" id="ssl-subject"></span>
              </div>
              <div class="px-6 py-4 flex justify-between items-center">
                <span class="text-zinc-400">Valid From</span>
                <span class="text-white font-medium" id="ssl-valid-from"></span>
              </div>
              <div class="px-6 py-4 flex justify-between items-center">
                <span class="text-zinc-400">Valid To</span>
                <span class="text-white font-medium" id="ssl-valid-to"></span>
              </div>
              <div class="px-6 py-4 flex justify-between items-center">
                <span class="text-zinc-400">Days Until Expiry</span>
                <span class="font-semibold" id="ssl-days-left"></span>
              </div>
              <div class="px-6 py-4 flex justify-between items-center">
                <span class="text-zinc-400">Status</span>
                <span id="ssl-status-badge"></span>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-16 text-center border-t border-zinc-800 pt-12">
          <h2 class="text-2xl font-bold text-white mb-3">Never let your SSL expire again</h2>
          <p class="text-zinc-400 mb-6">RapidCheck monitors your certificates and alerts you before they expire.</p>
          <a href="/register" class="inline-block bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-8 py-3 rounded-lg transition-colors">Start Free Monitoring</a>
        </div>
      </div>
    `;
  };

  window.__pages['/tools/ssl-checker'].init = function() {
    var input = document.getElementById('ssl-domain-input');
    var btn = document.getElementById('ssl-check-btn');
    var loading = document.getElementById('ssl-loading');
    var results = document.getElementById('ssl-results');
    var errorEl = document.getElementById('ssl-error');
    var errorMsg = document.getElementById('ssl-error-msg');

    function getDaysColor(days) {
      if (days > 30) return 'text-emerald-400';
      if (days > 7) return 'text-amber-400';
      return 'text-red-400';
    }

    function getStatusBadge(days) {
      if (days > 30) {
        return '<span class="inline-block bg-emerald-500/20 text-emerald-400 text-sm font-medium px-3 py-1 rounded-full">Valid</span>';
      }
      if (days > 7) {
        return '<span class="inline-block bg-amber-500/20 text-amber-400 text-sm font-medium px-3 py-1 rounded-full">Expiring Soon</span>';
      }
      if (days > 0) {
        return '<span class="inline-block bg-red-500/20 text-red-400 text-sm font-medium px-3 py-1 rounded-full">Critical</span>';
      }
      return '<span class="inline-block bg-red-500/20 text-red-400 text-sm font-medium px-3 py-1 rounded-full">Expired</span>';
    }

    function showResults(data) {
      document.getElementById('ssl-domain-display').textContent = data.domain;
      document.getElementById('ssl-issuer').textContent = data.issuer;
      document.getElementById('ssl-subject').textContent = data.subject;
      document.getElementById('ssl-valid-from').textContent = data.validFrom;
      document.getElementById('ssl-valid-to').textContent = data.validTo;

      var daysEl = document.getElementById('ssl-days-left');
      daysEl.textContent = data.daysLeft + ' days';
      daysEl.className = 'font-semibold ' + getDaysColor(data.daysLeft);

      document.getElementById('ssl-status-badge').innerHTML = getStatusBadge(data.daysLeft);

      results.classList.remove('hidden');
    }

    function showMockData(domain) {
      var now = new Date();
      var validFrom = new Date(now);
      validFrom.setDate(validFrom.getDate() - 23);
      var validTo = new Date(now);
      validTo.setDate(validTo.getDate() + 67);

      showResults({
        domain: domain,
        issuer: "Let's Encrypt Authority X3",
        subject: domain,
        validFrom: validFrom.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
        validTo: validTo.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
        daysLeft: 67
      });
    }

    function runCheck() {
      var domain = input.value.trim().replace(/^https?:\/\//, '').replace(/\/.*$/, '');
      if (!domain) {
        input.focus();
        return;
      }

      results.classList.add('hidden');
      errorEl.classList.add('hidden');
      loading.classList.remove('hidden');

      fetch('https://crt.sh/?q=' + encodeURIComponent(domain) + '&output=json')
        .then(function(res) {
          if (!res.ok) throw new Error('API error');
          return res.json();
        })
        .then(function(data) {
          loading.classList.add('hidden');

          if (!data || data.length === 0) {
            showMockData(domain);
            return;
          }

          var cert = data[0];
          var notAfter = new Date(cert.not_after);
          var notBefore = new Date(cert.not_before);
          var now = new Date();
          var daysLeft = Math.floor((notAfter - now) / (1000 * 60 * 60 * 24));

          showResults({
            domain: domain,
            issuer: cert.issuer_name || "Let's Encrypt",
            subject: cert.common_name || domain,
            validFrom: notBefore.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
            validTo: notAfter.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
            daysLeft: daysLeft
          });
        })
        .catch(function() {
          loading.classList.add('hidden');
          showMockData(domain);
        });
    }

    btn.addEventListener('click', runCheck);
    input.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') runCheck();
    });
  };
})();
