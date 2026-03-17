# rcv2-web

Public marketing and landing website for RapidCheck. Static SPA with no build step.

## Stack

- Vanilla JavaScript (no framework)
- Custom SPA router using History API
- Tailwind CSS via CDN (`https://cdn.tailwindcss.com`)
- Inter + IBM Plex Mono fonts from Google Fonts
- Deployed to Cloudflare Pages (`rapidcheck-marketing` project → rapidcheck.io)

## Structure

- `index.html` — Shell (nav, footer, router, script tags)
- `pages/*.js` — Each page is a JS module (IIFE) that registers itself to `window.__pages[route]`
- `pages/tools/*.js` — Free tool pages

## How Pages Work

Each page file is a self-contained IIFE that:
1. Defines a function returning an HTML template literal
2. Registers itself: `window.__pages['/route'] = pageFn`
3. Is loaded via `<script src="pages/name.js">` in `index.html`

The router in `index.html` intercepts navigation, looks up the route in `window.__pages`, and renders the returned HTML.

## Adding a New Page

1. Create `pages/{name}.js` following the existing IIFE pattern
2. Add `<script src="pages/{name}.js">` to `index.html`
3. Add navigation link in the nav and/or footer sections of `index.html`
4. Use `reveal-on-scroll` class for scroll animations

## Conventions

- No build step, no bundler, no package manager
- All pages are functions returning HTML template literals
- Use Tailwind utility classes for all styling
- Color scheme: amber/gold accent (#F9A825), white background, navy (#1B1B4B) for headings and dark sections
- Responsive: mobile-first with Tailwind breakpoints

## Design System

### Colors
- Background: `#ffffff` (white)
- Surface/cards: `bg-white` with `border-[#F9A825]/15` or `bg-[#faf8f5]`
- Primary accent: `#F9A825` (amber/gold)
- Navy: `#1B1B4B` (headings, dark sections)
- Body text: `text-[#4a4a6a]`
- Headings: `text-[#1B1B4B]`
- Muted/metadata: `text-[#6a6a8a]`
- Borders: `border-[#F9A825]/15` (cards), `border-[#1B1B4B]/10` (nav, subtle)

### Typography
- Display: Inter 300-700
- Mono: IBM Plex Mono 400-600
- Body paragraphs: `text-[#4a4a6a]`

### Accessibility
- Focus states: Global focus-visible with orange outline (#fb923c) (defined in index.html <style>)
- Form inputs: Must have `<label>` elements (use `sr-only` class for visually hidden labels)
- All interactive elements must have hover + focus states
- `prefers-reduced-motion` is supported globally

### Cards
- Feature cards: `rounded-xl border border-[#F9A825]/15 bg-white p-6 hover:bg-[#faf8f5] hover:border-[#F9A825]/30 transition-colors shadow-sm`
- Demo cards: `rounded-xl border border-[#F9A825]/20 bg-white shadow-xl`
- Dark section cards: `rounded-xl border border-white/10 bg-white/5 p-7 hover:bg-white/10 hover:border-[#F9A825]/30`

### Dropdowns
- Use `min-w-[min(Xpx,90vw)]` to prevent viewport overflow on mobile

## Button Standards

All buttons site-wide must use consistent styles. Do NOT deviate from these patterns:

- **Primary CTA (gold):** `rounded-lg bg-[#F9A825] px-6 py-3 text-sm font-semibold text-[#1B1B4B] hover:bg-[#FFB830] transition-all shadow-lg shadow-[#F9A825]/25`
- **Secondary CTA (outline):** `rounded-lg border border-[#1B1B4B]/20 px-6 py-3 text-sm font-medium text-[#1B1B4B] hover:border-[#1B1B4B]/40 hover:bg-[#1B1B4B]/5 transition-all`
- **Dark section CTA:** `rounded-lg bg-[#1B1B4B] px-6 py-3 text-sm font-semibold text-white hover:bg-[#24245A] transition-colors`
- **Gold section CTA (inverted):** `rounded-lg bg-[#1B1B4B] px-6 py-3 text-sm font-semibold text-white hover:bg-[#24245A] transition-colors`

Key rules:
- Always `rounded-lg` for buttons
- Always `hover:bg-[#FFB830]` for gold buttons — never `hover:opacity-90`
- Always include a hover state — no buttons without hover
- Consistent padding: `px-6 py-3` for all standard buttons

## Workflow

Inherits all workflow orchestration from root CLAUDE.md. Additionally:
- Review `tasks/lessons.md` at session start
- After any user correction: immediately update `tasks/lessons.md`
- Test pages by opening in browser — verify router, scroll animations, responsive layout
- No build step means changes are instant — verify in browser directly

## Skills

- `/add-page` — Scaffold a new marketing page
- `/design` — Design and build elegant UI sections, pages, components, and interactive demos

## Agents

- `design-auditor` — Audit all pages for design system compliance and visual drift
