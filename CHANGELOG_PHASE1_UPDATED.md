# Phase 1 Updated — based on nong-trai-tinh-yeu (3).html

- Replaced the old extracted game logic with the complete `<script>` block from the newly supplied HTML.
- Replaced the old CSS with the complete `<style>` block from the newly supplied HTML.
- Rebuilt `index.html` from the newly supplied HTML markup and externalized CSS/JS.
- Kept the game JavaScript as a classic script so the existing inline `onclick="..."` handlers continue to resolve global functions.
- Added `vite.config.js` for Render Web Service:
  - `host: 0.0.0.0`
  - `port: process.env.PORT || 4173`
  - `preview.allowedHosts` uses `RENDER_EXTERNAL_HOSTNAME` or `happyfarm.onrender.com`
- Updated `npm start` to use Vite preview.
- Verified JavaScript syntax with `node --check`.
- Verified all function names referenced by HTML `onclick` handlers exist in the new JavaScript.
