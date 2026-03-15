// Home / Landing page — White/light theme experiment (Cloudflare-inspired)
(function() {
  window.__pages = window.__pages || {};
  window.__pages['/'] = function() {
    return `
    <!-- Hero Section -->
    <header class="md:pt-44 md:pb-24 overflow-hidden pt-24 sm:pt-28 pb-12 sm:pb-14 relative">
        <div class="absolute inset-0 overflow-hidden pointer-events-none">
            <div class="absolute top-[-20%] left-[10%] w-[600px] h-[600px] bg-orange-500/[0.04] rounded-full blur-[120px]"></div>
            <div class="absolute top-[10%] right-[15%] w-[500px] h-[500px] bg-amber-500/[0.03] rounded-full blur-[100px]"></div>
        </div>
        <div class="relative max-w-5xl mx-auto px-6 z-10">
            <div class="max-w-3xl">
                <h1 class="text-[1.75rem] sm:text-[2.5rem] md:text-5xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-6 pb-2 leading-[1.1] reveal-up" style="animation-delay: 0.1s;">
                    Catch downtime early, before users
                    <span class="text-orange-500">start reporting it.</span>
                </h1>
                <p class="text-lg md:text-xl text-gray-600 max-w-2xl mb-8 leading-relaxed reveal-up" style="animation-delay: 0.2s;">
                    Monitor uptime. Protect your domain. Get alerted instantly. We monitor your websites, APIs, and services from 330+ edge locations worldwide.
                </p>
                <div class="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 reveal-up" style="animation-delay: 0.3s;">
                    <button onclick="alert('Registration coming soon')" class="w-full sm:w-auto justify-center h-12 sm:h-12 px-8 rounded-lg bg-orange-500 text-white text-base font-semibold hover:bg-orange-400 transition-all flex items-center gap-2 group cursor-pointer border-none shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30">
                        Start for free
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="group-hover:translate-x-0.5 transition-transform"><path d="M5 12h14m-7-7l7 7l-7 7"></path></svg>
                    </button>
                    <a href="/pricing" class="w-full sm:w-auto justify-center h-12 sm:h-12 px-8 rounded-lg border border-gray-300 text-gray-700 text-base font-medium hover:border-gray-400 hover:bg-gray-50 transition-all flex items-center gap-2 no-underline">
                        See pricing
                    </a>
                </div>
                <p class="text-sm text-gray-400 mt-6 reveal-up" style="animation-delay: 0.35s;">3 monitors free forever. No credit card required.</p>
            </div>
        </div>
    </header>

    <main>
    <!-- Platform Metrics -->
    <section class="border-y bg-gray-50 border-gray-200 py-10 relative">
        <div class="max-w-6xl mx-auto px-6">
            <p class="text-center text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-8">Built for scale. Trusted by teams worldwide.</p>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
                <div class="text-center">
                    <div class="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-1">330+</div>
                    <div class="text-sm text-gray-600">Edge Locations</div>
                    <div class="text-xs text-gray-400 mt-0.5">Global monitoring coverage</div>
                </div>
                <div class="text-center">
                    <div class="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-1">99.99%</div>
                    <div class="text-sm text-gray-600">Platform Uptime</div>
                    <div class="text-xs text-gray-400 mt-0.5">Enterprise-grade reliability</div>
                </div>
                <div class="text-center">
                    <div class="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-500 mb-1">&lt;100ms</div>
                    <div class="text-sm text-gray-600">Alert Latency</div>
                    <div class="text-xs text-gray-400 mt-0.5">Know instantly when things break</div>
                </div>
                <div class="text-center">
                    <div class="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-1">Free</div>
                    <div class="text-sm text-gray-600">SSL, DNS & Domain Monitoring</div>
                    <div class="text-xs text-gray-400 mt-0.5">Full intelligence on every plan</div>
                </div>
            </div>
        </div>
    </section>

    <!-- Infrastructure Trust -->
    <section class="py-6 relative">
        <div class="max-w-4xl mx-auto px-6 text-center">
            <p class="text-[10px] font-medium text-gray-400 uppercase tracking-widest mb-5">Built on infrastructure you trust</p>
            <div class="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-gray-500 font-medium">
                <span class="flex items-center gap-2">
                    <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg>
                    Cloudflare Workers
                </span>
                <span class="flex items-center gap-2">
                    <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><ellipse cx="12" cy="12" rx="10" ry="4"></ellipse><path d="M2 12v4c0 2.2 4.5 4 10 4s10-1.8 10-4v-4"></path><path d="M2 8v4c0 2.2 4.5 4 10 4s10-1.8 10-4V8"></path></svg>
                    Neon PostgreSQL
                </span>
                <span class="flex items-center gap-2">
                    <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                    AES-256 Encryption
                </span>
                <span class="flex items-center gap-2">
                    <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                    GDPR Compliant
                </span>
            </div>
        </div>
    </section>

    <!-- Core Value Pillars -->
    <section class="pt-16 pb-12 relative reveal-on-scroll">
        <div class="max-w-7xl mx-auto px-6">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div class="group relative bg-white border border-gray-200 rounded-xl p-7 hover:border-orange-300 hover:shadow-lg hover:shadow-orange-500/5 transition-all duration-300">
                    <div class="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center mb-5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-orange-500"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                    </div>
                    <h3 class="text-lg font-semibold text-gray-900 mb-2 tracking-tight">Simple pricing</h3>
                    <p class="text-sm text-gray-600 leading-relaxed">$2 per monitor, per month. No complex tiers, no hidden fees. Start free and scale as you grow.</p>
                </div>
                <div class="group relative bg-white border border-gray-200 rounded-xl p-7 hover:border-orange-300 hover:shadow-lg hover:shadow-orange-500/5 transition-all duration-300">
                    <div class="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center mb-5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-orange-500"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect><path d="M12 18h.01"></path></svg>
                    </div>
                    <h3 class="text-lg font-semibold text-gray-900 mb-2 tracking-tight">Native mobile app</h3>
                    <p class="text-sm text-gray-600 leading-relaxed">iOS and Android. Push notifications, incident acknowledgment, and real-time dashboard in your pocket.</p>
                </div>
                <div class="group relative bg-white border border-gray-200 rounded-xl p-7 hover:border-orange-300 hover:shadow-lg hover:shadow-orange-500/5 transition-all duration-300">
                    <div class="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center mb-5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-orange-500"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
                    </div>
                    <h3 class="text-lg font-semibold text-gray-900 mb-2 tracking-tight">Branded status pages</h3>
                    <p class="text-sm text-gray-600 leading-relaxed">Beautiful public status pages with custom domains. Keep your users informed automatically.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Alert Channels -->
    <section class="py-8 relative">
        <div class="max-w-7xl mx-auto px-6 text-center">
            <p class="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-8">Get alerted wherever you work</p>
            <div class="flex flex-wrap items-center justify-center gap-3">
                <div class="flex items-center gap-2 px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-500"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                    <span class="text-xs text-gray-600 font-medium">Email</span>
                </div>
                <div class="flex items-center gap-2 px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-500"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    <span class="text-xs text-gray-600 font-medium">SMS & Phone</span>
                </div>
                <div class="flex items-center gap-2 px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-500"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                    <span class="text-xs text-gray-600 font-medium">Push Notifications</span>
                </div>
                <div class="flex items-center gap-2 px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-500"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                    <span class="text-xs text-gray-600 font-medium">Slack / Discord / Webhooks</span>
                </div>
            </div>
        </div>
    </section>

    <!-- Domain Intelligence -->
    <section class="pt-16 pb-12 sm:py-16 relative reveal-on-scroll">
        <div class="max-w-7xl mx-auto px-6">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-gray-200 rounded-2xl bg-white overflow-hidden shadow-sm">
                <div class="relative min-h-[400px] p-6 sm:p-12 flex items-center justify-center overflow-hidden bg-gray-900">
                    <div class="absolute inset-0 z-20 w-full h-full bg-gray-900 flex flex-col items-center justify-center overflow-hidden">
                        <div class="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(circle_at_center,black_60%,transparent_100%)]"></div>
                        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-orange-500/8 blur-[90px] rounded-full pointer-events-none"></div>
                        <div class="relative mb-6">
                            <div class="absolute inset-0 bg-orange-500/15 blur-xl rounded-full opacity-50"></div>
                            <div class="relative w-24 h-24 rounded-full bg-gray-800 border border-orange-500/30 flex flex-col items-center justify-center shadow-[0_0_30px_rgba(249,115,22,0.12)]">
                                <svg class="absolute inset-0" width="96" height="96" viewBox="0 0 96 96">
                                    <circle cx="48" cy="48" r="42" fill="none" stroke="rgba(75,85,99,0.5)" stroke-width="3"/>
                                    <circle cx="48" cy="48" r="42" fill="none" stroke="rgb(249,115,22)" stroke-width="3" stroke-dasharray="242 264" stroke-linecap="round" transform="rotate(-90 48 48)" class="drop-shadow-[0_0_6px_rgba(249,115,22,0.5)]"/>
                                </svg>
                                <span class="text-2xl font-bold text-white">A+</span>
                                <span class="text-[8px] text-orange-400 uppercase tracking-wider">Health</span>
                            </div>
                            <div class="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap">
                                <div class="flex items-center gap-2 px-4 py-2 bg-gray-800/90 border border-orange-500/20 rounded-lg shadow-lg backdrop-blur-md">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-orange-400"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                                    <span class="text-[10px] font-semibold text-orange-300 uppercase tracking-wide">SSL Valid — 247 days</span>
                                </div>
                            </div>
                        </div>
                        <div class="w-full max-w-[300px] translate-y-8 bg-gray-950/80 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl overflow-hidden relative">
                            <div class="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-orange-500/40 to-transparent opacity-50"></div>
                            <div class="p-5">
                                <div class="flex justify-between items-start mb-4">
                                    <div>
                                        <div class="text-[10px] text-gray-500 font-medium mb-1 uppercase tracking-wider">Domain Health</div>
                                        <div class="text-lg font-semibold text-white tracking-tight">example.com</div>
                                    </div>
                                    <div class="text-[10px] text-green-400 bg-green-500/10 px-2 py-1 rounded font-medium flex items-center gap-1 border border-green-500/20">
                                        <span class="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                                        All Clear
                                    </div>
                                </div>
                                <div class="space-y-2.5">
                                    <div class="flex items-center justify-between text-[11px]"><span class="text-gray-500">SSL Certificate</span><span class="text-green-400 font-medium">Valid — 247 days</span></div>
                                    <div class="flex items-center justify-between text-[11px]"><span class="text-gray-500">SPF / DKIM / DMARC</span><span class="text-green-400 font-medium">Pass</span></div>
                                    <div class="flex items-center justify-between text-[11px]"><span class="text-gray-500">Subdomains</span><span class="text-gray-300 font-medium">8 found</span></div>
                                    <div class="flex items-center justify-between text-[11px]"><span class="text-gray-500">Blacklist Status</span><span class="text-green-400 font-medium">Clean</span></div>
                                    <div class="flex items-center justify-between text-[11px]"><span class="text-gray-500">WHOIS Expiry</span><span class="text-gray-300 font-medium">Mar 2027</span></div>
                                </div>
                                <div class="mt-4 pt-3 border-t border-white/5">
                                    <div class="text-[9px] text-gray-500 uppercase tracking-wider mb-2">DNS Response (ms)</div>
                                    <div class="h-8 flex items-end gap-1">
                                        <div class="flex-1 bg-orange-500/30 rounded-sm h-[40%]"></div>
                                        <div class="flex-1 bg-orange-500/30 rounded-sm h-[35%]"></div>
                                        <div class="flex-1 bg-orange-500/30 rounded-sm h-[45%]"></div>
                                        <div class="flex-1 bg-orange-500/30 rounded-sm h-[30%]"></div>
                                        <div class="flex-1 bg-orange-500 rounded-sm h-[25%] shadow-[0_0_8px_rgba(249,115,22,0.3)]"></div>
                                        <div class="flex-1 bg-orange-500/30 rounded-sm h-[38%]"></div>
                                        <div class="flex-1 bg-orange-500/30 rounded-sm h-[32%]"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                    <div class="flex items-center gap-2 mb-6">
                        <span class="px-3 py-1 rounded-md text-[10px] font-semibold bg-orange-50 text-orange-600 border border-orange-200 uppercase tracking-wide">Domain Intelligence</span>
                    </div>
                    <h2 class="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">Complete domain health at a glance</h2>
                    <p class="text-gray-600 mb-8 leading-relaxed">Go beyond uptime. Monitor your SSL certificates, DNS records, domain reputation, and WHOIS data — all from one dashboard, free on every plan.</p>
                    <ul class="space-y-4 mb-8">
                        <li class="flex items-start gap-3 text-sm text-gray-600">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-orange-500 mt-0.5 shrink-0"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                            SSL expiry alerts and certificate chain validation
                        </li>
                        <li class="flex items-start gap-3 text-sm text-gray-600">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-orange-500 mt-0.5 shrink-0"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                            Email DNS compliance — SPF, DKIM, and DMARC checks
                        </li>
                        <li class="flex items-start gap-3 text-sm text-gray-600">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-orange-500 mt-0.5 shrink-0"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                            Subdomain discovery and blacklist monitoring
                        </li>
                    </ul>
                    <a href="/tools/domain-health" class="inline-flex items-center gap-2 text-sm font-semibold text-orange-500 hover:text-orange-600 transition-colors">
                        Explore domain tools
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14m-7-7l7 7-7 7"></path></svg>
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- Dashboard Preview -->
    <section class="pt-12 pb-12 relative reveal-on-scroll">
        <div class="max-w-7xl mx-auto px-6">
            <div class="text-center mb-12">
                <h2 class="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">A dashboard that stays out of your way</h2>
                <p class="text-gray-600 max-w-xl mx-auto leading-relaxed">Clean, fast, and focused. Everything you need to know at a glance — nothing you don't.</p>
            </div>
            <div class="relative group" role="img" aria-label="Dashboard preview showing monitors with uptime statistics">
                <div class="absolute -inset-1 bg-gradient-to-b from-orange-500/10 via-orange-500/5 to-transparent rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity"></div>
                <div aria-hidden="true" class="relative bg-gray-900 border border-gray-700 rounded-xl overflow-hidden shadow-2xl">
                    <div class="flex items-center gap-2 px-4 py-3 border-b border-gray-700/50 bg-gray-800/50">
                        <div class="flex items-center gap-1.5">
                            <div class="w-3 h-3 rounded-full bg-red-500/60"></div>
                            <div class="w-3 h-3 rounded-full bg-yellow-500/60"></div>
                            <div class="w-3 h-3 rounded-full bg-green-500/60"></div>
                        </div>
                        <div class="flex-1 flex justify-center">
                            <div class="flex items-center gap-2 px-3 py-1 bg-gray-800 rounded-md border border-gray-700">
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-600"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                                <span class="text-[10px] text-gray-500 font-mono">app.rapidcheck.io/dashboard</span>
                            </div>
                        </div>
                    </div>
                    <div class="flex">
                        <div class="w-48 border-r border-gray-700/50 bg-gray-900 p-4 hidden md:block">
                            <div class="flex items-center gap-2 mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M20 12a8 8 0 1 1-3.2-6.4" stroke="#f97316" stroke-width="2" stroke-linecap="round"/><path d="M12 16V5" stroke="white" stroke-width="2" stroke-linecap="round"/><path d="M8.5 8.5L12 5l3.5 3.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="18.4" cy="7.2" r="1.5" fill="#f97316"/></svg>
                                <span class="text-xs font-semibold text-white">RapidCheck</span>
                            </div>
                            <div class="space-y-1">
                                <div class="flex items-center gap-2 px-2 py-1.5 rounded-md bg-orange-500/10 border border-orange-500/20"><span class="text-[11px] text-orange-300 font-medium">Dashboard</span></div>
                                <div class="flex items-center gap-2 px-2 py-1.5 rounded-md"><span class="text-[11px] text-gray-500">Monitors</span><span class="ml-auto text-[9px] text-gray-600 bg-gray-800 px-1.5 rounded">12</span></div>
                                <div class="flex items-center gap-2 px-2 py-1.5 rounded-md"><span class="text-[11px] text-gray-500">Incidents</span></div>
                                <div class="flex items-center gap-2 px-2 py-1.5 rounded-md"><span class="text-[11px] text-gray-500">Domains</span></div>
                                <div class="flex items-center gap-2 px-2 py-1.5 rounded-md"><span class="text-[11px] text-gray-500">Status Pages</span></div>
                                <div class="flex items-center gap-2 px-2 py-1.5 rounded-md"><span class="text-[11px] text-gray-500">Alerts</span></div>
                            </div>
                        </div>
                        <div class="flex-1 p-6 bg-gray-950/50">
                            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                                <div class="bg-gray-800/50 border border-gray-700/50 rounded-lg p-3">
                                    <div class="text-[10px] text-gray-500 uppercase tracking-wider mb-1">Monitors</div>
                                    <div class="text-lg font-semibold text-white">12</div>
                                    <div class="text-[10px] text-green-400">all operational</div>
                                </div>
                                <div class="bg-gray-800/50 border border-gray-700/50 rounded-lg p-3">
                                    <div class="text-[10px] text-gray-500 uppercase tracking-wider mb-1">Avg Response</div>
                                    <div class="text-lg font-semibold text-white">48ms</div>
                                    <div class="text-[10px] text-green-400">-12ms vs last week</div>
                                </div>
                                <div class="bg-gray-800/50 border border-gray-700/50 rounded-lg p-3">
                                    <div class="text-[10px] text-gray-500 uppercase tracking-wider mb-1">Uptime (30d)</div>
                                    <div class="text-lg font-semibold text-white">99.98%</div>
                                    <div class="text-[10px] text-gray-500">2 incidents</div>
                                </div>
                                <div class="bg-gray-800/50 border border-gray-700/50 rounded-lg p-3">
                                    <div class="text-[10px] text-gray-500 uppercase tracking-wider mb-1">Domain Health</div>
                                    <div class="text-lg font-semibold text-orange-400">A+</div>
                                    <div class="text-[10px] text-green-400">all checks pass</div>
                                </div>
                            </div>
                            <div class="bg-gray-800/30 border border-gray-700/50 rounded-lg overflow-hidden">
                                <div class="flex items-center justify-between px-4 py-2.5 border-b border-gray-700/50">
                                    <span class="text-[11px] font-semibold text-gray-300 uppercase tracking-wider">Monitors</span>
                                    <span class="text-[10px] text-gray-600">Last 24h</span>
                                </div>
                                <div class="grid grid-cols-[1fr_auto_auto] sm:grid-cols-[180px_1fr_40px_48px] items-center gap-4 px-4 py-3 border-b border-gray-700/20 hover:bg-gray-800/30 transition-colors">
                                    <div class="flex items-center gap-3 min-w-0">
                                        <div class="w-2 h-2 shrink-0 rounded-full bg-green-500 shadow-[0_0_6px_rgba(34,197,94,0.5)]"></div>
                                        <div class="min-w-0"><div class="text-[11px] text-gray-200 font-medium truncate">api.rapidcheck.io</div><div class="text-[9px] text-gray-600">HTTPS · 30s · 3 regions</div></div>
                                    </div>
                                    <div class="hidden sm:flex items-center gap-[2px]"><div class="flex-1 h-3 rounded-sm bg-green-500/70"></div><div class="flex-1 h-[11px] rounded-sm bg-green-500/60"></div><div class="flex-1 h-3 rounded-sm bg-green-500/70"></div><div class="flex-1 h-3 rounded-sm bg-green-500/75"></div><div class="flex-1 h-[11px] rounded-sm bg-green-500/65"></div><div class="flex-1 h-3 rounded-sm bg-green-500/70"></div><div class="flex-1 h-3 rounded-sm bg-green-500/70"></div><div class="flex-1 h-[13px] rounded-sm bg-green-500/75"></div></div>
                                    <span class="text-[10px] text-gray-500 font-mono text-right">32ms</span>
                                    <span class="text-[10px] text-green-400 font-medium text-right w-12">99.99%</span>
                                </div>
                                <div class="grid grid-cols-[1fr_auto_auto] sm:grid-cols-[180px_1fr_40px_48px] items-center gap-4 px-4 py-3 border-b border-gray-700/20 hover:bg-gray-800/30 transition-colors">
                                    <div class="flex items-center gap-3 min-w-0">
                                        <div class="w-2 h-2 shrink-0 rounded-full bg-green-500 shadow-[0_0_6px_rgba(34,197,94,0.5)]"></div>
                                        <div class="min-w-0"><div class="text-[11px] text-gray-200 font-medium truncate">app.rapidcheck.io</div><div class="text-[9px] text-gray-600">HTTPS · 30s · 3 regions</div></div>
                                    </div>
                                    <div class="hidden sm:flex items-center gap-[2px]"><div class="flex-1 h-3 rounded-sm bg-green-500/70"></div><div class="flex-1 h-3 rounded-sm bg-green-500/70"></div><div class="flex-1 h-3 rounded-sm bg-green-500/70"></div><div class="flex-1 h-3 rounded-sm bg-green-500/70"></div><div class="flex-1 h-3 rounded-sm bg-green-500/70"></div><div class="flex-1 h-3 rounded-sm bg-amber-500/70"></div><div class="flex-1 h-3 rounded-sm bg-green-500/70"></div><div class="flex-1 h-3 rounded-sm bg-green-500/70"></div></div>
                                    <span class="text-[10px] text-gray-500 font-mono text-right">87ms</span>
                                    <span class="text-[10px] text-green-400 font-medium text-right w-12">99.94%</span>
                                </div>
                                <div class="grid grid-cols-[1fr_auto_auto] sm:grid-cols-[180px_1fr_40px_48px] items-center gap-4 px-4 py-3 hover:bg-gray-800/30 transition-colors">
                                    <div class="flex items-center gap-3 min-w-0">
                                        <div class="w-2 h-2 shrink-0 rounded-full bg-green-500 shadow-[0_0_6px_rgba(34,197,94,0.5)]"></div>
                                        <div class="min-w-0"><div class="text-[11px] text-gray-200 font-medium truncate">docs.rapidcheck.io</div><div class="text-[9px] text-gray-600">HTTPS · 3m · 1 region</div></div>
                                    </div>
                                    <div class="hidden sm:flex items-center gap-[2px]"><div class="flex-1 h-3 rounded-sm bg-green-500/70"></div><div class="flex-1 h-3 rounded-sm bg-green-500/75"></div><div class="flex-1 h-[13px] rounded-sm bg-green-500/70"></div><div class="flex-1 h-3 rounded-sm bg-green-500/65"></div><div class="flex-1 h-3 rounded-sm bg-green-500/70"></div><div class="flex-1 h-[11px] rounded-sm bg-green-500/60"></div><div class="flex-1 h-3 rounded-sm bg-green-500/70"></div><div class="flex-1 h-3 rounded-sm bg-green-500/70"></div></div>
                                    <span class="text-[10px] text-gray-500 font-mono text-right">145ms</span>
                                    <span class="text-[10px] text-green-400 font-medium text-right w-12">100%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Why RapidCheck -->
    <section class="py-16 relative reveal-on-scroll bg-gray-50 border-y border-gray-200">
        <div class="max-w-5xl mx-auto px-6">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4 text-center">Why teams switch to RapidCheck</h2>
            <p class="text-gray-600 mb-12 max-w-xl mx-auto text-center leading-relaxed">Monitoring shouldn't cost a fortune or take a week to set up.</p>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div class="bg-white border border-gray-200 rounded-xl p-7 hover:border-orange-300 hover:shadow-lg hover:shadow-orange-500/5 transition-all duration-300">
                    <div class="text-3xl font-bold text-orange-500 mb-2">$2/mo</div>
                    <h3 class="text-base font-semibold text-gray-900 mb-2">Per monitor, flat rate</h3>
                    <p class="text-sm text-gray-600">No seat-based pricing, no tier gates. 10 monitors = $20/mo. Competitors charge $20-50/mo for comparable plans.</p>
                </div>
                <div class="bg-white border border-gray-200 rounded-xl p-7 hover:border-orange-300 hover:shadow-lg hover:shadow-orange-500/5 transition-all duration-300">
                    <div class="text-3xl font-bold text-orange-500 mb-2">330+</div>
                    <h3 class="text-base font-semibold text-gray-900 mb-2">Edge locations, not 10</h3>
                    <p class="text-sm text-gray-600">Most competitors check from 10-20 data centers. We run on Cloudflare's entire edge network for truly global coverage.</p>
                </div>
                <div class="bg-white border border-gray-200 rounded-xl p-7 hover:border-orange-300 hover:shadow-lg hover:shadow-orange-500/5 transition-all duration-300">
                    <div class="text-3xl font-bold text-orange-500 mb-2">Free</div>
                    <h3 class="text-base font-semibold text-gray-900 mb-2">Domain intelligence included</h3>
                    <p class="text-sm text-gray-600">SSL, DNS, WHOIS, and blacklist monitoring on every plan. Others charge extra or don't offer it at all.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Use Cases -->
    <section class="py-16 relative reveal-on-scroll">
        <div class="max-w-7xl mx-auto px-6 text-center">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">Built for teams who ship</h2>
            <p class="text-gray-600 mb-12 max-w-xl mx-auto leading-relaxed">Whether you're a solo founder or a 100-person engineering team, RapidCheck scales with you.</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                <div class="bg-white border border-gray-200 rounded-xl p-6 text-center hover:border-orange-300 hover:shadow-lg hover:shadow-orange-500/5 transition-all duration-300">
                    <div class="w-12 h-12 mx-auto mb-4 rounded-xl bg-orange-50 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-orange-500"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>
                    </div>
                    <h3 class="text-base font-semibold text-gray-900 mb-2">SaaS Teams</h3>
                    <p class="text-xs text-gray-600">Monitor APIs, dashboards, and customer-facing services around the clock.</p>
                </div>
                <div class="bg-white border border-gray-200 rounded-xl p-6 text-center hover:border-orange-300 hover:shadow-lg hover:shadow-orange-500/5 transition-all duration-300">
                    <div class="w-12 h-12 mx-auto mb-4 rounded-xl bg-orange-50 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-orange-500"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>
                    </div>
                    <h3 class="text-base font-semibold text-gray-900 mb-2">DevOps & SRE</h3>
                    <p class="text-xs text-gray-600">On-call scheduling, escalation policies, and incident management in one place.</p>
                </div>
                <div class="bg-white border border-gray-200 rounded-xl p-6 text-center hover:border-orange-300 hover:shadow-lg hover:shadow-orange-500/5 transition-all duration-300">
                    <div class="w-12 h-12 mx-auto mb-4 rounded-xl bg-orange-50 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-orange-500"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                    </div>
                    <h3 class="text-base font-semibold text-gray-900 mb-2">Agencies</h3>
                    <p class="text-xs text-gray-600">Monitor all client sites from one workspace. Branded status pages per client.</p>
                </div>
                <div class="bg-white border border-gray-200 rounded-xl p-6 text-center hover:border-orange-300 hover:shadow-lg hover:shadow-orange-500/5 transition-all duration-300">
                    <div class="w-12 h-12 mx-auto mb-4 rounded-xl bg-orange-50 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-orange-500"><path d="M12 20V10"></path><path d="M18 20V4"></path><path d="M6 20v-4"></path></svg>
                    </div>
                    <h3 class="text-base font-semibold text-gray-900 mb-2">Solo Developers</h3>
                    <p class="text-xs text-gray-600">3 free monitors forever. Know your side project is up without paying a cent.</p>
                </div>
            </div>
            <div class="mt-12">
                <button onclick="alert('Registration coming soon')" class="inline-flex items-center gap-2 text-base font-semibold bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-400 transition-all cursor-pointer border-none shadow-lg shadow-orange-500/20">
                    Start monitoring free
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14m-7-7l7 7-7 7"></path></svg>
                </button>
            </div>
        </div>
    </section>

    <!-- FAQ -->
    <section class="py-16 relative reveal-on-scroll bg-gray-50 border-t border-gray-200">
        <div class="max-w-3xl mx-auto px-6">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-12 text-center">Frequently asked questions</h2>
            <div class="space-y-3">
                <details class="group border border-gray-200 rounded-xl bg-white overflow-hidden">
                    <summary class="flex items-center justify-between gap-4 cursor-pointer px-4 sm:px-6 py-4 text-sm font-medium text-gray-900 hover:text-orange-500 transition-colors list-none">
                        What happens when my free trial ends?
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-400 group-open:rotate-180 transition-transform shrink-0"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </summary>
                    <div class="px-4 sm:px-6 pb-4 text-sm text-gray-600 leading-relaxed">Your workspace downgrades to the free plan. Monitors beyond the free limit (3) are paused — not deleted. Upgrade anytime to resume them instantly.</div>
                </details>
                <details class="group border border-gray-200 rounded-xl bg-white overflow-hidden">
                    <summary class="flex items-center justify-between gap-4 cursor-pointer px-4 sm:px-6 py-4 text-sm font-medium text-gray-900 hover:text-orange-500 transition-colors list-none">
                        How do you prevent false positives?
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-400 group-open:rotate-180 transition-transform shrink-0"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </summary>
                    <div class="px-4 sm:px-6 pb-4 text-sm text-gray-600 leading-relaxed">Every check runs from 3 edge regions simultaneously. We require 2-of-3 to confirm failure across 2 consecutive checks before triggering an alert. This eliminates transient network blips.</div>
                </details>
                <details class="group border border-gray-200 rounded-xl bg-white overflow-hidden">
                    <summary class="flex items-center justify-between gap-4 cursor-pointer px-4 sm:px-6 py-4 text-sm font-medium text-gray-900 hover:text-orange-500 transition-colors list-none">
                        Is domain intelligence really free?
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-400 group-open:rotate-180 transition-transform shrink-0"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </summary>
                    <div class="px-4 sm:px-6 pb-4 text-sm text-gray-600 leading-relaxed">Yes. SSL monitoring, DNS checks, WHOIS tracking, blacklist scanning, and the domain health score are included on every plan — including free. No competitor bundles all of this at zero cost.</div>
                </details>
                <details class="group border border-gray-200 rounded-xl bg-white overflow-hidden">
                    <summary class="flex items-center justify-between gap-4 cursor-pointer px-4 sm:px-6 py-4 text-sm font-medium text-gray-900 hover:text-orange-500 transition-colors list-none">
                        Where are checks run from?
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-400 group-open:rotate-180 transition-transform shrink-0"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </summary>
                    <div class="px-4 sm:px-6 pb-4 text-sm text-gray-600 leading-relaxed">Checks run from Cloudflare's global edge network — 330+ locations in 100+ countries. Free plans use 3 regions; paid plans can use all of them.</div>
                </details>
                <details class="group border border-gray-200 rounded-xl bg-white overflow-hidden">
                    <summary class="flex items-center justify-between gap-4 cursor-pointer px-4 sm:px-6 py-4 text-sm font-medium text-gray-900 hover:text-orange-500 transition-colors list-none">
                        Is my data secure?
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-400 group-open:rotate-180 transition-transform shrink-0"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </summary>
                    <div class="px-4 sm:px-6 pb-4 text-sm text-gray-600 leading-relaxed">Enterprise-grade security. AES-256-GCM field-level encryption, automatic PII redaction, GDPR-compliant data handling, and full audit trails. Your monitoring data stays private.</div>
                </details>
            </div>
        </div>
    </section>

    <!-- Final CTA -->
    <section class="py-16 text-center relative reveal-on-scroll">
        <div class="max-w-3xl mx-auto px-6">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">Ready to stop guessing?</h2>
            <p class="text-gray-600 mb-8 leading-relaxed text-lg">Start with 3 free monitors. No credit card required.</p>
            <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button onclick="alert('Registration coming soon')" class="inline-flex items-center gap-2 text-base font-semibold bg-orange-500 text-white px-8 py-3.5 rounded-lg hover:bg-orange-400 transition-all cursor-pointer border-none shadow-lg shadow-orange-500/20">
                    Start for free
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14m-7-7l7 7-7 7"></path></svg>
                </button>
                <a href="/pricing" class="inline-flex items-center gap-2 text-base font-medium text-gray-700 px-8 py-3.5 rounded-lg border border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-all no-underline">
                    See pricing
                </a>
            </div>
        </div>
    </section>
    </main>`;
  };
})();
