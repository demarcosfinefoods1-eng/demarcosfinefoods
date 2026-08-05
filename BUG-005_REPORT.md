# BUG-005 — Sitemap Availability

## Root cause

The sitemap remained present in `public/sitemap.xml` and was copied into the GitHub Pages deployment artifact. The failure occurred during the custom-domain cutover while GitHub Pages and HTTPS were still propagating. In addition, the PWA service worker allowed every navigation request—including `/sitemap.xml` and `/robots.txt`—to fall back to the React application shell. A browser controlled by the service worker could therefore display the website's 404 route instead of requesting the static XML file.

## Fix

The Workbox navigation fallback now explicitly excludes `/sitemap.xml` and `/robots.txt`. These SEO endpoints will always be requested as static files instead of being handled as React routes.

## Verification

- `https://demarcosfinefoods.ca/sitemap.xml` returns HTTP 200 with `Content-Type: application/xml`.
- The sitemap contains `https://demarcosfinefoods.ca/` and `https://demarcosfinefoods.ca/gift-baskets/`.
- `https://demarcosfinefoods.ca/robots.txt` returns HTTP 200 and references `https://demarcosfinefoods.ca/sitemap.xml`.
- The production build includes `dist/sitemap.xml` and `dist/robots.txt`.
