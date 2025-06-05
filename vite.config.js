import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    open: true,
    https: true // Required for AR features
  }
});