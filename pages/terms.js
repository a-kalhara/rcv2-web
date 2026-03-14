(function() {
  window.__pages = window.__pages || {};
  window.__pages['/legal/terms'] = function() {
    return `
      <div class="mx-auto max-w-4xl px-6 py-20">
        <h1 class="text-3xl font-bold text-white mb-2">Terms of Service</h1>
        <p class="text-sm text-zinc-500 mb-10">Last updated: March 1, 2026</p>

        <div class="prose prose-invert prose-sm max-w-none">

          <h2 class="text-lg font-semibold text-white mt-8 mb-3">1. Acceptance of Terms</h2>
          <p class="text-sm text-zinc-400 leading-relaxed mb-4">
            By accessing or using RapidCheck ("the Service"), you agree to be bound by these Terms of Service. If you do not agree to these terms, you may not use the Service. We reserve the right to update these terms at any time, and we will notify you of material changes via email or in-app notification.
          </p>

          <h2 class="text-lg font-semibold text-white mt-8 mb-3">2. Service Description</h2>
          <p class="text-sm text-zinc-400 leading-relaxed mb-4">
            RapidCheck is an uptime monitoring and domain intelligence platform. The Service includes uptime monitoring (HTTP and browser checks), domain intelligence (SSL, DNS, WHOIS, blacklist, and health scoring), public status pages, multi-channel alerting, heartbeat/cron monitoring, on-call scheduling, and related features as described on our website.
          </p>

          <h2 class="text-lg font-semibold text-white mt-8 mb-3">3. Account Responsibilities</h2>
          <p class="text-sm text-zinc-400 leading-relaxed mb-4">
            You are responsible for maintaining the security of your account credentials. You must provide accurate and complete information when creating your account. You are responsible for all activity that occurs under your account. You must notify us immediately at <a href="mailto:legal@rapidcheck.com" class="text-emerald-500 hover:text-emerald-400">legal@rapidcheck.com</a> if you suspect unauthorized access to your account.
          </p>

          <h2 class="text-lg font-semibold text-white mt-8 mb-3">4. Free Plan</h2>
          <p class="text-sm text-zinc-400 leading-relaxed mb-4">
            The Free plan includes up to 3 monitors with 3-minute check intervals from 3 monitoring regions. Data is retained for 30 days. You receive 1 status page, email-only alerts, and full access to the domain intelligence suite. The Free plan is limited to 1 team member per workspace. On signup, free users receive a 1-month trial with access to all paid features. After the trial expires, your workspace downgrades to free plan limits and excess monitors are paused (not deleted).
          </p>

          <h2 class="text-lg font-semibold text-white mt-8 mb-3">5. Paid Plans</h2>
          <p class="text-sm text-zinc-400 leading-relaxed mb-4">
            Paid plans are billed at $2 per monitor per month. Paid plans include unlimited monitors, 30-second check intervals, monitoring from all 330+ global regions, 1-year data retention, unlimited status pages, unlimited team members, all alert channels (email, Slack, Discord, webhook, SMS, phone), browser checks, on-call scheduling, and SSO/SAML. Charges are billed monthly via Stripe. You may add or remove monitors at any time, and billing adjusts accordingly.
          </p>

          <h2 class="text-lg font-semibold text-white mt-8 mb-3">6. Acceptable Use</h2>
          <p class="text-sm text-zinc-400 leading-relaxed mb-4">
            Your use of the Service is subject to our <a href="/legal/acceptable-use" class="text-emerald-500 hover:text-emerald-400">Acceptable Use Policy</a>, which is incorporated into these Terms by reference. Violation of the Acceptable Use Policy may result in suspension or termination of your account.
          </p>

          <h2 class="text-lg font-semibold text-white mt-8 mb-3">7. Service Level</h2>
          <p class="text-sm text-zinc-400 leading-relaxed mb-4">
            For paid plans, we target 99.9% uptime for the RapidCheck platform itself (excluding scheduled maintenance). If we fail to meet this target in a given calendar month, affected paid customers may request service credit for that month. Credit requests must be submitted within 30 days of the incident. Service credits are applied to future invoices and do not exceed the monthly fees paid for the affected period.
          </p>

          <h2 class="text-lg font-semibold text-white mt-8 mb-3">8. Limitation of Liability</h2>
          <p class="text-sm text-zinc-400 leading-relaxed mb-4">
            To the maximum extent permitted by law, RapidCheck and its affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or business opportunities, arising out of or related to your use of the Service. Our total liability for any claim arising from the Service shall not exceed the amount you paid to us in the 12 months preceding the claim. The Service is provided "as is" without warranties of any kind, express or implied.
          </p>

          <h2 class="text-lg font-semibold text-white mt-8 mb-3">9. Termination</h2>
          <p class="text-sm text-zinc-400 leading-relaxed mb-4">
            You may cancel your subscription at any time from your account settings. Upon cancellation, your paid features remain active until the end of your current billing period, after which your workspace downgrades to the Free plan and excess monitors are paused. You may request full account deletion at any time. A 14-day cooling period applies during which you can reverse the deletion request. After 14 days, all your data is permanently and irreversibly purged from our systems in compliance with GDPR.
          </p>

          <h2 class="text-lg font-semibold text-white mt-8 mb-3">10. Contact</h2>
          <p class="text-sm text-zinc-400 leading-relaxed mb-4">
            For questions about these Terms of Service, contact us at
            <a href="mailto:legal@rapidcheck.com" class="text-emerald-500 hover:text-emerald-400">legal@rapidcheck.com</a>.
          </p>

        </div>
      </div>
    `;
  };
})();
