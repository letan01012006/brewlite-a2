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

---

## Truy vết sơ đồ triển khai (Task 3.2)

Bảng đối chiếu giữa các thành phần triển khai trên sơ đồ [`docs/diagrams/deployment-production.puml`](./diagrams/deployment-production.puml), kiến trúc hệ thống và mã nguồn/cấu hình thực tế:

| Container / Dịch vụ | Thành phần kiến trúc | Mã nguồn & Cấu hình Docker | Biến môi trường & Secrets (Dạng TÊN) | Ghi chú vận hành |
|---|---|---|---|---|
| **Frontend Container** | Next.js 16 Standalone Web Application (Port 3000) | `apps/web/`<br>`apps/web/Dockerfile`<br>`apps/web/next.config.ts` | `PORT=3000`<br>`HOSTNAME=0.0.0.0`<br>`BACKEND_API_URL` (Build-arg đóng cứng) | Phục vụ khách hàng và barista. Proxy `/api/*` tới backend theo `BACKEND_API_URL`. |
| **Backend Container** | NestJS 12 Modular Monolith API Server (Port 4000) | `apps/api/`<br>`apps/api/Dockerfile`<br>`apps/api/docker-entrypoint.sh` | `PORT=4000`<br>`DATABASE_URL`<br>`JWT_SECRET`<br>`JWT_EXPIRES_IN`<br>`OTP_HASH_SECRET`<br>`PAYMENT_MOCK_ENABLED=true`<br>`TRUST_PROXY` | Global prefix `/api`. Tự động chạy `prisma migrate deploy` tại entrypoint. Bắt buộc `PAYMENT_MOCK_ENABLED=true` để bật thanh toán Ví/Thẻ mô phỏng tại Production. |
| **Database Service** | PostgreSQL 16 Relational Database (Port 5432) | `docker-compose.yml` (service `db`) | `POSTGRES_USER`<br>`POSTGRES_PASSWORD`<br>`POSTGRES_DB` | Mạng nội bộ riêng biệt (Private Network), không mở cổng Public IP ra ngoài Internet. Local dùng volume `brewlite_pgdata`; Production dùng persistent volume do nền tảng quản lý. |
| **Edge / Reverse Proxy** | Reverse Proxy & SSL/TLS Termination (Port 80/443) | Cấu hình nền tảng Production (Dự kiến) | Chứng chỉ SSL/TLS tự động (Let's Encrypt / Managed SSL) | Chấm dứt HTTPS tại cổng 443, điều hướng domain tới Frontend (:3000) và API (:4000). |
| **Container Registry** | GitHub Packages / GHCR (`ghcr.io`) | `.github/workflows/cd.yml` | `GITHUB_TOKEN` (`github.token`) | Lưu trữ các Docker image bất biến với tag `sha-<7 ký tự>` và `latest` (`ghcr.io/<owner>/brewlite-a2/frontend`, `backend`). |
| **CI/CD Automation** | GitHub Actions Workflows | `.github/workflows/ci.yml`<br>`.github/workflows/cd.yml` | `[TÊN SECRET DEPLOY (chưa cấu hình)]` | CI kiểm tra chất lượng (lint, test, build, compose smoke test); CD build & push image lên GHCR sau khi CI thành công trên `main`. |

> **Mô tả kiến trúc/ADR:** CẦN THÊM THÔNG TIN – thuộc Task 3.1, chưa có.

---

## Deploy production và rollback (Task 5.3)

Kế hoạch triển khai tự động (Continuous Deployment) và quy trình phục hồi (Rollback) cho môi trường Production:

### 1. Điều kiện kích hoạt triển khai (Trigger Conditions)
- Workflow CI chạy thành công 100% (xanh) trên nhánh `main`.
- Job `publish` trong `cd.yml` hoàn tất việc đóng gói và đẩy Docker image thành công lên GHCR.
- Triển khai sử dụng cơ chế Concurrency (`cancel-in-progress: false`) để tránh deploy xung đột khi có nhiều commit liên tiếp lên `main`.

### 2. Định danh và Quản lý Image bất biến (Immutable Artifacts)
- Mọi lần triển khai lên Production **bắt buộc dùng tag bất biến `sha-<7 ký tự>`** tương ứng với commit SHA được CI kiểm chứng (ví dụ `ghcr.io/letan01012006/brewlite-a2/backend:sha-c5aae74`).
- **Tuyệt đối không deploy bằng tag `latest`** để đảm bảo khả năng truy vết và độ tái lập chính xác khi cần rollback.

### 3. Cơ chế Database Migration & Rủi ro vận hành
- Script khởi động `apps/api/docker-entrypoint.sh` tự động thực thi lệnh `prisma migrate deploy` trước khi tiến trình NestJS lắng nghe kết nối.
- **Rủi ro nhận diện:**
  - Lệnh migration chạy tự động mỗi lần container khởi động lại; nếu migration bị lỗi, container backend sẽ crash và không khởi động API server, ngăn ngừa ứng dụng chạy trên schema sai.
  - Prisma không tự động rollback schema CSDL khi triển khai thất bại. Nếu code mới bị rollback về phiên bản cũ, schema đã thay đổi phải đảm bảo tính tương thích ngược (Backward Compatibility) hoặc nhóm vận hành phải chủ động áp dụng migration bù (Roll-forward / Compensating Migration), **tuyệt đối không xóa dữ liệu hay drop bảng**.

### 4. Kiểm tra sức khỏe & Smoke Test sau triển khai (Post-Deploy Health Checks)
- **Health Check Endpoint:** Gọi HTTP `GET /api/health` với cơ chế thử lại (Retry 5 lần, giãn cách 10s). Kỳ vọng phản hồi HTTP 200 OK cùng body JSON:
  ```json
  { "status": "ok", "db": "up" }
  ```
  Endpoint này thực thi truy vấn `SELECT 1` kiểm tra trực tiếp kết nối database.
- **Smoke Test chỉ đọc (Read-only Smoke Tests):**
  - Frontend Root: Gọi `GET /` kỳ vọng HTTP 200 OK.
  - Public Products API: Gọi `GET /api/products` kỳ vọng HTTP 200 OK và danh sách sản phẩm đang bán.
  - **Quy tắc an toàn:** Tuyệt đối KHÔNG chạy các mutation tạo đơn hay thanh toán tự động trên môi trường Production để tránh sinh dữ liệu rác.

### 5. Cấu hình biến môi trường bắt buộc tại Production
- `PAYMENT_MOCK_ENABLED=true`: Bắt buộc phải cấu hình biến này trên máy chủ Production để kích hoạt các phương thức thanh toán mô phỏng (`WALLET` và `CARD`). Nếu thiếu hoặc đặt `false`, hệ thống sẽ từ chối thanh toán với mã lỗi 400 `PAYMENT_METHOD_NOT_SUPPORTED`.
- Rủi ro đóng cứng URL: Image Frontend đóng gói `BACKEND_API_URL=http://backend:4000/api` lúc build. Do đó, trên Production, backend container phải nằm trong cùng network với hostname `backend:4000`, hoặc nền tảng triển khai phải hỗ trợ định tuyến nội bộ tương ứng.

### 6. Quy trình Rollback khi triển khai thất bại
- **Điều kiện kích hoạt Rollback:**
  - Container deploy thất bại, crash loop hoặc không vượt qua Health Check `GET /api/health` sau thời gian chờ tối đa (timeout).
  - Smoke test chỉ đọc trả về mã lỗi 5xx hoặc không kết nối được.
- **Hành động Rollback:**
  - Hệ thống tự động kích hoạt lại lệnh deploy sử dụng commit SHA ổn định liền trước (`previous stable SHA`).
  - Đối với CSDL: Nếu migration đã áp dụng schema mới nhưng code bị rollback, cần đánh giá tính tương thích: schema mới phải giữ nguyên các cột cũ để code phiên bản trước vẫn đọc/ghi bình thường; nếu phá vỡ tương thích, áp dụng migration sửa đổi bổ sung.
  - Ghi vết lỗi: Gửi cảnh báo thất bại kèm log chi tiết ra `stdout`/`stderr` và công cụ theo dõi của GitHub Actions.
