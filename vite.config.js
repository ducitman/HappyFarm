const { defineConfig } = require('vite');
module.exports = defineConfig({
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: false
  },
  preview: {
    host: '0.0.0.0',
    allowedHosts: [
      'happyfarm.onrender.com'
    ]
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    chunkSizeWarningLimit: 6000
  },
  publicDir: 'public'
});
