import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    global: {}
  },
  base: '/matteo-website/'  // Aggiungi questa riga con il nome del tuo repository su GitHub
});
