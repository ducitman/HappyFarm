# Nông Trại Khai Mở & Tình Yêu — Phase 1 Updated

Source of game logic: `nong-trai-tinh-yeu (3).html`. The HTML, CSS and JavaScript are separated for Vite/Render deployment without changing the game functions from the supplied HTML.

## Local

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Render Web Service

Build Command: `npm install && npm run build`

Start Command: `npm start`

The Vite preview server listens on `0.0.0.0` and uses Render's `PORT`; `happyfarm.onrender.com` is allowed by `preview.allowedHosts`.

For a pure static deployment, use Render Static Site with Publish Directory `dist` and no Start Command.
