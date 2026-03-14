(function() {
  window.__pages = window.__pages || {};
  window.__pages['/legal/acceptable-use'] = function() {
    return `
      <div class="mx-auto max-w-4xl px-6 py-20">
        <h1 class="text-3xl font-bold text-white mb-2">Acceptable Use Policy</h1>
        <p class="text-sm text-zinc-500 mb-10">Last updated: March 1, 2026</p>

        <div class="prose prose-invert prose-sm max-w-none">

          <h2 class="text-lg font-semibold text-white mt-8 mb-3">Permitted Use</h2>
          <p class="text-sm text-zinc-300 leading-relaxed mb-4">
            RapidCheck is designed for legitimate uptime monitoring and domain intelligence. You may use the Service to:
          </p>
          <p class="text-sm text-zinc-300 leading-relaxed mb-4">
            <strong class="text-zinc-300">Monitor your own services:</strong> Websites, APIs, servers, and applications that you own or operate.<br>
            <strong class="text-zinc-300">Authorized third-party monitoring:</strong> Services belonging to others where you have explicit written authorization to perform monitoring checks. You are responsible for obtaining and maintaining such authorization.
          </p>

          <h2 class="text-lg font-semibold text-white mt-8 mb-3">Prohibited Activities</h2>
          <p class="text-sm text-zinc-300 leading-relaxed mb-4">
            The following activities are strictly prohibited and may result in immediate account suspension or termination:
          </p>
          <p class="text-sm text-zinc-300 leading-relaxed mb-4">
            <strong class="text-zinc-300">Unauthorized Monitoring:</strong> Using RapidCheck to monitor websites, services, or infrastructure without the owner's knowledge or consent. This includes competitive intelligence gathering via monitoring endpoints you do not control.
          </p>
          <p class="text-sm text-zinc-300 leading-relaxed mb-4">
            <strong class="text-zinc-300">Abuse of Check Engine:</strong> Configuring monitors in a way that generates excessive or abusive traffic to target endpoints, including using the Service as a means to conduct distributed denial-of-service (DDoS) attacks or load testing against third-party infrastructure.
          </p>
          <p class="text-sm text-zinc-300 leading-relaxed mb-4">
            <strong class="text-zinc-300">Quota Circumvention:</strong> Creating multiple accounts or workspaces to bypass plan limits, including free plan monitor limits, check intervals, or region restrictions.
          </p>
          <p class="text-sm text-zinc-300 leading-relaxed mb-4">
            <strong class="text-zinc-300">Malicious Status Page Content:</strong> Publishing misleading, defamatory, illegal, or harmful content on public status pages hosted by RapidCheck.
          </p>
          <p class="text-sm text-zinc-300 leading-relaxed mb-4">
            <strong class="text-zinc-300">Unauthorized Access Attempts:</strong> Attempting to access other users' data, workspaces, or accounts. Probing, scanning, or testing the vulnerability of the RapidCheck platform without written authorization.
          </p>
          <p class="text-sm text-zinc-300 leading-relaxed mb-4">
            <strong class="text-zinc-300">Automated Abuse:</strong> Using bots, scrapers, or automated tools to interact with the Service in ways not supported by our official API, or making API requests that exceed published rate limits.
          </p>

          <h2 class="text-lg font-semibold text-white mt-8 mb-3">Enforcement</h2>
          <p class="text-sm text-zinc-300 leading-relaxed mb-4">
            We take a graduated approach to enforcement:
          </p>
          <p class="text-sm text-zinc-300 leading-relaxed mb-4">
            <strong class="text-zinc-300">Warning:</strong> For first-time or minor violations, we will notify you and request that you cease the prohibited activity within a reasonable timeframe.<br>
            <strong class="text-zinc-300">Suspension:</strong> For repeated or serious violations, your account may be temporarily suspended while we investigate.<br>
            <strong class="text-zinc-300">Termination:</strong> For severe or ongoing violations, your account will be permanently terminated and you will be prohibited from creating new accounts.
          </p>
          <p class="text-sm text-zinc-300 leading-relaxed mb-4">
            We reserve the right to skip directly to suspension or termination for severe violations that pose an immediate risk to the Service, its users, or third parties.
          </p>

          <h2 class="text-lg font-semibold text-white mt-8 mb-3">Reporting</h2>
          <p class="text-sm text-zinc-300 leading-relaxed mb-4">
            If you believe someone is violating this policy, or if you are the target of abusive monitoring originating from RapidCheck, please report it to
            <a href="mailto:abuse@rapidcheck.com" class="text-emerald-500 hover:text-emerald-400">abuse@rapidcheck.com</a>.
            We investigate all reports and respond within 48 hours.
          </p>

        </div>
      </div>
    `;
  };
})();
