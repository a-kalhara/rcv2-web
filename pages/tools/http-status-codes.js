(function() {
  window.__pages = window.__pages || {};

  window.__pages['/tools/http-status-codes'] = function() {
    return `
      <div class="mx-auto max-w-4xl px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1B1B4B] mb-3">HTTP Status Codes Reference</h1>
        <p class="text-[#4a4a6a] text-base sm:text-lg mb-10">Quick reference for all common HTTP status codes.</p>

        <div class="mb-8">
          <label for="hsc-search" class="sr-only">Search status codes</label>
          <input
            id="hsc-search"
            type="text"
            placeholder="Search by code, name, or description..."
            class="w-full bg-white border border-[#F9A825]/20 rounded-lg px-4 py-3 text-[#1B1B4B] placeholder-[#6a6a8a] focus:outline-none focus:border-[#F9A825] transition-colors"
          />
        </div>

        <div id="hsc-results"></div>

        <div id="hsc-empty" class="hidden text-center py-12">
          <p class="text-[#6a6a8a] text-lg">No matching status codes found.</p>
        </div>

        <div class="mt-12 sm:mt-16 text-center border-t border-[#F9A825]/15 pt-8 sm:pt-12">
          <h2 class="text-xl sm:text-2xl font-bold text-[#1B1B4B] mb-3">Monitor your HTTP responses</h2>
          <p class="text-[#4a4a6a] text-sm sm:text-base mb-6">Get alerted when your endpoints return unexpected status codes.</p>
          <a href="/register" class="inline-block bg-[#F9A825] hover:bg-[#FFB830] text-[#1B1B4B] font-semibold px-6 py-3 rounded-lg transition-colors">Start Free Monitoring</a>
        </div>
      </div>
    `;
  };

  window.__pages['/tools/http-status-codes'].init = function() {
    var searchInput = document.getElementById('hsc-search');
    var resultsContainer = document.getElementById('hsc-results');
    var emptyState = document.getElementById('hsc-empty');

    var codes = [
      { code: 100, name: 'Continue', desc: 'The server has received the request headers and the client should proceed to send the request body.', cat: '1xx' },
      { code: 101, name: 'Switching Protocols', desc: 'The server is switching protocols as requested by the client (e.g., upgrading to WebSocket).', cat: '1xx' },

      { code: 200, name: 'OK', desc: 'The request succeeded. The response body contains the requested resource.', cat: '2xx' },
      { code: 201, name: 'Created', desc: 'The request succeeded and a new resource was created as a result.', cat: '2xx' },
      { code: 202, name: 'Accepted', desc: 'The request has been accepted for processing, but processing has not completed.', cat: '2xx' },
      { code: 204, name: 'No Content', desc: 'The request succeeded but there is no content to send in the response body.', cat: '2xx' },
      { code: 206, name: 'Partial Content', desc: 'The server is delivering only part of the resource due to a range header sent by the client.', cat: '2xx' },

      { code: 301, name: 'Moved Permanently', desc: 'The resource has been permanently moved to a new URL. Search engines will update their links.', cat: '3xx' },
      { code: 302, name: 'Found', desc: 'The resource has been temporarily moved to a different URL. The client should continue using the original URL.', cat: '3xx' },
      { code: 304, name: 'Not Modified', desc: 'The resource has not been modified since the last request. The client can use its cached version.', cat: '3xx' },
      { code: 307, name: 'Temporary Redirect', desc: 'The resource has been temporarily moved. The request method must not change when following the redirect.', cat: '3xx' },
      { code: 308, name: 'Permanent Redirect', desc: 'The resource has been permanently moved. The request method must not change when following the redirect.', cat: '3xx' },

      { code: 400, name: 'Bad Request', desc: 'The server cannot process the request due to malformed syntax or invalid parameters.', cat: '4xx' },
      { code: 401, name: 'Unauthorized', desc: 'Authentication is required. The client must provide valid credentials to access this resource.', cat: '4xx' },
      { code: 403, name: 'Forbidden', desc: 'The server understood the request but refuses to authorize it. Authentication will not help.', cat: '4xx' },
      { code: 404, name: 'Not Found', desc: 'The requested resource could not be found on the server.', cat: '4xx' },
      { code: 405, name: 'Method Not Allowed', desc: 'The request method is not supported for the requested resource (e.g., POST on a read-only endpoint).', cat: '4xx' },
      { code: 408, name: 'Request Timeout', desc: 'The server timed out waiting for the client to finish sending the request.', cat: '4xx' },
      { code: 409, name: 'Conflict', desc: 'The request conflicts with the current state of the server (e.g., duplicate resource creation).', cat: '4xx' },
      { code: 410, name: 'Gone', desc: 'The resource is no longer available and has been permanently removed. Unlike 404, this is intentional.', cat: '4xx' },
      { code: 413, name: 'Payload Too Large', desc: 'The request body exceeds the maximum size the server is willing to process.', cat: '4xx' },
      { code: 422, name: 'Unprocessable Entity', desc: 'The request is well-formed but contains semantic errors that prevent processing.', cat: '4xx' },
      { code: 429, name: 'Too Many Requests', desc: 'The client has sent too many requests in a given time period. Rate limiting is in effect.', cat: '4xx' },

      { code: 500, name: 'Internal Server Error', desc: 'The server encountered an unexpected condition that prevented it from fulfilling the request.', cat: '5xx' },
      { code: 501, name: 'Not Implemented', desc: 'The server does not support the functionality required to fulfill the request.', cat: '5xx' },
      { code: 502, name: 'Bad Gateway', desc: 'The server received an invalid response from an upstream server while acting as a gateway or proxy.', cat: '5xx' },
      { code: 503, name: 'Service Unavailable', desc: 'The server is temporarily unable to handle the request, usually due to maintenance or overload.', cat: '5xx' },
      { code: 504, name: 'Gateway Timeout', desc: 'The server did not receive a timely response from an upstream server while acting as a gateway.', cat: '5xx' }
    ];

    var categoryMeta = {
      '1xx': { label: '1xx Informational', color: 'text-blue-400', border: 'border-blue-400/30', bg: 'bg-blue-400/10', badge: 'bg-blue-500/20 text-blue-400' },
      '2xx': { label: '2xx Success', color: 'text-[#F9A825]', border: 'border-[#F9A825]/30', bg: 'bg-[#F9A825]/10', badge: 'bg-[#F9A825]/20 text-[#F9A825]' },
      '3xx': { label: '3xx Redirection', color: 'text-amber-400', border: 'border-amber-400/30', bg: 'bg-amber-400/10', badge: 'bg-amber-500/20 text-amber-400' },
      '4xx': { label: '4xx Client Error', color: 'text-orange-400', border: 'border-orange-400/30', bg: 'bg-orange-400/10', badge: 'bg-orange-500/20 text-orange-400' },
      '5xx': { label: '5xx Server Error', color: 'text-red-400', border: 'border-red-400/30', bg: 'bg-red-400/10', badge: 'bg-red-500/20 text-red-400' }
    };

    function escapeHtml(str) {
      var div = document.createElement('div');
      div.textContent = str;
      return div.innerHTML;
    }

    function render(filter) {
      var query = (filter || '').toLowerCase().trim();
      var filtered = codes.filter(function(c) {
        if (!query) return true;
        return (
          String(c.code).includes(query) ||
          c.name.toLowerCase().includes(query) ||
          c.desc.toLowerCase().includes(query)
        );
      });

      if (filtered.length === 0) {
        resultsContainer.innerHTML = '';
        emptyState.classList.remove('hidden');
        return;
      }

      emptyState.classList.add('hidden');

      var grouped = {};
      filtered.forEach(function(c) {
        if (!grouped[c.cat]) grouped[c.cat] = [];
        grouped[c.cat].push(c);
      });

      var categories = ['1xx', '2xx', '3xx', '4xx', '5xx'];
      var html = '';

      categories.forEach(function(cat) {
        if (!grouped[cat]) return;
        var meta = categoryMeta[cat];

        html += '<div class="mb-8">';
        html += '<h3 class="text-lg font-semibold ' + meta.color + ' mb-4">' + meta.label + '</h3>';
        html += '<div class="space-y-3">';

        grouped[cat].forEach(function(c) {
          html += '<div class="bg-white border border-[#F9A825]/15 rounded-xl p-5 hover:border-[#F9A825]/30 transition-colors">';
          html += '<div class="flex items-start gap-4">';
          html += '<span class="inline-block text-sm font-mono font-bold px-3 py-1 rounded-lg shrink-0 ' + meta.badge + '">' + c.code + '</span>';
          html += '<div>';
          html += '<p class="text-[#1B1B4B] font-medium">' + escapeHtml(c.name) + '</p>';
          html += '<p class="text-[#4a4a6a] text-sm mt-1">' + escapeHtml(c.desc) + '</p>';
          html += '</div>';
          html += '</div>';
          html += '</div>';
        });

        html += '</div>';
        html += '</div>';
      });

      resultsContainer.innerHTML = html;
    }

    searchInput.addEventListener('input', function() {
      render(searchInput.value);
    });

    render('');
  };
})();
