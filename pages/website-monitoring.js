(function() {
  window.__pages = window.__pages || {};
  window.__pages['/features/website-monitoring'] = function() {
    return `
      <!-- Hero -->
      <section class="pt-24 sm:pt-28 md:pt-32 pb-16 relative overflow-hidden">
        <div class="absolute inset-0 overflow-hidden pointer-events-none">
          <div class="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-[#F9A825]/[0.08] rounded-full blur-[120px]"></div>
          <div class="absolute top-[30%] right-[10%] w-[400px] h-[400px] bg-[#1B1B4B]/[0.06] rounded-full blur-[100px]"></div>
        </div>
        <div class="relative max-w-4xl mx-auto px-6 text-center z-10">
          <span class="inline-block rounded-lg bg-[#F9A825]/10 border border-[#F9A825]/30 px-4 py-1.5 text-sm font-medium text-[#F9A825] mb-6 reveal-up">Website Monitoring</span>
          <h1 class="text-3xl sm:text-4xl md:text-6xl font-semibold tracking-tighter text-[#1B1B4B] mb-4 reveal-up" style="animation-delay: 0.1s;">
            Know your website is down before your customers do
          </h1>
          <p class="text-base sm:text-lg text-[#4a4a6a] max-w-2xl mx-auto mb-10 leading-relaxed reveal-up" style="animation-delay: 0.2s;">
            Monitor any URL from 330+ edge locations. Get alerted in seconds via email, Slack, SMS, or phone — with zero false positives.
          </p>

          <!-- Animated uptime visualization -->
          <div class="max-w-2xl mx-auto mb-10 reveal-up" style="animation-delay: 0.3s;">
            <div class="rounded-xl border border-[#F9A825]/15 bg-white shadow-lg shadow-[#F9A825]/5 p-5 text-left">
              <div class="flex items-center justify-between mb-4">
                <div class="flex items-center gap-2">
                  <span class="w-2 h-2 rounded-full bg-[#F9A825] animate-pulse"></span>
                  <span class="text-sm font-medium text-[#1B1B4B] font-mono">api.yourapp.com</span>
                </div>
                <span class="text-xs text-[#F9A825] font-mono">99.98% uptime</span>
              </div>
              <!-- Uptime bar -->
              <div class="flex gap-[2px] mb-4" id="wm-uptime-bar"></div>
              <div class="flex justify-between text-[10px] text-[#6a6a8a] font-mono mb-5">
                <span>24 hours ago</span>
                <span>now</span>
              </div>
              <!-- Global check results streaming in -->
              <div class="space-y-2 overflow-hidden" id="wm-check-rows">
                <div class="flex items-center gap-3 text-xs font-mono opacity-0 translate-y-2 transition-all duration-500" data-row="0">
                  <span class="text-[#6a6a8a]">12:04:31</span>
                  <span class="w-14 text-[#6a6a8a]">IAD</span>
                  <span class="text-[#F9A825]">200 OK</span>
                  <span class="text-[#6a6a8a] ml-auto">48ms</span>
                </div>
                <div class="flex items-center gap-3 text-xs font-mono opacity-0 translate-y-2 transition-all duration-500" data-row="1">
                  <span class="text-[#6a6a8a]">12:04:31</span>
                  <span class="w-14 text-[#6a6a8a]">AMS</span>
                  <span class="text-[#F9A825]">200 OK</span>
                  <span class="text-[#6a6a8a] ml-auto">62ms</span>
                </div>
                <div class="flex items-center gap-3 text-xs font-mono opacity-0 translate-y-2 transition-all duration-500" data-row="2">
                  <span class="text-[#6a6a8a]">12:04:31</span>
                  <span class="w-14 text-[#6a6a8a]">NRT</span>
                  <span class="text-[#F9A825]">200 OK</span>
                  <span class="text-[#6a6a8a] ml-auto">91ms</span>
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
            <h3 class="text-[#1B1B4B] font-semibold mb-2">330+ global edge locations</h3>
            <p class="text-sm text-[#4a4a6a]">Checks run from Cloudflare's worldwide network, so you see performance and availability from your users' perspective — not just one data center.</p>
          </div>
          <div class="rounded-xl border border-[#F9A825]/15 bg-white p-6 hover:bg-[#faf8f5] hover:border-[#F9A825]/30 transition-colors shadow-sm">
            <h3 class="text-[#1B1B4B] font-semibold mb-2">30-second check intervals</h3>
            <p class="text-sm text-[#4a4a6a]">Paid plans check every 30 seconds, so you catch downtime fast. Free plans check every 3 minutes — still faster than most competitors.</p>
          </div>
          <div class="rounded-xl border border-[#F9A825]/15 bg-white p-6 hover:bg-[#faf8f5] hover:border-[#F9A825]/30 transition-colors shadow-sm">
            <h3 class="text-[#1B1B4B] font-semibold mb-2">Zero false positives</h3>
            <p class="text-sm text-[#4a4a6a]">Every check runs from 3 regions simultaneously. 2-of-3 must confirm failure before we alert you. No more 3 AM wake-ups for a network blip.</p>
          </div>
          <div class="rounded-xl border border-[#F9A825]/15 bg-white p-6 hover:bg-[#faf8f5] hover:border-[#F9A825]/30 transition-colors shadow-sm">
            <h3 class="text-[#1B1B4B] font-semibold mb-2">Custom assertions</h3>
            <p class="text-sm text-[#4a4a6a]">Verify status codes, response bodies, headers, and response times. A 200 OK doesn't mean your app is working — assert on what matters.</p>
          </div>
          <div class="rounded-xl border border-[#F9A825]/15 bg-white p-6 hover:bg-[#faf8f5] hover:border-[#F9A825]/30 transition-colors shadow-sm">
            <h3 class="text-[#1B1B4B] font-semibold mb-2">Response time tracking</h3>
            <p class="text-sm text-[#4a4a6a]">Historical charts showing latency trends across regions. Spot degradation before it becomes downtime.</p>
          </div>
          <div class="rounded-xl border border-[#F9A825]/15 bg-white p-6 hover:bg-[#faf8f5] hover:border-[#F9A825]/30 transition-colors shadow-sm">
            <h3 class="text-[#1B1B4B] font-semibold mb-2">Instant alerts</h3>
            <p class="text-sm text-[#4a4a6a]">Email, Slack, Discord, SMS, phone calls, and webhooks. Route alerts to the right people at the right time with escalation policies.</p>
          </div>
        </div>

        <div class="mb-20">
          <h2 class="text-2xl font-bold text-[#1B1B4B] text-center mb-10">How it works</h2>
          <div class="grid md:grid-cols-3 gap-6">
            <div class="text-center">
              <div class="w-10 h-10 rounded-full bg-[#F9A825]/10 border border-[#F9A825]/30 flex items-center justify-center text-[#F9A825] font-bold mx-auto mb-4">1</div>
              <h3 class="text-[#1B1B4B] font-semibold mb-2">Add your URL</h3>
              <p class="text-sm text-[#4a4a6a]">Enter any URL and configure your check settings. Choose your regions, interval, and assertion rules.</p>
            </div>
            <div class="text-center">
              <div class="w-10 h-10 rounded-full bg-[#F9A825]/10 border border-[#F9A825]/30 flex items-center justify-center text-[#F9A825] font-bold mx-auto mb-4">2</div>
              <h3 class="text-[#1B1B4B] font-semibold mb-2">We monitor from the edge</h3>
              <p class="text-sm text-[#4a4a6a]">Our global network checks your site from 330+ locations every 30 seconds. Three regions verify each result to eliminate false positives.</p>
            </div>
            <div class="text-center">
              <div class="w-10 h-10 rounded-full bg-[#F9A825]/10 border border-[#F9A825]/30 flex items-center justify-center text-[#F9A825] font-bold mx-auto mb-4">3</div>
              <h3 class="text-[#1B1B4B] font-semibold mb-2">Get alerted instantly</h3>
              <p class="text-sm text-[#4a4a6a]">When something goes wrong, you know immediately. Email, Slack, SMS, phone — however you want to be reached.</p>
            </div>
          </div>
        </div>

        <div class="rounded-xl border border-[#F9A825]/20 bg-[#F9A825] p-10 text-center">
          <h2 class="text-2xl font-bold text-[#1B1B4B] mb-3">Start monitoring in 2 minutes</h2>
          <p class="text-[#1B1B4B]/70 mb-6">3 monitors free forever. No credit card required.</p>
          <button onclick="alert('Registration coming soon')" class="rounded-lg bg-[#1B1B4B] px-6 py-3 text-sm font-semibold text-white hover:bg-[#2a2a5b] transition-colors cursor-pointer border-none">Start monitoring free</button>
        </div>
      </div>
    `;
  };

  window.__pages['/features/website-monitoring'].init = function() {
    // Build uptime bar segments with staggered animation
    const bar = document.getElementById('wm-uptime-bar');
    if (!bar) return;
    bar.innerHTML = '';
    for (let i = 0; i < 48; i++) {
      const seg = document.createElement('div');
      seg.className = 'flex-1 h-6 rounded-sm transition-all duration-300';
      seg.style.opacity = '0';
      seg.style.transform = 'scaleY(0.3)';
      const isDown = i === 31;
      setTimeout(() => {
        seg.style.opacity = '1';
        seg.style.transform = 'scaleY(1)';
        seg.className += isDown ? ' bg-red-500/80' : ' bg-[#F9A825]/50';
      }, i * 25);
      bar.appendChild(seg);
    }

    // Animate check rows appearing
    const rows = document.querySelectorAll('#wm-check-rows [data-row]');
    rows.forEach((row, i) => {
      setTimeout(() => {
        row.style.opacity = '1';
        row.style.transform = 'translateY(0)';
      }, 1200 + i * 300);
    });
  };
})();
