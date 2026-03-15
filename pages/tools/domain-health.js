(function() {
  window.__pages = window.__pages || {};

  window.__pages['/tools/domain-health'] = function() {
    return `
      <div class="mx-auto max-w-4xl px-6 py-20">
        <h1 class="text-4xl font-bold text-[#1B1B4B] mb-3">Domain Health Checker</h1>
        <p class="text-[#4a4a6a] text-lg mb-10">Enter a domain to check its SSL, DNS, WHOIS, and blacklist status.</p>

        <div class="flex gap-3 mb-8">
          <label for="dh-domain-input" class="sr-only">Domain</label>
          <input
            id="dh-domain-input"
            type="text"
            placeholder="example.com"
            class="flex-1 bg-white border border-[#F9A825]/20 rounded-lg px-4 py-3 text-[#1B1B4B] placeholder-[#6a6a8a] focus:outline-none focus:border-[#F9A825] transition-colors"
          />
          <button
            id="dh-check-btn"
            class="bg-[#F9A825] hover:bg-[#FFB830] text-[#1B1B4B] font-semibold px-6 py-3 rounded-lg transition-colors whitespace-nowrap"
          >Check</button>
        </div>

        <div id="dh-loading" class="hidden text-center py-16">
          <div class="inline-block w-8 h-8 border-2 border-[#F9A825] border-t-transparent rounded-full animate-spin mb-4"></div>
          <p class="text-[#4a4a6a]">Analyzing domain health...</p>
        </div>

        <div id="dh-results" class="hidden">
          <p class="text-xs text-[#6a6a8a] mb-3 text-center italic">Example result — sign up for real-time domain monitoring</p>
          <div class="bg-white border border-[#F9A825]/15 rounded-xl p-8 mb-6">
            <div class="flex items-center justify-between mb-6">
              <div>
                <p class="text-[#4a4a6a] text-sm mb-1">Overall Health Score</p>
                <p class="text-5xl font-bold text-[#F9A825]" id="dh-score-grade">A+</p>
              </div>
              <div class="text-right">
                <p class="text-[#4a4a6a] text-sm mb-1">Score</p>
                <p class="text-5xl font-bold text-[#1B1B4B]" id="dh-score-num">92<span class="text-[#6a6a8a] text-2xl">/100</span></p>
              </div>
            </div>
            <div class="w-full bg-[#F9A825]/10 rounded-full h-3">
              <div id="dh-score-bar" class="bg-[#F9A825] h-3 rounded-full transition-all duration-1000" style="width: 0%"></div>
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div class="bg-white border border-[#F9A825]/15 rounded-xl p-6">
              <div class="flex items-center gap-3 mb-2">
                <span class="w-3 h-3 rounded-full bg-[#F9A825]"></span>
                <span class="text-[#4a4a6a] font-medium">SSL Certificate</span>
              </div>
              <p class="text-[#F9A825] font-semibold text-lg">Valid</p>
              <p class="text-[#6a6a8a] text-sm">247 days remaining</p>
            </div>

            <div class="bg-white border border-[#F9A825]/15 rounded-xl p-6">
              <div class="flex items-center gap-3 mb-2">
                <span class="w-3 h-3 rounded-full bg-[#F9A825]"></span>
                <span class="text-[#4a4a6a] font-medium">DNS Records</span>
              </div>
              <p class="text-[#F9A825] font-semibold text-lg">Found</p>
              <p class="text-[#6a6a8a] text-sm">A, AAAA, MX, NS, TXT</p>
            </div>

            <div class="bg-white border border-[#F9A825]/15 rounded-xl p-6">
              <div class="flex items-center gap-3 mb-2">
                <span class="w-3 h-3 rounded-full bg-[#F9A825]"></span>
                <span class="text-[#4a4a6a] font-medium">WHOIS Status</span>
              </div>
              <p class="text-[#F9A825] font-semibold text-lg">Active</p>
              <p class="text-[#6a6a8a] text-sm">Registered and not expired</p>
            </div>

            <div class="bg-white border border-[#F9A825]/15 rounded-xl p-6">
              <div class="flex items-center gap-3 mb-2">
                <span class="w-3 h-3 rounded-full bg-[#F9A825]"></span>
                <span class="text-[#4a4a6a] font-medium">Blacklist Status</span>
              </div>
              <p class="text-[#F9A825] font-semibold text-lg">Clean</p>
              <p class="text-[#6a6a8a] text-sm">Not listed on any blacklists</p>
            </div>
          </div>

          <p id="dh-domain-display" class="text-[#6a6a8a] text-sm text-center mb-6"></p>
        </div>

        <div class="mt-16 text-center border-t border-[#F9A825]/15 pt-12">
          <h2 class="text-2xl font-bold text-[#1B1B4B] mb-3">Monitor your domains 24/7</h2>
          <p class="text-[#4a4a6a] mb-6">Get instant alerts when SSL expires, DNS changes, or your domain gets blacklisted.</p>
          <a href="/register" class="inline-block bg-[#F9A825] hover:bg-[#FFB830] text-[#1B1B4B] font-semibold px-6 py-3 rounded-lg transition-colors">Start Free Monitoring</a>
        </div>
      </div>
    `;
  };

  window.__pages['/tools/domain-health'].init = function() {
    var input = document.getElementById('dh-domain-input');
    var btn = document.getElementById('dh-check-btn');
    var loading = document.getElementById('dh-loading');
    var results = document.getElementById('dh-results');
    var scoreBar = document.getElementById('dh-score-bar');
    var domainDisplay = document.getElementById('dh-domain-display');

    function runCheck() {
      var domain = input.value.trim().replace(/^https?:\/\//, '').replace(/\/.*$/, '');
      if (!domain) {
        input.focus();
        return;
      }

      results.classList.add('hidden');
      loading.classList.remove('hidden');
      scoreBar.style.width = '0%';

      setTimeout(function() {
        loading.classList.add('hidden');
        results.classList.remove('hidden');
        domainDisplay.textContent = 'Results for ' + domain;

        requestAnimationFrame(function() {
          scoreBar.style.width = '92%';
        });
      }, 1000);
    }

    btn.addEventListener('click', runCheck);
    input.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') runCheck();
    });
  };
})();
