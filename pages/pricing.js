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
                Simple, per-monitor pricing
            </h1>
            <p class="text-base sm:text-lg text-[#4a4a6a] max-w-xl mx-auto mb-2 leading-relaxed reveal-up" style="animation-delay: 0.2s;">
                Pay only for what you monitor. Volume discounts kick in automatically.
            </p>
            <p class="text-sm text-[#6a6a8a] reveal-up" style="animation-delay: 0.25s;">
                No tiers. No packages. No per-seat charges.
            </p>
        </div>
    </section>

    <main>

    <!-- Trust Signals -->
    <div class="max-w-3xl mx-auto px-6 text-center pb-14">
        <div class="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-[#6a6a8a] border border-[#F9A825]/15 rounded-full px-8 py-4 bg-[#faf8f5]">
            <span class="flex items-center gap-1.5"><svg class="w-3.5 h-3.5 text-[#F9A825]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>No credit card required</span>
            <span class="flex items-center gap-1.5"><svg class="w-3.5 h-3.5 text-[#F9A825]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>1-month free trial</span>
            <span class="flex items-center gap-1.5"><svg class="w-3.5 h-3.5 text-[#F9A825]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>Cancel anytime</span>
            <span class="flex items-center gap-1.5"><svg class="w-3.5 h-3.5 text-[#F9A825]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>GDPR compliant</span>
        </div>
    </div>

    <!-- Plan Cards: Free + Paid (with slider) -->
    <section class="pb-20 relative">
        <div class="max-w-5xl mx-auto px-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
                <!-- Free Plan -->
                <div class="relative bg-white border border-[#F9A825]/15 rounded-2xl p-8 flex flex-col">
                    <div class="absolute inset-0 pattern-dots opacity-10 rounded-2xl"></div>
                    <div class="relative z-10 flex flex-col h-full">
                        <div class="mb-6">
                            <h3 class="text-base sm:text-lg font-medium text-[#1B1B4B] mb-1">Free Forever</h3>
                            <div class="flex items-baseline gap-1 mb-3">
                                <span class="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1B1B4B]">$0</span>
                                <span class="text-[#6a6a8a] text-sm">/month</span>
                            </div>
                            <p class="text-sm text-[#4a4a6a]">Perfect for personal projects and side hustles.</p>
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
                                1 region + auto-retry
                            </li>
                            <li class="flex items-start gap-3 text-sm text-[#4a4a6a]">
                                <svg class="w-4 h-4 mt-0.5 text-[#F9A825] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                SSL &amp; domain monitoring
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
                        </ul>
                        <a href="https://app.rapidcheck.io/signup" class="w-full h-11 rounded-lg border border-[#1B1B4B]/20 bg-white text-[#1B1B4B] text-sm font-medium hover:border-[#1B1B4B]/40 hover:bg-[#1B1B4B]/5 transition-all flex items-center justify-center no-underline">
                            Start for free
                        </a>
                    </div>
                </div>

                <!-- Paid Plan with Slider -->
                <div class="relative bg-white border-2 border-[#F9A825]/40 rounded-2xl p-8 flex flex-col">
                    <div class="absolute inset-0 pattern-dots opacity-10 rounded-2xl"></div>
                    <div class="absolute -top-3.5 left-1/2 -translate-x-1/2">
                        <span class="bg-[#F9A825] text-[#1B1B4B] text-xs font-semibold px-4 py-1 rounded-full">Pay per monitor</span>
                    </div>
                    <div class="relative z-10 flex flex-col h-full">
                        <div class="mb-6">
                            <h3 class="text-base sm:text-lg font-medium text-[#1B1B4B] mb-1">Pay-As-You-Go</h3>
                            <div class="flex items-baseline gap-1 mb-1">
                                <span class="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1B1B4B]">$<span id="hero-price">2.00</span></span>
                                <span class="text-[#6a6a8a] text-sm">/monitor/month</span>
                            </div>
                            <p class="text-sm text-[#4a4a6a]">Everything you need for production monitoring.</p>
                        </div>

                        <!-- Inline Slider -->
                        <div class="bg-[#faf8f5] border border-[#F9A825]/15 rounded-xl p-5 mb-6">
                            <div class="flex items-center justify-between mb-3">
                                <label for="hero-slider" class="text-xs text-[#6a6a8a]">How many monitors?</label>
                                <span class="text-xs font-mono font-semibold text-[#1B1B4B]" id="hero-count">10</span>
                            </div>
                            <input
                                type="range"
                                id="hero-slider"
                                min="0"
                                max="600"
                                value="200"
                                step="1"
                                class="w-full h-1.5 bg-[#F9A825]/20 rounded-full appearance-none cursor-pointer"
                                style="accent-color: #F9A825;"
                            >
                            <div class="flex justify-between text-[10px] mt-1.5 px-0.5">
                                <span class="slider-stop text-[#6a6a8a] cursor-pointer hover:text-[#1B1B4B] transition-colors" data-stop="0">1</span>
                                <span class="slider-stop text-[#6a6a8a] cursor-pointer hover:text-[#1B1B4B] transition-colors" data-stop="1">5</span>
                                <span class="slider-stop text-[#6a6a8a] cursor-pointer hover:text-[#1B1B4B] transition-colors" data-stop="2">10</span>
                                <span class="slider-stop text-[#6a6a8a] cursor-pointer hover:text-[#1B1B4B] transition-colors" data-stop="3">25</span>
                                <span class="slider-stop text-[#6a6a8a] cursor-pointer hover:text-[#1B1B4B] transition-colors" data-stop="4">50</span>
                                <span class="slider-stop text-[#6a6a8a] cursor-pointer hover:text-[#1B1B4B] transition-colors" data-stop="5">100</span>
                                <span class="slider-stop text-[#6a6a8a] cursor-pointer hover:text-[#1B1B4B] transition-colors" data-stop="6">200</span>
                            </div>
                            <div class="flex items-center justify-between mt-4 pt-4 border-t border-[#F9A825]/15">
                                <span class="text-sm text-[#4a4a6a]">Monthly total</span>
                                <span class="text-2xl font-bold font-mono text-[#1B1B4B]">$<span id="hero-total">20.00</span></span>
                            </div>
                            <p class="text-[10px] text-[#6a6a8a] text-right mt-1" id="hero-breakdown">10 monitors &times; $2.00/ea</p>
                        </div>

                        <ul class="space-y-3 mb-8 flex-1">
                            <li class="flex items-start gap-3 text-sm text-[#4a4a6a]">
                                <svg class="w-4 h-4 mt-0.5 text-[#F9A825] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                <span><strong class="text-[#1B1B4B]">30-second</strong> check intervals</span>
                            </li>
                            <li class="flex items-start gap-3 text-sm text-[#4a4a6a]">
                                <svg class="w-4 h-4 mt-0.5 text-[#F9A825] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                <span>1 region + <strong class="text-[#1B1B4B]">7 auto-retry</strong> locations</span>
                            </li>
                            <li class="flex items-start gap-3 text-sm text-[#4a4a6a]">
                                <svg class="w-4 h-4 mt-0.5 text-[#F9A825] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                <span><strong class="text-[#1B1B4B]">250 browser checks</strong>/monitor/mo</span>
                            </li>
                            <li class="flex items-start gap-3 text-sm text-[#4a4a6a]">
                                <svg class="w-4 h-4 mt-0.5 text-[#F9A825] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                <span><strong class="text-[#1B1B4B]">5 SMS alerts</strong>/monitor/mo</span>
                            </li>
                            <li class="flex items-start gap-3 text-sm text-[#4a4a6a]">
                                <svg class="w-4 h-4 mt-0.5 text-[#F9A825] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                SSL &amp; domain monitoring
                            </li>
                            <li class="flex items-start gap-3 text-sm text-[#4a4a6a]">
                                <svg class="w-4 h-4 mt-0.5 text-[#F9A825] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                Email, Slack, Discord, Webhooks
                            </li>
                            <li class="flex items-start gap-3 text-sm text-[#4a4a6a]">
                                <svg class="w-4 h-4 mt-0.5 text-[#F9A825] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                PagerDuty, Opsgenie
                            </li>
                            <li class="flex items-start gap-3 text-sm text-[#4a4a6a]">
                                <svg class="w-4 h-4 mt-0.5 text-[#F9A825] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                Maintenance windows
                            </li>
                            <li class="flex items-start gap-3 text-sm text-[#4a4a6a]">
                                <svg class="w-4 h-4 mt-0.5 text-[#F9A825] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                1 status page, unlimited team members
                            </li>
                            <li class="flex items-start gap-3 text-sm text-[#4a4a6a]">
                                <svg class="w-4 h-4 mt-0.5 text-[#F9A825] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                12-month data retention, API access
                            </li>
                        </ul>
                        <a href="https://app.rapidcheck.io/signup" class="w-full h-11 rounded-lg bg-[#F9A825] text-[#1B1B4B] text-sm font-semibold hover:bg-[#FFB830] transition-colors flex items-center justify-center no-underline shadow-lg shadow-[#F9A825]/25">
                            Start free trial
                        </a>
                        <p class="text-xs text-[#6a6a8a] text-center mt-3">1 month free. No credit card required.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Volume Pricing Table -->
    <section class="pb-20 relative">
        <div class="max-w-3xl mx-auto px-6">
            <div class="text-center mb-8">
                <h2 class="text-xl sm:text-2xl font-semibold tracking-tight text-[#1B1B4B] mb-2">Volume discounts, automatic</h2>
                <p class="text-sm text-[#4a4a6a]">The more you monitor, the less each monitor costs. No negotiation needed.</p>
            </div>
            <div class="border border-[#F9A825]/15 rounded-2xl overflow-hidden bg-white">
                <div class="grid grid-cols-3 bg-[#faf8f5] border-b border-[#F9A825]/15">
                    <div class="p-4 text-xs font-semibold text-[#6a6a8a] uppercase tracking-wider">Monitors</div>
                    <div class="p-4 text-xs font-semibold text-[#6a6a8a] uppercase tracking-wider text-center">Per Monitor</div>
                    <div class="p-4 text-xs font-semibold text-[#6a6a8a] uppercase tracking-wider text-right">Example Bill</div>
                </div>
                <div class="grid grid-cols-3 border-b border-[#F9A825]/10 hover:bg-[#faf8f5] transition-colors">
                    <div class="p-4 text-sm text-[#4a4a6a] font-mono">1 &ndash; 10</div>
                    <div class="p-4 text-sm text-[#1B1B4B] text-center font-mono font-semibold">$2.00</div>
                    <div class="p-4 text-sm text-[#4a4a6a] text-right font-mono">$20 <span class="text-[#6a6a8a] text-xs">/10 monitors</span></div>
                </div>
                <div class="grid grid-cols-3 border-b border-[#F9A825]/10 hover:bg-[#faf8f5] transition-colors">
                    <div class="p-4 text-sm text-[#4a4a6a] font-mono">11 &ndash; 25</div>
                    <div class="p-4 text-sm text-[#1B1B4B] text-center font-mono font-semibold">$1.75</div>
                    <div class="p-4 text-sm text-[#4a4a6a] text-right font-mono">$37.50 <span class="text-[#6a6a8a] text-xs">/20 monitors</span></div>
                </div>
                <div class="grid grid-cols-3 border-b border-[#F9A825]/10 hover:bg-[#faf8f5] transition-colors">
                    <div class="p-4 text-sm text-[#4a4a6a] font-mono">26 &ndash; 50</div>
                    <div class="p-4 text-sm text-[#1B1B4B] text-center font-mono font-semibold">$1.50</div>
                    <div class="p-4 text-sm text-[#4a4a6a] text-right font-mono">$75 <span class="text-[#6a6a8a] text-xs">/50 monitors</span></div>
                </div>
                <div class="grid grid-cols-3 border-b border-[#F9A825]/10 hover:bg-[#faf8f5] transition-colors">
                    <div class="p-4 text-sm text-[#4a4a6a] font-mono">51 &ndash; 100</div>
                    <div class="p-4 text-sm text-[#1B1B4B] text-center font-mono font-semibold">$1.25</div>
                    <div class="p-4 text-sm text-[#4a4a6a] text-right font-mono">$125 <span class="text-[#6a6a8a] text-xs">/100 monitors</span></div>
                </div>
                <div class="grid grid-cols-3 hover:bg-[#faf8f5] transition-colors">
                    <div class="p-4 text-sm text-[#4a4a6a] font-mono">101+</div>
                    <div class="p-4 text-sm text-[#1B1B4B] text-center font-mono font-semibold">$1.00</div>
                    <div class="p-4 text-sm text-[#4a4a6a] text-right font-mono">$200 <span class="text-[#6a6a8a] text-xs">/200 monitors</span></div>
                </div>
            </div>
            <p class="text-xs text-[#6a6a8a] text-center mt-4">Volume discount is tiered &mdash; first 10 at $2.00, next 15 at $1.75, and so on.</p>
        </div>
    </section>

    <!-- Add-Ons -->
    <section class="py-20 border-y border-[#F9A825]/15 bg-[#faf8f5] relative">
        <div class="absolute inset-0 bg-noise opacity-20 pointer-events-none mix-blend-overlay"></div>
        <div class="relative max-w-5xl mx-auto px-6 z-10">
            <div class="text-center mb-12">
                <h2 class="text-2xl sm:text-3xl font-semibold tracking-tight text-[#1B1B4B] mb-2">Add what you need</h2>
                <p class="text-sm text-[#4a4a6a]">Pay-per-use add-ons. Only pay when you use them.</p>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <!-- Multi-region -->
                <div class="bg-white border border-[#F9A825]/15 rounded-xl p-6 hover:border-[#F9A825]/30 hover:bg-white transition-all">
                    <div class="flex items-center gap-3 mb-3">
                        <div class="w-9 h-9 rounded-lg bg-[#F9A825]/10 flex items-center justify-center">
                            <svg class="w-4.5 h-4.5 text-[#F9A825]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                        </div>
                        <h3 class="text-sm font-semibold text-[#1B1B4B]">Multi-Region Quorum</h3>
                    </div>
                    <p class="text-xs text-[#4a4a6a] mb-4 leading-relaxed">Check from 3&ndash;8 regions simultaneously. Majority must agree before alerting &mdash; eliminates false positives.</p>
                    <div class="text-lg font-bold font-mono text-[#1B1B4B]">$0.50<span class="text-xs font-normal text-[#6a6a8a]">/region/monitor/mo</span></div>
                </div>

                <!-- Extra browser checks -->
                <div class="bg-white border border-[#F9A825]/15 rounded-xl p-6 hover:border-[#F9A825]/30 hover:bg-white transition-all">
                    <div class="flex items-center gap-3 mb-3">
                        <div class="w-9 h-9 rounded-lg bg-[#F9A825]/10 flex items-center justify-center">
                            <svg class="w-4.5 h-4.5 text-[#F9A825]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                        </div>
                        <h3 class="text-sm font-semibold text-[#1B1B4B]">Extra Browser Checks</h3>
                    </div>
                    <p class="text-xs text-[#4a4a6a] mb-4 leading-relaxed">Need more than 250/monitor/mo? Add Playwright-based synthetic checks on demand.</p>
                    <div class="text-lg font-bold font-mono text-[#1B1B4B]">$3<span class="text-xs font-normal text-[#6a6a8a]">/1,000 runs</span></div>
                </div>

                <!-- Extra SMS -->
                <div class="bg-white border border-[#F9A825]/15 rounded-xl p-6 hover:border-[#F9A825]/30 hover:bg-white transition-all">
                    <div class="flex items-center gap-3 mb-3">
                        <div class="w-9 h-9 rounded-lg bg-[#F9A825]/10 flex items-center justify-center">
                            <svg class="w-4.5 h-4.5 text-[#F9A825]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                        </div>
                        <h3 class="text-sm font-semibold text-[#1B1B4B]">Extra SMS Alerts</h3>
                    </div>
                    <p class="text-xs text-[#4a4a6a] mb-4 leading-relaxed">Beyond the 5 SMS/monitor/mo included. Pay only for what you send.</p>
                    <div class="text-lg font-bold font-mono text-[#1B1B4B]">$0.10<span class="text-xs font-normal text-[#6a6a8a]">/message</span></div>
                </div>

                <!-- Status pages -->
                <div class="bg-white border border-[#F9A825]/15 rounded-xl p-6 hover:border-[#F9A825]/30 hover:bg-white transition-all">
                    <div class="flex items-center gap-3 mb-3">
                        <div class="w-9 h-9 rounded-lg bg-[#F9A825]/10 flex items-center justify-center">
                            <svg class="w-4.5 h-4.5 text-[#F9A825]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
                        </div>
                        <h3 class="text-sm font-semibold text-[#1B1B4B]">Extra Status Pages</h3>
                    </div>
                    <p class="text-xs text-[#4a4a6a] mb-4 leading-relaxed">1 status page included free. Add more for separate products or clients.</p>
                    <div class="text-lg font-bold font-mono text-[#1B1B4B]">$5<span class="text-xs font-normal text-[#6a6a8a]">/page/mo</span></div>
                </div>

                <!-- Custom domain -->
                <div class="bg-white border border-[#F9A825]/15 rounded-xl p-6 hover:border-[#F9A825]/30 hover:bg-white transition-all">
                    <div class="flex items-center gap-3 mb-3">
                        <div class="w-9 h-9 rounded-lg bg-[#F9A825]/10 flex items-center justify-center">
                            <svg class="w-4.5 h-4.5 text-[#F9A825]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                        </div>
                        <h3 class="text-sm font-semibold text-[#1B1B4B]">Custom Domain</h3>
                    </div>
                    <p class="text-xs text-[#4a4a6a] mb-4 leading-relaxed">Use your own domain for status pages. status.yourcompany.com</p>
                    <div class="text-lg font-bold font-mono text-[#1B1B4B]">$5<span class="text-xs font-normal text-[#6a6a8a]">/mo</span></div>
                </div>

                <!-- White-label -->
                <div class="bg-white border border-[#F9A825]/15 rounded-xl p-6 hover:border-[#F9A825]/30 hover:bg-white transition-all">
                    <div class="flex items-center gap-3 mb-3">
                        <div class="w-9 h-9 rounded-lg bg-[#F9A825]/10 flex items-center justify-center">
                            <svg class="w-4.5 h-4.5 text-[#F9A825]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg>
                        </div>
                        <h3 class="text-sm font-semibold text-[#1B1B4B]">White-Label</h3>
                    </div>
                    <p class="text-xs text-[#4a4a6a] mb-4 leading-relaxed">Remove RapidCheck branding from status pages. Perfect for agencies.</p>
                    <div class="text-lg font-bold font-mono text-[#1B1B4B]">$15<span class="text-xs font-normal text-[#6a6a8a]">/mo</span></div>
                </div>
            </div>

            <!-- Security Add-ons -->
            <div class="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
                <div class="bg-white border border-[#1B1B4B]/10 rounded-xl p-6 hover:border-[#1B1B4B]/20 transition-all">
                    <div class="flex items-center gap-3 mb-3">
                        <div class="w-9 h-9 rounded-lg bg-[#1B1B4B]/5 flex items-center justify-center">
                            <svg class="w-4.5 h-4.5 text-[#1B1B4B]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                        </div>
                        <h3 class="text-sm font-semibold text-[#1B1B4B]">ASM Scanning</h3>
                    </div>
                    <p class="text-xs text-[#4a4a6a] mb-4 leading-relaxed">Attack surface monitoring. Discover exposed assets, subdomains, and vulnerabilities.</p>
                    <div class="text-lg font-bold font-mono text-[#1B1B4B]">from $49<span class="text-xs font-normal text-[#6a6a8a]">/mo</span></div>
                </div>
                <div class="bg-white border border-[#1B1B4B]/10 rounded-xl p-6 hover:border-[#1B1B4B]/20 transition-all">
                    <div class="flex items-center gap-3 mb-3">
                        <div class="w-9 h-9 rounded-lg bg-[#1B1B4B]/5 flex items-center justify-center">
                            <svg class="w-4.5 h-4.5 text-[#1B1B4B]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                        </div>
                        <h3 class="text-sm font-semibold text-[#1B1B4B]">Security Scanning</h3>
                    </div>
                    <p class="text-xs text-[#4a4a6a] mb-4 leading-relaxed">OWASP Top 10 vulnerability scanning. Automated security audits for your web apps.</p>
                    <div class="text-lg font-bold font-mono text-[#1B1B4B]">from $29<span class="text-xs font-normal text-[#6a6a8a]">/mo</span></div>
                </div>
            </div>
        </div>
    </section>

    <!-- Feature Comparison Table -->
    <section class="py-20 relative">
        <div class="max-w-4xl mx-auto px-6">
            <div class="text-center mb-12">
                <h2 class="text-2xl sm:text-3xl font-semibold tracking-tight text-[#1B1B4B] mb-2">Everything included at a glance</h2>
                <p class="text-sm text-[#4a4a6a]">Free vs Paid &mdash; no hidden limits.</p>
            </div>
            <div class="overflow-x-auto -mx-6 px-6">
            <div class="border border-[#F9A825]/15 rounded-2xl overflow-hidden min-w-[480px]">
                <!-- Table Header -->
                <div class="grid grid-cols-3 bg-[#faf8f5] border-b border-[#F9A825]/15">
                    <div class="p-4 text-sm font-medium text-[#4a4a6a]">Feature</div>
                    <div class="p-4 text-sm font-medium text-[#4a4a6a] text-center">Free</div>
                    <div class="p-4 text-sm font-medium text-[#F9A825] text-center">Paid (per monitor)</div>
                </div>

                <!-- Uptime Monitoring -->
                <div class="grid grid-cols-3 bg-[#faf8f5] border-b border-[#F9A825]/15">
                    <div class="col-span-3 px-4 py-2.5 text-xs font-semibold text-[#6a6a8a] uppercase tracking-wider">Uptime Monitoring</div>
                </div>
                <div class="grid grid-cols-3 border-b border-[#F9A825]/10 hover:bg-[#faf8f5] transition-colors">
                    <div class="p-4 text-sm text-[#4a4a6a]">Monitors</div>
                    <div class="p-4 text-sm text-[#4a4a6a] text-center font-mono">3</div>
                    <div class="p-4 text-sm text-[#F9A825] text-center font-mono">Unlimited</div>
                </div>
                <div class="grid grid-cols-3 border-b border-[#F9A825]/10 hover:bg-[#faf8f5] transition-colors">
                    <div class="p-4 text-sm text-[#4a4a6a]">Check interval</div>
                    <div class="p-4 text-sm text-[#4a4a6a] text-center font-mono">3 min</div>
                    <div class="p-4 text-sm text-[#F9A825] text-center font-mono">30 sec</div>
                </div>
                <div class="grid grid-cols-3 border-b border-[#F9A825]/10 hover:bg-[#faf8f5] transition-colors">
                    <div class="p-4 text-sm text-[#4a4a6a]">Check locations</div>
                    <div class="p-4 text-sm text-[#4a4a6a] text-center font-mono">1 + retry</div>
                    <div class="p-4 text-sm text-[#F9A825] text-center font-mono">1 + 7 retry</div>
                </div>
                <div class="grid grid-cols-3 border-b border-[#F9A825]/10 hover:bg-[#faf8f5] transition-colors">
                    <div class="p-4 text-sm text-[#4a4a6a]">Multi-step API checks</div>
                    <div class="p-4 text-center"><svg class="w-4 h-4 mx-auto text-[#6a6a8a]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></div>
                    <div class="p-4 text-sm text-[#F9A825] text-center font-mono">1&ndash;10 steps</div>
                </div>
                <div class="grid grid-cols-3 border-b border-[#F9A825]/10 hover:bg-[#faf8f5] transition-colors">
                    <div class="p-4 text-sm text-[#4a4a6a]">Browser/Playwright checks</div>
                    <div class="p-4 text-center"><svg class="w-4 h-4 mx-auto text-[#6a6a8a]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></div>
                    <div class="p-4 text-sm text-[#F9A825] text-center font-mono">250/mon/mo</div>
                </div>
                <div class="grid grid-cols-3 border-b border-[#F9A825]/10 hover:bg-[#faf8f5] transition-colors">
                    <div class="p-4 text-sm text-[#4a4a6a]">Heartbeat / cron monitoring</div>
                    <div class="p-4 text-center"><svg class="w-4 h-4 mx-auto text-[#6a6a8a]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></div>
                    <div class="p-4 text-center"><svg class="w-4 h-4 mx-auto text-[#F9A825]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                </div>
                <div class="grid grid-cols-3 border-b border-[#F9A825]/10 hover:bg-[#faf8f5] transition-colors">
                    <div class="p-4 text-sm text-[#4a4a6a]">Multi-region quorum</div>
                    <div class="p-4 text-center"><svg class="w-4 h-4 mx-auto text-[#6a6a8a]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></div>
                    <div class="p-4 text-sm text-[#F9A825] text-center font-mono">Add-on</div>
                </div>

                <!-- Domain Intelligence -->
                <div class="grid grid-cols-3 bg-[#faf8f5] border-b border-[#F9A825]/15">
                    <div class="col-span-3 px-4 py-2.5 text-xs font-semibold text-[#6a6a8a] uppercase tracking-wider">Domain Intelligence</div>
                </div>
                <div class="grid grid-cols-3 border-b border-[#F9A825]/10 hover:bg-[#faf8f5] transition-colors">
                    <div class="p-4 text-sm text-[#4a4a6a]">SSL cert monitoring</div>
                    <div class="p-4 text-center"><svg class="w-4 h-4 mx-auto text-[#F9A825]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                    <div class="p-4 text-center"><svg class="w-4 h-4 mx-auto text-[#F9A825]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                </div>
                <div class="grid grid-cols-3 border-b border-[#F9A825]/10 hover:bg-[#faf8f5] transition-colors">
                    <div class="p-4 text-sm text-[#4a4a6a]">DNS &amp; WHOIS monitoring</div>
                    <div class="p-4 text-center"><svg class="w-4 h-4 mx-auto text-[#F9A825]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                    <div class="p-4 text-center"><svg class="w-4 h-4 mx-auto text-[#F9A825]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                </div>
                <div class="grid grid-cols-3 border-b border-[#F9A825]/10 hover:bg-[#faf8f5] transition-colors">
                    <div class="p-4 text-sm text-[#4a4a6a]">Domain health score</div>
                    <div class="p-4 text-center"><svg class="w-4 h-4 mx-auto text-[#F9A825]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                    <div class="p-4 text-center"><svg class="w-4 h-4 mx-auto text-[#F9A825]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                </div>

                <!-- Alerting -->
                <div class="grid grid-cols-3 bg-[#faf8f5] border-b border-[#F9A825]/15">
                    <div class="col-span-3 px-4 py-2.5 text-xs font-semibold text-[#6a6a8a] uppercase tracking-wider">Alerting</div>
                </div>
                <div class="grid grid-cols-3 border-b border-[#F9A825]/10 hover:bg-[#faf8f5] transition-colors">
                    <div class="p-4 text-sm text-[#4a4a6a]">Email alerts</div>
                    <div class="p-4 text-sm text-[#4a4a6a] text-center font-mono">Unlimited</div>
                    <div class="p-4 text-sm text-[#F9A825] text-center font-mono">Unlimited</div>
                </div>
                <div class="grid grid-cols-3 border-b border-[#F9A825]/10 hover:bg-[#faf8f5] transition-colors">
                    <div class="p-4 text-sm text-[#4a4a6a]">SMS alerts</div>
                    <div class="p-4 text-center"><svg class="w-4 h-4 mx-auto text-[#6a6a8a]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></div>
                    <div class="p-4 text-sm text-[#F9A825] text-center font-mono">5/mon/mo</div>
                </div>
                <div class="grid grid-cols-3 border-b border-[#F9A825]/10 hover:bg-[#faf8f5] transition-colors">
                    <div class="p-4 text-sm text-[#4a4a6a]">Slack, Discord</div>
                    <div class="p-4 text-center"><svg class="w-4 h-4 mx-auto text-[#6a6a8a]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></div>
                    <div class="p-4 text-center"><svg class="w-4 h-4 mx-auto text-[#F9A825]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                </div>
                <div class="grid grid-cols-3 border-b border-[#F9A825]/10 hover:bg-[#faf8f5] transition-colors">
                    <div class="p-4 text-sm text-[#4a4a6a]">Webhooks</div>
                    <div class="p-4 text-center"><svg class="w-4 h-4 mx-auto text-[#6a6a8a]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></div>
                    <div class="p-4 text-center"><svg class="w-4 h-4 mx-auto text-[#F9A825]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                </div>
                <div class="grid grid-cols-3 border-b border-[#F9A825]/10 hover:bg-[#faf8f5] transition-colors">
                    <div class="p-4 text-sm text-[#4a4a6a]">PagerDuty, Opsgenie</div>
                    <div class="p-4 text-center"><svg class="w-4 h-4 mx-auto text-[#6a6a8a]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></div>
                    <div class="p-4 text-center"><svg class="w-4 h-4 mx-auto text-[#F9A825]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                </div>
                <div class="grid grid-cols-3 border-b border-[#F9A825]/10 hover:bg-[#faf8f5] transition-colors">
                    <div class="p-4 text-sm text-[#4a4a6a]">Maintenance windows</div>
                    <div class="p-4 text-center"><svg class="w-4 h-4 mx-auto text-[#6a6a8a]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></div>
                    <div class="p-4 text-center"><svg class="w-4 h-4 mx-auto text-[#F9A825]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                </div>

                <!-- Status Pages -->
                <div class="grid grid-cols-3 bg-[#faf8f5] border-b border-[#F9A825]/15">
                    <div class="col-span-3 px-4 py-2.5 text-xs font-semibold text-[#6a6a8a] uppercase tracking-wider">Status Pages</div>
                </div>
                <div class="grid grid-cols-3 border-b border-[#F9A825]/10 hover:bg-[#faf8f5] transition-colors">
                    <div class="p-4 text-sm text-[#4a4a6a]">Public status pages</div>
                    <div class="p-4 text-sm text-[#4a4a6a] text-center font-mono">1</div>
                    <div class="p-4 text-sm text-[#F9A825] text-center font-mono">1 (+ $5/extra)</div>
                </div>
                <div class="grid grid-cols-3 border-b border-[#F9A825]/10 hover:bg-[#faf8f5] transition-colors">
                    <div class="p-4 text-sm text-[#4a4a6a]">Custom domain</div>
                    <div class="p-4 text-center"><svg class="w-4 h-4 mx-auto text-[#6a6a8a]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></div>
                    <div class="p-4 text-sm text-[#F9A825] text-center font-mono">$5/mo</div>
                </div>
                <div class="grid grid-cols-3 border-b border-[#F9A825]/10 hover:bg-[#faf8f5] transition-colors">
                    <div class="p-4 text-sm text-[#4a4a6a]">White-label (remove branding)</div>
                    <div class="p-4 text-center"><svg class="w-4 h-4 mx-auto text-[#6a6a8a]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></div>
                    <div class="p-4 text-sm text-[#F9A825] text-center font-mono">$15/mo</div>
                </div>

                <!-- Team & Data -->
                <div class="grid grid-cols-3 bg-[#faf8f5] border-b border-[#F9A825]/15">
                    <div class="col-span-3 px-4 py-2.5 text-xs font-semibold text-[#6a6a8a] uppercase tracking-wider">Team &amp; Data</div>
                </div>
                <div class="grid grid-cols-3 border-b border-[#F9A825]/10 hover:bg-[#faf8f5] transition-colors">
                    <div class="p-4 text-sm text-[#4a4a6a]">Team members</div>
                    <div class="p-4 text-sm text-[#4a4a6a] text-center font-mono">1</div>
                    <div class="p-4 text-sm text-[#F9A825] text-center font-mono">Unlimited</div>
                </div>
                <div class="grid grid-cols-3 border-b border-[#F9A825]/10 hover:bg-[#faf8f5] transition-colors">
                    <div class="p-4 text-sm text-[#4a4a6a]">Data retention</div>
                    <div class="p-4 text-sm text-[#4a4a6a] text-center font-mono">30 days</div>
                    <div class="p-4 text-sm text-[#F9A825] text-center font-mono">12 months</div>
                </div>
                <div class="grid grid-cols-3 border-b border-[#F9A825]/10 hover:bg-[#faf8f5] transition-colors">
                    <div class="p-4 text-sm text-[#4a4a6a]">API access</div>
                    <div class="p-4 text-center"><svg class="w-4 h-4 mx-auto text-[#6a6a8a]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></div>
                    <div class="p-4 text-center"><svg class="w-4 h-4 mx-auto text-[#F9A825]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                </div>
                <div class="grid grid-cols-3 hover:bg-[#faf8f5] transition-colors">
                    <div class="p-4 text-sm text-[#4a4a6a]">GDPR compliant</div>
                    <div class="p-4 text-center"><svg class="w-4 h-4 mx-auto text-[#F9A825]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                    <div class="p-4 text-center"><svg class="w-4 h-4 mx-auto text-[#F9A825]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                </div>
            </div>
            </div>
        </div>
    </section>

    <!-- Enterprise CTA -->
    <section class="py-16 relative">
        <div class="max-w-3xl mx-auto px-6">
            <div class="bg-[#1B1B4B] rounded-2xl p-8 sm:p-12 text-center relative overflow-hidden">
                <div class="absolute inset-0 overflow-hidden pointer-events-none">
                    <div class="absolute top-[-30%] right-[-10%] w-[400px] h-[400px] bg-[#F9A825]/[0.08] rounded-full blur-[100px]"></div>
                </div>
                <div class="relative z-10">
                    <h2 class="text-xl sm:text-2xl font-semibold text-white mb-2">Need 100+ monitors?</h2>
                    <p class="text-sm text-white/70 mb-6 max-w-md mx-auto">Get custom volume pricing, a dedicated account manager, custom SLA, priority support, and invoice billing.</p>
                    <a href="mailto:sales@rapidcheck.io" class="inline-flex h-11 px-8 rounded-lg bg-[#F9A825] text-[#1B1B4B] text-sm font-semibold hover:bg-[#FFB830] transition-colors items-center justify-center no-underline shadow-lg shadow-[#F9A825]/25">
                        Contact sales
                    </a>
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
                        <span class="text-sm font-medium text-[#1B1B4B] pr-4">How does the per-monitor pricing work?</span>
                        <svg class="faq-chevron w-4 h-4 text-[#6a6a8a] shrink-0 transition-transform duration-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </button>
                    <div class="faq-content hidden">
                        <div class="px-5 pb-5 text-sm text-[#4a4a6a] leading-relaxed">
                            You pay per monitor per month. Every monitor includes 30-second checks, 250 browser checks, 5 SMS alerts, SSL monitoring, and all alert channels. Volume discounts apply automatically &mdash; the more monitors you add, the lower the per-monitor price. No tiers, no packages to choose between.
                        </div>
                    </div>
                </div>
                <div class="faq-item border border-[#F9A825]/15 rounded-xl overflow-hidden">
                    <button class="faq-trigger w-full flex items-center justify-between p-5 text-left cursor-pointer bg-transparent border-none text-[#1B1B4B] hover:bg-[#faf8f5] transition-colors" data-faq="1">
                        <span class="text-sm font-medium text-[#1B1B4B] pr-4">How does volume pricing work?</span>
                        <svg class="faq-chevron w-4 h-4 text-[#6a6a8a] shrink-0 transition-transform duration-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </button>
                    <div class="faq-content hidden">
                        <div class="px-5 pb-5 text-sm text-[#4a4a6a] leading-relaxed">
                            Volume pricing is tiered, not flat. Your first 10 monitors cost $2.00 each, the next 15 cost $1.75 each, and so on. For example, 20 monitors = (10 &times; $2.00) + (10 &times; $1.75) = $37.50/mo. The discount kicks in automatically &mdash; you never have to commit to a plan.
                        </div>
                    </div>
                </div>
                <div class="faq-item border border-[#F9A825]/15 rounded-xl overflow-hidden">
                    <button class="faq-trigger w-full flex items-center justify-between p-5 text-left cursor-pointer bg-transparent border-none text-[#1B1B4B] hover:bg-[#faf8f5] transition-colors" data-faq="2">
                        <span class="text-sm font-medium text-[#1B1B4B] pr-4">What counts as a monitor?</span>
                        <svg class="faq-chevron w-4 h-4 text-[#6a6a8a] shrink-0 transition-transform duration-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </button>
                    <div class="faq-content hidden">
                        <div class="px-5 pb-5 text-sm text-[#4a4a6a] leading-relaxed">
                            Each URL, API endpoint, heartbeat, or multi-step API workflow counts as one monitor. SSL and domain intelligence are included free with every monitor &mdash; they don't count separately. Paused monitors are not billed.
                        </div>
                    </div>
                </div>
                <div class="faq-item border border-[#F9A825]/15 rounded-xl overflow-hidden">
                    <button class="faq-trigger w-full flex items-center justify-between p-5 text-left cursor-pointer bg-transparent border-none text-[#1B1B4B] hover:bg-[#faf8f5] transition-colors" data-faq="3">
                        <span class="text-sm font-medium text-[#1B1B4B] pr-4">What are browser checks?</span>
                        <svg class="faq-chevron w-4 h-4 text-[#6a6a8a] shrink-0 transition-transform duration-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </button>
                    <div class="faq-content hidden">
                        <div class="px-5 pb-5 text-sm text-[#4a4a6a] leading-relaxed">
                            Browser checks launch a real headless browser (Playwright) to test your site like a user would &mdash; click buttons, fill forms, verify elements. Each monitor includes 250 runs per month (~1 every 3 hours). Need more? Extra runs are $3/1,000.
                        </div>
                    </div>
                </div>
                <div class="faq-item border border-[#F9A825]/15 rounded-xl overflow-hidden">
                    <button class="faq-trigger w-full flex items-center justify-between p-5 text-left cursor-pointer bg-transparent border-none text-[#1B1B4B] hover:bg-[#faf8f5] transition-colors" data-faq="4">
                        <span class="text-sm font-medium text-[#1B1B4B] pr-4">What is multi-region quorum?</span>
                        <svg class="faq-chevron w-4 h-4 text-[#6a6a8a] shrink-0 transition-transform duration-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </button>
                    <div class="faq-content hidden">
                        <div class="px-5 pb-5 text-sm text-[#4a4a6a] leading-relaxed">
                            By default, each monitor checks from 1 region and retries from backup regions on failure. Multi-region quorum checks from 3&ndash;8 regions <em>simultaneously</em> &mdash; a majority must agree your site is down before alerting. This eliminates false positives from regional network issues. Add it for $0.50/region/monitor/mo.
                        </div>
                    </div>
                </div>
                <div class="faq-item border border-[#F9A825]/15 rounded-xl overflow-hidden">
                    <button class="faq-trigger w-full flex items-center justify-between p-5 text-left cursor-pointer bg-transparent border-none text-[#1B1B4B] hover:bg-[#faf8f5] transition-colors" data-faq="5">
                        <span class="text-sm font-medium text-[#1B1B4B] pr-4">Is there a free trial?</span>
                        <svg class="faq-chevron w-4 h-4 text-[#6a6a8a] shrink-0 transition-transform duration-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </button>
                    <div class="faq-content hidden">
                        <div class="px-5 pb-5 text-sm text-[#4a4a6a] leading-relaxed">
                            Yes! Every account gets 1 month of full paid access &mdash; no credit card required. After the trial, continue on the free plan (3 monitors) or add a payment method to keep going.
                        </div>
                    </div>
                </div>
                <div class="faq-item border border-[#F9A825]/15 rounded-xl overflow-hidden">
                    <button class="faq-trigger w-full flex items-center justify-between p-5 text-left cursor-pointer bg-transparent border-none text-[#1B1B4B] hover:bg-[#faf8f5] transition-colors" data-faq="6">
                        <span class="text-sm font-medium text-[#1B1B4B] pr-4">Do I get charged for paused monitors?</span>
                        <svg class="faq-chevron w-4 h-4 text-[#6a6a8a] shrink-0 transition-transform duration-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </button>
                    <div class="faq-content hidden">
                        <div class="px-5 pb-5 text-sm text-[#4a4a6a] leading-relaxed">
                            No. Paused monitors are not billed. You only pay for active monitors.
                        </div>
                    </div>
                </div>
                <div class="faq-item border border-[#F9A825]/15 rounded-xl overflow-hidden">
                    <button class="faq-trigger w-full flex items-center justify-between p-5 text-left cursor-pointer bg-transparent border-none text-[#1B1B4B] hover:bg-[#faf8f5] transition-colors" data-faq="7">
                        <span class="text-sm font-medium text-[#1B1B4B] pr-4">Can I cancel anytime?</span>
                        <svg class="faq-chevron w-4 h-4 text-[#6a6a8a] shrink-0 transition-transform duration-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </button>
                    <div class="faq-content hidden">
                        <div class="px-5 pb-5 text-sm text-[#4a4a6a] leading-relaxed">
                            Absolutely. Cancel with one click &mdash; your paid features stay active until the end of your billing period, then you move to the free plan. No contracts, no cancellation fees.
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
            <p class="text-sm text-[#4a4a6a] mb-8 max-w-lg mx-auto">3 monitors free forever. No credit card required.</p>
            <div class="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a href="https://app.rapidcheck.io/signup" class="w-full sm:w-auto h-11 px-8 rounded-lg bg-[#F9A825] text-[#1B1B4B] text-sm font-semibold hover:bg-[#FFB830] transition-colors flex items-center justify-center gap-2 group no-underline shadow-lg shadow-[#F9A825]/25">
                    Start for free
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="group-hover:translate-x-0.5 transition-transform"><path d="M5 12h14m-7-7l7 7l-7 7"></path></svg>
                </a>
            </div>
        </div>
    </section>
    </main>
    `;
  };

  window.__pages['/pricing'].init = function() {
    // Volume pricing calculator
    var tiers = [
      { max: 10, price: 2.00 },
      { max: 25, price: 1.75 },
      { max: 50, price: 1.50 },
      { max: 100, price: 1.25 },
      { max: Infinity, price: 1.00 }
    ];

    // Non-linear slider: 0-600 range, stops at 0/100/200/300/400/500/600
    // Maps to monitor counts: 1, 5, 10, 25, 50, 100, 200
    var stops = [1, 5, 10, 25, 50, 100, 200];
    var SEG = 100; // each segment is exactly 100 units

    function sliderToMonitors(sliderVal) {
      var segIndex = Math.min(Math.floor(sliderVal / SEG), stops.length - 2);
      var segStart = segIndex * SEG;
      var t = (sliderVal - segStart) / SEG;
      return Math.round(stops[segIndex] + t * (stops[segIndex + 1] - stops[segIndex]));
    }

    function monitorsToSlider(count) {
      for (var i = 0; i < stops.length - 1; i++) {
        if (count <= stops[i + 1]) {
          var t = (count - stops[i]) / (stops[i + 1] - stops[i]);
          return Math.round(i * SEG + t * SEG);
        }
      }
      return 600;
    }

    function calcCost(count) {
      var total = 0;
      var remaining = count;
      var prevMax = 0;
      for (var i = 0; i < tiers.length; i++) {
        var tierSize = tiers[i].max - prevMax;
        var inTier = Math.min(remaining, tierSize);
        total += inTier * tiers[i].price;
        remaining -= inTier;
        prevMax = tiers[i].max;
        if (remaining <= 0) break;
      }
      return total;
    }

    function getEffectiveRate(count) {
      if (count <= 10) return 2.00;
      if (count <= 25) return 1.75;
      if (count <= 50) return 1.50;
      if (count <= 100) return 1.25;
      return 1.00;
    }

    function buildBreakdown(count) {
      var parts = [];
      var remaining = count;
      var prevMax = 0;
      for (var i = 0; i < tiers.length; i++) {
        var tierSize = tiers[i].max === Infinity ? remaining : tiers[i].max - prevMax;
        var inTier = Math.min(remaining, tierSize);
        if (inTier > 0) {
          parts.push(inTier + ' &times; $' + tiers[i].price.toFixed(2));
        }
        remaining -= inTier;
        prevMax = tiers[i].max;
        if (remaining <= 0) break;
      }
      return parts.join(' + ');
    }

    // Hero slider
    var heroSlider = document.getElementById('hero-slider');
    var heroCount = document.getElementById('hero-count');
    var heroPrice = document.getElementById('hero-price');
    var heroTotal = document.getElementById('hero-total');
    var heroBreakdown = document.getElementById('hero-breakdown');

    function updateSlider() {
      var sliderVal = parseInt(heroSlider.value, 10);
      var count = sliderToMonitors(sliderVal);
      var total = calcCost(count);
      var rate = getEffectiveRate(count);
      heroCount.textContent = count;
      heroPrice.textContent = rate.toFixed(2);
      heroTotal.textContent = total.toFixed(2);
      heroBreakdown.innerHTML = buildBreakdown(count);
    }

    if (heroSlider) {
      heroSlider.addEventListener('input', updateSlider);
      updateSlider(); // initialize

      // Clickable stop labels
      document.querySelectorAll('.slider-stop').forEach(function(el) {
        el.addEventListener('click', function() {
          var stopIndex = parseInt(this.getAttribute('data-stop'), 10);
          heroSlider.value = stopIndex * SEG;
          updateSlider();
        });
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
