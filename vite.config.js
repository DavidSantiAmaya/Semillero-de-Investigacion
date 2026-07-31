import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    // Permite acceder al servidor de desarrollo a través de túneles como
    // Cloudflare Quick Tunnel (trycloudflare.com), que Vite bloquearía por
    // defecto al no reconocer el host.
    allowedHosts: [".trycloudflare.com"],
  },
})
