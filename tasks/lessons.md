# rcv2-web — Lessons Learned

| Date | Context | Lesson | Action Taken |
|------|---------|--------|--------------|
| 2026-03-15 | Theme experiment | UnicornStudio/Aura embeds can't be recolored from our code — colors are baked into their platform project. CSS filters (hue-rotate, invert) produce poor results. | Built custom animations instead; for production, create a new UnicornStudio project with correct colors or build from scratch. |
| 2026-03-15 | Theme experiment | When switching from dark to light theme, every mockup/demo card must also be converted — dark dashboard previews on a white page look broken. | Converted all 3 dashboard mockups (hero, domain intel, full dashboard) to white theme with orange borders. |
| 2026-03-15 | Theme experiment | Iterating themes is faster with a branch + CF Pages preview URL. Deploy to `--branch=name` gives an alias URL for A/B comparison without touching production. | Used `experiment/cloudflare-theme` branch with preview at experiment-cloudflare-theme.rapidcheck-marketing.pages.dev |
| 2026-03-15 | Mobile optimization | Tool page forms (input + button) must use `flex-col sm:flex-row` to stack on mobile. Horizontal `flex` with `whitespace-nowrap` buttons overflows on phones. | Applied to all 4 tool pages with form inputs. |
| 2026-03-15 | Mobile optimization | Pricing comparison tables with fixed grid-cols-4 are unreadable on mobile. Wrap in `overflow-x-auto` with `min-w-[600px]` to enable horizontal scroll. | Applied to pricing.js comparison table. |
