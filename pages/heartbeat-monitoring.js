(function() {
  window.__pages = window.__pages || {};
  window.__pages['/features/heartbeat-monitoring'] = function() {
    return `
      <!-- Hero -->
      <section class="pt-24 sm:pt-28 md:pt-32 pb-16 relative overflow-hidden">
        <div class="absolute inset-0 overflow-hidden pointer-events-none">
          <div class="absolute top-[5%] right-[30%] w-[500px] h-[500px] bg-emerald-500/[0.06] rounded-full blur-[120px]"></div>
          <div class="absolute top-[40%] left-[15%] w-[300px] h-[300px] bg-emerald-500/[0.04] rounded-full blur-[100px]"></div>
        </div>
        <div class="relative max-w-4xl mx-auto px-6 text-center z-10">
          <span class="inline-block rounded-full bg-emerald-500/10 border border-emerald-500/30 px-4 py-1.5 text-sm font-medium text-emerald-400 mb-6 reveal-up">Heartbeat Monitoring</span>
          <h1 class="text-3xl sm:text-4xl md:text-6xl font-semibold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-zinc-500 mb-4 reveal-up" style="animation-delay: 0.1s;">
            Simple health checks for anything that runs
          </h1>
          <p class="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed reveal-up" style="animation-delay: 0.2s;">
            Servers, workers, IoT devices, scheduled tasks. If it should be running, we'll tell you when it stops.
          </p>

          <!-- ECG-style heartbeat visualization -->
          <div class="max-w-2xl mx-auto mb-10 reveal-up" style="animation-delay: 0.3s;">
            <div class="rounded-xl border border-white/5 bg-zinc-900/40 backdrop-blur-sm p-5">
              <!-- Device list with live pulses -->
              <div class="space-y-3" id="hb-devices">
                <div class="flex items-center gap-3 rounded-lg bg-zinc-800/30 px-4 py-3 opacity-0 transition-all duration-400" data-device="0">
                  <span class="text-emerald-400 text-xs">&#9679;</span>
                  <span class="text-sm text-white font-mono flex-1 text-left">web-worker-01</span>
                  <svg class="w-24 h-6 overflow-visible" viewBox="0 0 96 24">
                    <polyline fill="none" stroke="#34d399" stroke-width="1.5" opacity="0.6" points="0,12 12,12 18,12 22,4 26,20 30,12 36,12 48,12 54,12 58,4 62,20 66,12 72,12 84,12 96,12" class="hb-ecg-line"/>
                  </svg>
                  <span class="text-[10px] text-zinc-500 font-mono w-12 text-right">2s ago</span>
                </div>
                <div class="flex items-center gap-3 rounded-lg bg-zinc-800/30 px-4 py-3 opacity-0 transition-all duration-400" data-device="1">
                  <span class="text-emerald-400 text-xs">&#9679;</span>
                  <span class="text-sm text-white font-mono flex-1 text-left">queue-consumer</span>
                  <svg class="w-24 h-6 overflow-visible" viewBox="0 0 96 24">
                    <polyline fill="none" stroke="#34d399" stroke-width="1.5" opacity="0.6" points="0,12 12,12 18,12 22,4 26,20 30,12 36,12 48,12 54,12 58,4 62,20 66,12 72,12 84,12 96,12" class="hb-ecg-line"/>
                  </svg>
                  <span class="text-[10px] text-zinc-500 font-mono w-12 text-right">5s ago</span>
                </div>
                <div class="flex items-center gap-3 rounded-lg bg-zinc-800/30 px-4 py-3 opacity-0 transition-all duration-400" data-device="2">
                  <span class="text-emerald-400 text-xs">&#9679;</span>
                  <span class="text-sm text-white font-mono flex-1 text-left">iot-sensor-fleet</span>
                  <svg class="w-24 h-6 overflow-visible" viewBox="0 0 96 24">
                    <polyline fill="none" stroke="#34d399" stroke-width="1.5" opacity="0.6" points="0,12 12,12 18,12 22,4 26,20 30,12 36,12 48,12 54,12 58,4 62,20 66,12 72,12 84,12 96,12" class="hb-ecg-line"/>
                  </svg>
                  <span class="text-[10px] text-zinc-500 font-mono w-12 text-right">12s ago</span>
                </div>
                <div class="flex items-center gap-3 rounded-lg bg-red-500/5 border border-red-500/10 px-4 py-3 opacity-0 transition-all duration-400" data-device="3">
                  <span class="text-red-400 text-xs">&#9679;</span>
                  <span class="text-sm text-white font-mono flex-1 text-left">backup-agent</span>
                  <svg class="w-24 h-6 overflow-visible" viewBox="0 0 96 24">
                    <line x1="0" y1="12" x2="96" y2="12" stroke="#ef4444" stroke-width="1.5" opacity="0.3"/>
                  </svg>
                  <span class="text-[10px] text-red-400 font-mono w-12 text-right">47m ago</span>
                </div>
              </div>
              <!-- Summary -->
              <div class="flex items-center justify-between mt-4 pt-3 border-t border-white/5 text-xs font-mono" id="hb-summary" style="opacity: 0; transition: opacity 0.5s;">
                <span class="text-zinc-500">4 heartbeats configured</span>
                <div class="flex items-center gap-3">
                  <span class="text-emerald-400">3 healthy</span>
                  <span class="text-red-400">1 down</span>
                </div>
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
            <h3 class="text-white font-semibold mb-2">Ping-based monitoring</h3>
            <p class="text-sm text-zinc-400">Your service sends us a heartbeat ping on a schedule. If we stop hearing from it, we alert you immediately. Simple and reliable.</p>
          </div>
          <div class="rounded-xl border border-white/5 bg-zinc-900/20 p-6">
            <h3 class="text-white font-semibold mb-2">Flexible schedules</h3>
            <p class="text-sm text-zinc-400">Every 30 seconds to once a day — set the expected interval that matches your service's rhythm. We adapt to your schedule, not the other way around.</p>
          </div>
          <div class="rounded-xl border border-white/5 bg-zinc-900/20 p-6">
            <h3 class="text-white font-semibold mb-2">Grace periods</h3>
            <p class="text-sm text-zinc-400">Allow for natural jitter in your service's timing. A 5-second delay shouldn't wake you up at 3 AM.</p>
          </div>
          <div class="rounded-xl border border-white/5 bg-zinc-900/20 p-6">
            <h3 class="text-white font-semibold mb-2">Works with anything</h3>
            <p class="text-sm text-zinc-400">Servers, IoT devices, Docker containers, Lambda functions, Kubernetes pods. If it can make an HTTP request, it can send a heartbeat.</p>
          </div>
          <div class="rounded-xl border border-white/5 bg-zinc-900/20 p-6">
            <h3 class="text-white font-semibold mb-2">Payload support</h3>
            <p class="text-sm text-zinc-400">Send JSON payloads with each ping — CPU usage, memory, queue depth, custom metrics. Turn heartbeats into lightweight telemetry.</p>
          </div>
          <div class="rounded-xl border border-white/5 bg-zinc-900/20 p-6">
            <h3 class="text-white font-semibold mb-2">Incident history</h3>
            <p class="text-sm text-zinc-400">Full timeline of missed heartbeats, recovery events, and downtime duration. Understand patterns and improve reliability over time.</p>
          </div>
        </div>

        <div class="mb-20">
          <h2 class="text-2xl font-bold text-white text-center mb-8">Common use cases</h2>
          <div class="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <div class="flex items-start gap-3">
              <span class="text-emerald-400 mt-0.5">&#10003;</span>
              <p class="text-zinc-300">Background worker processes</p>
            </div>
            <div class="flex items-start gap-3">
              <span class="text-emerald-400 mt-0.5">&#10003;</span>
              <p class="text-zinc-300">IoT device fleet monitoring</p>
            </div>
            <div class="flex items-start gap-3">
              <span class="text-emerald-400 mt-0.5">&#10003;</span>
              <p class="text-zinc-300">Backup job verification</p>
            </div>
            <div class="flex items-start gap-3">
              <span class="text-emerald-400 mt-0.5">&#10003;</span>
              <p class="text-zinc-300">Queue consumer health checks</p>
            </div>
            <div class="flex items-start gap-3">
              <span class="text-emerald-400 mt-0.5">&#10003;</span>
              <p class="text-zinc-300">Serverless function execution</p>
            </div>
            <div class="flex items-start gap-3">
              <span class="text-emerald-400 mt-0.5">&#10003;</span>
              <p class="text-zinc-300">Database replication monitoring</p>
            </div>
          </div>
        </div>

        <div class="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-10 text-center">
          <h2 class="text-2xl font-bold text-white mb-3">Start heartbeat monitoring</h2>
          <p class="text-zinc-400 mb-6">3 monitors free forever. No credit card required.</p>
          <button onclick="alert('Registration coming soon')" class="rounded-lg bg-emerald-500 px-6 py-3 text-sm font-semibold text-black transition-opacity hover:opacity-90 cursor-pointer border-none">Start monitoring free</button>
        </div>
      </div>
    `;
  };

  window.__pages['/features/heartbeat-monitoring'].init = function() {
    var devices = document.querySelectorAll('#hb-devices [data-device]');
    var summary = document.getElementById('hb-summary');
    if (!devices.length) return;

    devices.forEach(function(el, i) {
      setTimeout(function() {
        el.style.opacity = '1';
      }, 400 + i * 300);
    });

    // Add ECG animation via CSS
    var style = document.createElement('style');
    style.textContent = '@keyframes ecg-draw{from{stroke-dashoffset:200}to{stroke-dashoffset:0}}.hb-ecg-line{stroke-dasharray:200;animation:ecg-draw 2s linear infinite;}@media(prefers-reduced-motion:reduce){.hb-ecg-line{animation:none;}}';
    document.head.appendChild(style);

    // Show summary
    setTimeout(function() {
      if (summary) summary.style.opacity = '1';
    }, 1800);
  };
})();
