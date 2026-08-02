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

Image URLs live in `src/data/store.ts`; the hero image is in `src/styles.css`. Replace an Unsplash URL with an optimized local image under `public/images/` when professional store photography is available. Use WebP or AVIF, keep hero images near 1920×1200, and keep gallery images below 250 KB where practical.

### Google reviews

The current testimonials are clearly labeled samples. Replace objects in the `reviews` array in `src/data/store.ts` with short excerpts from verified customer reviews. Confirm permission and accuracy before publishing customer names.

### Hero image

Update `.hero-image` in `src/styles.css`. Use a bright, welcoming photograph of the actual store or its produce displays. Keep the subject weighted toward the right so the headline remains readable on the left.

## Quality checks

```bash
npm run lint
npm run build
```

The site includes responsive layouts, reduced-motion support, semantic landmarks, accessible controls, lazy-loaded images, route-level code splitting, installable PWA assets, an offline app shell, `robots.txt`, `sitemap.xml`, canonical metadata, social cards, and JSON-LD GroceryStore schema.
