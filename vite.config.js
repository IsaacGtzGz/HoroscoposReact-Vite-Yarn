import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true
      },
      manifest: {
        name: 'Mi Horoscopo',
        short_name: 'Horoscopo',
        description: 'Aplicación de horóscopo como PWA',
        theme_color: '#ffffff',
      }
    })
  ],
})
