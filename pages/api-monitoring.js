(function() {
  window.__pages = window.__pages || {};
  window.__pages['/features/api-monitoring'] = function() {
    return `
      <!-- Hero -->
      <section class="pt-24 sm:pt-28 md:pt-32 pb-16 relative overflow-hidden">
        <div class="absolute inset-0 overflow-hidden pointer-events-none">
          <div class="absolute top-[-5%] right-[25%] w-[500px] h-[500px] bg-[#F9A825]/[0.08] rounded-full blur-[120px]"></div>
          <div class="absolute top-[40%] left-[10%] w-[350px] h-[350px] bg-[#1B1B4B]/[0.06] rounded-full blur-[100px]"></div>
        </div>
        <div class="relative max-w-4xl mx-auto px-6 text-center z-10">
          <span class="inline-block rounded-lg bg-[#F9A825]/10 border border-[#F9A825]/30 px-4 py-1.5 text-sm font-medium text-[#F9A825] mb-6 reveal-up">API Monitoring</span>
          <h1 class="text-3xl sm:text-4xl md:text-6xl font-semibold tracking-tighter text-[#1B1B4B] mb-4 reveal-up" style="animation-delay: 0.1s;">
            Your API might be up, but is the data correct?
          </h1>
          <p class="text-base sm:text-lg text-[#4a4a6a] max-w-2xl mx-auto mb-10 leading-relaxed reveal-up" style="animation-delay: 0.2s;">
            Go beyond status codes. Validate response bodies, headers, and latency with custom assertions from 330+ global locations.
          </p>

          <!-- Animated API request/response -->
          <div class="max-w-xl mx-auto mb-10 reveal-up" style="animation-delay: 0.3s;">
            <div class="rounded-xl border border-[#F9A825]/15 bg-white shadow-lg shadow-[#F9A825]/5 p-5 text-left font-mono text-sm overflow-hidden">
              <!-- Request -->
              <div id="api-request" class="opacity-0 translate-y-2 transition-all duration-500">
                <div class="flex items-center gap-2 mb-3">
                  <span class="text-xs px-2 py-0.5 rounded bg-[#F9A825]/15 text-[#F9A825] font-semibold">GET</span>
                  <span class="text-[#4a4a6a] text-xs sm:text-sm truncate">https://api.example.com/v1/users/42</span>
                </div>
                <div class="text-[#6a6a8a] text-xs mb-1">Authorization: Bearer ****-****-ab3f</div>
                <div class="text-[#6a6a8a] text-xs mb-4">Accept: application/json</div>
              </div>
              <!-- Divider with animation -->
              <div id="api-divider" class="border-t border-[#F9A825]/15 my-3 opacity-0 transition-opacity duration-300"></div>
              <!-- Response -->
              <div id="api-response" class="opacity-0 transition-all duration-500">
                <div class="flex items-center gap-2 mb-3">
                  <span class="text-xs px-2 py-0.5 rounded bg-[#F9A825]/15 text-[#F9A825]">200</span>
                  <span class="text-[#6a6a8a] text-xs">147ms</span>
                </div>
                <div class="text-xs leading-relaxed">
                  <span class="text-[#6a6a8a]">{</span><br>
                  <span class="text-[#6a6a8a] pl-4">"id":</span> <span class="text-[#F9A825]">42</span>,<br>
                  <span class="text-[#6a6a8a] pl-4">"status":</span> <span class="text-[#F9A825]">"active"</span>,<br>
                  <span class="text-[#6a6a8a] pl-4">"email":</span> <span class="text-[#F9A825]">"user@example.com"</span><br>
                  <span class="text-[#6a6a8a]">}</span>
                </div>
              </div>
              <!-- Assertions -->
              <div id="api-assertions" class="mt-4 pt-3 border-t border-[#F9A825]/15 space-y-1.5">
                <div class="flex items-center gap-2 text-xs opacity-0 transition-all duration-300" data-assert="0">
                  <span class="text-[#F9A825]">&#10003;</span><span class="text-[#4a4a6a]">Status code equals 200</span>
                </div>
                <div class="flex items-center gap-2 text-xs opacity-0 transition-all duration-300" data-assert="1">
                  <span class="text-[#F9A825]">&#10003;</span><span class="text-[#4a4a6a]">$.status equals "active"</span>
                </div>
                <div class="flex items-center gap-2 text-xs opacity-0 transition-all duration-300" data-assert="2">
                  <span class="text-[#F9A825]">&#10003;</span><span class="text-[#4a4a6a]">$.email is not null</span>
                </div>
                <div class="flex items-center gap-2 text-xs opacity-0 transition-all duration-300" data-assert="3">
                  <span class="text-[#F9A825]">&#10003;</span><span class="text-[#4a4a6a]">Response time &lt; 500ms</span>
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
        <div class="grid md:grid-cols-3 gap-4 mb-20">
          <div class="rounded-xl border border-[#F9A825]/15 bg-white p-6 hover:bg-[#faf8f5] hover:border-[#F9A825]/30 transition-colors shadow-sm">
            <h3 class="text-[#1B1B4B] font-semibold mb-2">Custom HTTP requests</h3>
            <p class="text-sm text-[#4a4a6a]">Send GET, POST, PUT, PATCH, DELETE with custom headers, body, and authentication. Test your API exactly how your clients use it.</p>
          </div>
          <div class="rounded-xl border border-[#F9A825]/15 bg-white p-6 hover:bg-[#faf8f5] hover:border-[#F9A825]/30 transition-colors shadow-sm">
            <h3 class="text-[#1B1B4B] font-semibold mb-2">JSON path assertions</h3>
            <p class="text-sm text-[#4a4a6a]">Verify specific fields in your API response. Assert that <code class="text-[#F9A825]">$.data.status</code> equals "active" or <code class="text-[#F9A825]">$.items.length</code> is greater than 0.</p>
          </div>
          <div class="rounded-xl border border-[#F9A825]/15 bg-white p-6 hover:bg-[#faf8f5] hover:border-[#F9A825]/30 transition-colors shadow-sm">
            <h3 class="text-[#1B1B4B] font-semibold mb-2">Response time thresholds</h3>
            <p class="text-sm text-[#4a4a6a]">Set latency budgets per endpoint. Get alerted when your P95 response time exceeds your SLA target.</p>
          </div>
          <div class="rounded-xl border border-[#F9A825]/15 bg-white p-6 hover:bg-[#faf8f5] hover:border-[#F9A825]/30 transition-colors shadow-sm">
            <h3 class="text-[#1B1B4B] font-semibold mb-2">Multi-step checks</h3>
            <p class="text-sm text-[#4a4a6a]">Chain requests together — authenticate, then hit protected endpoint. Verify complete API workflows, not just individual endpoints.</p>
          </div>
          <div class="rounded-xl border border-[#F9A825]/15 bg-white p-6 hover:bg-[#faf8f5] hover:border-[#F9A825]/30 transition-colors shadow-sm">
            <h3 class="text-[#1B1B4B] font-semibold mb-2">Header & body validation</h3>
            <p class="text-sm text-[#4a4a6a]">Assert on response headers, content type, body content, and more. Catch schema changes, missing CORS headers, and broken responses.</p>
          </div>
          <div class="rounded-xl border border-[#F9A825]/15 bg-white p-6 hover:bg-[#faf8f5] hover:border-[#F9A825]/30 transition-colors shadow-sm">
            <h3 class="text-[#1B1B4B] font-semibold mb-2">Global edge execution</h3>
            <p class="text-sm text-[#4a4a6a]">API checks run from 330+ locations. Verify your API performs well for users everywhere, not just near your origin server.</p>
          </div>
        </div>

        <div class="mb-20">
          <h2 class="text-2xl font-bold text-[#1B1B4B] text-center mb-8">Example: Verify a JSON API</h2>
          <div class="rounded-xl border border-[#F9A825]/15 bg-[#1B1B4B] p-6 font-mono text-sm overflow-x-auto">
            <div class="text-[#6a6a8a] mb-2">// POST /api/v1/users — check that the API returns valid data</div>
            <div class="text-white mb-4">
              <span class="text-[#F9A825]">POST</span> https://api.example.com/v1/users<br>
              <span class="text-white/60">Content-Type:</span> application/json<br>
              <span class="text-white/60">Authorization:</span> Bearer \${API_KEY}
            </div>
            <div class="text-white mb-4">
              <span class="text-white/60">Body:</span><br>
              { "email": "test@example.com", "name": "Test User" }
            </div>
            <div class="border-t border-white/10 pt-4">
              <div class="text-white/60 mb-2">// Assertions</div>
              <div class="text-[#F9A825]">&#10003; Status code equals 201</div>
              <div class="text-[#F9A825]">&#10003; $.data.id is not null</div>
              <div class="text-[#F9A825]">&#10003; $.data.email equals "test@example.com"</div>
              <div class="text-[#F9A825]">&#10003; Response time &lt; 500ms</div>
            </div>
          </div>
        </div>

        <div class="rounded-xl border border-[#F9A825]/20 bg-[#F9A825] p-10 text-center">
          <h2 class="text-2xl font-bold text-[#1B1B4B] mb-3">Monitor your APIs in 2 minutes</h2>
          <p class="text-[#1B1B4B]/70 mb-6">3 monitors free forever. No credit card required.</p>
          <button onclick="alert('Registration coming soon')" class="rounded-lg bg-[#1B1B4B] px-6 py-3 text-sm font-semibold text-white hover:bg-[#2a2a5b] transition-colors cursor-pointer border-none">Start monitoring free</button>
        </div>
      </div>
    `;
  };

  window.__pages['/features/api-monitoring'].init = function() {
    var req = document.getElementById('api-request');
    var divider = document.getElementById('api-divider');
    var resp = document.getElementById('api-response');
    if (!req) return;

    // Animate request appearing
    setTimeout(function() {
      req.style.opacity = '1';
      req.style.transform = 'translateY(0)';
    }, 400);

    // Divider
    setTimeout(function() {
      divider.style.opacity = '1';
    }, 900);

    // Response
    setTimeout(function() {
      resp.style.opacity = '1';
    }, 1100);

    // Assertions one by one
    var asserts = document.querySelectorAll('#api-assertions [data-assert]');
    asserts.forEach(function(el, i) {
      setTimeout(function() {
        el.style.opacity = '1';
      }, 1600 + i * 250);
    });
  };
})();
