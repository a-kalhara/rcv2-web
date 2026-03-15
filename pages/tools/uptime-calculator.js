(function() {
  window.__pages = window.__pages || {};

  window.__pages['/tools/uptime-calculator'] = function() {
    return `
      <div class="mx-auto max-w-4xl px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1B1B4B] mb-3">SLA Uptime Calculator</h1>
        <p class="text-[#4a4a6a] text-base sm:text-lg mb-10">Calculate the allowed downtime for any uptime SLA percentage.</p>

        <div class="mb-6">
          <label class="text-[#4a4a6a] text-sm font-medium mb-2 block">Uptime Percentage</label>
          <div class="flex gap-3 items-center">
            <label for="uc-input" class="sr-only">Uptime percentage</label>
            <input
              id="uc-input"
              type="number"
              value="99.9"
              step="0.001"
              min="0"
              max="100"
              class="w-40 bg-white border border-[#F9A825]/20 rounded-lg px-4 py-3 text-[#1B1B4B] text-lg font-mono focus:outline-none focus:border-[#F9A825] transition-colors"
            />
            <span class="text-[#4a4a6a] text-lg">%</span>
          </div>
        </div>

        <div class="flex flex-wrap gap-2 mb-10">
          <button class="uc-preset bg-[#faf8f5] hover:bg-[#F9A825]/10 text-[#4a4a6a] text-sm font-mono px-4 py-2 rounded-lg transition-colors" data-value="99">99%</button>
          <button class="uc-preset bg-[#faf8f5] hover:bg-[#F9A825]/10 text-[#4a4a6a] text-sm font-mono px-4 py-2 rounded-lg transition-colors" data-value="99.5">99.5%</button>
          <button class="uc-preset bg-[#F9A825]/20 text-[#F9A825] text-sm font-mono px-4 py-2 rounded-lg transition-colors border border-[#F9A825]/30" data-value="99.9">99.9%</button>
          <button class="uc-preset bg-[#faf8f5] hover:bg-[#F9A825]/10 text-[#4a4a6a] text-sm font-mono px-4 py-2 rounded-lg transition-colors" data-value="99.95">99.95%</button>
          <button class="uc-preset bg-[#faf8f5] hover:bg-[#F9A825]/10 text-[#4a4a6a] text-sm font-mono px-4 py-2 rounded-lg transition-colors" data-value="99.99">99.99%</button>
          <button class="uc-preset bg-[#faf8f5] hover:bg-[#F9A825]/10 text-[#4a4a6a] text-sm font-mono px-4 py-2 rounded-lg transition-colors" data-value="99.999">99.999%</button>
        </div>

        <h3 class="text-[#1B1B4B] font-semibold text-lg mb-4">Allowed Downtime</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-12" id="uc-results">
          <div class="bg-white border border-[#F9A825]/15 rounded-xl p-6 text-center">
            <p class="text-[#4a4a6a] text-sm mb-2">Daily</p>
            <p class="text-xl font-bold text-[#1B1B4B] font-mono" id="uc-daily"></p>
          </div>
          <div class="bg-white border border-[#F9A825]/15 rounded-xl p-6 text-center">
            <p class="text-[#4a4a6a] text-sm mb-2">Weekly</p>
            <p class="text-xl font-bold text-[#1B1B4B] font-mono" id="uc-weekly"></p>
          </div>
          <div class="bg-white border border-[#F9A825]/15 rounded-xl p-6 text-center">
            <p class="text-[#4a4a6a] text-sm mb-2">Monthly</p>
            <p class="text-xl font-bold text-[#1B1B4B] font-mono" id="uc-monthly"></p>
          </div>
          <div class="bg-white border border-[#F9A825]/15 rounded-xl p-6 text-center">
            <p class="text-[#4a4a6a] text-sm mb-2">Yearly</p>
            <p class="text-xl font-bold text-[#1B1B4B] font-mono" id="uc-yearly"></p>
          </div>
        </div>

        <h3 class="text-[#1B1B4B] font-semibold text-lg mb-4">SLA Comparison</h3>
        <div class="bg-white border border-[#F9A825]/15 rounded-xl overflow-hidden mb-6">
          <div class="overflow-x-auto">
            <table class="w-full text-left">
              <thead>
                <tr class="border-b border-[#F9A825]/15">
                  <th class="px-6 py-3 text-[#4a4a6a] text-sm font-medium">Uptime</th>
                  <th class="px-6 py-3 text-[#4a4a6a] text-sm font-medium">Daily</th>
                  <th class="px-6 py-3 text-[#4a4a6a] text-sm font-medium">Monthly</th>
                  <th class="px-6 py-3 text-[#4a4a6a] text-sm font-medium">Yearly</th>
                </tr>
              </thead>
              <tbody id="uc-comparison-body" class="divide-y divide-[#F9A825]/15">
              </tbody>
            </table>
          </div>
        </div>

        <div class="mt-12 sm:mt-16 text-center border-t border-[#F9A825]/15 pt-8 sm:pt-12">
          <h2 class="text-xl sm:text-2xl font-bold text-[#1B1B4B] mb-3">Hit your SLA targets with confidence</h2>
          <p class="text-[#4a4a6a] text-sm sm:text-base mb-6">RapidCheck monitors uptime from 330+ locations and alerts you the moment something goes wrong.</p>
          <a href="/register" class="inline-block bg-[#F9A825] hover:bg-[#FFB830] text-[#1B1B4B] font-semibold px-6 py-3 rounded-lg transition-colors">Start Free Monitoring</a>
        </div>
      </div>
    `;
  };

  window.__pages['/tools/uptime-calculator'].init = function() {
    var input = document.getElementById('uc-input');
    var presets = document.querySelectorAll('.uc-preset');
    var dailyEl = document.getElementById('uc-daily');
    var weeklyEl = document.getElementById('uc-weekly');
    var monthlyEl = document.getElementById('uc-monthly');
    var yearlyEl = document.getElementById('uc-yearly');
    var comparisonBody = document.getElementById('uc-comparison-body');

    var slaPresets = [99, 99.5, 99.9, 99.95, 99.99, 99.999];

    function formatDuration(totalMinutes) {
      if (totalMinutes < 0.01) return '< 1s';

      var totalSeconds = Math.round(totalMinutes * 60);

      var days = Math.floor(totalSeconds / 86400);
      var hours = Math.floor((totalSeconds % 86400) / 3600);
      var minutes = Math.floor((totalSeconds % 3600) / 60);
      var seconds = totalSeconds % 60;

      var parts = [];
      if (days > 0) parts.push(days + 'd');
      if (hours > 0) parts.push(hours + 'h');
      if (minutes > 0) parts.push(minutes + 'm');
      if (seconds > 0 || parts.length === 0) parts.push(seconds + 's');

      return parts.join(' ');
    }

    function calcDowntime(uptimePct, periodMinutes) {
      return ((100 - uptimePct) / 100) * periodMinutes;
    }

    function updatePresetButtons(value) {
      presets.forEach(function(btn) {
        var v = parseFloat(btn.getAttribute('data-value'));
        if (v === value) {
          btn.className = 'uc-preset bg-[#F9A825]/20 text-[#F9A825] text-sm font-mono px-4 py-2 rounded-lg transition-colors border border-[#F9A825]/30';
        } else {
          btn.className = 'uc-preset bg-[#faf8f5] hover:bg-[#F9A825]/10 text-[#4a4a6a] text-sm font-mono px-4 py-2 rounded-lg transition-colors';
        }
      });
    }

    function calculate() {
      var uptime = parseFloat(input.value);
      if (isNaN(uptime) || uptime < 0 || uptime > 100) return;

      var daily = calcDowntime(uptime, 1440);
      var weekly = calcDowntime(uptime, 10080);
      var monthly = calcDowntime(uptime, 43200);
      var yearly = calcDowntime(uptime, 525600);

      dailyEl.textContent = formatDuration(daily);
      weeklyEl.textContent = formatDuration(weekly);
      monthlyEl.textContent = formatDuration(monthly);
      yearlyEl.textContent = formatDuration(yearly);

      updatePresetButtons(uptime);
      renderComparison(uptime);
    }

    function renderComparison(currentUptime) {
      var html = '';
      slaPresets.forEach(function(pct) {
        var daily = calcDowntime(pct, 1440);
        var monthly = calcDowntime(pct, 43200);
        var yearly = calcDowntime(pct, 525600);
        var isActive = pct === currentUptime;

        var rowClass = isActive
          ? 'bg-[#F9A825]/10'
          : '';
        var textClass = isActive ? 'text-[#F9A825]' : 'text-[#4a4a6a]';

        html += '<tr class="' + rowClass + '">' +
          '<td class="px-6 py-3 font-mono text-sm ' + textClass + '">' + pct + '%' + (isActive ? ' &#9664;' : '') + '</td>' +
          '<td class="px-6 py-3 font-mono text-sm ' + textClass + '">' + formatDuration(daily) + '</td>' +
          '<td class="px-6 py-3 font-mono text-sm ' + textClass + '">' + formatDuration(monthly) + '</td>' +
          '<td class="px-6 py-3 font-mono text-sm ' + textClass + '">' + formatDuration(yearly) + '</td>' +
          '</tr>';
      });
      comparisonBody.innerHTML = html;
    }

    presets.forEach(function(btn) {
      btn.addEventListener('click', function() {
        input.value = btn.getAttribute('data-value');
        calculate();
      });
    });

    input.addEventListener('input', calculate);

    calculate();
  };
})();
