# rcv2-web — Architecture

## Overview

Static single-page application with client-side routing. No build step, no framework, no bundler.

## Router

The router in `index.html` uses the History API:
1. Intercepts all `<a>` clicks with internal hrefs
2. Calls `history.pushState()` to update the URL
3. Looks up the route in `window.__pages`
4. Renders the page function's returned HTML into the content container
5. Re-initializes scroll animations via Intersection Observer

## Page Registration

Each page file is an IIFE that registers itself:
```js
(function() {
  window.__pages['/route'] = function() {
    return `<div>...</div>`;
  };
})();
```

## Third-Party Integrations

- Tailwind CSS (CDN)
- Aura Studio (animated backgrounds)
- Unicorn Studio v1.4.29
- Google Fonts (Inter, IBM Plex Mono)

## Deployment

- Hosted on Netlify
- `_redirects` file handles SPA routing (all paths → index.html)
