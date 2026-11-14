# Ma trận truy vết yêu cầu phần mềm BrewLite A2 (Requirements Traceability Matrix)

**Dự án:** BrewLite A2 — Hệ thống đặt đồ uống tại quầy (MVP)  
**Phiên bản:** 2.0 (Cập nhật sau Task 1.3)  
**Ngày cập nhật:** 13/11/2026  
**Tài liệu cơ sở:**
- [Bối cảnh và Phạm vi hệ thống (Task 1.1)](./requirements/context-and-scope.md)
- [Đặc tả yêu cầu phần mềm rút gọn - SRS (Task 1.2)](./requirements/srs.md)
- [Đặc tả Use-Case trọng tâm: Đặt và thanh toán đơn hàng (Task 1.3)](./requirements/use-case-uc06-uc07-dat-va-thanh-toan.md)
- [Sơ đồ Use-Case tổng quát](./diagrams/use-case-overview.svg) ([Nguồn PUML](./diagrams/use-case-overview.puml))
- [Sơ đồ Use-Case Đặt và thanh toán](./diagrams/use-case-checkout.svg) ([Nguồn PUML](./diagrams/use-case-checkout.puml))

---

## 1. Giới thiệu & Hướng dẫn đọc ma trận

Ma trận truy vết (RTM) này thiết lập mối liên kết hai chiều (bidirectional traceability) giữa:
1. **Mục tiêu & Yêu cầu:** Mã yêu cầu chức năng (`FR-01` .. `FR-30`) và phi chức năng (`NFR-01` .. `NFR-15`).
2. **Thiết kế & Phân tích:** Use-Case nghiệp vụ (`UC-01` .. `UC-12`) và tài liệu đặc tả chi tiết.
3. **Mã nguồn (Implementation):** Các module, dịch vụ trong `apps/api` và các trang/component trong `apps/web`.
4. **Kiểm thử (Verification & Validation):** Kịch bản nghiệm thu cốt lõi (`AT-01` .. `AT-08`) và mã ca kiểm thử tự động (`TC-*`).

---

## 2. Ma trận truy vết Yêu cầu chức năng (Functional Requirements — FR)

| Mã FR | Tên yêu cầu chức năng | Mức | Use-Case | Sơ đồ & Tài liệu chi tiết | Vị trí mã nguồn (API / Web) | Kịch bản / Ca kiểm thử | Trạng thái Task |
|:---:|---|:---:|:---:|---|---|:---:|:---:|
| **FR-01** | Xem danh sách món đang bán | Must | UC-01 | [use-case-overview.svg](./diagrams/use-case-overview.svg)<br>[srs.md](./requirements/srs.md) | `GET /api/products`<br>`apps/web/src/app/(shop)/page.tsx` | AT-01<br>`TC-FR-01` | Sẵn sàng test (A1) |
| **FR-02** | Trạng thái tải của menu (Loading/Empty/Error) | Must | UC-01 | [srs.md](./requirements/srs.md) | `apps/web/src/app/(shop)/page.tsx` | AT-07<br>`TC-FR-02` | Sẵn sàng test (A1) |
| **FR-03** | Tìm kiếm và lọc menu theo danh mục | Should | UC-01 | [srs.md](./requirements/srs.md) | `GET /api/products?search=&category=`<br>`apps/web/src/components/menu/` | AT-07<br>`TC-FR-03` | Sẵn sàng test (A1) |
| **FR-04** | Xem chi tiết sản phẩm | Must | UC-02 | [use-case-overview.svg](./diagrams/use-case-overview.svg)<br>[srs.md](./requirements/srs.md) | `GET /api/products/:id`<br>`apps/web/src/app/(shop)/products/[id]/` | AT-01<br>`TC-FR-04` | Sẵn sàng test (A1) |
| **FR-05** | Chọn size (S/M/L), topping (tối đa 3), số lượng (1-20) | Must | UC-02 | [use-case-overview.svg](./diagrams/use-case-overview.svg)<br>[srs.md](./requirements/srs.md) | `apps/web/src/components/product/`<br>`apps/api/src/modules/orders/dto/` | AT-01<br>`TC-FR-05` | Sẵn sàng test (A1) |
| **FR-06** | Hiển thị tạm tính theo lựa chọn | Must | UC-02 | [srs.md](./requirements/srs.md) | `apps/web/src/lib/pricing.ts`<br>`apps/api/src/modules/orders/pricing.service.ts` | AT-06<br>`TC-FR-06` | Sẵn sàng test (A1) |
| **FR-07** | Thêm sản phẩm vào giỏ hàng | Must | UC-03 | [use-case-overview.svg](./diagrams/use-case-overview.svg)<br>[srs.md](./requirements/srs.md) | `apps/web/src/store/cart-store.ts` | AT-01<br>`TC-FR-07` | Sẵn sàng test (A1) |
| **FR-08** | Sửa số lượng và xóa món khỏi giỏ | Must | UC-03 | [srs.md](./requirements/srs.md) | `apps/web/src/store/cart-store.ts`<br>`apps/web/src/app/(shop)/cart/` | AT-01<br>`TC-FR-08` | Sẵn sàng test (A1) |
| **FR-09** | Tính tổng tiền giỏ hàng trước khi đặt | Must | UC-03 | [srs.md](./requirements/srs.md) | `apps/web/src/store/cart-store.ts` | AT-01, AT-06<br>`TC-FR-09` | Sẵn sàng test (A1) |
| **FR-10** | Giữ giỏ hàng sau khi tải lại trang | Could | UC-03 | [srs.md](./requirements/srs.md) | `apps/web/src/store/cart-store.ts` (localStorage/persist) | AT-07<br>`TC-FR-10` | Sẵn sàng test (A1) |
| **FR-11** | Đăng ký tài khoản và xác minh OTP | Must | UC-04 | [use-case-overview.svg](./diagrams/use-case-overview.svg)<br>[srs.md](./requirements/srs.md) | `POST /api/auth/register`<br>`POST /api/auth/verify-otp` | AT-01, AT-02<br>`TC-FR-11` | Sẵn sàng test (A1) |
| **FR-12** | Đăng nhập tài khoản (JWT) | Must | UC-05 | [use-case-checkout.svg](./diagrams/use-case-checkout.svg)<br>[use-case-uc06-uc07.md](./requirements/use-case-uc06-uc07-dat-va-thanh-toan.md#mục-5) | `POST /api/auth/login`<br>`apps/web/src/store/auth-store.ts` | AT-01, AT-02<br>`TC-FR-12` | Đã đặc tả Task 1.3 |
| **FR-13** | Phân quyền truy cập đơn (CUSTOMER / BARISTA) | Must | UC-05<br>UC-09 | [use-case-uc06-uc07.md](./requirements/use-case-uc06-uc07-dat-va-thanh-toan.md#mục-6) | `apps/api/src/common/guards/roles.guard.ts`<br>`GET /api/orders/:id` | AT-02<br>`TC-FR-13` | Đã đặc tả Task 1.3 |
| **FR-14** | Gửi lại mã OTP (Rate-limit 60s) | Should | UC-04 | [srs.md](./requirements/srs.md) | `POST /api/auth/resend-otp`<br>`apps/api/src/modules/auth/` | AT-02<br>`TC-FR-14` | Sẵn sàng test (A1) |
| **FR-15** | Tạo đơn hàng từ giỏ (Trạng thái PENDING) | Must | **UC-06** | [use-case-checkout.svg](./diagrams/use-case-checkout.svg)<br>[use-case-uc06-uc07.md](./requirements/use-case-uc06-uc07-dat-va-thanh-toan.md#mục-5) | `POST /api/orders`<br>`apps/api/src/modules/orders/orders.service.ts` | AT-01<br>`TC-FR-15` | **Trọng tâm Task 1.3** |
| **FR-16** | Tính lại giá độc lập tại máy chủ | Must | **UC-06** | [use-case-checkout.svg](./diagrams/use-case-checkout.svg)<br>[use-case-uc06-uc07.md](./requirements/use-case-uc06-uc07-dat-va-thanh-toan.md#br-02) | `apps/api/src/modules/orders/pricing.service.ts` | AT-06<br>`TC-FR-16` | **Trọng tâm Task 1.3** |
| **FR-17** | Kiểm tra khả dụng nguyên liệu (2 giai đoạn) | Must | **UC-06**<br>**UC-07** | [use-case-checkout.svg](./diagrams/use-case-checkout.svg)<br>[use-case-uc06-uc07.md](./requirements/use-case-uc06-uc07-dat-va-thanh-toan.md#br-03) | `apps/api/src/modules/inventory/inventory.service.ts` | AT-03<br>`TC-FR-17` | **Trọng tâm Task 1.3** |
| **FR-18** | Chống tạo đơn trùng khi gửi lại (Idempotency) | Must | **UC-06** | [use-case-checkout.svg](./diagrams/use-case-checkout.svg)<br>[use-case-uc06-uc07.md](./requirements/use-case-uc06-uc07-dat-va-thanh-toan.md#br-04) | `apps/api/src/modules/orders/orders.service.ts` (Idempotency interceptor/check) | AT-04<br>`TC-FR-18` | **Trọng tâm Task 1.3** |
| **FR-19** | Chọn Ví/Thẻ mô phỏng (WALLET / CARD) | Must | **UC-07** | [use-case-checkout.svg](./diagrams/use-case-checkout.svg)<br>[use-case-uc06-uc07.md](./requirements/use-case-uc06-uc07-dat-va-thanh-toan.md#mục-5) | `POST /api/payments`<br>`apps/api/src/modules/payments/mock-payment.service.ts` | AT-01<br>`TC-FR-19` | **Trọng tâm Task 1.3** (UI bổ sung Task 5.1) |
| **FR-20** | Ghi nhận thanh toán thành công/thất bại | Must | **UC-07** | [use-case-checkout.svg](./diagrams/use-case-checkout.svg)<br>[use-case-uc06-uc07.md](./requirements/use-case-uc06-uc07-dat-va-thanh-toan.md#mục-5) | `apps/api/src/modules/payments/payments.service.ts` | AT-01, AT-05<br>`TC-FR-20` | **Trọng tâm Task 1.3** |
| **FR-21** | Chống thanh toán lặp (Payment Idempotency) | Must | **UC-07** | [use-case-checkout.svg](./diagrams/use-case-checkout.svg)<br>[use-case-uc06-uc07.md](./requirements/use-case-uc06-uc07-dat-va-thanh-toan.md#br-04) | `apps/api/src/modules/payments/payments.service.ts` | AT-04<br>`TC-FR-21` | **Trọng tâm Task 1.3** |
| **FR-22** | Nhất quán tồn kho khi đặt đồng thời | Must | **UC-07** | [use-case-checkout.svg](./diagrams/use-case-checkout.svg)<br>[use-case-uc06-uc07.md](./requirements/use-case-uc06-uc07-dat-va-thanh-toan.md#br-03) | `SELECT ... FOR UPDATE` + atomic reservation in `payments.service.ts` | AT-03<br>`TC-FR-22` | **Trọng tâm Task 1.3** |
| **FR-23** | Xác nhận sau khi đặt và thanh toán | Must | **UC-07**<br>UC-09 | [use-case-checkout.svg](./diagrams/use-case-checkout.svg)<br>[use-case-uc06-uc07.md](./requirements/use-case-uc06-uc07-dat-va-thanh-toan.md#mục-5) | `apps/web/src/app/(shop)/checkout/page.tsx`<br>`apps/web/src/app/(shop)/orders/[id]/` | AT-01<br>`TC-FR-23` | **Trọng tâm Task 1.3** |
| **FR-24** | Xem lịch sử đơn hàng của mình | Must | UC-08 | [use-case-overview.svg](./diagrams/use-case-overview.svg)<br>[srs.md](./requirements/srs.md) | `GET /api/orders/me`<br>`apps/web/src/app/(shop)/orders/` | AT-01<br>`TC-FR-24` | Sẵn sàng test (A1) |
| **FR-25** | Xem chi tiết và tiến độ đơn (PAID/PREPARING/READY) | Must | UC-09 | [use-case-overview.svg](./diagrams/use-case-overview.svg)<br>[srs.md](./requirements/srs.md) | `GET /api/orders/:id`<br>`apps/web/src/app/(shop)/orders/[id]/` | AT-01<br>`TC-FR-25` | Sẵn sàng test (A1) |
| **FR-26** | Lọc lịch sử theo trạng thái đơn | Could | UC-08 | [srs.md](./requirements/srs.md) | `GET /api/orders/me?status=`<br>`apps/web/src/app/(shop)/orders/` | AT-07<br>`TC-FR-26` | Sẵn sàng test (A1) |
| **FR-27** | Nhân viên quầy xem hàng đợi pha chế | Must | UC-10 | [use-case-overview.svg](./diagrams/use-case-overview.svg)<br>[srs.md](./requirements/srs.md) | `GET /api/orders/active`<br>`apps/web/src/app/barista/` | AT-01, AT-02<br>`TC-FR-27` | Sẵn sàng test (A1) |
| **FR-28** | Nhân viên cập nhật trạng thái (PAID → PREPARING → READY) | Must | UC-11 | [use-case-overview.svg](./diagrams/use-case-overview.svg)<br>[srs.md](./requirements/srs.md) | `PATCH /api/orders/:id/status`<br>`apps/api/src/modules/orders/` | AT-01, AT-02<br>`TC-FR-28` | Sẵn sàng test (A1) |
| **FR-29** | Bàn giao đơn tại quầy (READY → COMPLETED) | Must | UC-12 | [use-case-overview.svg](./diagrams/use-case-overview.svg)<br>[srs.md](./requirements/srs.md) | `PATCH /api/orders/:id/status`<br>`apps/web/src/app/barista/` | AT-01<br>`TC-FR-29` | Sẵn sàng test (A1) |
| **FR-30** | Xử lý đơn PENDING quá hạn (15 phút) | Should | **UC-06** | [use-case-checkout.svg](./diagrams/use-case-checkout.svg)<br>[use-case-uc06-uc07.md](./requirements/use-case-uc06-uc07-dat-va-thanh-toan.md#br-05) | `apps/api/src/modules/orders/order-expiry.job.ts` | AT-04<br>`TC-FR-30` | **Trọng tâm Task 1.3** |

---

## 3. Ma trận truy vết Yêu cầu phi chức năng (Non-Functional Requirements — NFR)

| Mã NFR | Nhóm chất lượng | Tiêu chí kỹ thuật & Ngưỡng chấp nhận | Use-Case liên quan | Vị trí kiểm chứng / Triển khai | Kịch bản / Ca test | Trạng thái Task |
|:---:|---|---|:---:|---|:---:|:---:|
| **NFR-01** | Hiệu năng | Đọc menu p95 $\le$ 1.5s với 30 CCU, lỗi < 1% | UC-01, UC-02 | K6 / autocannon tải `GET /api/products` | AT-07<br>`TC-NFR-01` | Chờ đo nghiệm thu |
| **NFR-02** | Hiệu năng | Đặt và thanh toán mô phỏng p95 $\le$ 3.0s với 20 CCU | **UC-06, UC-07** | K6 tải `POST /api/orders`, `POST /api/payments` | AT-01<br>`TC-NFR-02` | **Đặc tả Task 1.3** |
| **NFR-03** | Bảo mật | 100% chặn 401/403 khi thiếu token, token hết hạn, sai vai trò | UC-04, **UC-06**, **UC-07**, UC-10..12 | Unit/Integration tests cho JwtAuthGuard, RolesGuard | AT-02<br>`TC-NFR-03` | **Đặc tả Task 1.3** |
| **NFR-04** | Bảo mật | Production chạy HTTPS; secret lấy từ biến môi trường | Toàn hệ thống | Docker Compose, Caddy/Nginx reverse proxy, CI secret scanner | AT-08<br>`TC-NFR-04` | Task 3 (Triển khai) |
| **NFR-05** | Tin cậy | Toàn vẹn giao dịch: không đơn trùng, không tồn kho âm | **UC-06, UC-07** | Prisma transaction, `IdempotencyInterceptor`, locking | AT-03, AT-04<br>`TC-NFR-05` | **Đặc tả Task 1.3** |
| **NFR-06** | Khả dụng | Tỷ lệ sẵn sàng /api/health $\ge$ 99% trong 24 giờ | Toàn hệ thống | `GET /api/health`, uptime robot monitor | AT-08<br>`TC-NFR-06` | Task 3 (Triển khai) |
| **NFR-07** | Khả dụng | Giao diện mobile-first (360x800, 768x1024, 1280x800 px) | Toàn bộ web UI | Tailwind CSS responsive classes, Playwright viewport tests | AT-07<br>`TC-NFR-07` | Sẵn sàng test |
| **NFR-08** | Khả dụng | Web App Manifest hợp lệ, có thể cài đặt PWA | Toàn bộ web UI | `apps/web/public/manifest.json`, Lighthouse PWA audit | AT-07<br>`TC-NFR-08` | Sprint 2 (Task 5) |
| **NFR-09** | Triển khai | Tái triển khai dễ dàng qua Docker Compose và migration | Toàn hệ thống | `docker-compose.yml`, `prisma migrate deploy` | AT-08<br>`TC-NFR-09` | Task 3 (Triển khai) |
| **NFR-10** | Triển khai | CI Pipeline tự động chạy lint, unit test, build cho PR | Toàn hệ thống | `.github/workflows/ci.yml` | AT-08<br>`TC-NFR-10` | Đang hoạt động |
| **NFR-11** | Khả dụng | Giám sát /api/health và mã lỗi thân thiện, không lộ secret | **UC-06, UC-07**, toàn hệ thống | Global exception filter, sanitizing loggers | AT-07, AT-08<br>`TC-NFR-11` | **Đặc tả Task 1.3** |
| **NFR-12** | Khả dụng | $\ge$ 4/5 người thử nghiệm hoàn tất đặt món $\le$ 5 phút | **UC-06, UC-07** | User Acceptance Testing (UAT) với khách hàng | AT-01<br>`TC-NFR-12` | Kế hoạch Task 5 |
| **NFR-13** | Khả dụng | Tương thích 100% smoke test trên Chrome, Edge và Android | Toàn bộ web UI | Cross-browser smoke testing | AT-07<br>`TC-NFR-13` | Kế hoạch Task 5 |
| **NFR-14** | Bảo trì | 100% yêu cầu Must có mã, liên kết RTM và ca kiểm thử | Toàn hệ thống | `docs/traceability-matrix.md` (Tài liệu này) | —<br>`TC-NFR-14` | **Hoàn thành Task 1.3** |
| **NFR-15** | Tin cậy | Xử lý ngắt mạng an toàn, không báo nhầm đơn PAID | **UC-06, UC-07** | Session storage retry logic trong `checkout-flow.ts` | AT-04, AT-07<br>`TC-NFR-15` | **Đặc tả Task 1.3** |

---

## 4. Ma trận loại trừ (Won't Requirements — W-01 .. W-07)

| Mã | Nội dung loại trừ (Won't) | Ranh giới cam kết nghiệm thu MVP A2 | Ghi chú đối chiếu mã nguồn |
|:---:|---|---|---|
| **W-01** | VNPAY Sandbox & tiền thật | Chỉ nghiệm thu Ví/Thẻ mô phỏng (`WALLET`/`CARD`). | Mã VNPAY kế thừa không nằm trong cam kết nghiệm thu Task 1.3. |
| **W-02** | Voucher & Loyalty Points | Không bắt buộc kịch bản nghiệm thu voucher/điểm thưởng trong MVP. | Giữ cấu trúc domain tương thích, không đưa vào luồng kiểm thử bắt buộc. |
| **W-03** | Quản lý kho chi tiết | Không làm giao diện nhập kho hay điều chỉnh định lượng tồn. | Chỉ kiểm tra đủ tồn kho lúc tạo đơn và lúc thanh toán (`FR-17`, `FR-22`). |
| **W-04** | Giao hàng tận nơi & Nhiều chi nhánh | Chỉ nhận đồ uống tại quầy của 1 cửa hàng duy nhất. | Không có trường địa chỉ giao hàng, không tính phí ship, không chọn chi nhánh. |
| **W-05** | Đặt món Offline & Push Notification | Bắt buộc có kết nối Internet để đặt món và theo dõi đơn. | Không hỗ trợ offline sync, không cài đặt Web Push service. |
| **W-06** | Cổng quản trị (Admin Portal) | Chỉ phục vụ 2 tác nhân nghiệp vụ: Khách hàng và Nhân viên quầy. | Quản lý/Chủ quán là stakeholder, không có UI quản trị riêng trong MVP. |
| **W-07** | Khách hàng tự hủy đơn & Hoàn tiền | Không cung cấp tính năng tự hủy đơn sau khi đã thanh toán. | Đơn chỉ chuyển `CANCELLED` khi hết hạn 15 phút chưa thanh toán (`FR-30`). |

---

## 5. Kết luận ma trận Task 1.3
- **100%** 30 yêu cầu chức năng (FR) và 15 yêu cầu phi chức năng (NFR) đã được gán mã chuẩn, phân loại ưu tiên MoSCoW và liên kết đầy đủ tới Use-Case, mã nguồn và kịch bản nghiệm thu.
- **17 mã yêu cầu trọng tâm** liên quan đến quy trình Checkout (`FR-12`, `FR-13`, `FR-15`..`FR-23`, `FR-30`, `NFR-02`, `NFR-03`, `NFR-05`, `NFR-11`, `NFR-15`) đã được đặc tả sâu tại [`docs/requirements/use-case-uc06-uc07-dat-va-thanh-toan.md`](./requirements/use-case-uc06-uc07-dat-va-thanh-toan.md).
- Ma trận sẽ tiếp tục được cập nhật ở Task 2 (Thiết kế phần mềm) và Task 3 (Kế hoạch triển khai & Kiểm thử tự động).
