import { defineConfig } from 'vite';

const renderHost = process.env.RENDER_EXTERNAL_HOSTNAME || 'happyfarm.onrender.com';

export default defineConfig({
  preview: {
    host: '0.0.0.0',
    port: Number(process.env.PORT) || 4173,
    allowedHosts: [renderHost]
  },
  server: {
    host: '0.0.0.0'
  }
});
