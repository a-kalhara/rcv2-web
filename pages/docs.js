(function() {
  window.__pages = window.__pages || {};
  window.__pages['/docs'] = function() {
    var sections = [
      {
        title: 'Getting Started',
        description: 'Learn how to set up your account, create your first monitor, and navigate the dashboard. Step-by-step guides to get you monitoring in minutes.',
        icon: '<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>'
      },
      {
        title: 'API Reference',
        description: 'Complete REST API documentation with request/response examples for all endpoints. Authenticate with API keys and integrate RapidCheck into your workflow.',
        icon: '<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>'
      },
      {
        title: 'Integrations',
        description: 'Connect RapidCheck with your existing tools. Setup guides for Slack, Discord, and custom webhook integrations to route alerts where your team works.',
        icon: '<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"/></svg>'
      },
      {
        title: 'SDKs & Libraries',
        description: 'Official client libraries for Node.js, Python, and Go. Programmatically manage monitors, query check results, and build custom integrations.',
        icon: '<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>'
      }
    ];

    var cardsHtml = sections.map(function(section) {
      return '<div class="border border-zinc-800 rounded-lg p-6 hover:border-zinc-700 transition-colors">' +
        '<div class="flex items-start justify-between mb-4">' +
          '<div class="text-emerald-500">' + section.icon + '</div>' +
          '<span class="text-xs font-medium text-zinc-600 bg-zinc-900 border border-zinc-800 rounded-full px-3 py-1">Coming soon</span>' +
        '</div>' +
        '<h3 class="text-base font-semibold text-white mb-2">' + section.title + '</h3>' +
        '<p class="text-sm text-zinc-300 leading-relaxed">' + section.description + '</p>' +
      '</div>';
    }).join('');

    return '<div class="mx-auto max-w-4xl px-6 py-20">' +
      '<h1 class="text-3xl font-bold text-white mb-2">Documentation</h1>' +
      '<p class="text-sm text-zinc-500 mb-10">Everything you need to integrate and use RapidCheck</p>' +

      '<div class="grid grid-cols-1 md:grid-cols-2 gap-4">' +
        cardsHtml +
      '</div>' +
    '</div>';
  };
})();
