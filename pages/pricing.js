// Pricing page
(function() {
  window.__pages = window.__pages || {};
  window.__pages['/pricing'] = function() {
    return `
    <!-- Compact Hero + Trust -->
    <section class="pt-16 sm:pt-20 pb-4 relative">
        <div class="absolute inset-0 overflow-hidden pointer-events-none">
            <div class="absolute top-[-10%] left-[30%] w-[500px] h-[500px] bg-[#F9A825]/[0.06] rounded-full blur-[120px]"></div>
        </div>
        <div class="relative max-w-4xl mx-auto px-6 text-center z-10">
            <h1 class="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tighter text-[#1B1B4B] mb-1 reveal-up">
                $2 per monitor. That's it.
            </h1>
            <div class="flex flex-wrap items-center justify-center gap-x-6 gap-y-1 text-xs text-[#6a6a8a]">
                <span class="flex items-center gap-1"><svg class="w-3 h-3 text-[#F9A825]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>No credit card</span>
                <span class="flex items-center gap-1"><svg class="w-3 h-3 text-[#F9A825]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>1-month free trial</span>
                <span class="flex items-center gap-1"><svg class="w-3 h-3 text-[#F9A825]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>Cancel anytime</span>
                <span class="flex items-center gap-1"><svg class="w-3 h-3 text-[#F9A825]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>GDPR</span>
            </div>
        </div>
    </section>

    <main>

    <!-- Plan Cards: Free + Paid (side by side) -->
    <section class="pb-5 relative">
        <div class="max-w-5xl mx-auto px-6">
            <div class="grid grid-cols-1 md:grid-cols-12 gap-4">

                <!-- Free Plan (narrow) -->
                <div class="md:col-span-3 relative bg-white border border-[#F9A825]/15 rounded-2xl p-4 flex flex-col order-2 md:order-1">
                    <div class="relative z-10 flex flex-col h-full">
                        <div class="mb-4">
                            <h3 class="text-[10px] font-semibold text-[#6a6a8a] uppercase tracking-wider mb-0.5">Free Forever</h3>
                            <div class="flex items-baseline gap-1 mb-1">
                                <span class="text-2xl sm:text-3xl font-bold text-[#1B1B4B]">$0</span>
                                <span class="text-[#6a6a8a] text-xs">/month</span>
                            </div>
                            <p class="text-[11px] text-[#4a4a6a]">For personal projects.</p>
                        </div>
                        <ul class="space-y-1.5 mb-5 flex-1">
                            <li class="flex items-center gap-2 text-xs text-[#4a4a6a]">
                                <svg class="w-3 h-3 text-[#F9A825] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                3 monitors
                            </li>
                            <li class="flex items-center gap-2 text-xs text-[#4a4a6a]">
                                <svg class="w-3 h-3 text-[#F9A825] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                3-minute checks
                            </li>
                            <li class="flex items-center gap-2 text-xs text-[#4a4a6a]">
                                <svg class="w-3 h-3 text-[#F9A825] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                1 region + retry
                            </li>
                            <li class="flex items-center gap-2 text-xs text-[#4a4a6a]">
                                <svg class="w-3 h-3 text-[#F9A825] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                SSL monitoring
                            </li>
                            <li class="flex items-center gap-2 text-xs text-[#4a4a6a]">
                                <svg class="w-3 h-3 text-[#F9A825] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                1 status page
                            </li>
                            <li class="flex items-center gap-2 text-xs text-[#4a4a6a]">
                                <svg class="w-3 h-3 text-[#F9A825] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                Email alerts
                            </li>
                            <li class="flex items-center gap-2 text-xs text-[#4a4a6a]">
                                <svg class="w-3 h-3 text-[#F9A825] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                30-day retention
                            </li>
                        </ul>
                        <a href="https://app.rapidcheck.io/signup" class="w-full h-9 rounded-lg border border-[#1B1B4B]/20 bg-white text-[#1B1B4B] text-xs font-medium hover:border-[#1B1B4B]/40 hover:bg-[#1B1B4B]/5 transition-all flex items-center justify-center no-underline">
                            Start for free
                        </a>
                    </div>
                </div>

                <!-- Paid Plan (wider, with slider + add-ons) -->
                <div class="md:col-span-7 relative bg-white border-2 border-[#F9A825]/40 rounded-2xl p-4 sm:p-5 flex flex-col order-1 md:order-2">
                    <div class="absolute -top-3 left-1/2 -translate-x-1/2">
                        <span class="bg-[#F9A825] text-[#1B1B4B] text-[10px] font-semibold px-3 py-0.5 rounded-full whitespace-nowrap">Pay per monitor</span>
                    </div>
                    <div class="relative z-10 flex flex-col h-full">
                        <div class="mb-4">
                            <h3 class="text-[10px] font-semibold text-[#6a6a8a] uppercase tracking-wider mb-0.5">Pay-As-You-Go</h3>
                            <div class="flex items-baseline gap-1 mb-1">
                                <span class="text-2xl sm:text-3xl font-bold text-[#1B1B4B]">$2</span>
                                <span class="text-[#6a6a8a] text-xs">/monitor/month</span>
                            </div>
                            <p class="text-[11px] text-[#4a4a6a]">Everything included for production monitoring.</p>
                        </div>

                        <!-- Two-column: Features + Cost -->
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                            <!-- Features list -->
                            <ul class="space-y-1.5">
                                <li class="flex items-center gap-2 text-xs text-[#4a4a6a]">
                                    <svg class="w-3 h-3 text-[#F9A825] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    <span><strong class="text-[#1B1B4B]">30-sec</strong> checks</span>
                                </li>
                                <li class="flex items-center gap-2 text-xs text-[#4a4a6a]">
                                    <svg class="w-3 h-3 text-[#F9A825] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    <span>1 region + <strong class="text-[#1B1B4B]">7 retry</strong></span>
                                </li>
                                <li class="flex items-center gap-2 text-xs text-[#4a4a6a]">
                                    <svg class="w-3 h-3 text-[#F9A825] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    <span><strong class="text-[#1B1B4B]">250</strong> browser checks/mon</span>
                                </li>
                                <li class="flex items-center gap-2 text-xs text-[#4a4a6a]">
                                    <svg class="w-3 h-3 text-[#F9A825] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    <span><strong class="text-[#1B1B4B]">5 SMS</strong>/monitor/mo</span>
                                </li>
                                <li class="flex items-center gap-2 text-xs text-[#4a4a6a]">
                                    <svg class="w-3 h-3 text-[#F9A825] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    SSL &amp; domain monitoring
                                </li>
                                <li class="flex items-center gap-2 text-xs text-[#4a4a6a]">
                                    <svg class="w-3 h-3 text-[#F9A825] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    All alert channels
                                </li>
                                <li class="flex items-center gap-2 text-xs text-[#4a4a6a]">
                                    <svg class="w-3 h-3 text-[#F9A825] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    Maintenance windows
                                </li>
                                <li class="flex items-center gap-2 text-xs text-[#4a4a6a]">
                                    <svg class="w-3 h-3 text-[#F9A825] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    Unlimited team, 12-mo retention
                                </li>
                            </ul>

                            <!-- Quick cost examples -->
                            <div class="bg-[#faf8f5] border border-[#F9A825]/15 rounded-xl p-4 flex flex-col justify-between">
                                <div class="text-[10px] font-semibold text-[#6a6a8a] uppercase tracking-wider mb-2">Simple math</div>
                                <div class="space-y-1.5">
                                    <div class="flex items-center justify-between">
                                        <span class="text-xs text-[#4a4a6a]">5 monitors</span>
                                        <span class="text-xs font-mono font-semibold text-[#1B1B4B]">$10/mo</span>
                                    </div>
                                    <div class="flex items-center justify-between">
                                        <span class="text-xs text-[#4a4a6a]">10 monitors</span>
                                        <span class="text-xs font-mono font-semibold text-[#1B1B4B]">$20/mo</span>
                                    </div>
                                    <div class="flex items-center justify-between">
                                        <span class="text-xs text-[#4a4a6a]">25 monitors</span>
                                        <span class="text-xs font-mono font-semibold text-[#1B1B4B]">$50/mo</span>
                                    </div>
                                    <div class="flex items-center justify-between">
                                        <span class="text-xs text-[#4a4a6a]">50 monitors</span>
                                        <span class="text-xs font-mono font-semibold text-[#1B1B4B]">$100/mo</span>
                                    </div>
                                    <div class="flex items-center justify-between">
                                        <span class="text-xs text-[#4a4a6a]">100 monitors</span>
                                        <span class="text-xs font-mono font-semibold text-[#1B1B4B]">$200/mo</span>
                                    </div>
                                </div>
                                <div class="mt-2 pt-2 border-t border-[#F9A825]/15">
                                    <p class="text-[10px] text-[#6a6a8a] text-center">monitors &times; $2 = your bill</p>
                                </div>
                            </div>
                        </div>

                        <!-- CTA -->
                        <a href="https://app.rapidcheck.io/signup" class="w-full h-9 rounded-lg bg-[#F9A825] text-[#1B1B4B] text-xs font-semibold hover:bg-[#FFB830] transition-colors flex items-center justify-center no-underline shadow-lg shadow-[#F9A825]/25 mb-2.5" id="hero-cta">
                            Start free trial &mdash; 1 month free
                        </a>

                        <!-- Add-ons (visible by default) -->
                        <div class="border-t border-[#F9A825]/15 pt-2">
                            <div class="text-[10px] font-semibold text-[#6a6a8a] uppercase tracking-wider mb-1.5">Add-ons</div>
                            <div>
                                <div class="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
                                    <div class="bg-[#faf8f5] rounded-lg p-2">
                                        <div class="text-xs font-semibold text-[#1B1B4B] mb-0.5">Multi-Region</div>
                                        <div class="text-[11px] text-[#6a6a8a]">Quorum from 3-8 regions</div>
                                        <div class="text-xs font-mono font-semibold text-[#F9A825] mt-1.5">$0.50<span class="font-normal text-[#6a6a8a]">/region/mon</span></div>
                                    </div>
                                    <div class="bg-[#faf8f5] rounded-lg p-2">
                                        <div class="text-xs font-semibold text-[#1B1B4B] mb-0.5">Browser Checks</div>
                                        <div class="text-[11px] text-[#6a6a8a]">Beyond 250/mon included</div>
                                        <div class="text-xs font-mono font-semibold text-[#F9A825] mt-1.5">$3<span class="font-normal text-[#6a6a8a]">/1,000 runs</span></div>
                                    </div>
                                    <div class="bg-[#faf8f5] rounded-lg p-2">
                                        <div class="text-xs font-semibold text-[#1B1B4B] mb-0.5">Extra SMS</div>
                                        <div class="text-[11px] text-[#6a6a8a]">Beyond 5/mon included</div>
                                        <div class="text-xs font-mono font-semibold text-[#F9A825] mt-1.5">$0.10<span class="font-normal text-[#6a6a8a]">/message</span></div>
                                    </div>
                                    <div class="bg-[#faf8f5] rounded-lg p-2">
                                        <div class="text-xs font-semibold text-[#1B1B4B] mb-0.5">Status Pages</div>
                                        <div class="text-[11px] text-[#6a6a8a]">1 free, add more</div>
                                        <div class="text-xs font-mono font-semibold text-[#F9A825] mt-1.5">$5<span class="font-normal text-[#6a6a8a]">/page/mo</span></div>
                                    </div>
                                    <div class="bg-[#faf8f5] rounded-lg p-2">
                                        <div class="text-xs font-semibold text-[#1B1B4B] mb-0.5">Custom Domain</div>
                                        <div class="text-[11px] text-[#6a6a8a]">status.yoursite.com</div>
                                        <div class="text-xs font-mono font-semibold text-[#F9A825] mt-1.5">$5<span class="font-normal text-[#6a6a8a]">/mo</span></div>
                                    </div>
                                    <div class="bg-[#faf8f5] rounded-lg p-2">
                                        <div class="text-xs font-semibold text-[#1B1B4B] mb-0.5">White-Label</div>
                                        <div class="text-[11px] text-[#6a6a8a]">Remove branding</div>
                                        <div class="text-xs font-mono font-semibold text-[#F9A825] mt-1.5">$15<span class="font-normal text-[#6a6a8a]">/mo</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Security Add-ons (vertical column) -->
                <div class="md:col-span-2 relative bg-[#1B1B4B] rounded-2xl p-4 flex flex-col order-3 overflow-hidden">
                    <div class="absolute inset-0 overflow-hidden pointer-events-none">
                        <div class="absolute top-[-20%] right-[-30%] w-[200px] h-[200px] bg-[#F9A825]/[0.08] rounded-full blur-[60px]"></div>
                    </div>
                    <div class="relative z-10 flex flex-col h-full">
                        <div class="mb-4">
                            <svg class="w-5 h-5 text-[#F9A825] mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                            <h3 class="text-[10px] font-semibold text-white/60 uppercase tracking-wider">Security</h3>
                        </div>

                        <div class="space-y-4 flex-1">
                            <div>
                                <div class="text-xs font-semibold text-white mb-0.5">ASM Scanning</div>
                                <div class="text-[10px] text-white/50 leading-relaxed mb-1.5">Attack surface monitoring. Subdomains, exposed assets, vulnerabilities.</div>
                                <div class="text-sm font-mono font-bold text-[#F9A825]">$49<span class="text-xs font-normal text-white/40">/mo</span></div>
                            </div>
                            <div>
                                <div class="text-xs font-semibold text-white mb-0.5">OWASP Top 10</div>
                                <div class="text-[10px] text-white/50 leading-relaxed mb-1.5">Automated security audits for your web apps.</div>
                                <div class="text-sm font-mono font-bold text-[#F9A825]">$29<span class="text-xs font-normal text-white/40">/mo</span></div>
                            </div>
                        </div>

                        <a href="mailto:sales@rapidcheck.io" class="w-full h-8 mt-4 rounded-lg border border-white/20 text-white text-[10px] font-medium hover:border-white/40 hover:bg-white/5 transition-all flex items-center justify-center no-underline">
                            Learn more
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Feature Comparison (collapsible) -->
    <section class="py-12 relative">
        <div class="max-w-4xl mx-auto px-6">
            <button id="compare-trigger" class="w-full flex items-center justify-center gap-2 py-3 cursor-pointer bg-transparent border border-[#F9A825]/15 rounded-xl hover:bg-[#faf8f5] transition-colors">
                <span class="text-sm font-medium text-[#1B1B4B]">Compare plans in detail</span>
                <svg id="compare-chevron" class="w-4 h-4 text-[#6a6a8a] transition-transform duration-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </button>
            <div id="compare-content" class="hidden mt-4">
            <div class="border border-[#F9A825]/15 rounded-2xl overflow-hidden">
                <div class="grid grid-cols-3 bg-[#faf8f5] border-b border-[#F9A825]/15">
                    <div class="p-3.5 text-xs font-medium text-[#4a4a6a]">Feature</div>
                    <div class="p-3.5 text-xs font-medium text-[#4a4a6a] text-center">Free</div>
                    <div class="p-3.5 text-xs font-medium text-[#F9A825] text-center">Paid</div>
                </div>

                <div class="grid grid-cols-3 bg-[#faf8f5]/50 border-b border-[#F9A825]/10">
                    <div class="col-span-3 px-3.5 py-2 text-[10px] font-semibold text-[#6a6a8a] uppercase tracking-wider">Monitoring</div>
                </div>
                <div class="grid grid-cols-3 border-b border-[#F9A825]/10 hover:bg-[#faf8f5] transition-colors">
                    <div class="p-3.5 text-xs text-[#4a4a6a]">Monitors</div>
                    <div class="p-3.5 text-xs text-[#4a4a6a] text-center font-mono">3</div>
                    <div class="p-3.5 text-xs text-[#F9A825] text-center font-mono">Unlimited</div>
                </div>
                <div class="grid grid-cols-3 border-b border-[#F9A825]/10 hover:bg-[#faf8f5] transition-colors">
                    <div class="p-3.5 text-xs text-[#4a4a6a]">Check interval</div>
                    <div class="p-3.5 text-xs text-[#4a4a6a] text-center font-mono">3 min</div>
                    <div class="p-3.5 text-xs text-[#F9A825] text-center font-mono">30 sec</div>
                </div>
                <div class="grid grid-cols-3 border-b border-[#F9A825]/10 hover:bg-[#faf8f5] transition-colors">
                    <div class="p-3.5 text-xs text-[#4a4a6a]">Locations</div>
                    <div class="p-3.5 text-xs text-[#4a4a6a] text-center font-mono">1 + retry</div>
                    <div class="p-3.5 text-xs text-[#F9A825] text-center font-mono">1 + 7 retry</div>
                </div>
                <div class="grid grid-cols-3 border-b border-[#F9A825]/10 hover:bg-[#faf8f5] transition-colors">
                    <div class="p-3.5 text-xs text-[#4a4a6a]">Browser checks</div>
                    <div class="p-3.5 text-center"><svg class="w-3.5 h-3.5 mx-auto text-[#6a6a8a]/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></div>
                    <div class="p-3.5 text-xs text-[#F9A825] text-center font-mono">250/mon/mo</div>
                </div>
                <div class="grid grid-cols-3 border-b border-[#F9A825]/10 hover:bg-[#faf8f5] transition-colors">
                    <div class="p-3.5 text-xs text-[#4a4a6a]">Multi-step API</div>
                    <div class="p-3.5 text-center"><svg class="w-3.5 h-3.5 mx-auto text-[#6a6a8a]/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></div>
                    <div class="p-3.5 text-xs text-[#F9A825] text-center font-mono">1-10 steps</div>
                </div>
                <div class="grid grid-cols-3 border-b border-[#F9A825]/10 hover:bg-[#faf8f5] transition-colors">
                    <div class="p-3.5 text-xs text-[#4a4a6a]">Heartbeat / cron</div>
                    <div class="p-3.5 text-center"><svg class="w-3.5 h-3.5 mx-auto text-[#6a6a8a]/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></div>
                    <div class="p-3.5 text-center"><svg class="w-3.5 h-3.5 mx-auto text-[#F9A825]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                </div>

                <div class="grid grid-cols-3 bg-[#faf8f5]/50 border-b border-[#F9A825]/10">
                    <div class="col-span-3 px-3.5 py-2 text-[10px] font-semibold text-[#6a6a8a] uppercase tracking-wider">Alerting</div>
                </div>
                <div class="grid grid-cols-3 border-b border-[#F9A825]/10 hover:bg-[#faf8f5] transition-colors">
                    <div class="p-3.5 text-xs text-[#4a4a6a]">Email alerts</div>
                    <div class="p-3.5 text-xs text-[#4a4a6a] text-center font-mono">Unlimited</div>
                    <div class="p-3.5 text-xs text-[#F9A825] text-center font-mono">Unlimited</div>
                </div>
                <div class="grid grid-cols-3 border-b border-[#F9A825]/10 hover:bg-[#faf8f5] transition-colors">
                    <div class="p-3.5 text-xs text-[#4a4a6a]">SMS alerts</div>
                    <div class="p-3.5 text-center"><svg class="w-3.5 h-3.5 mx-auto text-[#6a6a8a]/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></div>
                    <div class="p-3.5 text-xs text-[#F9A825] text-center font-mono">5/mon/mo</div>
                </div>
                <div class="grid grid-cols-3 border-b border-[#F9A825]/10 hover:bg-[#faf8f5] transition-colors">
                    <div class="p-3.5 text-xs text-[#4a4a6a]">Slack, Discord, Webhooks</div>
                    <div class="p-3.5 text-center"><svg class="w-3.5 h-3.5 mx-auto text-[#6a6a8a]/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></div>
                    <div class="p-3.5 text-center"><svg class="w-3.5 h-3.5 mx-auto text-[#F9A825]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                </div>
                <div class="grid grid-cols-3 border-b border-[#F9A825]/10 hover:bg-[#faf8f5] transition-colors">
                    <div class="p-3.5 text-xs text-[#4a4a6a]">PagerDuty, Opsgenie</div>
                    <div class="p-3.5 text-center"><svg class="w-3.5 h-3.5 mx-auto text-[#6a6a8a]/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></div>
                    <div class="p-3.5 text-center"><svg class="w-3.5 h-3.5 mx-auto text-[#F9A825]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                </div>
                <div class="grid grid-cols-3 border-b border-[#F9A825]/10 hover:bg-[#faf8f5] transition-colors">
                    <div class="p-3.5 text-xs text-[#4a4a6a]">Maintenance windows</div>
                    <div class="p-3.5 text-center"><svg class="w-3.5 h-3.5 mx-auto text-[#6a6a8a]/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></div>
                    <div class="p-3.5 text-center"><svg class="w-3.5 h-3.5 mx-auto text-[#F9A825]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                </div>

                <div class="grid grid-cols-3 bg-[#faf8f5]/50 border-b border-[#F9A825]/10">
                    <div class="col-span-3 px-3.5 py-2 text-[10px] font-semibold text-[#6a6a8a] uppercase tracking-wider">Platform</div>
                </div>
                <div class="grid grid-cols-3 border-b border-[#F9A825]/10 hover:bg-[#faf8f5] transition-colors">
                    <div class="p-3.5 text-xs text-[#4a4a6a]">Status pages</div>
                    <div class="p-3.5 text-xs text-[#4a4a6a] text-center font-mono">1</div>
                    <div class="p-3.5 text-xs text-[#F9A825] text-center font-mono">1 (+ $5/extra)</div>
                </div>
                <div class="grid grid-cols-3 border-b border-[#F9A825]/10 hover:bg-[#faf8f5] transition-colors">
                    <div class="p-3.5 text-xs text-[#4a4a6a]">Team members</div>
                    <div class="p-3.5 text-xs text-[#4a4a6a] text-center font-mono">1</div>
                    <div class="p-3.5 text-xs text-[#F9A825] text-center font-mono">Unlimited</div>
                </div>
                <div class="grid grid-cols-3 border-b border-[#F9A825]/10 hover:bg-[#faf8f5] transition-colors">
                    <div class="p-3.5 text-xs text-[#4a4a6a]">Data retention</div>
                    <div class="p-3.5 text-xs text-[#4a4a6a] text-center font-mono">30 days</div>
                    <div class="p-3.5 text-xs text-[#F9A825] text-center font-mono">12 months</div>
                </div>
                <div class="grid grid-cols-3 border-b border-[#F9A825]/10 hover:bg-[#faf8f5] transition-colors">
                    <div class="p-3.5 text-xs text-[#4a4a6a]">API access</div>
                    <div class="p-3.5 text-center"><svg class="w-3.5 h-3.5 mx-auto text-[#6a6a8a]/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></div>
                    <div class="p-3.5 text-center"><svg class="w-3.5 h-3.5 mx-auto text-[#F9A825]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                </div>
                <div class="grid grid-cols-3 hover:bg-[#faf8f5] transition-colors">
                    <div class="p-3.5 text-xs text-[#4a4a6a]">SSL &amp; domain intelligence</div>
                    <div class="p-3.5 text-center"><svg class="w-3.5 h-3.5 mx-auto text-[#F9A825]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                    <div class="p-3.5 text-center"><svg class="w-3.5 h-3.5 mx-auto text-[#F9A825]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                </div>
            </div>
            </div>
        </div>
    </section>

    <!-- FAQ -->
    <section class="py-12 border-t border-[#F9A825]/15 relative">
        <div class="absolute inset-0 bg-noise opacity-20 pointer-events-none mix-blend-overlay"></div>
        <div class="relative max-w-3xl mx-auto px-6 z-10">
            <div class="text-center mb-8">
                <h2 class="text-xl sm:text-2xl font-semibold tracking-tight text-[#1B1B4B] mb-2">Frequently asked questions</h2>
            </div>
            <div id="faq-list" class="space-y-2.5">
                <div class="faq-item border border-[#F9A825]/15 rounded-xl overflow-hidden">
                    <button class="faq-trigger w-full flex items-center justify-between p-4 text-left cursor-pointer bg-transparent border-none text-[#1B1B4B] hover:bg-[#faf8f5] transition-colors" data-faq="0">
                        <span class="text-sm font-medium text-[#1B1B4B] pr-4">How does per-monitor pricing work?</span>
                        <svg class="faq-chevron w-4 h-4 text-[#6a6a8a] shrink-0 transition-transform duration-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </button>
                    <div class="faq-content hidden">
                        <div class="px-4 pb-4 text-sm text-[#4a4a6a] leading-relaxed">
                            Every monitor costs $2/month. That includes 30-second checks, 250 browser checks, 5 SMS alerts, SSL monitoring, and all alert channels. 10 monitors = $20/month. 50 monitors = $100/month. No tiers, no surprises.
                        </div>
                    </div>
                </div>
                <div class="faq-item border border-[#F9A825]/15 rounded-xl overflow-hidden">
                    <button class="faq-trigger w-full flex items-center justify-between p-4 text-left cursor-pointer bg-transparent border-none text-[#1B1B4B] hover:bg-[#faf8f5] transition-colors" data-faq="1">
                        <span class="text-sm font-medium text-[#1B1B4B] pr-4">What counts as a monitor?</span>
                        <svg class="faq-chevron w-4 h-4 text-[#6a6a8a] shrink-0 transition-transform duration-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </button>
                    <div class="faq-content hidden">
                        <div class="px-4 pb-4 text-sm text-[#4a4a6a] leading-relaxed">
                            Each URL, API endpoint, heartbeat, or multi-step API workflow counts as one monitor. SSL and domain intelligence are included free &mdash; they don't count separately. Paused monitors are not billed.
                        </div>
                    </div>
                </div>
                <div class="faq-item border border-[#F9A825]/15 rounded-xl overflow-hidden">
                    <button class="faq-trigger w-full flex items-center justify-between p-4 text-left cursor-pointer bg-transparent border-none text-[#1B1B4B] hover:bg-[#faf8f5] transition-colors" data-faq="2">
                        <span class="text-sm font-medium text-[#1B1B4B] pr-4">What are browser checks?</span>
                        <svg class="faq-chevron w-4 h-4 text-[#6a6a8a] shrink-0 transition-transform duration-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </button>
                    <div class="faq-content hidden">
                        <div class="px-4 pb-4 text-sm text-[#4a4a6a] leading-relaxed">
                            Browser checks launch a real headless browser (Playwright) to test your site like a user would. Each monitor includes 250 runs/month (~1 every 3 hours). Extra runs are $3/1,000.
                        </div>
                    </div>
                </div>
                <div class="faq-item border border-[#F9A825]/15 rounded-xl overflow-hidden">
                    <button class="faq-trigger w-full flex items-center justify-between p-4 text-left cursor-pointer bg-transparent border-none text-[#1B1B4B] hover:bg-[#faf8f5] transition-colors" data-faq="3">
                        <span class="text-sm font-medium text-[#1B1B4B] pr-4">What is multi-region quorum?</span>
                        <svg class="faq-chevron w-4 h-4 text-[#6a6a8a] shrink-0 transition-transform duration-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </button>
                    <div class="faq-content hidden">
                        <div class="px-4 pb-4 text-sm text-[#4a4a6a] leading-relaxed">
                            By default, each monitor checks from 1 region and retries from backups on failure. Multi-region quorum checks from 3&ndash;8 regions simultaneously &mdash; a majority must agree before alerting. Add it for $0.50/region/monitor/mo.
                        </div>
                    </div>
                </div>
                <div class="faq-item border border-[#F9A825]/15 rounded-xl overflow-hidden">
                    <button class="faq-trigger w-full flex items-center justify-between p-4 text-left cursor-pointer bg-transparent border-none text-[#1B1B4B] hover:bg-[#faf8f5] transition-colors" data-faq="4">
                        <span class="text-sm font-medium text-[#1B1B4B] pr-4">Do paused monitors cost anything?</span>
                        <svg class="faq-chevron w-4 h-4 text-[#6a6a8a] shrink-0 transition-transform duration-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </button>
                    <div class="faq-content hidden">
                        <div class="px-4 pb-4 text-sm text-[#4a4a6a] leading-relaxed">
                            No. Paused monitors are not billed. You only pay for active monitors.
                        </div>
                    </div>
                </div>
                <div class="faq-item border border-[#F9A825]/15 rounded-xl overflow-hidden">
                    <button class="faq-trigger w-full flex items-center justify-between p-4 text-left cursor-pointer bg-transparent border-none text-[#1B1B4B] hover:bg-[#faf8f5] transition-colors" data-faq="5">
                        <span class="text-sm font-medium text-[#1B1B4B] pr-4">Can I cancel anytime?</span>
                        <svg class="faq-chevron w-4 h-4 text-[#6a6a8a] shrink-0 transition-transform duration-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </button>
                    <div class="faq-content hidden">
                        <div class="px-4 pb-4 text-sm text-[#4a4a6a] leading-relaxed">
                            Yes. Cancel with one click &mdash; paid features stay active until end of billing period, then you move to the free plan. No contracts.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Bottom CTA -->
    <section class="py-16 border-t border-[#F9A825]/15 relative">
        <div class="absolute inset-0 overflow-hidden pointer-events-none">
            <div class="absolute bottom-[-20%] left-[30%] w-[600px] h-[600px] bg-[#F9A825]/[0.05] rounded-full blur-[120px]"></div>
        </div>
        <div class="relative max-w-2xl mx-auto px-6 text-center z-10">
            <h2 class="text-xl sm:text-2xl font-semibold tracking-tight text-[#1B1B4B] mb-3">Start monitoring in under a minute</h2>
            <p class="text-sm text-[#4a4a6a] mb-6">3 monitors free forever. No credit card required.</p>
            <a href="https://app.rapidcheck.io/signup" class="inline-flex h-11 px-8 rounded-lg bg-[#F9A825] text-[#1B1B4B] text-sm font-semibold hover:bg-[#FFB830] transition-colors items-center justify-center gap-2 group no-underline shadow-lg shadow-[#F9A825]/25">
                Start for free
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="group-hover:translate-x-0.5 transition-transform"><path d="M5 12h14m-7-7l7 7l-7 7"></path></svg>
            </a>
        </div>
    </section>
    </main>
    `;
  };

  window.__pages['/pricing'].init = function() {
    // Compare plans accordion
    var compareTrigger = document.getElementById('compare-trigger');
    var compareContent = document.getElementById('compare-content');
    var compareChevron = document.getElementById('compare-chevron');

    if (compareTrigger) {
      compareTrigger.addEventListener('click', function() {
        var isOpen = !compareContent.classList.contains('hidden');
        if (isOpen) {
          compareContent.classList.add('hidden');
          compareChevron.style.transform = 'rotate(0deg)';
        } else {
          compareContent.classList.remove('hidden');
          compareChevron.style.transform = 'rotate(180deg)';
        }
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

        document.querySelectorAll('.faq-item').forEach(function(item) {
          var c = item.querySelector('.faq-content');
          var ch = item.querySelector('.faq-chevron');
          if (item !== parent) {
            c.classList.add('hidden');
            ch.style.transform = 'rotate(0deg)';
          }
        });

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
