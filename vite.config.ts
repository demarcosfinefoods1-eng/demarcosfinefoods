import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: '/demarcosfinefoods/',
  plugins: [
    react(),
    tailwindcss(),
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
          urlPattern: /^https:\/\/images\.unsplash\.com\//,
          handler: 'CacheFirst',
          options: { cacheName: 'store-images', expiration: { maxEntries: 24, maxAgeSeconds: 60 * 60 * 24 * 30 } },
        }],
      },
    }),
  ],
})
