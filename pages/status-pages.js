(function() {
  window.__pages = window.__pages || {};
  window.__pages['/features/status-pages'] = function() {
    return `
      <!-- Hero -->
      <section class="pt-24 sm:pt-28 md:pt-32 pb-16 relative overflow-hidden">
        <div class="absolute inset-0 overflow-hidden pointer-events-none">
          <div class="absolute top-[-10%] left-[25%] w-[450px] h-[450px] bg-emerald-500/[0.06] rounded-full blur-[120px]"></div>
          <div class="absolute top-[35%] right-[15%] w-[400px] h-[400px] bg-emerald-500/[0.04] rounded-full blur-[100px]"></div>
        </div>
        <div class="relative max-w-4xl mx-auto px-6 text-center z-10">
          <span class="inline-block rounded-full bg-emerald-500/10 border border-emerald-500/30 px-4 py-1.5 text-sm font-medium text-emerald-400 mb-6 reveal-up">Status Pages</span>
          <h1 class="text-3xl sm:text-4xl md:text-6xl font-semibold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-zinc-500 mb-4 reveal-up" style="animation-delay: 0.1s;">
            Keep your customers informed and build trust
          </h1>
          <p class="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed reveal-up" style="animation-delay: 0.2s;">
            Beautiful, branded status pages that update automatically from your monitors. Custom domains, subscriber notifications, and incident timelines.
          </p>

          <!-- Live status page preview -->
          <div class="max-w-md mx-auto mb-10 reveal-up" style="animation-delay: 0.3s;">
            <div class="rounded-xl border border-white/5 bg-zinc-900/40 backdrop-blur-sm overflow-hidden">
              <!-- Status page header -->
              <div class="px-5 pt-5 pb-4 border-b border-white/5">
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2">
                    <div class="w-5 h-5 rounded bg-emerald-500/20 flex items-center justify-center"><span class="text-emerald-400 text-[10px] font-bold">A</span></div>
                    <span class="text-sm font-semibold text-white">Acme Inc</span>
                  </div>
                  <span class="text-[10px] text-zinc-600 font-mono">status.acme.com</span>
                </div>
                <div id="sp-status-badge" class="mt-3 flex items-center gap-2 opacity-0 transition-all duration-500">
                  <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span class="text-sm text-emerald-400 font-medium">All systems operational</span>
                </div>
              </div>
              <!-- Service components -->
              <div class="px-5 py-3 space-y-0" id="sp-components">
                <div class="flex items-center justify-between py-2.5 border-b border-white/5 opacity-0 transition-all duration-300" data-comp="0">
                  <span class="text-xs text-zinc-300">Website</span>
                  <span class="text-[10px] text-emerald-400 font-medium">Operational</span>
                </div>
                <div class="flex items-center justify-between py-2.5 border-b border-white/5 opacity-0 transition-all duration-300" data-comp="1">
                  <span class="text-xs text-zinc-300">API</span>
                  <span class="text-[10px] text-emerald-400 font-medium">Operational</span>
                </div>
                <div class="flex items-center justify-between py-2.5 border-b border-white/5 opacity-0 transition-all duration-300" data-comp="2">
                  <span class="text-xs text-zinc-300">Database</span>
                  <span class="text-[10px] text-emerald-400 font-medium">Operational</span>
                </div>
                <div class="flex items-center justify-between py-2.5 border-b border-white/5 opacity-0 transition-all duration-300" data-comp="3">
                  <span class="text-xs text-zinc-300">CDN</span>
                  <span class="text-[10px] text-yellow-400 font-medium">Degraded</span>
                </div>
              </div>
              <!-- Uptime bars -->
              <div class="px-5 py-3 border-t border-white/5" id="sp-uptime" style="opacity: 0; transition: opacity 0.5s;">
                <div class="flex justify-between text-[10px] text-zinc-600 mb-2">
                  <span>90 days ago</span>
                  <span class="text-zinc-400">99.95% uptime</span>
                  <span>today</span>
                </div>
                <div class="flex gap-[1px]" id="sp-uptime-bar"></div>
              </div>
              <!-- Recent incident -->
              <div class="px-5 py-3 border-t border-white/5" id="sp-incident" style="opacity: 0; transition: opacity 0.5s;">
                <div class="text-[10px] text-zinc-500 font-medium mb-1">Recent incident</div>
                <div class="text-xs text-yellow-400 font-medium">CDN degraded performance</div>
                <div class="text-[10px] text-zinc-600 mt-1">Investigating increased latency in EU-West region. Mar 12, 11:42 UTC</div>
              </div>
            </div>
          </div>

          <div class="flex flex-wrap justify-center gap-4 reveal-up" style="animation-delay: 0.4s;">
            <button onclick="alert('Registration coming soon')" class="rounded-lg bg-emerald-500 px-6 py-3 text-sm font-semibold text-black transition-opacity hover:opacity-90 cursor-pointer border-none">Start monitoring free</button>
            <a href="/pricing" class="rounded-lg border border-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/5 transition-colors">View pricing</a>
          </div>
        </div>
      </section>

      <div class="mx-auto max-w-4xl px-6 pb-20">
        <div class="grid md:grid-cols-2 gap-4 mb-20">
          <div class="rounded-xl border border-white/5 bg-zinc-900/20 p-6">
            <h3 class="text-white font-semibold mb-2">Custom domains</h3>
            <p class="text-sm text-zinc-400">Host your status page on status.yourcompany.com with a simple CNAME record. SSL included automatically via Cloudflare.</p>
          </div>
          <div class="rounded-xl border border-white/5 bg-zinc-900/20 p-6">
            <h3 class="text-white font-semibold mb-2">Component groups</h3>
            <p class="text-sm text-zinc-400">Organize monitors into logical groups — API, Website, Database, CDN. Your users see exactly which parts of your service are affected.</p>
          </div>
          <div class="rounded-xl border border-white/5 bg-zinc-900/20 p-6">
            <h3 class="text-white font-semibold mb-2">Incident timeline</h3>
            <p class="text-sm text-zinc-400">Post updates as you investigate and resolve issues. Your users see a clear timeline of what happened and what you're doing about it.</p>
          </div>
          <div class="rounded-xl border border-white/5 bg-zinc-900/20 p-6">
            <h3 class="text-white font-semibold mb-2">Subscriber notifications</h3>
            <p class="text-sm text-zinc-400">Users can subscribe via email to get notified of incidents and maintenance windows. Proactive communication reduces support load.</p>
          </div>
          <div class="rounded-xl border border-white/5 bg-zinc-900/20 p-6">
            <h3 class="text-white font-semibold mb-2">Custom branding</h3>
            <p class="text-sm text-zinc-400">Your logo, colors, and favicon. The status page looks like part of your product, not a third-party tool.</p>
          </div>
          <div class="rounded-xl border border-white/5 bg-zinc-900/20 p-6">
            <h3 class="text-white font-semibold mb-2">Auto-updated from monitors</h3>
            <p class="text-sm text-zinc-400">Status pages reflect your actual monitor status in real time. No manual updates needed — when a monitor goes down, the status page updates automatically.</p>
          </div>
        </div>

        <div class="mb-20">
          <h2 class="text-2xl font-bold text-white text-center mb-8">Why every product needs a status page</h2>
          <p class="text-zinc-400 text-center max-w-2xl mx-auto mb-10">A public status page is the single most effective way to reduce support tickets during an outage. Instead of answering "Is it down?" a hundred times, point users to one page that always has the answer.</p>
          <div class="grid md:grid-cols-3 gap-6">
            <div class="text-center">
              <div class="text-3xl font-bold text-emerald-400 mb-2">60%</div>
              <p class="text-sm text-zinc-400">fewer support tickets during incidents when a status page is available</p>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-emerald-400 mb-2">Real-time</div>
              <p class="text-sm text-zinc-400">auto-updated from your monitors — no manual toggling required</p>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-emerald-400 mb-2">Free</div>
              <p class="text-sm text-zinc-400">1 status page on the free plan. Unlimited on paid plans.</p>
            </div>
          </div>
        </div>

        <div class="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-10 text-center">
          <h2 class="text-2xl font-bold text-white mb-3">Launch your status page today</h2>
          <p class="text-zinc-400 mb-6">1 status page free. Unlimited on paid plans.</p>
          <button onclick="alert('Registration coming soon')" class="rounded-lg bg-emerald-500 px-6 py-3 text-sm font-semibold text-black transition-opacity hover:opacity-90 cursor-pointer border-none">Start monitoring free</button>
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
          seg.className = 'flex-1 h-4 rounded-[1px] ' + (isDown ? 'bg-red-500/70' : isDegraded ? 'bg-yellow-500/60' : 'bg-emerald-500/50');
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
