import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'
import { activeHero } from './src/data/hero'

const base = '/'

const heroPreload = {
  name: 'demarcos-hero-preload',
  transformIndexHtml() {
    const imageBase = `${base}images/store/${activeHero.image}`
    return [{ tag: 'link', attrs: { rel: 'preload', as: 'image', href: `${imageBase}-1600.webp`, imagesrcset: `${imageBase}-800.webp 800w, ${imageBase}-1200.webp 1200w, ${imageBase}-1600.webp 1600w`, imagesizes: '100vw', type: 'image/webp', fetchpriority: 'high' }, injectTo: 'head' as const }]
  },
}

export default defineConfig({
  base,
  plugins: [
    react(),
    tailwindcss(),
    heroPreload,
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
