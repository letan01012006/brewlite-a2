# Triển khai BrewLite A2

## Cấu trúc và cấu hình

| Thành phần | Mã nguồn | Cấu hình |
| --- | --- | --- |
| Web Next.js | `apps/web` | `apps/web/.env.local` khi phát triển; biến môi trường/build argument khi đóng gói. |
| API NestJS | `apps/api` | `apps/api/.env`; sao chép từ `.env.example` ở thư mục gốc. |
| PostgreSQL | Service `db` trong Docker Compose | Volume `brewlite_pgdata`; thông tin kết nối API nằm trong cấu hình môi trường. |

Từ thư mục gốc, tạo file cấu hình nếu chưa có:

```powershell
if (-not (Test-Path apps/api/.env)) { Copy-Item .env.example apps/api/.env }
```

Cập nhật cấu hình theo [README](../README.md), sau đó chạy:

```powershell
docker compose up --build
docker compose ps
```

Compose build API từ `apps/api` và web từ `apps/web`. Tên service vẫn là `backend`,
`frontend` và `db`, tương ứng với các lệnh kiểm tra và kết nối nội bộ trong cấu hình.
Entrypoint API chờ database sẵn sàng rồi chạy migration trước khi khởi động.
Seed là thao tác riêng theo hướng dẫn trong README.

## CI/CD hiện có

- [CI](../.github/workflows/ci.yml) cài dependency, chạy lint, test và build cho hai ứng dụng, sau đó chạy stack Compose với dữ liệu thử nghiệm.
- CI gọi `node tests/checkout-smoke.mjs` để kiểm tra luồng đặt đơn và thanh toán mô phỏng.
- [CD](../.github/workflows/cd.yml) chạy sau khi CI thành công trên `main`, đóng gói từ `apps/api` và `apps/web`, rồi phát hành image lên GHCR.
- Image được đặt tên theo repository GitHub hiện tại, với hậu tố `backend`/`frontend` và tag `latest`, `sha-<commit>`.

Pipeline hiện có dừng ở bước phát hành image. Nền tảng production và bước tự động
triển khai lên nền tảng đó được xác định trong Task 3 và hoàn thiện ở Task 5.

## Điều kiện bàn giao production

Theo phạm vi A2, bản triển khai cần có URL frontend qua HTTPS, URL API và health
check, database không public trực tiếp, cấu hình bí mật được quản lý ngoài Git.

Khi chọn nền tảng, cập nhật ADR, deployment diagram và tài liệu này với cách cấu
hình, chạy migration, kiểm tra sau triển khai và rollback phù hợp. Chưa có URL
production được xác nhận trong tài liệu này.

## Kiểm tra và bảo toàn dữ liệu local

Để đối chiếu stack Compose trước/sau khi khởi động lại:

```powershell
node tests/compose-smoke.mjs baseline
docker compose up --build --wait
node tests/compose-smoke.mjs verify
```

Các lệnh này đối chiếu dữ liệu hiện có và volume được dùng. Dùng `docker compose stop`
để dừng và giữ dữ liệu. Xem thêm [các kịch bản kiểm thử](../tests/README.md).
