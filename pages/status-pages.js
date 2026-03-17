(function() {
  window.__pages = window.__pages || {};
  window.__pages['/features/status-pages'] = function() {
    return `
      <!-- Hero -->
      <section class="pt-24 sm:pt-28 md:pt-32 pb-16 relative overflow-hidden">
        <div class="absolute inset-0 overflow-hidden pointer-events-none">
          <div class="absolute top-[-10%] left-[25%] w-[450px] h-[450px] bg-[#F9A825]/[0.08] rounded-full blur-[120px]"></div>
          <div class="absolute top-[35%] right-[15%] w-[400px] h-[400px] bg-[#1B1B4B]/[0.06] rounded-full blur-[100px]"></div>
        </div>
        <div class="relative max-w-4xl mx-auto px-6 text-center z-10">
          <span class="inline-block rounded-lg bg-[#F9A825]/10 border border-[#F9A825]/30 px-4 py-1.5 text-sm font-medium text-[#F9A825] mb-6 reveal-up">Status Pages</span>
          <h1 class="text-[1.6rem] sm:text-[2.25rem] md:text-4xl lg:text-5xl font-semibold tracking-tighter text-[#1B1B4B] mb-4 reveal-up" style="animation-delay: 0.1s;">
            Keep your customers informed and build trust
          </h1>
          <div class="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#F9A825]/10 border border-[#F9A825]/30">
              <svg class="w-4 h-4 text-[#F9A825]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              <span class="text-sm font-medium text-[#F9A825]">Coming Soon</span>
              <span class="text-sm text-[#4a4a6a]">— We're building this. Join the waitlist to be first.</span>
          </div>
          <p class="text-base sm:text-lg text-[#4a4a6a] max-w-2xl mx-auto mb-10 leading-relaxed reveal-up" style="animation-delay: 0.2s;">
            Beautiful, branded status pages that update automatically from your monitors. Custom domains, subscriber notifications, and incident timelines.
          </p>

          <!-- Live status page preview -->
          <div class="max-w-full sm:max-w-md mx-auto mb-10 reveal-up" style="animation-delay: 0.3s;">
            <div class="rounded-xl border border-[#F9A825]/15 bg-white shadow-lg shadow-[#F9A825]/5 overflow-hidden">
              <!-- Status page header -->
              <div class="px-5 pt-5 pb-4 border-b border-[#F9A825]/15">
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2">
                    <div class="w-5 h-5 rounded bg-[#F9A825]/15 flex items-center justify-center"><span class="text-[#F9A825] text-[10px] font-bold">A</span></div>
                    <span class="text-sm font-semibold text-[#1B1B4B]">Acme Inc</span>
                  </div>
                  <span class="text-[10px] text-[#6a6a8a] font-mono">status.acme.com</span>
                </div>
                <div id="sp-status-badge" class="mt-3 flex items-center gap-2 opacity-0 transition-all duration-500">
                  <span class="w-2 h-2 rounded-full bg-[#F9A825] animate-pulse"></span>
                  <span class="text-sm text-[#F9A825] font-medium">All systems operational</span>
                </div>
              </div>
              <!-- Service components -->
              <div class="px-5 py-3 space-y-0" id="sp-components">
                <div class="flex items-center justify-between py-2.5 border-b border-[#F9A825]/10 opacity-0 transition-all duration-300" data-comp="0">
                  <span class="text-xs text-[#4a4a6a]">Website</span>
                  <span class="text-[10px] text-[#F9A825] font-medium">Operational</span>
                </div>
                <div class="flex items-center justify-between py-2.5 border-b border-[#F9A825]/10 opacity-0 transition-all duration-300" data-comp="1">
                  <span class="text-xs text-[#4a4a6a]">API</span>
                  <span class="text-[10px] text-[#F9A825] font-medium">Operational</span>
                </div>
                <div class="flex items-center justify-between py-2.5 border-b border-[#F9A825]/10 opacity-0 transition-all duration-300" data-comp="2">
                  <span class="text-xs text-[#4a4a6a]">Database</span>
                  <span class="text-[10px] text-[#F9A825] font-medium">Operational</span>
                </div>
                <div class="flex items-center justify-between py-2.5 border-b border-[#F9A825]/10 opacity-0 transition-all duration-300" data-comp="3">
                  <span class="text-xs text-[#4a4a6a]">CDN</span>
                  <span class="text-[10px] text-yellow-500 font-medium">Degraded</span>
                </div>
              </div>
              <!-- Uptime bars -->
              <div class="px-5 py-3 border-t border-[#F9A825]/15" id="sp-uptime" style="opacity: 0; transition: opacity 0.5s;">
                <div class="flex justify-between text-[10px] text-[#6a6a8a] mb-2">
                  <span>90 days ago</span>
                  <span class="text-[#1B1B4B]">99.95% uptime</span>
                  <span>today</span>
                </div>
                <div class="flex gap-[1px]" id="sp-uptime-bar"></div>
              </div>
              <!-- Recent incident -->
              <div class="px-5 py-3 border-t border-[#F9A825]/15" id="sp-incident" style="opacity: 0; transition: opacity 0.5s;">
                <div class="text-[10px] text-[#6a6a8a] font-medium mb-1">Recent incident</div>
                <div class="text-xs text-yellow-500 font-medium">CDN degraded performance</div>
                <div class="text-[10px] text-[#6a6a8a] mt-1">Investigating increased latency in EU-West region. Mar 12, 11:42 UTC</div>
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
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-20">
          <div class="rounded-xl border border-[#F9A825]/15 bg-white p-6 hover:bg-[#faf8f5] hover:border-[#F9A825]/30 transition-colors shadow-sm">
            <h3 class="text-[#1B1B4B] font-semibold mb-2">Custom domains</h3>
            <p class="text-sm text-[#4a4a6a]">Host your status page on status.yourcompany.com with a simple CNAME record. SSL included automatically.</p>
          </div>
          <div class="rounded-xl border border-[#F9A825]/15 bg-white p-6 hover:bg-[#faf8f5] hover:border-[#F9A825]/30 transition-colors shadow-sm">
            <h3 class="text-[#1B1B4B] font-semibold mb-2">Component groups</h3>
            <p class="text-sm text-[#4a4a6a]">Organize monitors into logical groups — API, Website, Database, CDN. Your users see exactly which parts of your service are affected.</p>
          </div>
          <div class="rounded-xl border border-[#F9A825]/15 bg-white p-6 hover:bg-[#faf8f5] hover:border-[#F9A825]/30 transition-colors shadow-sm">
            <h3 class="text-[#1B1B4B] font-semibold mb-2">Incident timeline</h3>
            <p class="text-sm text-[#4a4a6a]">Post updates as you investigate and resolve issues. Your users see a clear timeline of what happened and what you're doing about it.</p>
          </div>
          <div class="rounded-xl border border-[#F9A825]/15 bg-white p-6 hover:bg-[#faf8f5] hover:border-[#F9A825]/30 transition-colors shadow-sm">
            <h3 class="text-[#1B1B4B] font-semibold mb-2">Subscriber notifications</h3>
            <p class="text-sm text-[#4a4a6a]">Users can subscribe via email to get notified of incidents and maintenance windows. Proactive communication reduces support load.</p>
          </div>
          <div class="rounded-xl border border-[#F9A825]/15 bg-white p-6 hover:bg-[#faf8f5] hover:border-[#F9A825]/30 transition-colors shadow-sm">
            <h3 class="text-[#1B1B4B] font-semibold mb-2">Custom branding</h3>
            <p class="text-sm text-[#4a4a6a]">Your logo, colors, and favicon. The status page looks like part of your product, not a third-party tool.</p>
          </div>
          <div class="rounded-xl border border-[#F9A825]/15 bg-white p-6 hover:bg-[#faf8f5] hover:border-[#F9A825]/30 transition-colors shadow-sm">
            <h3 class="text-[#1B1B4B] font-semibold mb-2">Auto-updated from monitors</h3>
            <p class="text-sm text-[#4a4a6a]">Status pages reflect your actual monitor status in real time. No manual updates needed — when a monitor goes down, the status page updates automatically.</p>
          </div>
        </div>

        <div class="mb-20">
          <h2 class="text-2xl font-bold text-[#1B1B4B] text-center mb-8">Why every product needs a status page</h2>
          <p class="text-[#4a4a6a] text-center max-w-2xl mx-auto mb-10">A public status page is the single most effective way to reduce support tickets during an outage. Instead of answering "Is it down?" a hundred times, point users to one page that always has the answer.</p>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="text-center">
              <div class="text-3xl font-bold text-[#F9A825] mb-2">60%</div>
              <p class="text-sm text-[#4a4a6a]">fewer support tickets during incidents when a status page is available</p>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-[#F9A825] mb-2">Real-time</div>
              <p class="text-sm text-[#4a4a6a]">auto-updated from your monitors — no manual toggling required</p>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-[#F9A825] mb-2">Free</div>
              <p class="text-sm text-[#4a4a6a]">1 status page on the free plan. Unlimited on paid plans.</p>
            </div>
          </div>
        </div>

        <div class="rounded-xl border border-[#F9A825]/20 bg-[#F9A825] p-5 sm:p-8 text-center">
          <h2 class="text-2xl font-bold text-[#1B1B4B] mb-3">Launch your status page today</h2>
          <p class="text-[#1B1B4B]/70 mb-6">1 status page free. Unlimited on paid plans.</p>
          <a href="https://app.rapidcheck.io/signup" class="rounded-lg bg-[#1B1B4B] px-6 py-3 text-sm font-semibold text-white hover:bg-[#2a2a5b] transition-colors no-underline">Start for free</a>
        </div>
      </div>
    `;
  };

  window.__pages['/features/status-pages'].init = function() {
    var badge = document.getElementById('sp-status-badge');
    var comps = document.querySelectorAll('#sp-components [data-comp]');
    var uptime = document.getElementById('sp-uptime');
    var uptimeBar = document.getElementById('sp-uptime-bar');
    var incident = document.getElementById('sp-incident');
    if (!badge) return;

    // Show status badge
    setTimeout(function() { badge.style.opacity = '1'; }, 400);

    // Show components one by one
    comps.forEach(function(el, i) {
      setTimeout(function() { el.style.opacity = '1'; }, 700 + i * 200);
    });

    // Build and show uptime bar
    setTimeout(function() {
      if (uptimeBar) {
        for (var i = 0; i < 90; i++) {
          var seg = document.createElement('div');
          var isDown = i === 67 || i === 68;
          var isDegraded = i === 84;
          seg.className = 'flex-1 h-4 rounded-[1px] ' + (isDown ? 'bg-red-500/70' : isDegraded ? 'bg-yellow-500/60' : 'bg-[#F9A825]/40');
          uptimeBar.appendChild(seg);
        }
      }
      if (uptime) uptime.style.opacity = '1';
    }, 1600);

    // Show recent incident
    setTimeout(function() {
      if (incident) incident.style.opacity = '1';
    }, 2100);
  };
})();
