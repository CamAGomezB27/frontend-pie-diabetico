import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Asegura que las rutas sean correctas
  server: {
    open: true, // Opcional: abre el navegador automáticamente
  },
  build: {
    outDir: 'dist',
  },
})
