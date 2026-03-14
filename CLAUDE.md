# rcv2-web

Public marketing and landing website for RapidCheck. Static SPA with no build step.

## Stack

- Vanilla JavaScript (no framework)
- Custom SPA router using History API
- Tailwind CSS via CDN (`https://cdn.tailwindcss.com`)
- Inter + IBM Plex Mono fonts from Google Fonts
- Deployed to Netlify (see `_redirects`)

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

## Workflow

Inherits all workflow orchestration from root CLAUDE.md. Additionally:
- Review `tasks/lessons.md` at session start
- After any user correction: immediately update `tasks/lessons.md`
- Test pages by opening in browser — verify router, scroll animations, responsive layout
- No build step means changes are instant — verify in browser directly

## Skills

- `/add-page` — Scaffold a new marketing page
