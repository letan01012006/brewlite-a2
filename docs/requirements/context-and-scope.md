# Bối cảnh, stakeholder và phạm vi BrewLite A2

Tài liệu Task 1.1 · Bản nháp để nhóm review

## 1. Bối cảnh và mục tiêu

Vào giờ đông khách, quầy cần tiếp nhận nhiều đơn đồ uống có tùy chọn khác nhau như kích cỡ và topping. Nếu thông tin đặt món và kết quả thanh toán được theo dõi riêng lẻ, khách khó biết đơn đang ở bước nào và nhân viên phải đối chiếu lại trước khi pha chế. BrewLite cho phép khách đặt món và theo dõi đơn trên web, đồng thời cung cấp cho nhân viên thông tin cần thiết để xử lý đơn tại quầy.

- Khách có thể xem menu, chọn tùy chọn, kiểm tra tổng tiền, đặt món, thanh toán và theo dõi đơn trong một luồng.
- Nhân viên quầy có thể xem đơn đã thanh toán và cập nhật tiến độ pha chế, chuẩn bị và bàn giao.
- Giảng viên và nhóm có thể chạy lại luồng từ menu đến xác nhận đơn trên môi trường kiểm thử, sau đó truy cập bản triển khai A2 qua HTTPS.

A2 kế thừa luồng đặt món, xác thực, trạng thái đơn, thanh toán và quản lý tồn kho từ A1. Bản nộp A2 sẽ dùng Ví/Thẻ mô phỏng cho luồng thanh toán được nghiệm thu. [Báo cáo A1](../BaoCao-PhanCong.pdf)

## 2. Stakeholder

| Stakeholder | Mục tiêu và kỳ vọng |
| --- | --- |
| Khách hàng | Xem món còn bán, chọn đúng kích cỡ và topping, biết tổng tiền trước khi đặt, nhận kết quả thanh toán và theo dõi đơn của mình. |
| Nhân viên quầy | Nhận thông tin món, số lượng và tùy chọn rõ ràng, biết đơn nào đã thanh toán, cập nhật tiến độ pha chế và bàn giao. |
| Quản lý cửa hàng | Có danh sách món và thông tin khả năng phục vụ đáng tin cậy để kiểm soát việc nhận đơn. |
| Giảng viên hoặc người nghiệm thu | Đối chiếu yêu cầu với sơ đồ, mã nguồn và kiểm thử, chạy lại luồng demo và truy cập bản A2 qua URL được cung cấp. |
| Nhóm phát triển | Thống nhất phạm vi, làm việc trên nhánh riêng, review thay đổi và có môi trường tái hiện lỗi. |
| Đơn vị cung cấp dịch vụ thanh toán | Xác định giao dịch theo đơn và số tiền, trả kết quả rõ ràng, xử lý nhất quán khi một yêu cầu được gửi lại. A2 mô phỏng vai trò này trong luồng nghiệm thu. |

## 3. Phạm vi MVP

| Nhóm chức năng | Phạm vi |
| --- | --- |
| Menu và tùy chọn | Xem danh sách món, chi tiết, giá, kích cỡ, topping và tình trạng có thể đặt. |
| Giỏ hàng | Thêm, sửa số lượng, xóa món và xem tổng tạm tính trước khi đặt. |
| Tài khoản | Đăng ký, đăng nhập và xác thực các thao tác đặt món, xem đơn bằng JWT. |
| Đặt đơn | Máy chủ kiểm tra dữ liệu, giá và khả năng đáp ứng từ tồn kho. Đơn hợp lệ bắt đầu ở trạng thái chờ thanh toán. |
| Thanh toán | Chọn Ví hoặc Thẻ mô phỏng. Có kịch bản thành công, thất bại và thử lại. Gửi lại cùng yêu cầu thanh toán chỉ ghi nhận một giao dịch. |
| Xác nhận và theo dõi | Khách xem kết quả và lịch sử đơn của mình. Nhân viên quầy cập nhật trạng thái theo quyền và luồng xử lý đơn. |
| Giao diện và bàn giao | Web mobile-first/PWA, kiểm thử luồng chính, chạy được bằng Docker Compose và có bản triển khai HTTPS với API và health check. |

## 4. Phần mở rộng và ngoài phạm vi

- **Mở rộng từ A1.** Tích hợp VNPAY Sandbox, tích và dùng điểm, voucher, quản lý chi tiết nguyên liệu, công thức, nhập kho và hao hụt. Kiểm tra khả năng đáp ứng tồn kho khi đặt món vẫn thuộc MVP.
- **Ngoài phạm vi bản nộp A2.** Giao hàng và định tuyến, đồng bộ kế toán và quyết toán tiền thật. Luồng Ví/Thẻ mô phỏng dùng dữ liệu demo.

## 5. Giả định và ràng buộc

| Loại | Nội dung |
| --- | --- |
| Giả định | Khách tự đặt trên trình duyệt và nhận đồ uống tại quầy. Nhóm dùng menu và tài khoản thử nghiệm để trình diễn. |
| Giả định | Bản demo thanh toán chạy được với dữ liệu mô phỏng, kể cả khi cổng VNPAY Sandbox hoặc nhà cung cấp SMS gặp gián đoạn. Cách xác thực dành cho demo sẽ được thống nhất khi viết SRS. |
| Ràng buộc công nghệ | Dùng Next.js, NestJS và PostgreSQL theo đề. Dùng Docker Compose để chạy web, API và cơ sở dữ liệu trên máy phát triển. |
| Ràng buộc bảo mật | Máy chủ kiểm tra quyền, giá và trạng thái đơn. Dữ liệu kiểm thử và thông tin cấu hình triển khai được quản lý riêng theo môi trường. |
| Ràng buộc quy trình | Các tạo phẩm từ Task 1 đến Task 5 được lưu trên GitHub theo trình tự của đề. Yêu cầu, sơ đồ, mã nguồn và kiểm thử được liên kết qua ma trận truy vết. |

## 6. Rủi ro ban đầu

| Rủi ro | Cách giảm thiểu |
| --- | --- |
| Nhiều khách cùng đặt món khi tồn kho gần hết | Kiểm tra ở máy chủ, cập nhật tồn kho theo cơ chế giao dịch của hệ thống và kiểm thử trường hợp đặt đồng thời. |
| Khách bấm thanh toán nhiều lần hoặc gửi lại khi mạng chậm | Dùng `Idempotency-Key` và kiểm thử yêu cầu lặp. Hiển thị kết quả theo trạng thái lưu trên máy chủ. |
| Môi trường demo phụ thuộc dịch vụ bên ngoài | Chuẩn bị thanh toán mô phỏng và dữ liệu seed. Kiểm tra luồng đăng nhập và đặt món trên bản demo trước khi bàn giao. |
| Tài liệu khác với code hoặc bản đã triển khai | Review theo từng task, cập nhật ma trận truy vết và kiểm tra health/smoke test sau khi triển khai. |

Khi nhóm duyệt Task 1.1, xác nhận phạm vi mở rộng và cách xác thực dành cho demo. Dùng quyết định đó để đặt mã FR/NFR và viết tiêu chí nghiệm thu trong Task 1.2.
