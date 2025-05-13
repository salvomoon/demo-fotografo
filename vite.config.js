import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': '/src', // Aggiungi questa alias per facilitare l'importazione dei file
    },
  },
  build: {
    outDir: 'dist', // Specifica la cartella di output per la build
  },
  server: {
    // Puoi anche aggiungere configurazioni per il server di sviluppo, se necessario
    port: 3000,
  },
})
