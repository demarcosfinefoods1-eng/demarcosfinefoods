# DeMarco's Fine Foods

A fast, mobile-first local grocery website designed to turn nearby searches into same-day store visits. Built with React 19, Vite, Tailwind CSS, React Router, Framer Motion, Lucide React, and PWA support.

## Local development

Requires Node.js 20 or newer.

```bash
npm install
npm run dev
```

Open the local URL shown by Vite. Create a production build with:

```bash
npm run build
npm run preview
```

## GitHub Pages deployment

The Vite `base` is already configured for the `demarcosfinefoods` repository. Deploy manually with:

```bash
npm run deploy
```

For automatic deployment, the included `.github/workflows/deploy.yml` publishes every push to `main`. In GitHub, open **Settings → Pages** and set the source to **GitHub Actions**.

## Updating content

- Store details, links, departments, reviews, and gallery images: `src/data/store.ts`
- Homepage layout and section copy: `src/pages/HomePage.tsx`
- Opening-hours status: `src/hooks/useStoreStatus.ts`
- SEO metadata and LocalBusiness structured data: `index.html`

### Images

Photo slots use stable `data-photo-key` values defined in `src/data/store.ts` and rendered by `src/components/PhotoPlaceholder.tsx`. Add optimized real DeMarco's photos under `public/images/`, then update `PhotoPlaceholder` to map each key to its corresponding image. Use WebP or AVIF, keep the hero near 1920×1200, and keep gallery images below 250 KB where practical.

### Google reviews

The `GoogleReviews` component accepts typed Google review objects. Populate the `googleReviews` array in `src/data/store.ts` from a Google Business Profile integration or verified review export. Confirm permission and accuracy before publishing customer names.

### Hero image

Replace the `hero-storefront` photo slot with a bright, welcoming photograph of the actual DeMarco's storefront or produce displays. Keep the subject weighted toward the right so the headline remains readable on the left.

## Quality checks

```bash
npm run lint
npm run build
```

The site includes responsive layouts, reduced-motion support, semantic landmarks, accessible controls, lazy-loaded images, route-level code splitting, installable PWA assets, an offline app shell, `robots.txt`, `sitemap.xml`, canonical metadata, social cards, and JSON-LD GroceryStore schema.
