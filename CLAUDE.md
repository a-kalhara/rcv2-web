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
- Color scheme: emerald accent (#10b981), dark background (#050505)
- Responsive: mobile-first with Tailwind breakpoints

## Design System

### Colors
- Background: `#050505` (near-black)
- Surface/cards: `bg-zinc-900/20` to `bg-zinc-900/40`
- Primary accent: `emerald-500` (#10b981)
- Body text: `text-zinc-300` (#d4d4d8) — NOT zinc-400 (too low contrast)
- Headings: `text-white`
- Secondary/metadata: `text-zinc-400` (timestamps, labels only)
- Borders: `border-white/5` (cards), `border-white/10` (buttons, inputs)

### Typography
- Display: Inter 300-700
- Mono: IBM Plex Mono 400-600
- Body paragraphs: `text-zinc-300` (never zinc-400 for readability)

### Accessibility
- Focus states: Global `focus-visible` with emerald outline (defined in index.html `<style>`)
- Form inputs: Must have `<label>` elements (use `sr-only` class for visually hidden labels)
- All interactive elements must have hover + focus states
- `prefers-reduced-motion` is supported globally

### Cards
- Feature cards: `rounded-xl border border-white/5 bg-zinc-900/20 p-6 hover:bg-zinc-900/30 hover:border-white/10 transition-colors`
- Demo cards: `rounded-xl border border-white/5 bg-zinc-900/40 backdrop-blur-sm p-5`

### Dropdowns
- Use `min-w-[min(Xpx,90vw)]` to prevent viewport overflow on mobile

## Button Standards

All buttons site-wide must use consistent styles. Do NOT deviate from these patterns:

- **Primary CTA (emerald):** `rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-black hover:bg-emerald-400 transition-colors cursor-pointer border-none`
- **Secondary CTA (outline):** `rounded-full border border-white/10 px-6 py-3 text-sm font-medium text-white hover:border-white/20 hover:bg-white/[0.06] transition-colors`
- **Form action button (inline with input):** `bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-6 py-3 rounded-full transition-colors whitespace-nowrap`
- **Bottom page CTA link:** `inline-block bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-6 py-3 rounded-full transition-colors`

Key rules:
- Always `rounded-full` (pill shape) — never `rounded-lg` for buttons
- Always `hover:bg-emerald-400` for emerald buttons — never `hover:opacity-90`
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
