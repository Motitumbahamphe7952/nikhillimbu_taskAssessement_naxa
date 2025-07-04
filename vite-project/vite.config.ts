import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss()
  ],
  build: {
    rollupOptions: {
      input: './index.html'
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
       "leaflet": path.resolve(__dirname, "./node_modules/leaflet"),
    },
  },
})
