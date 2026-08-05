# DeMarco's Fine Foods Domain Migration Report

Prepared: August 5, 2026
New canonical domain: `https://demarcosfinefoods.ca`

## Summary

The production configuration and all public SEO references have been prepared for the move from the GitHub Pages project URL to the custom domain. No visual design, photography, typography, content layout, or branding was changed.

## Files Changed

| File | Migration change |
| --- | --- |
| `index.html` | Updated the homepage canonical URL, Open Graph URL and image, Twitter image, favicon paths, Apple Touch Icon path, LocalBusiness URL/ID/image, and structured-data logo URLs. |
| `src/data/store.ts` | Changed the authoritative `siteUrl` used by page-level canonical metadata to the custom domain. |
| `src/main.tsx` | Made React Router use Vite's root deployment base instead of the former GitHub Pages repository path. |
| `src/components/Header.tsx` | Changed the header logo path to use the deployment base URL. |
| `src/pages/HomePage.tsx` | Changed the footer logo path to use the deployment base URL. |
| `src/pages/GiftBasketsPage.tsx` | Changed the Gift Baskets footer logo path to use the deployment base URL. |
| `vite.config.ts` | Changed the Vite base to `/`; updated the PWA ID, start URL, scope, offline navigation fallback, and image caching pattern for the custom-domain root. |
| `scripts/prepare-pages.mjs` | Updated the statically generated Gift Baskets canonical, Open Graph URL, and social image URLs. |
| `public/sitemap.xml` | Replaced both indexed page URLs with custom-domain URLs. |
| `public/robots.txt` | Pointed search engines to the custom-domain sitemap. |
| `public/404.html` | Changed the recovery link from the former repository subpath to the domain root. |
| `public/CNAME` | Added the GitHub Pages custom-domain declaration for `demarcosfinefoods.ca`. |
| `DOMAIN_MIGRATION_REPORT.md` | Added this migration record. |

## Resulting Public URLs

- Homepage: `https://demarcosfinefoods.ca/`
- Gift Baskets: `https://demarcosfinefoods.ca/gift-baskets/`
- Sitemap: `https://demarcosfinefoods.ca/sitemap.xml`
- Robots: `https://demarcosfinefoods.ca/robots.txt`
- Social image: `https://demarcosfinefoods.ca/brand/open-graph.png`

## Deployment Notes

The repository is prepared, but the migration is not live until these uncommitted changes are approved, committed, pushed, and the domain's DNS records are configured for GitHub Pages. After DNS resolves, HTTPS enforcement should be enabled in the repository's Pages settings and both the apex domain and `www` behaviour should be verified.

## Validation Required Before Launch

1. Confirm the GitHub Pages custom domain shows `demarcosfinefoods.ca` after deployment.
2. Confirm the domain's DNS records point to GitHub Pages.
3. Enable **Enforce HTTPS** when GitHub makes it available.
4. Verify `/`, `/gift-baskets/`, `/sitemap.xml`, `/robots.txt`, the manifest, icons, and service worker on the custom domain.
5. Confirm canonical, Open Graph, Twitter, and JSON-LD URLs in the deployed HTML.
6. Submit the new sitemap in Google Search Console and request re-indexing after the domain is live.
