# rcv2-web — Tasks

## Experiment: White/Orange/Navy Theme (`experiment/cloudflare-theme` branch)
- [x] Create experiment branch
- [x] Build Cloudflare-inspired dark theme (orange accent, navy bg) — rejected
- [x] Build white/light theme (Cloudflare-style) — rejected
- [x] Build final white + orange (#F9A825) + navy (#1B1B4B) three-color theme
- [x] Convert homepage — split hero layout with dashboard visual
- [x] Convert all 6 feature pages to new theme
- [x] Convert pricing page (white cards, orange borders, scrollable comparison table)
- [x] Convert all 7 tool pages (forms stack on mobile, responsive headings)
- [x] Convert all 4 legal pages + help + docs
- [x] Remove Aura/UnicornStudio animation (can't recolor third-party embed)
- [x] Mobile optimization across all pages
- [x] Deploy to preview: https://experiment-cloudflare-theme.rapidcheck-marketing.pages.dev
- [ ] **DECISION NEEDED**: Merge to main or keep as experiment?

### Theme Summary
| Element | Value |
|---------|-------|
| Background | White `#ffffff` / Cream `#faf8f5` |
| Navy sections | `#1B1B4B` (features, dashboard, CTA, footer) |
| Orange accent | `#F9A825` (CTAs, borders, icons, highlights) |
| Orange sections | `#F9A825` (metrics band, use cases) |
| Headings | `text-[#1B1B4B]` |
| Body text | `text-[#4a4a6a]` |
| Muted text | `text-[#6a6a8a]` |
| Buttons primary | `bg-[#F9A825] text-[#1B1B4B] rounded-lg` |
| Buttons secondary | `border border-[#1B1B4B]/20 text-[#1B1B4B] rounded-lg` |
| Card borders | `border-[#F9A825]/15` to `/20` |

### Preview URLs
- **Experiment**: https://experiment-cloudflare-theme.rapidcheck-marketing.pages.dev
- **Production (main)**: https://rapidcheck.io

## Content
- [ ] Complete documentation hub pages (Getting Started, API Reference, Integrations, SDKs)
- [ ] Add blog section
- [ ] Add changelog page

## Improvements
- [ ] SEO meta tags for all pages
- [ ] Open Graph images
- [ ] Performance audit (Lighthouse)
- [ ] Accessibility audit

## Future: Skills & Agents

### Skills (template-driven, predictable output)
- [x] `/add-page` — Scaffold a new marketing page
- [x] `/design` — Design and build elegant UI (sections, pages, components, interactive demos)
- [ ] `/add-section` — Insert a section into an existing page
- [ ] `/add-tool` — Scaffold a free tool page under `pages/tools/`
- [ ] `/component` — Create a reusable UI component

### Agents (exploration, analysis, judgments)
- [x] `design-auditor` — Crawl all pages, compare against design system, flag drift
- [ ] `seo-auditor` — Check every page for meta tags, structured data, missing OG images
- [ ] `a11y-auditor` — Scan for contrast issues, missing labels, keyboard traps
- [ ] `perf-auditor` — Analyze asset loading, script ordering, page weight
