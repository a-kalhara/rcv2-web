(function() {
  window.__pages = window.__pages || {};
  window.__pages['/features/cron-job-monitoring'] = function() {
    return `
      <!-- Hero -->
      <section class="pt-24 sm:pt-28 md:pt-32 pb-16 relative overflow-hidden">
        <div class="absolute inset-0 overflow-hidden pointer-events-none">
          <div class="absolute top-[-15%] left-[35%] w-[450px] h-[450px] bg-[#F9A825]/[0.08] rounded-full blur-[120px]"></div>
          <div class="absolute top-[45%] left-[5%] w-[350px] h-[350px] bg-[#1B1B4B]/[0.06] rounded-full blur-[100px]"></div>
        </div>
        <div class="relative max-w-4xl mx-auto px-6 text-center z-10">
          <span class="inline-block rounded-lg bg-[#F9A825]/10 border border-[#F9A825]/30 px-4 py-1.5 text-sm font-medium text-[#F9A825] mb-6 reveal-up">Cron Job Monitoring</span>
          <h1 class="text-[1.6rem] sm:text-[2.25rem] md:text-4xl lg:text-5xl font-semibold tracking-tighter text-[#1B1B4B] mb-4 reveal-up" style="animation-delay: 0.1s;">
            Monitor cron jobs, scheduled tasks, and pipelines
          </h1>
          <div class="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#F9A825]/10 border border-[#F9A825]/30">
              <svg class="w-4 h-4 text-[#F9A825]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              <span class="text-sm font-medium text-[#F9A825]">Coming Soon</span>
              <span class="text-sm text-[#4a4a6a]">— We're building this. Join the waitlist to be first.</span>
          </div>
          <p class="text-base sm:text-lg text-[#4a4a6a] max-w-2xl mx-auto mb-10 leading-relaxed reveal-up" style="animation-delay: 0.2s;">
            Know immediately when a background job fails to run, runs late, or takes too long. One line of code to integrate.
          </p>

          <!-- Animated job timeline -->
          <div class="max-w-xl mx-auto mb-10 reveal-up" style="animation-delay: 0.3s;">
            <div class="rounded-xl border border-[#F9A825]/15 bg-white shadow-lg shadow-[#F9A825]/5 p-5 text-left">
              <div class="flex items-center justify-between mb-4">
                <span class="text-sm font-medium text-[#1B1B4B] font-mono">db-backup</span>
                <span class="text-xs text-[#6a6a8a] font-mono">every 6 hours</span>
              </div>
              <!-- Timeline -->
              <div class="relative" id="cron-timeline">
                <div class="h-[1px] bg-[#1B1B4B]/10 w-full absolute top-3"></div>
                <div class="flex justify-between relative">
                  <div class="flex flex-col items-center opacity-0 transition-all duration-300" data-tick="0">
                    <div class="w-6 h-6 rounded-full bg-[#F9A825]/15 border border-[#F9A825]/40 flex items-center justify-center"><span class="text-[#F9A825] text-[10px]">&#10003;</span></div>
                    <span class="text-[10px] text-[#6a6a8a] font-mono mt-2">00:00</span>
                    <span class="text-[10px] text-[#6a6a8a] font-mono">4.2s</span>
                  </div>
                  <div class="flex flex-col items-center opacity-0 transition-all duration-300" data-tick="1">
                    <div class="w-6 h-6 rounded-full bg-[#F9A825]/15 border border-[#F9A825]/40 flex items-center justify-center"><span class="text-[#F9A825] text-[10px]">&#10003;</span></div>
                    <span class="text-[10px] text-[#6a6a8a] font-mono mt-2">06:00</span>
                    <span class="text-[10px] text-[#6a6a8a] font-mono">3.8s</span>
                  </div>
                  <div class="flex flex-col items-center opacity-0 transition-all duration-300" data-tick="2">
                    <div class="w-6 h-6 rounded-full bg-[#F9A825]/15 border border-[#F9A825]/40 flex items-center justify-center"><span class="text-[#F9A825] text-[10px]">&#10003;</span></div>
                    <span class="text-[10px] text-[#6a6a8a] font-mono mt-2">12:00</span>
                    <span class="text-[10px] text-[#6a6a8a] font-mono">5.1s</span>
                  </div>
                  <div class="flex flex-col items-center opacity-0 transition-all duration-300" data-tick="3">
                    <div class="w-6 h-6 rounded-full bg-red-500/20 border border-red-500/40 flex items-center justify-center"><span class="text-red-400 text-[10px]">&#10007;</span></div>
                    <span class="text-[10px] text-[#6a6a8a] font-mono mt-2">18:00</span>
                    <span class="text-[10px] text-red-400 font-mono">missed</span>
                  </div>
                  <div class="flex flex-col items-center opacity-0 transition-all duration-300" data-tick="4">
                    <div class="w-6 h-6 rounded-full border border-dashed border-[#1B1B4B]/20 flex items-center justify-center"><span class="text-[#6a6a8a] text-[10px]">?</span></div>
                    <span class="text-[10px] text-[#6a6a8a] font-mono mt-2">00:00</span>
                    <span class="text-[10px] text-[#6a6a8a] font-mono">next</span>
                  </div>
                </div>
              </div>
              <!-- Alert notification -->
              <div id="cron-alert" class="mt-5 flex items-center gap-3 rounded-lg bg-red-500/5 border border-red-500/20 px-4 py-2.5 opacity-0 transition-all duration-500 translate-y-2">
                <span class="text-red-400 text-sm">&#9888;</span>
                <div>
                  <div class="text-xs text-red-400 font-medium">Missed schedule</div>
                  <div class="text-[10px] text-[#6a6a8a] font-mono">db-backup did not ping within the expected window (18:00 +5min grace)</div>
                </div>
              </div>
            </div>
          </div>

          <div class="flex flex-wrap justify-center gap-4 reveal-up" style="animation-delay: 0.4s;">
            <a href="https://app.rapidcheck.io/signup" class="rounded-lg bg-[#F9A825] px-6 py-3 text-sm font-semibold text-[#1B1B4B] hover:bg-[#FFB830] transition-colors no-underline shadow-lg shadow-[#F9A825]/25">Start for free</a>
            <a href="/pricing" class="rounded-lg border border-[#1B1B4B]/20 px-6 py-3 text-sm font-medium text-[#1B1B4B] hover:border-[#1B1B4B]/40 hover:bg-[#1B1B4B]/5 transition-colors">View pricing</a>
          </div>
        </div>
      </section>

      <div class="mx-auto max-w-4xl px-6 pb-20">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-20">
          <div class="rounded-xl border border-[#F9A825]/15 bg-white p-6 hover:bg-[#faf8f5] hover:border-[#F9A825]/30 transition-colors shadow-sm">
            <h3 class="text-[#1B1B4B] font-semibold mb-2">Expected schedule detection</h3>
            <p class="text-sm text-[#4a4a6a]">Tell us when your job should run — every 5 minutes, hourly, daily. We'll alert you the moment it misses its window.</p>
          </div>
          <div class="rounded-xl border border-[#F9A825]/15 bg-white p-6 hover:bg-[#faf8f5] hover:border-[#F9A825]/30 transition-colors shadow-sm">
            <h3 class="text-[#1B1B4B] font-semibold mb-2">Grace periods</h3>
            <p class="text-sm text-[#4a4a6a]">Jobs don't always run at the exact second. Set a grace period to allow for natural variance without triggering false alerts.</p>
          </div>
          <div class="rounded-xl border border-[#F9A825]/15 bg-white p-6 hover:bg-[#faf8f5] hover:border-[#F9A825]/30 transition-colors shadow-sm">
            <h3 class="text-[#1B1B4B] font-semibold mb-2">Execution time tracking</h3>
            <p class="text-sm text-[#4a4a6a]">Monitor how long your jobs take. Get alerted when execution time exceeds your threshold — catch performance degradation early.</p>
          </div>
          <div class="rounded-xl border border-[#F9A825]/15 bg-white p-6 hover:bg-[#faf8f5] hover:border-[#F9A825]/30 transition-colors shadow-sm">
            <h3 class="text-[#1B1B4B] font-semibold mb-2">Failure payload capture</h3>
            <p class="text-sm text-[#4a4a6a]">Send exit codes, error messages, or custom data with your ping. Debug failed jobs without digging through server logs.</p>
          </div>
          <div class="rounded-xl border border-[#F9A825]/15 bg-white p-6 hover:bg-[#faf8f5] hover:border-[#F9A825]/30 transition-colors shadow-sm">
            <h3 class="text-[#1B1B4B] font-semibold mb-2">Simple ping integration</h3>
            <p class="text-sm text-[#4a4a6a]">Add one HTTP call to the end of your cron job. Works with any language, any platform, any scheduler. No SDK required.</p>
          </div>
          <div class="rounded-xl border border-[#F9A825]/15 bg-white p-6 hover:bg-[#faf8f5] hover:border-[#F9A825]/30 transition-colors shadow-sm">
            <h3 class="text-[#1B1B4B] font-semibold mb-2">Team alerts</h3>
            <p class="text-sm text-[#4a4a6a]">Route alerts to the right team. Backend cron failures go to backend engineers. Data pipeline issues go to the data team.</p>
          </div>
        </div>

        <div class="mb-20">
          <h2 class="text-2xl font-bold text-[#1B1B4B] text-center mb-8">One line to integrate</h2>
          <div class="rounded-xl border border-[#F9A825]/15 bg-[#1B1B4B] p-5 sm:p-6 font-mono text-sm overflow-x-auto break-words">
            <div class="text-white/50 mb-3"># At the end of your cron job:</div>
            <div class="text-[#F9A825]">curl -fsS https://check.rapidcheck.io/p/YOUR_CHECK_ID</div>
            <div class="border-t border-white/10 mt-6 pt-4">
              <div class="text-white/50 mb-3"># Or with execution time and payload:</div>
              <div class="text-[#F9A825]">curl -fsS https://check.rapidcheck.io/p/YOUR_CHECK_ID \\</div>
              <div class="text-[#F9A825] pl-4">-X POST -H "Content-Type: application/json" \\</div>
              <div class="text-[#F9A825] pl-4">-d '{"duration_ms": 4523, "status": "ok", "rows_processed": 15420}'</div>
            </div>
          </div>
        </div>

        <div class="rounded-xl border border-[#F9A825]/20 bg-[#F9A825] p-5 sm:p-8 text-center">
          <h2 class="text-2xl font-bold text-[#1B1B4B] mb-3">Never miss a failed cron job</h2>
          <p class="text-[#1B1B4B]/70 mb-6">3 monitors free forever. No credit card required.</p>
          <a href="https://app.rapidcheck.io/signup" class="rounded-lg bg-[#1B1B4B] px-6 py-3 text-sm font-semibold text-white hover:bg-[#2a2a5b] transition-colors no-underline">Start for free</a>
        </div>
      </div>
    `;
  };

  window.__pages['/features/cron-job-monitoring'].init = function() {
    var ticks = document.querySelectorAll('#cron-timeline [data-tick]');
    var alert = document.getElementById('cron-alert');
    if (!ticks.length) return;

    // Animate timeline ticks appearing left to right
    ticks.forEach(function(el, i) {
      setTimeout(function() {
        el.style.opacity = '1';
      }, 400 + i * 350);
    });

    // Show alert after the missed job appears
    setTimeout(function() {
      if (alert) {
        alert.style.opacity = '1';
        alert.style.transform = 'translateY(0)';
      }
    }, 2200);
  };
})();
