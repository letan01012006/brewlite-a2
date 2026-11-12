# Ma trận truy vết BrewLite A2

Bản khởi tạo cho Task 1. Gán mã FR/NFR khi nhóm duyệt SRS. Các dòng dưới đây ghi lại đầu mối có thể dùng lại từ A1 để nhóm điền liên kết thật theo từng PR.

| Mã yêu cầu | Use-case hoặc User Story | Sơ đồ hoặc thiết kế | Code hoặc API | Kiểm thử hoặc minh chứng |
| --- | --- | --- | --- | --- |
| Chờ mã FR cho menu | Khách xem danh sách và chi tiết đồ uống | Activity và class diagram ở Task 2 | `GET /api/products`, `GET /api/products/:id` | CI hiện kiểm tra tải danh sách món. Bổ sung liên kết đến ca kiểm thử chi tiết khi chốt SRS. |
| Chờ mã FR cho checkout | Khách đặt và thanh toán đơn | Sequence diagram ở Task 2 | `POST /api/orders`, `POST /api/payments`, `GET /api/orders/me` | CI hiện có kịch bản Ví mô phỏng thành công ở mức API. Bổ sung liên kết đến E2E trình duyệt ở Task 5. |

Các đường dẫn API ở trên lấy theo bản A1 dùng để khởi tạo A2. [Workflow CI hiện tại](../.github/workflows/ci.yml)
