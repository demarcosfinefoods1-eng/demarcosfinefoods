import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'
import { activeHero } from './src/data/hero'

const base = '/demarcosfinefoods/'

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
      includeAssets: ['favicon.svg'],
      manifest: {
        name: "DeMarco's Fine Foods",
        short_name: "DeMarco's",
        description: 'Fresh produce, Italian foods, beer and wine in Windsor, Ontario.',
        theme_color: '#2F6D3C',
        background_color: '#ffffff',
        display: 'standalone',
        start_url: '/demarcosfinefoods/',
        icons: [
          { src: 'favicon.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'any maskable' },
        ],
      },
      workbox: {
        navigateFallback: '/demarcosfinefoods/index.html',
        runtimeCaching: [{
          urlPattern: /\/demarcosfinefoods\/images\/.*\.(?:avif|webp|jpe?g|png|svg)$/,
          handler: 'CacheFirst',
          options: { cacheName: 'demarcos-images', expiration: { maxEntries: 80, maxAgeSeconds: 60 * 60 * 24 * 30 } },
        }],
      },
    }),
  ],
})
