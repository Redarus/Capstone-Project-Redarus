// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // You can specify the port you want the server to run on
  },
  build: {
    outDir: 'dist', // The output directory for the build
  },
});
