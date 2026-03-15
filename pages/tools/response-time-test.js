(function() {
  window.__pages = window.__pages || {};

  window.__pages['/tools/response-time-test'] = function() {
    return `
      <div class="mx-auto max-w-4xl px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1B1B4B] mb-3">Response Time Test</h1>
        <p class="text-[#4a4a6a] text-base sm:text-lg mb-10">Test how fast a URL responds from your browser.</p>

        <div class="flex flex-col sm:flex-row gap-3 mb-8">
          <label for="rt-url-input" class="sr-only">URL</label>
          <input
            id="rt-url-input"
            type="text"
            placeholder="https://example.com"
            class="flex-1 bg-white border border-[#F9A825]/20 rounded-lg px-4 py-3 text-[#1B1B4B] placeholder-[#6a6a8a] focus:outline-none focus:border-[#F9A825] transition-colors"
          />
          <button
            id="rt-test-btn"
            class="w-full sm:w-auto bg-[#F9A825] hover:bg-[#FFB830] text-[#1B1B4B] font-semibold px-6 py-3 rounded-lg transition-colors whitespace-nowrap"
          >Test</button>
        </div>

        <div id="rt-loading" class="hidden text-center py-16">
          <div class="inline-block w-8 h-8 border-2 border-[#F9A825] border-t-transparent rounded-full animate-spin mb-4"></div>
          <p class="text-[#4a4a6a]">Measuring response time...</p>
        </div>

        <div id="rt-cors-error" class="hidden bg-amber-500/10 border border-amber-500/30 rounded-xl p-6 mb-6">
          <div class="flex items-start gap-3">
            <span class="text-amber-400 text-xl mt-0.5">&#9888;</span>
            <div>
              <p class="text-amber-400 font-medium mb-2">CORS Blocked</p>
              <p class="text-[#4a4a6a] text-sm">This URL cannot be tested from the browser due to CORS (Cross-Origin Resource Sharing) restrictions. This is a client-side limitation.</p>
              <p class="text-[#4a4a6a] text-sm mt-2">For accurate server-side response time checks from 330+ global locations, use RapidCheck's full monitoring platform.</p>
            </div>
          </div>
        </div>

        <div id="rt-results" class="hidden">
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <div class="bg-white border border-[#F9A825]/15 rounded-xl p-6 text-center">
              <p class="text-[#4a4a6a] text-sm mb-2">Response Time</p>
              <p class="text-3xl font-bold" id="rt-time"></p>
              <p class="text-sm mt-1" id="rt-rating"></p>
            </div>

            <div class="bg-white border border-[#F9A825]/15 rounded-xl p-6 text-center">
              <p class="text-[#4a4a6a] text-sm mb-2">Status Code</p>
              <p class="text-3xl font-bold text-[#1B1B4B]" id="rt-status"></p>
              <p class="text-[#6a6a8a] text-sm mt-1" id="rt-status-text"></p>
            </div>

            <div class="bg-white border border-[#F9A825]/15 rounded-xl p-6 text-center">
              <p class="text-[#4a4a6a] text-sm mb-2">Content Type</p>
              <p class="text-lg font-medium text-[#1B1B4B] mt-2" id="rt-content-type"></p>
            </div>
          </div>

          <div class="bg-white border border-[#F9A825]/15 rounded-xl p-6 mb-6">
            <h3 class="text-[#1B1B4B] font-semibold mb-4">Speed Rating</h3>
            <div class="w-full bg-[#F9A825]/10 rounded-full h-4 relative">
              <div id="rt-speed-bar" class="h-4 rounded-full transition-all duration-700" style="width: 0%"></div>
              <div class="absolute inset-0 flex items-center justify-between px-2 text-xs text-[#6a6a8a]">
                <span>0ms</span>
                <span>200ms</span>
                <span>500ms</span>
                <span>1000ms</span>
                <span>2000ms+</span>
              </div>
            </div>
          </div>

          <p id="rt-url-display" class="text-[#6a6a8a] text-sm text-center"></p>
        </div>

        <div class="mt-12 sm:mt-16 text-center border-t border-[#F9A825]/15 pt-8 sm:pt-12">
          <h2 class="text-xl sm:text-2xl font-bold text-[#1B1B4B] mb-3">Monitor response times 24/7</h2>
          <p class="text-[#4a4a6a] text-sm sm:text-base mb-6">Track performance from 330+ locations worldwide. Get alerts when things slow down.</p>
          <a href="/register" class="inline-block bg-[#F9A825] hover:bg-[#FFB830] text-[#1B1B4B] font-semibold px-6 py-3 rounded-lg transition-colors">Start Free Monitoring</a>
        </div>
      </div>
    `;
  };

  window.__pages['/tools/response-time-test'].init = function() {
    var input = document.getElementById('rt-url-input');
    var btn = document.getElementById('rt-test-btn');
    var loading = document.getElementById('rt-loading');
    var results = document.getElementById('rt-results');
    var corsError = document.getElementById('rt-cors-error');

    function getRating(ms) {
      if (ms < 200) return { label: 'Excellent', color: 'text-[#F9A825]', barColor: 'bg-[#F9A825]', pct: 10 };
      if (ms < 500) return { label: 'Good', color: 'text-[#F9A825]', barColor: 'bg-[#F9A825]', pct: 25 };
      if (ms < 1000) return { label: 'Fair', color: 'text-amber-400', barColor: 'bg-amber-500', pct: 50 };
      return { label: 'Slow', color: 'text-red-400', barColor: 'bg-red-500', pct: Math.min(100, (ms / 2000) * 100) };
    }

    function getStatusText(code) {
      var map = {
        200: 'OK', 201: 'Created', 204: 'No Content', 301: 'Moved Permanently',
        302: 'Found', 304: 'Not Modified', 400: 'Bad Request', 401: 'Unauthorized',
        403: 'Forbidden', 404: 'Not Found', 500: 'Internal Server Error',
        502: 'Bad Gateway', 503: 'Service Unavailable'
      };
      return map[code] || '';
    }

    function runTest() {
      var url = input.value.trim();
      if (!url) {
        input.focus();
        return;
      }
      if (!/^https?:\/\//i.test(url)) {
        url = 'https://' + url;
      }

      results.classList.add('hidden');
      corsError.classList.add('hidden');
      loading.classList.remove('hidden');

      var startTime = performance.now();

      fetch(url, { method: 'GET', mode: 'cors', cache: 'no-store' })
        .then(function(res) {
          var elapsed = Math.round(performance.now() - startTime);
          loading.classList.add('hidden');

          var rating = getRating(elapsed);

          document.getElementById('rt-time').textContent = elapsed + 'ms';
          document.getElementById('rt-time').className = 'text-3xl font-bold ' + rating.color;
          document.getElementById('rt-rating').textContent = rating.label;
          document.getElementById('rt-rating').className = 'text-sm mt-1 ' + rating.color;

          document.getElementById('rt-status').textContent = res.status;
          document.getElementById('rt-status-text').textContent = getStatusText(res.status);

          var ct = res.headers.get('content-type') || 'Unknown';
          document.getElementById('rt-content-type').textContent = ct.split(';')[0].trim();

          var bar = document.getElementById('rt-speed-bar');
          bar.className = 'h-4 rounded-full transition-all duration-700 ' + rating.barColor;
          requestAnimationFrame(function() {
            bar.style.width = rating.pct + '%';
          });

          document.getElementById('rt-url-display').textContent = 'Tested: ' + url;
          results.classList.remove('hidden');
        })
        .catch(function(err) {
          loading.classList.add('hidden');

          if (err.name === 'TypeError' || err.message.includes('CORS') || err.message.includes('Failed to fetch') || err.message.includes('NetworkError')) {
            corsError.classList.remove('hidden');
          } else {
            corsError.classList.remove('hidden');
          }
        });
    }

    btn.addEventListener('click', runTest);
    input.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') runTest();
    });
  };
})();
