(function() {
  window.__pages = window.__pages || {};
  window.__pages['/legal/cookies'] = function() {
    return `
      <div class="mx-auto max-w-4xl px-6 py-20">
        <h1 class="text-3xl font-bold text-white mb-2">Cookie Policy</h1>
        <p class="text-sm text-zinc-500 mb-10">Last updated: March 1, 2026</p>

        <div class="prose prose-invert prose-sm max-w-none">

          <h2 class="text-lg font-semibold text-white mt-8 mb-3">What Are Cookies</h2>
          <p class="text-sm text-zinc-400 leading-relaxed mb-4">
            Cookies are small text files stored on your device by your web browser when you visit a website. They are widely used to make websites work efficiently, provide a better user experience, and give site owners useful information. Cookies can be "session" cookies (deleted when you close your browser) or "persistent" cookies (remaining until they expire or you delete them).
          </p>

          <h2 class="text-lg font-semibold text-white mt-8 mb-3">Essential Cookies</h2>
          <p class="text-sm text-zinc-400 leading-relaxed mb-4">
            These cookies are strictly necessary for the Service to function and cannot be disabled. They include:
          </p>
          <p class="text-sm text-zinc-400 leading-relaxed mb-4">
            <strong class="text-zinc-300">Session Cookies:</strong> Used to maintain your authenticated session after you log in. These are encrypted and expire when your session ends or after 30 minutes of inactivity.
          </p>
          <p class="text-sm text-zinc-400 leading-relaxed mb-4">
            <strong class="text-zinc-300">CSRF Protection:</strong> A token used to prevent cross-site request forgery attacks. This cookie is essential for the security of form submissions and API requests.
          </p>
          <p class="text-sm text-zinc-400 leading-relaxed mb-4">
            <strong class="text-zinc-300">Workspace Preference:</strong> Stores your currently selected workspace so the dashboard loads the correct context on return visits.
          </p>

          <h2 class="text-lg font-semibold text-white mt-8 mb-3">Analytics Cookies</h2>
          <p class="text-sm text-zinc-400 leading-relaxed mb-4">
            We use privacy-focused analytics to understand how visitors use RapidCheck. Our analytics do not collect personally identifiable information (PII), do not use cross-site tracking, and do not share data with third-party advertisers. Analytics data is aggregated and used solely to improve the Service.
          </p>

          <h2 class="text-lg font-semibold text-white mt-8 mb-3">Managing Cookies</h2>
          <p class="text-sm text-zinc-400 leading-relaxed mb-4">
            You can control and manage cookies through your browser settings. Most browsers allow you to view, delete, and block cookies from websites. Please note that disabling essential cookies may prevent you from using certain features of the Service, including logging in.
          </p>
          <p class="text-sm text-zinc-400 leading-relaxed mb-4">
            For instructions on managing cookies in your browser, visit your browser's help documentation:
          </p>
          <p class="text-sm text-zinc-400 leading-relaxed mb-4">
            <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener" class="text-emerald-500 hover:text-emerald-400">Google Chrome</a><br>
            <a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener" class="text-emerald-500 hover:text-emerald-400">Mozilla Firefox</a><br>
            <a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" target="_blank" rel="noopener" class="text-emerald-500 hover:text-emerald-400">Apple Safari</a><br>
            <a href="https://support.microsoft.com/en-us/microsoft-edge/manage-cookies-in-microsoft-edge" target="_blank" rel="noopener" class="text-emerald-500 hover:text-emerald-400">Microsoft Edge</a>
          </p>

          <h2 class="text-lg font-semibold text-white mt-8 mb-3">Contact</h2>
          <p class="text-sm text-zinc-400 leading-relaxed mb-4">
            If you have questions about our use of cookies, contact us at
            <a href="mailto:privacy@rapidcheck.com" class="text-emerald-500 hover:text-emerald-400">privacy@rapidcheck.com</a>.
          </p>

        </div>
      </div>
    `;
  };
})();
