(function() {
  window.__pages = window.__pages || {};
  window.__pages['/features/browser-checks'] = function() {
    return `
      <!-- Hero -->
      <section class="pt-24 sm:pt-28 md:pt-32 pb-16 relative overflow-hidden">
        <div class="absolute inset-0 overflow-hidden pointer-events-none">
          <div class="absolute top-[0%] left-[40%] w-[500px] h-[500px] bg-[#F9A825]/[0.08] rounded-full blur-[120px]"></div>
          <div class="absolute top-[50%] right-[20%] w-[300px] h-[300px] bg-[#1B1B4B]/[0.06] rounded-full blur-[100px]"></div>
        </div>
        <div class="relative max-w-4xl mx-auto px-6 text-center z-10">
          <span class="inline-block rounded-lg bg-[#F9A825]/10 border border-[#F9A825]/30 px-4 py-1.5 text-sm font-medium text-[#F9A825] mb-6 reveal-up">Browser Checks</span>
          <h1 class="text-3xl sm:text-4xl md:text-6xl font-semibold tracking-tighter text-[#1B1B4B] mb-4 reveal-up" style="animation-delay: 0.1s;">
            Use real browsers to check your web app
          </h1>
          <p class="text-base sm:text-lg text-[#4a4a6a] max-w-2xl mx-auto mb-10 leading-relaxed reveal-up" style="animation-delay: 0.2s;">
            HTTP checks can't catch JavaScript errors, broken renders, or missing elements. Browser checks can.
          </p>

          <!-- Mini browser mockup -->
          <div class="max-w-lg mx-auto mb-10 reveal-up" style="animation-delay: 0.3s;">
            <div class="rounded-xl border border-[#F9A825]/15 bg-white shadow-lg shadow-[#F9A825]/5 overflow-hidden">
              <!-- Browser chrome -->
              <div class="flex items-center gap-2 px-4 py-2.5 border-b border-[#F9A825]/15 bg-[#faf8f5]">
                <div class="flex gap-1.5">
                  <span class="w-2.5 h-2.5 rounded-full bg-red-400/60"></span>
                  <span class="w-2.5 h-2.5 rounded-full bg-[#F9A825]/60"></span>
                  <span class="w-2.5 h-2.5 rounded-full bg-[#F9A825]/40"></span>
                </div>
                <div class="flex-1 mx-3">
                  <div class="bg-white rounded px-3 py-1 text-[10px] text-[#6a6a8a] font-mono text-center truncate border border-[#F9A825]/15">https://app.example.com/dashboard</div>
                </div>
              </div>
              <!-- Page content being scanned -->
              <div class="p-4 relative" id="bc-page-content">
                <!-- Simulated page skeleton -->
                <div class="space-y-3">
                  <div class="h-5 w-32 bg-[#1B1B4B]/10 rounded opacity-0 transition-opacity duration-300" data-skel="0"></div>
                  <div class="flex gap-3">
                    <div class="h-16 flex-1 bg-[#1B1B4B]/5 rounded opacity-0 transition-opacity duration-300" data-skel="1"></div>
                    <div class="h-16 flex-1 bg-[#1B1B4B]/5 rounded opacity-0 transition-opacity duration-300" data-skel="2"></div>
                    <div class="h-16 flex-1 bg-[#1B1B4B]/5 rounded opacity-0 transition-opacity duration-300" data-skel="3"></div>
                  </div>
                  <div class="h-24 w-full bg-[#1B1B4B]/5 rounded opacity-0 transition-opacity duration-300" data-skel="4"></div>
                  <div class="flex gap-3">
                    <div class="h-8 w-24 bg-[#F9A825]/20 rounded opacity-0 transition-opacity duration-300" data-skel="5"></div>
                    <div class="h-8 w-20 bg-[#1B1B4B]/5 rounded opacity-0 transition-opacity duration-300" data-skel="6"></div>
                  </div>
                </div>
                <!-- Scan line -->
                <div id="bc-scanline" class="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#F9A825] to-transparent opacity-0" style="top: 0;"></div>
              </div>
              <!-- Check results -->
              <div class="px-4 py-3 border-t border-[#F9A825]/15 space-y-1.5" id="bc-results">
                <div class="flex items-center gap-2 text-xs font-mono opacity-0 transition-all duration-300" data-check="0">
                  <span class="text-[#F9A825]">&#10003;</span><span class="text-[#4a4a6a]">Page loaded in 1.2s</span>
                </div>
                <div class="flex items-center gap-2 text-xs font-mono opacity-0 transition-all duration-300" data-check="1">
                  <span class="text-[#F9A825]">&#10003;</span><span class="text-[#4a4a6a]">Element #dashboard-chart visible</span>
                </div>
                <div class="flex items-center gap-2 text-xs font-mono opacity-0 transition-all duration-300" data-check="2">
                  <span class="text-[#F9A825]">&#10003;</span><span class="text-[#4a4a6a]">No console errors</span>
                </div>
                <div class="flex items-center gap-2 text-xs font-mono opacity-0 transition-all duration-300" data-check="3">
                  <span class="text-[#F9A825]">&#10003;</span><span class="text-[#4a4a6a]">LCP &lt; 2.5s — Core Web Vitals pass</span>
                </div>
              </div>
            </div>
          </div>

          <div class="flex flex-wrap justify-center gap-4 reveal-up" style="animation-delay: 0.4s;">
            <button onclick="alert('Registration coming soon')" class="rounded-lg bg-[#F9A825] px-6 py-3 text-sm font-semibold text-[#1B1B4B] hover:bg-[#FFB830] transition-colors cursor-pointer border-none shadow-lg shadow-[#F9A825]/25">Start monitoring free</button>
            <a href="/pricing" class="rounded-lg border border-[#1B1B4B]/20 px-6 py-3 text-sm font-medium text-[#1B1B4B] hover:border-[#1B1B4B]/40 hover:bg-[#1B1B4B]/5 transition-colors">View pricing</a>
          </div>
        </div>
      </section>

      <div class="mx-auto max-w-4xl px-6 pb-20">
        <div class="grid md:grid-cols-2 gap-4 mb-20">
          <div class="rounded-xl border border-[#F9A825]/15 bg-white p-6 hover:bg-[#faf8f5] hover:border-[#F9A825]/30 transition-colors shadow-sm">
            <h3 class="text-[#1B1B4B] font-semibold mb-2">Real browser execution</h3>
            <p class="text-sm text-[#4a4a6a]">Headless Chromium runs your checks exactly like a real user's browser. No simulations, no shortcuts — actual rendering and JavaScript execution.</p>
          </div>
          <div class="rounded-xl border border-[#F9A825]/15 bg-white p-6 hover:bg-[#faf8f5] hover:border-[#F9A825]/30 transition-colors shadow-sm">
            <h3 class="text-[#1B1B4B] font-semibold mb-2">JavaScript rendering</h3>
            <p class="text-sm text-[#4a4a6a]">SPAs, client-side rendered apps, dynamic content — browser checks see what your users see, including content loaded after the initial page load.</p>
          </div>
          <div class="rounded-xl border border-[#F9A825]/15 bg-white p-6 hover:bg-[#faf8f5] hover:border-[#F9A825]/30 transition-colors shadow-sm">
            <h3 class="text-[#1B1B4B] font-semibold mb-2">Visual assertions</h3>
            <p class="text-sm text-[#4a4a6a]">Verify specific elements are visible, text content matches, buttons are clickable. Go beyond "page loaded" to "page works correctly."</p>
          </div>
          <div class="rounded-xl border border-[#F9A825]/15 bg-white p-6 hover:bg-[#faf8f5] hover:border-[#F9A825]/30 transition-colors shadow-sm">
            <h3 class="text-[#1B1B4B] font-semibold mb-2">Screenshot on failure</h3>
            <p class="text-sm text-[#4a4a6a]">When a check fails, get a screenshot of exactly what the browser saw. Debug issues instantly without trying to reproduce them.</p>
          </div>
          <div class="rounded-xl border border-[#F9A825]/15 bg-white p-6 hover:bg-[#faf8f5] hover:border-[#F9A825]/30 transition-colors shadow-sm">
            <h3 class="text-[#1B1B4B] font-semibold mb-2">Performance metrics</h3>
            <p class="text-sm text-[#4a4a6a]">Core Web Vitals, DOM load time, time to interactive, and more. Track real browser performance over time and catch regressions early.</p>
          </div>
          <div class="rounded-xl border border-[#F9A825]/15 bg-white p-6 hover:bg-[#faf8f5] hover:border-[#F9A825]/30 transition-colors shadow-sm">
            <h3 class="text-[#1B1B4B] font-semibold mb-2">Cloudflare Browser Rendering</h3>
            <p class="text-sm text-[#4a4a6a]">Powered by Cloudflare's Browser Rendering API. No browser infrastructure to manage — scales automatically with your monitoring needs.</p>
          </div>
        </div>

        <div class="mb-20">
          <h2 class="text-2xl font-bold text-[#1B1B4B] text-center mb-8">When to use browser checks</h2>
          <div class="max-w-xl mx-auto space-y-4">
            <div class="flex items-start gap-3">
              <span class="text-[#F9A825] mt-0.5">&#10003;</span>
              <p class="text-[#4a4a6a]">SPAs that render client-side (React, Vue, Angular, Svelte)</p>
            </div>
            <div class="flex items-start gap-3">
              <span class="text-[#F9A825] mt-0.5">&#10003;</span>
              <p class="text-[#4a4a6a]">Login flows, checkout pages, and multi-step forms</p>
            </div>
            <div class="flex items-start gap-3">
              <span class="text-[#F9A825] mt-0.5">&#10003;</span>
              <p class="text-[#4a4a6a]">Pages that load content via JavaScript after initial page load</p>
            </div>
            <div class="flex items-start gap-3">
              <span class="text-[#F9A825] mt-0.5">&#10003;</span>
              <p class="text-[#4a4a6a]">Third-party widget or script verification</p>
            </div>
          </div>
        </div>

        <div class="rounded-xl border border-[#F9A825]/20 bg-[#F9A825] p-10 text-center">
          <h2 class="text-2xl font-bold text-[#1B1B4B] mb-3">Try browser checks today</h2>
          <p class="text-[#1B1B4B]/70 mb-6">Included on all paid plans. Start with a free trial.</p>
          <button onclick="alert('Registration coming soon')" class="rounded-lg bg-[#1B1B4B] px-6 py-3 text-sm font-semibold text-white hover:bg-[#2a2a5b] transition-colors cursor-pointer border-none">Start monitoring free</button>
        </div>
      </div>
    `;
  };

  window.__pages['/features/browser-checks'].init = function() {
    var skels = document.querySelectorAll('#bc-page-content [data-skel]');
    var scanline = document.getElementById('bc-scanline');
    var checks = document.querySelectorAll('#bc-results [data-check]');
    if (!scanline) return;

    // Show skeleton elements loading in
    skels.forEach(function(el, i) {
      setTimeout(function() { el.style.opacity = '1'; }, 300 + i * 150);
    });

    // Animate scan line sweeping down
    setTimeout(function() {
      scanline.style.opacity = '0.8';
      scanline.style.transition = 'top 1.5s ease-in-out, opacity 0.3s';
      scanline.style.top = '100%';
    }, 1200);

    // Fade out scanline
    setTimeout(function() {
      scanline.style.opacity = '0';
    }, 2700);

    // Show check results
    checks.forEach(function(el, i) {
      setTimeout(function() { el.style.opacity = '1'; }, 2800 + i * 250);
    });
  };
})();
