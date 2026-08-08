const { defineConfig } = require('vite');

module.exports = defineConfig({
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: false
  },

  preview: {
    host: '0.0.0.0',
    port: 4173,
    strictPort: false
  },

  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
});