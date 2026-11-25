import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      "/roblox-api": {
        target: "https://apis.roblox.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/roblox-api/, "")
      },
      "/roblox-games": {
        target: "https://games.roblox.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/roblox-games/, "")
      },
      "/roblox-thumbnails": {
        target: "https://thumbnails.roblox.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/roblox-thumbnails/, "")
      }
    }
  },
})
