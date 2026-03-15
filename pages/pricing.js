// Pricing page
(function() {
  window.__pages = window.__pages || {};
  window.__pages['/pricing'] = function() {
    return `
    <!-- Pricing Hero -->
    <section class="pt-24 sm:pt-28 md:pt-32 pb-20 relative">
        <div class="absolute inset-0 overflow-hidden pointer-events-none">
            <div class="absolute top-[-10%] left-[30%] w-[500px] h-[500px] bg-[#F9A825]/[0.06] rounded-full blur-[120px]"></div>
            <div class="absolute top-[20%] right-[20%] w-[400px] h-[400px] bg-[#F9A825]/[0.04] rounded-full blur-[100px]"></div>
        </div>
        <div class="absolute inset-0 bg-noise opacity-30 pointer-events-none"></div>
        <div class="relative max-w-4xl mx-auto px-6 text-center z-10">
            <h1 class="text-3xl sm:text-4xl md:text-6xl font-semibold tracking-tighter text-[#1B1B4B] mb-4 reveal-up" style="animation-delay: 0.1s;">
                Simple, transparent pricing
            </h1>
            <p class="text-base sm:text-lg text-[#4a4a6a] max-w-xl mx-auto mb-2 leading-relaxed reveal-up" style="animation-delay: 0.2s;">
                Pay per monitor. No tiers, no per-seat charges, no hidden fees.
            </p>
            <p class="text-sm text-[#6a6a8a] reveal-up" style="animation-delay: 0.25s;">
                Free domain intelligence on every plan.
            </p>
        </div>
    </section>

    <main>

    <!-- Trust Signals -->
    <div class="max-w-3xl mx-auto px-6 text-center pb-14">
        <div class="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-[#6a6a8a] border border-[#F9A825]/15 rounded-full px-8 py-4 bg-[#faf8f5]">
            <span class="flex items-center gap-1.5"><svg class="w-3.5 h-3.5 text-[#F9A825]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>No credit card required</span>
            <span class="flex items-center gap-1.5"><svg class="w-3.5 h-3.5 text-[#F9A825]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>1-month free trial on paid plans</span>
            <span class="flex items-center gap-1.5"><svg class="w-3.5 h-3.5 text-[#F9A825]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>Cancel anytime</span>
            <span class="flex items-center gap-1.5"><svg class="w-3.5 h-3.5 text-[#F9A825]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>GDPR compliant</span>
        </div>
    </div>

    <!-- Plan Cards -->
    <section class="pb-20 relative">
        <div class="max-w-6xl mx-auto px-6">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-6">
                <!-- Free Plan -->
                <div class="relative bg-white border border-[#F9A825]/15 rounded-2xl p-8 flex flex-col">
                    <div class="absolute inset-0 pattern-dots opacity-10 rounded-2xl"></div>
                    <div class="relative z-10 flex flex-col h-full">
                        <div class="mb-6">
                            <h3 class="text-lg font-medium text-[#1B1B4B] mb-1">Free Forever</h3>
                            <div class="flex items-baseline gap-1 mb-3">
                                <span class="text-4xl sm:text-5xl font-bold text-[#1B1B4B]">$0</span>
                                <span class="text-[#6a6a8a] text-sm">/month</span>
                            </div>
                            <p class="text-sm text-[#4a4a6a]">Perfect for personal projects and small sites.</p>
                        </div>
                        <ul class="space-y-3 mb-8 flex-1">
                            <li class="flex items-start gap-3 text-sm text-[#4a4a6a]">
                                <svg class="w-4 h-4 mt-0.5 text-[#F9A825] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                3 monitors
                            </li>
                            <li class="flex items-start gap-3 text-sm text-[#4a4a6a]">
                                <svg class="w-4 h-4 mt-0.5 text-[#F9A825] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                3-minute check intervals
                            </li>
                            <li class="flex items-start gap-3 text-sm text-[#4a4a6a]">
                                <svg class="w-4 h-4 mt-0.5 text-[#F9A825] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                3 check regions
                            </li>
                            <li class="flex items-start gap-3 text-sm text-[#4a4a6a]">
                                <svg class="w-4 h-4 mt-0.5 text-[#F9A825] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                Full domain intelligence
                            </li>
                            <li class="flex items-start gap-3 text-sm text-[#4a4a6a]">
                                <svg class="w-4 h-4 mt-0.5 text-[#F9A825] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                1 status page
                            </li>
                            <li class="flex items-start gap-3 text-sm text-[#4a4a6a]">
                                <svg class="w-4 h-4 mt-0.5 text-[#F9A825] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                Email alerts
                            </li>
                            <li class="flex items-start gap-3 text-sm text-[#4a4a6a]">
                                <svg class="w-4 h-4 mt-0.5 text-[#F9A825] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                30-day data retention
                            </li>
                            <li class="flex items-start gap-3 text-sm text-[#4a4a6a]">
                                <svg class="w-4 h-4 mt-0.5 text-[#F9A825] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                1 team member
                            </li>
                        </ul>
                        <button onclick="alert('Registration coming soon')" class="w-full h-11 rounded-lg border border-[#1B1B4B]/20 bg-white text-[#1B1B4B] text-sm font-medium hover:border-[#1B1B4B]/40 transition-colors cursor-pointer">
                            Start free
                        </button>
                    </div>
                </div>

                <!-- Paid Plan -->
                <div class="relative bg-white border-2 border-[#F9A825]/40 rounded-2xl p-8 flex flex-col">
                    <div class="absolute inset-0 pattern-dots opacity-10 rounded-2xl"></div>
                    <div class="absolute -top-3.5 left-1/2 -translate-x-1/2">
                        <span class="bg-[#F9A825] text-[#1B1B4B] text-xs font-semibold px-4 py-1 rounded-full">Most popular</span>
                    </div>
                    <div class="relative z-10 flex flex-col h-full">
                        <div class="mb-6">
                            <h3 class="text-lg font-medium text-[#1B1B4B] mb-1">Pay-As-You-Scale</h3>
                            <div class="flex items-baseline gap-1 mb-3">
                                <span class="text-4xl sm:text-5xl font-bold text-[#1B1B4B]">$2</span>
                                <span class="text-[#6a6a8a] text-sm">/monitor/month</span>
                            </div>
                            <p class="text-sm text-[#4a4a6a]">Everything you need for production monitoring.</p>
                        </div>
                        <ul class="space-y-3 mb-8 flex-1">
                            <li class="flex items-start gap-3 text-sm text-[#4a4a6a]">
                                <svg class="w-4 h-4 mt-0.5 text-[#F9A825] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                Unlimited monitors
                            </li>
                            <li class="flex items-start gap-3 text-sm text-[#4a4a6a]">
                                <svg class="w-4 h-4 mt-0.5 text-[#F9A825] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                30-second check intervals
                            </li>
                            <li class="flex items-start gap-3 text-sm text-[#4a4a6a]">
                                <svg class="w-4 h-4 mt-0.5 text-[#F9A825] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                All 330+ check regions
                            </li>
                            <li class="flex items-start gap-3 text-sm text-[#4a4a6a]">
                                <svg class="w-4 h-4 mt-0.5 text-[#F9A825] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                Full domain intelligence
                            </li>
                            <li class="flex items-start gap-3 text-sm text-[#4a4a6a]">
                                <svg class="w-4 h-4 mt-0.5 text-[#F9A825] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                Unlimited status pages
                            </li>
                            <li class="flex items-start gap-3 text-sm text-[#4a4a6a]">
                                <svg class="w-4 h-4 mt-0.5 text-[#F9A825] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                All alert channels
                            </li>
                            <li class="flex items-start gap-3 text-sm text-[#4a4a6a]">
                                <svg class="w-4 h-4 mt-0.5 text-[#F9A825] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                1-year data retention
                            </li>
                            <li class="flex items-start gap-3 text-sm text-[#4a4a6a]">
                                <svg class="w-4 h-4 mt-0.5 text-[#F9A825] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                Unlimited team members
                            </li>
                            <li class="flex items-start gap-3 text-sm text-[#4a4a6a]">
                                <svg class="w-4 h-4 mt-0.5 text-[#F9A825] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                Browser checks
                            </li>
                            <li class="flex items-start gap-3 text-sm text-[#4a4a6a]">
                                <svg class="w-4 h-4 mt-0.5 text-[#F9A825] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                On-call scheduling
                            </li>
                            <li class="flex items-start gap-3 text-sm text-[#4a4a6a]">
                                <svg class="w-4 h-4 mt-0.5 text-[#F9A825] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                SSO / SAML
                            </li>
                        </ul>
                        <button onclick="alert('Registration coming soon')" class="w-full h-11 rounded-lg bg-[#F9A825] text-[#1B1B4B] text-sm font-semibold hover:bg-[#FFB830] transition-colors cursor-pointer border-none">
                            Start free trial
                        </button>
                        <p class="text-xs text-[#6a6a8a] text-center mt-3">1 month free trial. No credit card required.</p>
                    </div>
                </div>

                <!-- Enterprise Plan -->
                <div class="relative bg-white border border-[#F9A825]/15 rounded-2xl p-8 flex flex-col">
                    <div class="absolute inset-0 pattern-dots opacity-10 rounded-2xl"></div>
                    <div class="relative z-10 flex flex-col h-full">
                        <div class="mb-6">
                            <h3 class="text-lg font-medium text-[#1B1B4B] mb-1">Enterprise</h3>
                            <div class="flex items-baseline gap-1 mb-3">
                                <span class="text-4xl sm:text-5xl font-bold text-[#1B1B4B]">Custom</span>
                            </div>
                            <p class="text-sm text-[#4a4a6a]">For teams that need volume discounts and dedicated support.</p>
                        </div>
                        <ul class="space-y-3 mb-8 flex-1">
                            <li class="flex items-start gap-3 text-sm text-[#4a4a6a]">
                                <svg class="w-4 h-4 mt-0.5 text-[#F9A825] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                Everything in Paid
                            </li>
                            <li class="flex items-start gap-3 text-sm text-[#4a4a6a]">
                                <svg class="w-4 h-4 mt-0.5 text-[#F9A825] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                Volume pricing discounts
                            </li>
                            <li class="flex items-start gap-3 text-sm text-[#4a4a6a]">
                                <svg class="w-4 h-4 mt-0.5 text-[#F9A825] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                Dedicated account manager
                            </li>
                            <li class="flex items-start gap-3 text-sm text-[#4a4a6a]">
                                <svg class="w-4 h-4 mt-0.5 text-[#F9A825] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                Custom SLA guarantee
                            </li>
                            <li class="flex items-start gap-3 text-sm text-[#4a4a6a]">
                                <svg class="w-4 h-4 mt-0.5 text-[#F9A825] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                Priority support (Slack/email)
                            </li>
                            <li class="flex items-start gap-3 text-sm text-[#4a4a6a]">
                                <svg class="w-4 h-4 mt-0.5 text-[#F9A825] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                Custom data retention
                            </li>
                            <li class="flex items-start gap-3 text-sm text-[#4a4a6a]">
                                <svg class="w-4 h-4 mt-0.5 text-[#F9A825] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                Invoice billing
                            </li>
                            <li class="flex items-start gap-3 text-sm text-[#4a4a6a]">
                                <svg class="w-4 h-4 mt-0.5 text-[#F9A825] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                SOC 2 report access
                            </li>
                        </ul>
                        <button onclick="alert('Contact form coming soon')" class="w-full h-11 rounded-lg border border-[#1B1B4B]/20 bg-white text-[#1B1B4B] text-sm font-medium hover:border-[#1B1B4B]/40 transition-colors cursor-pointer">
                            Contact sales
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Cost Calculator -->
    <section class="py-20 border-y border-[#F9A825]/15 bg-[#faf8f5] relative">
        <div class="absolute inset-0 bg-noise opacity-20 pointer-events-none mix-blend-overlay"></div>
        <div class="relative max-w-2xl mx-auto px-6 text-center z-10">
            <h2 class="text-2xl sm:text-3xl font-semibold tracking-tight text-[#1B1B4B] mb-2">Calculate your cost</h2>
            <p class="text-sm text-[#4a4a6a] mb-10">Drag the slider to see what you'd pay.</p>
            <div class="bg-white border border-[#F9A825]/15 rounded-2xl p-8">
                <div class="mb-8">
                    <label for="monitor-slider" class="text-sm text-[#4a4a6a] block mb-4">
                        Number of monitors: <span id="monitor-count" class="text-[#1B1B4B] font-semibold font-mono">10</span>
                    </label>
                    <input
                        type="range"
                        id="monitor-slider"
                        min="1"
                        max="200"
                        value="10"
                        class="w-full h-1.5 bg-[#F9A825]/20 rounded-full appearance-none cursor-pointer accent-[#F9A825]"
                        style="accent-color: #F9A825;"
                    >
                    <div class="flex justify-between text-xs text-[#6a6a8a] mt-2">
                        <span>1</span>
                        <span>50</span>
                        <span>100</span>
                        <span>150</span>
                        <span>200</span>
                    </div>
                </div>
                <div class="flex flex-col items-center gap-1">
                    <div class="text-5xl sm:text-6xl font-bold text-[#1B1B4B] font-mono">
                        $<span id="monthly-cost">20</span>
                    </div>
                    <span class="text-sm text-[#6a6a8a]">/month</span>
                    <p class="text-xs text-[#6a6a8a] mt-3">
                        That's <span id="daily-cost" class="text-[#4a4a6a] font-mono">$0.67</span>/day for <span id="cost-monitors" class="text-[#4a4a6a] font-mono">10</span> monitors
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- Feature Comparison Table -->
    <section class="py-20 relative">
        <div class="max-w-4xl mx-auto px-6">
            <div class="text-center mb-12">
                <h2 class="text-2xl sm:text-3xl font-semibold tracking-tight text-[#1B1B4B] mb-2">Feature comparison</h2>
                <p class="text-sm text-[#4a4a6a]">Everything included at a glance.</p>
            </div>
            <div class="border border-[#F9A825]/15 rounded-2xl overflow-hidden">
                <!-- Table Header -->
                <div class="grid grid-cols-4 bg-[#faf8f5] border-b border-[#F9A825]/15">
                    <div class="p-4 text-sm font-medium text-[#4a4a6a]">Feature</div>
                    <div class="p-4 text-sm font-medium text-[#4a4a6a] text-center">Free</div>
                    <div class="p-4 text-sm font-medium text-[#F9A825] text-center">Paid</div>
                    <div class="p-4 text-sm font-medium text-[#4a4a6a] text-center">Enterprise</div>
                </div>

                <!-- Uptime Monitoring -->
                <div class="grid grid-cols-4 bg-[#faf8f5] border-b border-[#F9A825]/15">
                    <div class="col-span-4 px-4 py-2.5 text-xs font-semibold text-[#6a6a8a] uppercase tracking-wider">Uptime Monitoring</div>
                </div>
                <div class="grid grid-cols-4 border-b border-[#F9A825]/15 hover:bg-[#faf8f5] transition-colors">
                    <div class="p-4 text-sm text-[#4a4a6a]">HTTP(S) monitors</div>
                    <div class="p-4 text-sm text-[#4a4a6a] text-center font-mono">3</div>
                    <div class="p-4 text-sm text-[#F9A825] text-center font-mono">Unlimited</div>
                    <div class="p-4 text-sm text-[#F9A825] text-center font-mono">Unlimited</div>
                </div>
                <div class="grid grid-cols-4 border-b border-[#F9A825]/15 hover:bg-[#faf8f5] transition-colors">
                    <div class="p-4 text-sm text-[#4a4a6a]">Check interval</div>
                    <div class="p-4 text-sm text-[#4a4a6a] text-center font-mono">3 min</div>
                    <div class="p-4 text-sm text-[#F9A825] text-center font-mono">30 sec</div>
                    <div class="p-4 text-sm text-[#F9A825] text-center font-mono">30 sec</div>
                </div>
                <div class="grid grid-cols-4 border-b border-[#F9A825]/15 hover:bg-[#faf8f5] transition-colors">
                    <div class="p-4 text-sm text-[#4a4a6a]">Check regions</div>
                    <div class="p-4 text-sm text-[#4a4a6a] text-center font-mono">3</div>
                    <div class="p-4 text-sm text-[#F9A825] text-center font-mono">330+</div>
                    <div class="p-4 text-sm text-[#F9A825] text-center font-mono">330+</div>
                </div>
                <div class="grid grid-cols-4 border-b border-[#F9A825]/15 hover:bg-[#faf8f5] transition-colors">
                    <div class="p-4 text-sm text-[#4a4a6a]">Multi-region verification</div>
                    <div class="p-4 text-center"><svg class="w-4 h-4 mx-auto text-[#F9A825]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                    <div class="p-4 text-center"><svg class="w-4 h-4 mx-auto text-[#F9A825]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                    <div class="p-4 text-center"><svg class="w-4 h-4 mx-auto text-[#F9A825]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                </div>
                <div class="grid grid-cols-4 border-b border-[#F9A825]/15 hover:bg-[#faf8f5] transition-colors">
                    <div class="p-4 text-sm text-[#4a4a6a]">Browser checks</div>
                    <div class="p-4 text-center"><svg class="w-4 h-4 mx-auto text-[#6a6a8a]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></div>
                    <div class="p-4 text-center"><svg class="w-4 h-4 mx-auto text-[#F9A825]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                    <div class="p-4 text-center"><svg class="w-4 h-4 mx-auto text-[#F9A825]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                </div>
                <div class="grid grid-cols-4 border-b border-[#F9A825]/15 hover:bg-[#faf8f5] transition-colors">
                    <div class="p-4 text-sm text-[#4a4a6a]">Heartbeat / cron monitoring</div>
                    <div class="p-4 text-center"><svg class="w-4 h-4 mx-auto text-[#6a6a8a]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></div>
                    <div class="p-4 text-center"><svg class="w-4 h-4 mx-auto text-[#F9A825]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                    <div class="p-4 text-center"><svg class="w-4 h-4 mx-auto text-[#F9A825]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                </div>

                <!-- Domain Intelligence -->
                <div class="grid grid-cols-4 bg-[#faf8f5] border-b border-[#F9A825]/15">
                    <div class="col-span-4 px-4 py-2.5 text-xs font-semibold text-[#6a6a8a] uppercase tracking-wider">Domain Intelligence</div>
                </div>
                <div class="grid grid-cols-4 border-b border-[#F9A825]/15 hover:bg-[#faf8f5] transition-colors">
                    <div class="p-4 text-sm text-[#4a4a6a]">SSL cert monitoring</div>
                    <div class="p-4 text-center"><svg class="w-4 h-4 mx-auto text-[#F9A825]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                    <div class="p-4 text-center"><svg class="w-4 h-4 mx-auto text-[#F9A825]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                    <div class="p-4 text-center"><svg class="w-4 h-4 mx-auto text-[#F9A825]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                </div>
                <div class="grid grid-cols-4 border-b border-[#F9A825]/15 hover:bg-[#faf8f5] transition-colors">
                    <div class="p-4 text-sm text-[#4a4a6a]">DNS monitoring</div>
                    <div class="p-4 text-center"><svg class="w-4 h-4 mx-auto text-[#F9A825]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                    <div class="p-4 text-center"><svg class="w-4 h-4 mx-auto text-[#F9A825]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                    <div class="p-4 text-center"><svg class="w-4 h-4 mx-auto text-[#F9A825]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                </div>
                <div class="grid grid-cols-4 border-b border-[#F9A825]/15 hover:bg-[#faf8f5] transition-colors">
                    <div class="p-4 text-sm text-[#4a4a6a]">WHOIS monitoring</div>
                    <div class="p-4 text-center"><svg class="w-4 h-4 mx-auto text-[#F9A825]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                    <div class="p-4 text-center"><svg class="w-4 h-4 mx-auto text-[#F9A825]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                    <div class="p-4 text-center"><svg class="w-4 h-4 mx-auto text-[#F9A825]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                </div>
                <div class="grid grid-cols-4 border-b border-[#F9A825]/15 hover:bg-[#faf8f5] transition-colors">
                    <div class="p-4 text-sm text-[#4a4a6a]">Blacklist monitoring</div>
                    <div class="p-4 text-center"><svg class="w-4 h-4 mx-auto text-[#F9A825]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                    <div class="p-4 text-center"><svg class="w-4 h-4 mx-auto text-[#F9A825]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                    <div class="p-4 text-center"><svg class="w-4 h-4 mx-auto text-[#F9A825]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                </div>
                <div class="grid grid-cols-4 border-b border-[#F9A825]/15 hover:bg-[#faf8f5] transition-colors">
                    <div class="p-4 text-sm text-[#4a4a6a]">Domain health score</div>
                    <div class="p-4 text-center"><svg class="w-4 h-4 mx-auto text-[#F9A825]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                    <div class="p-4 text-center"><svg class="w-4 h-4 mx-auto text-[#F9A825]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                    <div class="p-4 text-center"><svg class="w-4 h-4 mx-auto text-[#F9A825]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                </div>

                <!-- Alerting -->
                <div class="grid grid-cols-4 bg-[#faf8f5] border-b border-[#F9A825]/15">
                    <div class="col-span-4 px-4 py-2.5 text-xs font-semibold text-[#6a6a8a] uppercase tracking-wider">Alerting</div>
                </div>
                <div class="grid grid-cols-4 border-b border-[#F9A825]/15 hover:bg-[#faf8f5] transition-colors">
                    <div class="p-4 text-sm text-[#4a4a6a]">Email alerts</div>
                    <div class="p-4 text-center"><svg class="w-4 h-4 mx-auto text-[#F9A825]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                    <div class="p-4 text-center"><svg class="w-4 h-4 mx-auto text-[#F9A825]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                    <div class="p-4 text-center"><svg class="w-4 h-4 mx-auto text-[#F9A825]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                </div>
                <div class="grid grid-cols-4 border-b border-[#F9A825]/15 hover:bg-[#faf8f5] transition-colors">
                    <div class="p-4 text-sm text-[#4a4a6a]">Slack integration</div>
                    <div class="p-4 text-center"><svg class="w-4 h-4 mx-auto text-[#6a6a8a]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></div>
                    <div class="p-4 text-center"><svg class="w-4 h-4 mx-auto text-[#F9A825]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                    <div class="p-4 text-center"><svg class="w-4 h-4 mx-auto text-[#F9A825]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                </div>
                <div class="grid grid-cols-4 border-b border-[#F9A825]/15 hover:bg-[#faf8f5] transition-colors">
                    <div class="p-4 text-sm text-[#4a4a6a]">Discord integration</div>
                    <div class="p-4 text-center"><svg class="w-4 h-4 mx-auto text-[#6a6a8a]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></div>
                    <div class="p-4 text-center"><svg class="w-4 h-4 mx-auto text-[#F9A825]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                    <div class="p-4 text-center"><svg class="w-4 h-4 mx-auto text-[#F9A825]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                </div>
                <div class="grid grid-cols-4 border-b border-[#F9A825]/15 hover:bg-[#faf8f5] transition-colors">
                    <div class="p-4 text-sm text-[#4a4a6a]">Webhook alerts</div>
                    <div class="p-4 text-center"><svg class="w-4 h-4 mx-auto text-[#6a6a8a]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></div>
                    <div class="p-4 text-center"><svg class="w-4 h-4 mx-auto text-[#F9A825]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                    <div class="p-4 text-center"><svg class="w-4 h-4 mx-auto text-[#F9A825]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                </div>
                <div class="grid grid-cols-4 border-b border-[#F9A825]/15 hover:bg-[#faf8f5] transition-colors">
                    <div class="p-4 text-sm text-[#4a4a6a]">SMS alerts</div>
                    <div class="p-4 text-center"><svg class="w-4 h-4 mx-auto text-[#6a6a8a]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></div>
                    <div class="p-4 text-center"><svg class="w-4 h-4 mx-auto text-[#F9A825]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                    <div class="p-4 text-center"><svg class="w-4 h-4 mx-auto text-[#F9A825]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                </div>
                <div class="grid grid-cols-4 border-b border-[#F9A825]/15 hover:bg-[#faf8f5] transition-colors">
                    <div class="p-4 text-sm text-[#4a4a6a]">Phone call alerts</div>
                    <div class="p-4 text-center"><svg class="w-4 h-4 mx-auto text-[#6a6a8a]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></div>
                    <div class="p-4 text-center"><svg class="w-4 h-4 mx-auto text-[#F9A825]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                    <div class="p-4 text-center"><svg class="w-4 h-4 mx-auto text-[#F9A825]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                </div>
                <div class="grid grid-cols-4 border-b border-[#F9A825]/15 hover:bg-[#faf8f5] transition-colors">
                    <div class="p-4 text-sm text-[#4a4a6a]">On-call scheduling</div>
                    <div class="p-4 text-center"><svg class="w-4 h-4 mx-auto text-[#6a6a8a]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></div>
                    <div class="p-4 text-center"><svg class="w-4 h-4 mx-auto text-[#F9A825]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                    <div class="p-4 text-center"><svg class="w-4 h-4 mx-auto text-[#F9A825]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                </div>

                <!-- Status Pages -->
                <div class="grid grid-cols-4 bg-[#faf8f5] border-b border-[#F9A825]/15">
                    <div class="col-span-4 px-4 py-2.5 text-xs font-semibold text-[#6a6a8a] uppercase tracking-wider">Status Pages</div>
                </div>
                <div class="grid grid-cols-4 border-b border-[#F9A825]/15 hover:bg-[#faf8f5] transition-colors">
                    <div class="p-4 text-sm text-[#4a4a6a]">Public status pages</div>
                    <div class="p-4 text-sm text-[#4a4a6a] text-center font-mono">1</div>
                    <div class="p-4 text-sm text-[#F9A825] text-center font-mono">Unlimited</div>
                    <div class="p-4 text-sm text-[#F9A825] text-center font-mono">Unlimited</div>
                </div>
                <div class="grid grid-cols-4 border-b border-[#F9A825]/15 hover:bg-[#faf8f5] transition-colors">
                    <div class="p-4 text-sm text-[#4a4a6a]">Custom domain</div>
                    <div class="p-4 text-center"><svg class="w-4 h-4 mx-auto text-[#6a6a8a]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></div>
                    <div class="p-4 text-center"><svg class="w-4 h-4 mx-auto text-[#F9A825]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                    <div class="p-4 text-center"><svg class="w-4 h-4 mx-auto text-[#F9A825]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                </div>
                <div class="grid grid-cols-4 border-b border-[#F9A825]/15 hover:bg-[#faf8f5] transition-colors">
                    <div class="p-4 text-sm text-[#4a4a6a]">Custom branding</div>
                    <div class="p-4 text-center"><svg class="w-4 h-4 mx-auto text-[#6a6a8a]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></div>
                    <div class="p-4 text-center"><svg class="w-4 h-4 mx-auto text-[#F9A825]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                    <div class="p-4 text-center"><svg class="w-4 h-4 mx-auto text-[#F9A825]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                </div>

                <!-- Collaboration -->
                <div class="grid grid-cols-4 bg-[#faf8f5] border-b border-[#F9A825]/15">
                    <div class="col-span-4 px-4 py-2.5 text-xs font-semibold text-[#6a6a8a] uppercase tracking-wider">Collaboration</div>
                </div>
                <div class="grid grid-cols-4 border-b border-[#F9A825]/15 hover:bg-[#faf8f5] transition-colors">
                    <div class="p-4 text-sm text-[#4a4a6a]">Team members</div>
                    <div class="p-4 text-sm text-[#4a4a6a] text-center font-mono">1</div>
                    <div class="p-4 text-sm text-[#F9A825] text-center font-mono">Unlimited</div>
                    <div class="p-4 text-sm text-[#F9A825] text-center font-mono">Unlimited</div>
                </div>
                <div class="grid grid-cols-4 border-b border-[#F9A825]/15 hover:bg-[#faf8f5] transition-colors">
                    <div class="p-4 text-sm text-[#4a4a6a]">Role-based access (RBAC)</div>
                    <div class="p-4 text-center"><svg class="w-4 h-4 mx-auto text-[#6a6a8a]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></div>
                    <div class="p-4 text-center"><svg class="w-4 h-4 mx-auto text-[#F9A825]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                    <div class="p-4 text-center"><svg class="w-4 h-4 mx-auto text-[#F9A825]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                </div>
                <div class="grid grid-cols-4 border-b border-[#F9A825]/15 hover:bg-[#faf8f5] transition-colors">
                    <div class="p-4 text-sm text-[#4a4a6a]">SSO / SAML</div>
                    <div class="p-4 text-center"><svg class="w-4 h-4 mx-auto text-[#6a6a8a]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></div>
                    <div class="p-4 text-center"><svg class="w-4 h-4 mx-auto text-[#F9A825]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                    <div class="p-4 text-center"><svg class="w-4 h-4 mx-auto text-[#F9A825]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                </div>
                <div class="grid grid-cols-4 border-b border-[#F9A825]/15 hover:bg-[#faf8f5] transition-colors">
                    <div class="p-4 text-sm text-[#4a4a6a]">Audit logs</div>
                    <div class="p-4 text-center"><svg class="w-4 h-4 mx-auto text-[#6a6a8a]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></div>
                    <div class="p-4 text-center"><svg class="w-4 h-4 mx-auto text-[#F9A825]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                    <div class="p-4 text-center"><svg class="w-4 h-4 mx-auto text-[#F9A825]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                </div>

                <!-- Data & Support -->
                <div class="grid grid-cols-4 bg-[#faf8f5] border-b border-[#F9A825]/15">
                    <div class="col-span-4 px-4 py-2.5 text-xs font-semibold text-[#6a6a8a] uppercase tracking-wider">Data & Support</div>
                </div>
                <div class="grid grid-cols-4 border-b border-[#F9A825]/15 hover:bg-[#faf8f5] transition-colors">
                    <div class="p-4 text-sm text-[#4a4a6a]">Data retention</div>
                    <div class="p-4 text-sm text-[#4a4a6a] text-center font-mono">30 days</div>
                    <div class="p-4 text-sm text-[#F9A825] text-center font-mono">1 year</div>
                    <div class="p-4 text-sm text-[#F9A825] text-center font-mono">Custom</div>
                </div>
                <div class="grid grid-cols-4 border-b border-[#F9A825]/15 hover:bg-[#faf8f5] transition-colors">
                    <div class="p-4 text-sm text-[#4a4a6a]">API access</div>
                    <div class="p-4 text-center"><svg class="w-4 h-4 mx-auto text-[#6a6a8a]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></div>
                    <div class="p-4 text-center"><svg class="w-4 h-4 mx-auto text-[#F9A825]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                    <div class="p-4 text-center"><svg class="w-4 h-4 mx-auto text-[#F9A825]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                </div>
                <div class="grid grid-cols-4 border-b border-[#F9A825]/15 hover:bg-[#faf8f5] transition-colors">
                    <div class="p-4 text-sm text-[#4a4a6a]">GDPR compliant</div>
                    <div class="p-4 text-center"><svg class="w-4 h-4 mx-auto text-[#F9A825]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                    <div class="p-4 text-center"><svg class="w-4 h-4 mx-auto text-[#F9A825]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                    <div class="p-4 text-center"><svg class="w-4 h-4 mx-auto text-[#F9A825]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                </div>
                <div class="grid grid-cols-4 hover:bg-[#faf8f5] transition-colors">
                    <div class="p-4 text-sm text-[#4a4a6a]">Priority support</div>
                    <div class="p-4 text-center"><svg class="w-4 h-4 mx-auto text-[#6a6a8a]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></div>
                    <div class="p-4 text-center"><svg class="w-4 h-4 mx-auto text-[#F9A825]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                    <div class="p-4 text-center"><svg class="w-4 h-4 mx-auto text-[#F9A825]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                </div>
            </div>
        </div>
    </section>

    <!-- FAQ -->
    <section class="py-20 border-t border-[#F9A825]/15 relative">
        <div class="absolute inset-0 bg-noise opacity-20 pointer-events-none mix-blend-overlay"></div>
        <div class="relative max-w-3xl mx-auto px-6 z-10">
            <div class="text-center mb-12">
                <h2 class="text-2xl sm:text-3xl font-semibold tracking-tight text-[#1B1B4B] mb-2">Frequently asked questions</h2>
                <p class="text-sm text-[#4a4a6a]">Got questions? We have answers.</p>
            </div>
            <div id="faq-list" class="space-y-3">
                <div class="faq-item border border-[#F9A825]/15 rounded-xl overflow-hidden">
                    <button class="faq-trigger w-full flex items-center justify-between p-5 text-left cursor-pointer bg-transparent border-none text-[#1B1B4B] hover:bg-[#faf8f5] transition-colors" data-faq="0">
                        <span class="text-sm font-medium text-[#1B1B4B] pr-4">How does the pricing work?</span>
                        <svg class="faq-chevron w-4 h-4 text-[#6a6a8a] shrink-0 transition-transform duration-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </button>
                    <div class="faq-content hidden">
                        <div class="px-5 pb-5 text-sm text-[#4a4a6a] leading-relaxed">
                            Simple &mdash; you pay $2 per monitor per month. No tiers, no per-seat charges, no hidden fees. If you have 10 monitors, you pay $20/month.
                        </div>
                    </div>
                </div>
                <div class="faq-item border border-[#F9A825]/15 rounded-xl overflow-hidden">
                    <button class="faq-trigger w-full flex items-center justify-between p-5 text-left cursor-pointer bg-transparent border-none text-[#1B1B4B] hover:bg-[#faf8f5] transition-colors" data-faq="1">
                        <span class="text-sm font-medium text-[#1B1B4B] pr-4">What counts as a monitor?</span>
                        <svg class="faq-chevron w-4 h-4 text-[#6a6a8a] shrink-0 transition-transform duration-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </button>
                    <div class="faq-content hidden">
                        <div class="px-5 pb-5 text-sm text-[#4a4a6a] leading-relaxed">
                            Each URL, API endpoint, or TCP port you're monitoring counts as one monitor. Domain intelligence checks are free and don't count toward your monitor total.
                        </div>
                    </div>
                </div>
                <div class="faq-item border border-[#F9A825]/15 rounded-xl overflow-hidden">
                    <button class="faq-trigger w-full flex items-center justify-between p-5 text-left cursor-pointer bg-transparent border-none text-[#1B1B4B] hover:bg-[#faf8f5] transition-colors" data-faq="2">
                        <span class="text-sm font-medium text-[#1B1B4B] pr-4">Is there a free trial?</span>
                        <svg class="faq-chevron w-4 h-4 text-[#6a6a8a] shrink-0 transition-transform duration-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </button>
                    <div class="faq-content hidden">
                        <div class="px-5 pb-5 text-sm text-[#4a4a6a] leading-relaxed">
                            Yes! Every new account gets 1 month of full access to all paid features. After the trial, you can upgrade or continue on the free plan with up to 3 monitors.
                        </div>
                    </div>
                </div>
                <div class="faq-item border border-[#F9A825]/15 rounded-xl overflow-hidden">
                    <button class="faq-trigger w-full flex items-center justify-between p-5 text-left cursor-pointer bg-transparent border-none text-[#1B1B4B] hover:bg-[#faf8f5] transition-colors" data-faq="3">
                        <span class="text-sm font-medium text-[#1B1B4B] pr-4">What happens if I exceed the free plan limits?</span>
                        <svg class="faq-chevron w-4 h-4 text-[#6a6a8a] shrink-0 transition-transform duration-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </button>
                    <div class="faq-content hidden">
                        <div class="px-5 pb-5 text-sm text-[#4a4a6a] leading-relaxed">
                            Your extra monitors are paused (not deleted). You can upgrade at any time to resume them, or choose which 3 monitors to keep active.
                        </div>
                    </div>
                </div>
                <div class="faq-item border border-[#F9A825]/15 rounded-xl overflow-hidden">
                    <button class="faq-trigger w-full flex items-center justify-between p-5 text-left cursor-pointer bg-transparent border-none text-[#1B1B4B] hover:bg-[#faf8f5] transition-colors" data-faq="4">
                        <span class="text-sm font-medium text-[#1B1B4B] pr-4">Can I cancel anytime?</span>
                        <svg class="faq-chevron w-4 h-4 text-[#6a6a8a] shrink-0 transition-transform duration-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </button>
                    <div class="faq-content hidden">
                        <div class="px-5 pb-5 text-sm text-[#4a4a6a] leading-relaxed">
                            Absolutely. Cancel with one click &mdash; your paid features stay active until the end of your billing period, then you move to the free plan.
                        </div>
                    </div>
                </div>
                <div class="faq-item border border-[#F9A825]/15 rounded-xl overflow-hidden">
                    <button class="faq-trigger w-full flex items-center justify-between p-5 text-left cursor-pointer bg-transparent border-none text-[#1B1B4B] hover:bg-[#faf8f5] transition-colors" data-faq="5">
                        <span class="text-sm font-medium text-[#1B1B4B] pr-4">Do you offer annual billing?</span>
                        <svg class="faq-chevron w-4 h-4 text-[#6a6a8a] shrink-0 transition-transform duration-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </button>
                    <div class="faq-content hidden">
                        <div class="px-5 pb-5 text-sm text-[#4a4a6a] leading-relaxed">
                            Not yet &mdash; we're keeping things simple at launch. Annual billing with a discount is on the roadmap.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Bottom CTA -->
    <section class="py-20 border-t border-[#F9A825]/15 relative">
        <div class="absolute inset-0 overflow-hidden pointer-events-none">
            <div class="absolute bottom-[-20%] left-[30%] w-[600px] h-[600px] bg-[#F9A825]/[0.05] rounded-full blur-[120px]"></div>
        </div>
        <div class="relative max-w-2xl mx-auto px-6 text-center z-10">
            <h2 class="text-2xl sm:text-3xl font-semibold tracking-tight text-[#1B1B4B] mb-3">Start monitoring in under a minute</h2>
            <p class="text-sm text-[#4a4a6a] mb-8 max-w-lg mx-auto">3 monitors free forever. Full domain intelligence included. No credit card required.</p>
            <div class="flex flex-col sm:flex-row items-center justify-center gap-3">
                <button onclick="alert('Registration coming soon')" class="w-full sm:w-auto h-11 px-8 rounded-lg bg-[#F9A825] text-[#1B1B4B] text-sm font-semibold hover:bg-[#FFB830] transition-colors cursor-pointer border-none flex items-center justify-center gap-2 group">
                    Get started free
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="group-hover:translate-x-0.5 transition-transform"><path d="M5 12h14m-7-7l7 7l-7 7"></path></svg>
                </button>
                <a href="/pricing" class="w-full sm:w-auto h-11 px-6 rounded-lg border border-[#1B1B4B]/20 bg-white text-[#1B1B4B] text-sm font-medium hover:border-[#1B1B4B]/40 transition-colors flex items-center justify-center gap-2 no-underline">
                    Compare plans
                </a>
            </div>
        </div>
    </section>
    </main>
    `;
  };

  window.__pages['/pricing'].init = function() {
    // Cost calculator slider
    var slider = document.getElementById('monitor-slider');
    var countEl = document.getElementById('monitor-count');
    var costEl = document.getElementById('monthly-cost');
    var dailyCostEl = document.getElementById('daily-cost');
    var costMonitorsEl = document.getElementById('cost-monitors');

    if (slider) {
      slider.addEventListener('input', function() {
        var count = parseInt(this.value, 10);
        var monthly = count * 2;
        var daily = (monthly / 30).toFixed(2);
        countEl.textContent = count;
        costEl.textContent = monthly;
        dailyCostEl.textContent = '$' + daily;
        costMonitorsEl.textContent = count;
      });
    }

    // FAQ accordion
    var triggers = document.querySelectorAll('.faq-trigger');
    triggers.forEach(function(trigger) {
      trigger.addEventListener('click', function() {
        var parent = this.closest('.faq-item');
        var content = parent.querySelector('.faq-content');
        var chevron = parent.querySelector('.faq-chevron');
        var isOpen = !content.classList.contains('hidden');

        // Close all others
        document.querySelectorAll('.faq-item').forEach(function(item) {
          var c = item.querySelector('.faq-content');
          var ch = item.querySelector('.faq-chevron');
          if (item !== parent) {
            c.classList.add('hidden');
            ch.style.transform = 'rotate(0deg)';
          }
        });

        // Toggle current
        if (isOpen) {
          content.classList.add('hidden');
          chevron.style.transform = 'rotate(0deg)';
        } else {
          content.classList.remove('hidden');
          chevron.style.transform = 'rotate(180deg)';
        }
      });
    });
  };
})();
