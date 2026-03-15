(function() {
  window.__pages = window.__pages || {};
  window.__pages['/tools'] = function() {
    var tools = [
      {
        title: 'Domain Health Checker',
        description: 'Check your domain\'s overall health score',
        href: '#/tools/domain-health',
        icon: '<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>'
      },
      {
        title: 'SSL Certificate Checker',
        description: 'Verify SSL certificate status and expiry',
        href: '#/tools/ssl-checker',
        icon: '<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>'
      },
      {
        title: 'DNS Lookup',
        description: 'Look up DNS records for any domain',
        href: '#/tools/dns-lookup',
        icon: '<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"/></svg>'
      },
      {
        title: 'Response Time Test',
        description: 'Test website response time',
        href: '#/tools/response-time-test',
        icon: '<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>'
      },
      {
        title: 'SLA Uptime Calculator',
        description: 'Calculate allowed downtime for any SLA',
        href: '#/tools/uptime-calculator',
        icon: '<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>'
      },
      {
        title: 'HTTP Status Codes',
        description: 'Reference for all HTTP status codes',
        href: '#/tools/http-status-codes',
        icon: '<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"/></svg>'
      }
    ];

    var cardsHtml = tools.map(function(tool) {
      return '<a href="' + tool.href + '" class="block border border-[#F9A825]/15 rounded-lg p-6 hover:border-[#F9A825]/50 transition-colors group">' +
        '<div class="text-[#F9A825] mb-4">' + tool.icon + '</div>' +
        '<h3 class="text-base font-semibold text-[#1B1B4B] mb-2">' + tool.title + '</h3>' +
        '<p class="text-sm text-[#4a4a6a] leading-relaxed mb-4">' + tool.description + '</p>' +
        '<span class="inline-flex items-center gap-1 text-sm text-[#F9A825] group-hover:text-[#FFB830] transition-colors">' +
          'Try it' +
          '<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>' +
        '</span>' +
      '</a>';
    }).join('');

    return '<div class="mx-auto max-w-4xl px-4 sm:px-6 py-12 sm:py-16 md:py-20">' +
      '<h1 class="text-2xl sm:text-3xl font-bold text-[#1B1B4B] mb-2">Free Tools</h1>' +
      '<p class="text-sm text-[#6a6a8a] mb-10">Useful tools for developers and site owners — no account required.</p>' +

      '<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">' +
        cardsHtml +
      '</div>' +
    '</div>';
  };
})();
