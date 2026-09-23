import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'
import { activeHero } from './src/data/hero'
import { store } from './src/data/store'

const base = '/'

const heroPreload = {
  name: 'demarcos-hero-preload',
  transformIndexHtml() {
    const imageBase = `${base}images/store/${activeHero.image}`
    return [{ tag: 'link', attrs: { rel: 'preload', as: 'image', href: `${imageBase}-1600.webp`, imagesrcset: `${imageBase}-800.webp 800w, ${imageBase}-1200.webp 1200w, ${imageBase}-1600.webp 1600w`, imagesizes: '100vw', type: 'image/webp', fetchpriority: 'high' }, injectTo: 'head' as const }]
  },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': store.legalType,
  '@id': `${store.siteUrl}#store`,
  name: store.name,
  description: 'A Windsor neighbourhood grocery store offering fresh produce, fresh bread, Italian and specialty foods, beer, wine and custom gourmet gift baskets.',
  url: store.siteUrl,
  telephone: store.phoneInternational,
  logo: store.logoUrl,
  image: store.imageUrl,
  address: {
    '@type': 'PostalAddress',
    streetAddress: store.streetAddress,
    addressLocality: store.city,
    addressRegion: store.province,
    postalCode: store.postalCode,
    addressCountry: store.country,
  },
  geo: { '@type': 'GeoCoordinates', ...store.coordinates },
  hasMap: store.googleBusinessUrl,
  sameAs: [store.instagram, store.facebook],
  openingHoursSpecification: Object.entries(store.hours.weekly).map(([day, hours]) => ({
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: day.charAt(0).toUpperCase() + day.slice(1),
    opens: hours.opens,
    closes: hours.closes,
  })),
  areaServed: { '@type': 'City', name: 'Windsor, Ontario' },
  priceRange: '$$',
}

const seoSchema = {
  name: 'demarcos-local-business-schema',
  transformIndexHtml() {
    return [
      {
        tag: 'script',
        attrs: { type: 'application/ld+json' },
        children: JSON.stringify(localBusinessSchema).replaceAll('<', '\\u003c'),
        injectTo: 'head' as const,
      },
      {
        tag: 'noscript',
        children: `<main style="max-width:760px;margin:60px auto;padding:24px;font-family:system-ui,sans-serif;line-height:1.6"><h1>${store.name}</h1><p>Windsor neighbourhood grocery store offering fresh produce, fresh bread, Italian and specialty foods, beer, wine and custom gift baskets.</p><h2>Visit DeMarco's in Windsor</h2><p>${store.address}</p><p><a href="${store.phoneHref}">${store.phoneDisplay}</a> · <a href="${store.directionsUrl}">Get Directions</a></p><h2>Departments and specialties</h2><p>Fresh Produce · Beer &amp; Wine · Fresh Bread · Italian Specialties · Imported &amp; Specialty Foods · Custom Gift Baskets</p><p><a href="/gift-baskets/">Explore Custom Gift Baskets</a></p></main>`,
        injectTo: 'body-prepend' as const,
      },
    ]
  },
}

export default defineConfig({
  base,
  plugins: [
    react(),
    tailwindcss(),
    heroPreload,
    seoSchema,
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['brand/favicon.svg', 'brand/favicon-32.png', 'brand/apple-touch-icon.png'],
      manifest: {
        name: "DeMarco's Fine Foods",
        short_name: "DeMarco's",
        description: 'Fresh produce, Italian foods, beer and wine in Windsor, Ontario.',
        theme_color: '#2F6D3C',
        background_color: '#ffffff',
        display: 'standalone',
        id: '/',
        start_url: '/',
        scope: '/',
        icons: [
          { src: 'brand/android-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
          { src: 'brand/android-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
          { src: 'brand/android-maskable-192.png', sizes: '192x192', type: 'image/png', purpose: 'maskable' },
          { src: 'brand/android-maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
        ],
      },
      workbox: {
        navigateFallback: '/index.html',
        navigateFallbackDenylist: [/^\/sitemap\.xml$/, /^\/robots\.txt$/],
        runtimeCaching: [{
          urlPattern: /\/images\/.*\.(?:avif|webp|jpe?g|png|svg)$/,
          handler: 'CacheFirst',
          options: { cacheName: 'demarcos-images', expiration: { maxEntries: 80, maxAgeSeconds: 60 * 60 * 24 * 30 } },
        }],
      },
    }),
  ],
})
