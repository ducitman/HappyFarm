# Phase 1 — HappyFarm project restructure

- Tách CSS inline từ HTML nguồn sang `src/css/main.css`.
- Tách JavaScript inline sang `src/js/main.js`.
- Tạo `src/js/main_backup.js` để giữ bản sao logic game.
- Giữ nguyên HTML UI/game screens trong `index.html`.
- Giữ bản HTML nguồn tại `public/original-game.html` để đối chiếu.
- Thêm cấu trúc `src/js/systems/` để sẵn sàng tách hệ thống game thành module ở phase tiếp theo.
- Thêm cấu hình Vite và scripts `dev`, `build`, `preview`.
- Không chuyển JavaScript sang ES module để các hàm được gọi từ `onclick` trong HTML vẫn hoạt động.
