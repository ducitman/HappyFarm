# HappyFarm

## Cấu trúc quan trọng

```
public/
  css/main.css      ← CSS runtime (Vite copy vào dist)
  js/main.js        ← Game JS runtime
  js/main_backup.js
  data/original-game.html
src/
  css/main.css
  js/main.js
  js/systems/
```

Vite phục vụ file trong `public/` tại URL gốc: `/css/...`, `/js/...`.

## Render

- Build: `npm install && npm run build`
- Start: `npm start`
