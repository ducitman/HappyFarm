# HAPPYFARM

Project Vite được tái cấu trúc từ file HTML game nguồn `Nông Trại Khai Mở & Tình Yêu`.

## Cấu trúc

```text
HAPPYFARM/
├─ dist/
├─ node_modules/
├─ public/
│  ├─ original-game.html
│  └─ README.md
├─ src/
│  ├─ css/
│  │  └─ main.css
│  └─ js/
│     ├─ systems/
│     │  └─ README.md
│     ├─ main_backup.js
│     └─ main.js
├─ .gitignore
├─ index.html
├─ package.json
├─ README.md
└─ vite.config.js
```

## Chạy trong VS Code

1. Mở thư mục `HAPPYFARM`.
2. Mở Terminal.
3. Chạy `npm install`.
4. Chạy `npm run dev`.
5. Mở URL Vite hiển thị trong terminal.

`main.js` đang dùng script classic (không phải ES module) vì HTML game nguồn gọi nhiều hàm qua inline `onclick`.

## Ghi chú dữ liệu

Logic, state, quests, recipes, NPC, shop và các hệ thống gameplay được giữ nguyên từ file HTML nguồn; `main_backup.js` là bản sao dự phòng của `main.js`.
