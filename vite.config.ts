import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  root: 'src',
  build: {
    outDir: resolve(__dirname, 'dist'),
    rollupOptions: {
      input: {
        weather: resolve(__dirname, 'src/styles/weather.html'),
      },
    },
  },
})