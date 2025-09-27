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
        description: 'Aplicación de horóscopo de paz y sabiduría.',
        theme_color: '#fcfcfc', // Usamos el color de fondo suave del sitio

        // --- ÍCONOS REINTRODUCIDOS USANDO VITE.SVG ---
        icons: [
          {
            src: 'vite.svg', // Usamos el SVG que ya existe
            sizes: '192x192',
            type: 'image/svg+xml' // Cambiamos el tipo MIME a SVG
          },
          {
            src: 'vite.svg', // Usamos el SVG que ya existe
            sizes: '512x512',
            type: 'image/svg+xml' // Cambiamos el tipo MIME a SVG
          }
        ]
        // ---------------------------------------------
      }
    })
  ],
})