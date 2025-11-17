import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // optional, explicit dev port
    proxy: {
      // forward any /api/* request to the backend server
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        secure: false,
        ws: false,
        // Do NOT rewrite if your backend expects /api/*.
        // rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
});
