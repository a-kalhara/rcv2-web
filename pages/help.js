(function() {
  window.__pages = window.__pages || {};
  window.__pages['/help'] = function() {
    var categories = [
      {
        title: 'Getting Started',
        icon: '<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>',
        articles: ['Creating your account', 'Adding your first monitor', 'Understanding the dashboard']
      },
      {
        title: 'Monitors',
        icon: '<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>',
        articles: ['HTTP monitors', 'Browser checks', 'Heartbeat monitoring', 'Multi-region verification']
      },
      {
        title: 'Alerts & Notifications',
        icon: '<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/></svg>',
        articles: ['Email alerts', 'Slack integration', 'Setting up on-call', 'Escalation policies']
      },
      {
        title: 'Domain Intelligence',
        icon: '<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/></svg>',
        articles: ['SSL monitoring', 'DNS checks', 'WHOIS monitoring', 'Domain health score']
      },
      {
        title: 'Status Pages',
        icon: '<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>',
        articles: ['Creating a status page', 'Custom domains', 'Subscriber notifications']
      },
      {
        title: 'Billing & Account',
        icon: '<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/></svg>',
        articles: ['Pricing explained', 'Managing your subscription', 'Team management']
      },
      {
        title: 'API & Integrations',
        icon: '<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>',
        articles: ['REST API overview', 'API authentication', 'Webhooks']
      },
      {
        title: 'Troubleshooting',
        icon: '<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>',
        articles: ['False positive alerts', 'Monitor not checking', 'Notification delays']
      }
    ];

    var cardsHtml = categories.map(function(cat) {
      var articlesHtml = cat.articles.map(function(article) {
        return '<li><a href="/help" class="text-sm text-zinc-300 hover:text-emerald-500 transition-colors">' + article + '</a></li>';
      }).join('');

      return '<div class="border border-zinc-800 rounded-lg p-5 hover:border-zinc-700 transition-colors">' +
        '<div class="flex items-center gap-3 mb-4">' +
          '<div class="text-emerald-500">' + cat.icon + '</div>' +
          '<h3 class="text-sm font-semibold text-white">' + cat.title + '</h3>' +
        '</div>' +
        '<ul class="space-y-2">' + articlesHtml + '</ul>' +
      '</div>';
    }).join('');

    return '<div class="mx-auto max-w-4xl px-6 py-20">' +
      '<h1 class="text-3xl font-bold text-white mb-2">Help Center</h1>' +
      '<p class="text-sm text-zinc-500 mb-8">Find answers to common questions</p>' +

      '<div class="mb-10">' +
        '<input type="text" placeholder="Search help articles..." class="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-zinc-300 placeholder-zinc-600 focus:outline-none focus:border-zinc-700">' +
      '</div>' +

      '<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">' +
        cardsHtml +
      '</div>' +

      '<div class="border border-zinc-800 rounded-lg p-8 text-center">' +
        '<h2 class="text-lg font-semibold text-white mb-2">Still need help?</h2>' +
        '<p class="text-sm text-zinc-300 mb-4">Our support team is here to assist you.</p>' +
        '<a href="mailto:support@rapidcheck.com" class="inline-flex items-center gap-2 text-sm text-emerald-500 hover:text-emerald-400 transition-colors">' +
          'support@rapidcheck.com' +
          '<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>' +
        '</a>' +
      '</div>' +
    '</div>';
  };
})();
