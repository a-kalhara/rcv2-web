(function() {
  window.__pages = window.__pages || {};
  window.__pages['/legal/privacy'] = function() {
    return `
      <div class="mx-auto max-w-4xl px-6 py-20">
        <h1 class="text-3xl font-bold text-white mb-2">Privacy Policy</h1>
        <p class="text-sm text-zinc-500 mb-10">Last updated: March 1, 2026</p>

        <div class="prose prose-invert prose-sm max-w-none">

          <h2 class="text-lg font-semibold text-white mt-8 mb-3">Information We Collect</h2>
          <p class="text-sm text-zinc-300 leading-relaxed mb-4">
            We collect information necessary to provide and improve our monitoring services. This includes:
          </p>
          <p class="text-sm text-zinc-300 leading-relaxed mb-4">
            <strong class="text-zinc-300">Account Information:</strong> When you sign up, we collect your name, email address, and password. If you use social login, we receive basic profile information from the provider.
          </p>
          <p class="text-sm text-zinc-300 leading-relaxed mb-4">
            <strong class="text-zinc-300">Monitoring Data:</strong> URLs and endpoints you configure for monitoring, check results, response times, status codes, and SSL/DNS/WHOIS records for domains you add to the platform.
          </p>
          <p class="text-sm text-zinc-300 leading-relaxed mb-4">
            <strong class="text-zinc-300">Usage Analytics:</strong> We collect privacy-focused analytics about how you use the dashboard, including page views and feature usage. We do not use third-party tracking scripts or share this data with advertisers.
          </p>
          <p class="text-sm text-zinc-300 leading-relaxed mb-4">
            <strong class="text-zinc-300">Device Information:</strong> Browser type, operating system, and device type to optimize your experience. IP addresses are collected for security purposes and are truncated in logs.
          </p>

          <h2 class="text-lg font-semibold text-white mt-8 mb-3">How We Use Your Data</h2>
          <p class="text-sm text-zinc-300 leading-relaxed mb-4">
            <strong class="text-zinc-300">Service Provision:</strong> To run uptime checks, domain intelligence scans, and status pages as configured by you.
          </p>
          <p class="text-sm text-zinc-300 leading-relaxed mb-4">
            <strong class="text-zinc-300">Alerts:</strong> To send notifications via your configured channels (email, Slack, Discord, webhook, SMS, phone) when monitors detect incidents.
          </p>
          <p class="text-sm text-zinc-300 leading-relaxed mb-4">
            <strong class="text-zinc-300">Performance Improvement:</strong> To analyze aggregate usage patterns and improve check accuracy, dashboard performance, and overall service reliability.
          </p>
          <p class="text-sm text-zinc-300 leading-relaxed mb-4">
            <strong class="text-zinc-300">Security:</strong> To detect and prevent unauthorized access, abuse, and fraudulent activity across the platform.
          </p>

          <h2 class="text-lg font-semibold text-white mt-8 mb-3">Data Protection</h2>
          <p class="text-sm text-zinc-300 leading-relaxed mb-4">
            We implement enterprise-grade security measures to protect your data:
          </p>
          <p class="text-sm text-zinc-300 leading-relaxed mb-4">
            <strong class="text-zinc-300">Encryption:</strong> Sensitive fields (2FA secrets, OAuth tokens, integration keys, phone numbers) are encrypted at rest using AES-256-GCM with key versioning and rotation support.
          </p>
          <p class="text-sm text-zinc-300 leading-relaxed mb-4">
            <strong class="text-zinc-300">PII Redaction:</strong> Personally identifiable information is automatically redacted in application logs. Emails are masked, IP addresses are truncated, and tokens are replaced with [REDACTED].
          </p>
          <p class="text-sm text-zinc-300 leading-relaxed mb-4">
            <strong class="text-zinc-300">Access Control:</strong> Role-based access control (RBAC) with four levels (Owner, Admin, Member, Viewer) ensures team members only access data appropriate to their role.
          </p>
          <p class="text-sm text-zinc-300 leading-relaxed mb-4">
            <strong class="text-zinc-300">Audit Trails:</strong> All access to personally identifiable information is logged in an audit trail retained for 7 years for compliance purposes.
          </p>

          <h2 class="text-lg font-semibold text-white mt-8 mb-3">Data Residency</h2>
          <p class="text-sm text-zinc-300 leading-relaxed mb-4">
            Your application data is stored in one of two regions: <strong class="text-zinc-300">US-East</strong> or <strong class="text-zinc-300">EU-West</strong>. Your data region is automatically assigned based on your signup location and can be viewed in your workspace settings. Monitoring checks run from Cloudflare's 330+ global edge locations regardless of your data residency region.
          </p>

          <h2 class="text-lg font-semibold text-white mt-8 mb-3">Data Retention</h2>
          <p class="text-sm text-zinc-300 leading-relaxed mb-4">
            We retain your data according to the following schedule:
          </p>
          <p class="text-sm text-zinc-300 leading-relaxed mb-4">
            <strong class="text-zinc-300">Check Results:</strong> 30 days on the Free plan, up to 1 year on paid plans.
          </p>
          <p class="text-sm text-zinc-300 leading-relaxed mb-4">
            <strong class="text-zinc-300">Audit Logs:</strong> 7 years for compliance and security purposes.
          </p>
          <p class="text-sm text-zinc-300 leading-relaxed mb-4">
            <strong class="text-zinc-300">Response Bodies:</strong> 3 to 7 days depending on your plan, then automatically purged.
          </p>

          <h2 class="text-lg font-semibold text-white mt-8 mb-3">Third-Party Services</h2>
          <p class="text-sm text-zinc-300 leading-relaxed mb-4">
            We use the following third-party services to deliver our platform. Each processes only the minimum data necessary:
          </p>
          <p class="text-sm text-zinc-300 leading-relaxed mb-4">
            <strong class="text-zinc-300">Cloudflare</strong> — Edge compute, CDN, DNS, and DDoS protection. Processes request metadata.<br>
            <strong class="text-zinc-300">Neon</strong> — Serverless PostgreSQL database hosting. Stores application data.<br>
            <strong class="text-zinc-300">Upstash</strong> — Serverless Redis for caching and job queues. Processes transient operational data.<br>
            <strong class="text-zinc-300">Stripe</strong> — Payment processing. Processes billing and payment information.<br>
            <strong class="text-zinc-300">Resend</strong> — Transactional email delivery. Processes email addresses for alert delivery.<br>
            <strong class="text-zinc-300">Twilio</strong> — SMS and voice call delivery. Processes phone numbers for alert delivery.
          </p>

          <h2 class="text-lg font-semibold text-white mt-8 mb-3">Your Rights</h2>
          <p class="text-sm text-zinc-300 leading-relaxed mb-4">
            Under the GDPR and applicable privacy laws, you have the following rights:
          </p>
          <p class="text-sm text-zinc-300 leading-relaxed mb-4">
            <strong class="text-zinc-300">Access:</strong> Request a copy of all personal data we hold about you.<br>
            <strong class="text-zinc-300">Rectification:</strong> Correct any inaccurate personal data.<br>
            <strong class="text-zinc-300">Deletion:</strong> Request deletion of your account and all associated data. A 14-day cooling period applies during which you can reverse the request.<br>
            <strong class="text-zinc-300">Export:</strong> Download your data in a machine-readable format from your account settings.<br>
            <strong class="text-zinc-300">Restriction:</strong> Request that we restrict processing of your personal data under certain circumstances.
          </p>
          <p class="text-sm text-zinc-300 leading-relaxed mb-4">
            You can exercise your data access, export, and deletion rights directly from your account settings. For other requests, contact us at the address below.
          </p>

          <h2 class="text-lg font-semibold text-white mt-8 mb-3">Contact</h2>
          <p class="text-sm text-zinc-300 leading-relaxed mb-4">
            For privacy-related questions or requests, contact us at
            <a href="mailto:privacy@rapidcheck.com" class="text-emerald-500 hover:text-emerald-400">privacy@rapidcheck.com</a>.
          </p>

        </div>
      </div>
    `;
  };
})();
