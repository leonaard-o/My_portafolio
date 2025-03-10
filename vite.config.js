import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // Separa cada paquete de node_modules en su propio chunk
            return id.toString().split('node_modules/')[1].split('/')[0].toString()
          }
        },
      },
    },
    // Opcional: ajusta el límite de advertencia (solo cambia la advertencia, no el tamaño real)
    chunkSizeWarningLimit: 600,
  },
})
