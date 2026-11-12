# Kiểm thử toàn hệ thống

Thư mục này chứa các kịch bản integration/E2E chạy xuyên suốt web, API và PostgreSQL.
Chạy các lệnh từ thư mục gốc của repository sau khi hệ thống đã khởi động.

| Kịch bản | Lệnh | Phạm vi |
| --- | --- | --- |
| Checkout mô phỏng | `node tests/checkout-smoke.mjs` | Web, Swagger, menu, đăng nhập, tạo đơn, thanh toán Ví mô phỏng và lịch sử đơn. |
| Chụp trạng thái dữ liệu | `node tests/compose-smoke.mjs baseline` | Lưu số lượng và dấu vết dữ liệu của stack Compose hiện tại. |
| Đối chiếu sau khởi động | `node tests/compose-smoke.mjs verify` | Kiểm tra dịch vụ, volume và dữ liệu so với bản baseline. |
| Menu trên trình duyệt | `node tests/compose-menu-browser.mjs` | Mở menu bằng Chrome headless, kiểm tra API và lỗi runtime, lưu ảnh màn hình. |

`checkout-smoke.mjs` là kịch bản được CI sử dụng trên stack dữ liệu thử nghiệm đã seed;
nó tạo một đơn và giao dịch mô phỏng. Khi chạy thủ công, dùng môi trường kiểm thử
riêng có tài khoản demo và dữ liệu menu tương ứng.

Hai kịch bản `compose-smoke.mjs` và `compose-menu-browser.mjs` đọc stack hiện có,
không tự seed hoặc reset database. Các bản đối chiếu và ảnh nằm trong
`.local-backups/` và không được đưa vào Git. Có thể truyền đường dẫn snapshot
khác ở tham số cuối của `compose-smoke.mjs`.

Kịch bản trình duyệt cần Chrome; đặt `CHROME_PATH` nếu trình duyệt không nằm ở
đường dẫn mặc định của script.

Các bộ kiểm thử theo ứng dụng tiếp tục chạy trong thư mục tương ứng:

- [API: unit, integration và browser](../apps/api/test/README.md): `npm.cmd test`, `npm.cmd run test:e2e` từ `apps/api`.
- [Web: component và luồng giao diện](../apps/web/test/README.md): `npm.cmd test` từ `apps/web`.

Integration test của API cần `TEST_DATABASE_URL` riêng, khác database ứng dụng.
Xem [hướng dẫn chạy local](../README.md) và [workflow CI](../.github/workflows/ci.yml).
