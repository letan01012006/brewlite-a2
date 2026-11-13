# Ma trận truy vết BrewLite A2 – Task 1.2

**Trạng thái:** Liên kết đề xuất từ SRS sang use-case, mã nguồn và ca kiểm thử. Cột `TC-*` là mã ca kiểm thử cần viết/chạy, **không đồng nghĩa đã pass**.

| Mã yêu cầu | Ưu tiên | Use-case | API / module liên quan | Ca nghiệm thu dự kiến |
|---|---|---|---|---|
| FR-01 | Must | UC-01 | GET /api/products | TC-FR-01 |
| FR-02 | Must | UC-01 | GET /api/products | TC-FR-02 |
| FR-03 | Should | UC-01 | GET /api/products | TC-FR-03 |
| FR-04 | Must | UC-02 | GET /api/products/:id | TC-FR-04 |
| FR-05 | Must | UC-02 | GET /api/products/:id | TC-FR-05 |
| FR-06 | Must | UC-02 | GET /api/products/:id | TC-FR-06 |
| FR-07 | Must | UC-03 | Web: cart store | TC-FR-07 |
| FR-08 | Must | UC-03 | Web: cart store | TC-FR-08 |
| FR-09 | Must | UC-03 | Web: cart store | TC-FR-09 |
| FR-10 | Could | UC-03 | Web: cart store | TC-FR-10 |
| FR-11 | Must | UC-04 | POST /api/auth/register, verify-otp, resend-otp | TC-FR-11 |
| FR-12 | Must | UC-05 | POST /api/auth/login | TC-FR-12 |
| FR-13 | Must | UC-05 / UC-09 | POST /api/auth/login; GET /api/orders/:id | TC-FR-13 |
| FR-14 | Should | UC-04 | POST /api/auth/register, verify-otp, resend-otp | TC-FR-14 |
| FR-15 | Must | UC-06 | POST /api/orders | TC-FR-15 |
| FR-16 | Must | UC-06 | POST /api/orders | TC-FR-16 |
| FR-17 | Must | UC-06 / UC-07 | POST /api/orders; POST /api/payments | TC-FR-17 |
| FR-18 | Must | UC-06 | POST /api/orders | TC-FR-18 |
| FR-19 | Must | UC-07 | POST /api/payments | TC-FR-19 |
| FR-20 | Must | UC-07 | POST /api/payments | TC-FR-20 |
| FR-21 | Must | UC-07 | POST /api/payments | TC-FR-21 |
| FR-22 | Must | UC-07 | POST /api/payments | TC-FR-22 |
| FR-23 | Must | UC-07 / UC-09 | POST /api/payments; GET /api/orders/:id | TC-FR-23 |
| FR-24 | Must | UC-08 | GET /api/orders/me | TC-FR-24 |
| FR-25 | Must | UC-09 | GET /api/orders/:id | TC-FR-25 |
| FR-26 | Could | UC-08 | GET /api/orders/me | TC-FR-26 |
| FR-27 | Must | UC-10 | GET /api/orders/active | TC-FR-27 |
| FR-28 | Must | UC-11 | PATCH /api/orders/:id/status | TC-FR-28 |
| FR-29 | Must | UC-12 | PATCH /api/orders/:id/status | TC-FR-29 |
| FR-30 | Should | UC-06 | POST /api/orders | TC-FR-30 |
| NFR-01 | Must | Đa use-case (Hiệu năng) | Web / API / CI / deployment | TC-NFR-01 |
| NFR-02 | Must | Đa use-case (Hiệu năng) | Web / API / CI / deployment | TC-NFR-02 |
| NFR-03 | Must | Đa use-case (Bảo mật) | Web / API / CI / deployment | TC-NFR-03 |
| NFR-04 | Must | Đa use-case (Bảo mật) | Web / API / CI / deployment | TC-NFR-04 |
| NFR-05 | Must | Đa use-case (Tin cậy) | Web / API / CI / deployment | TC-NFR-05 |
| NFR-06 | Must | Đa use-case (Khả dụng) | Web / API / CI / deployment | TC-NFR-06 |
| NFR-07 | Must | Đa use-case (Khả dụng) | Web / API / CI / deployment | TC-NFR-07 |
| NFR-08 | Must | Đa use-case (Khả dụng) | Web / API / CI / deployment | TC-NFR-08 |
| NFR-09 | Must | Đa use-case (Triển khai) | Web / API / CI / deployment | TC-NFR-09 |
| NFR-10 | Must | Đa use-case (Triển khai) | Web / API / CI / deployment | TC-NFR-10 |
| NFR-11 | Must | Đa use-case (Khả dụng) | Web / API / CI / deployment | TC-NFR-11 |
| NFR-12 | Should | Đa use-case (Khả dụng) | Web / API / CI / deployment | TC-NFR-12 |
| NFR-13 | Should | Đa use-case (Khả dụng) | Web / API / CI / deployment | TC-NFR-13 |
| NFR-14 | Must | Đa use-case (Bảo trì) | Web / API / CI / deployment | TC-NFR-14 |
| NFR-15 | Should | Đa use-case (Tin cậy) | Web / API / CI / deployment | TC-NFR-15 |

Các test cần bổ sung và đo thực tế. Xem chi tiết tiêu chí kiểm chứng tại `docs/requirements/srs.md`.
