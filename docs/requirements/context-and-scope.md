# Bối cảnh, stakeholder và phạm vi hệ thống BrewLite A2

Tài liệu xác định vấn đề nghiệp vụ, các bên liên quan và ranh giới sản phẩm của BrewLite A2. Các nội dung được mô tả là phạm vi cần hoàn thành, không phải kết quả đã kiểm thử hoặc nghiệm thu.

Danh mục FR/NFR, mức ưu tiên MoSCoW và tiêu chí nghiệm thu chi tiết thuộc **SRS - Task 1.2**. Actor và use-case được hoàn thiện ở **Task 1.3**; chi tiết xử lý và triển khai được mô tả ở Task 2 và Task 3.

---

## 1. Bối cảnh và mục tiêu

### 1.1. Thực trạng đặt đồ uống tại quầy

Trong quy trình phục vụ trực tiếp, khách chờ đến lượt để gọi món, trao đổi size/topping và xác nhận thanh toán với nhân viên. Vào giờ cao điểm, nhiều đơn được tiếp nhận cùng lúc khiến nhân viên phải chia thời gian giữa nhận món và phối hợp pha chế. Thông tin truyền miệng hoặc ghi riêng dễ bị thiếu, còn khách khó biết đơn của mình đang được xử lý đến đâu.

| Vấn đề | Ảnh hưởng | Mục tiêu của BrewLite |
| --- | --- | --- |
| Khách xếp hàng chờ nhân viên nhận món vào giờ cao điểm. | Quầy quá tải, khách mất thời gian chờ gọi món. | Cho khách tự xem menu, chọn và đặt món trên web để giảm thời gian chờ tiếp nhận đơn. |
| Size, topping và số lượng được trao đổi bằng lời hoặc ghi riêng. | Ghi thiếu, pha sai, phải hỏi lại hoặc làm lại món. | Lưu thông tin từng món nhất quán từ giỏ hàng đến màn hình tại quầy. |
| Giá tùy chọn, tổng tiền và kết quả thanh toán phải đối chiếu qua nhiều bước. | Khách khó kiểm tra chi phí; nhân viên mất thời gian xác nhận đã trả tiền. | Hiển thị tổng tiền trước khi đặt và gắn kết quả thanh toán với đúng đơn. |
| Lượng hàng còn lại thay đổi khi nhiều khách cùng đặt. | Có thể nhận đơn vượt khả năng phục vụ, phải điều chỉnh hoặc từ chối đơn. | Kiểm tra đủ tồn khi đặt và kiểm tra lại trước khi xác nhận thanh toán. |
| Khách không thấy tiến độ pha chế và thời điểm món sẵn sàng. | Phải hỏi lại, làm gián đoạn công việc tại quầy. | Cho khách theo dõi đơn và nhân viên cập nhật tiến độ theo quyền. |

### 1.2. Định hướng giải quyết của BrewLite

BrewLite chuyển các bước xem menu, chọn món, đặt đơn và thanh toán lên web theo hướng mobile-first. Nhân viên quầy tiếp nhận thông tin đơn đã được ghi nhận thống nhất, tập trung pha chế và bàn giao.

- **Khách tự đặt món:** xem giá, lựa chọn size/topping, kiểm tra giỏ hàng và xác nhận nội dung trước khi gửi đơn.
- **Thanh toán gắn với đơn:** sử dụng Ví/Thẻ mô phỏng, nhận kết quả rõ ràng và không bị ghi nhận thêm giao dịch khi gửi lại cùng yêu cầu.
- **Nhận đơn phù hợp khả năng phục vụ:** kiểm tra tồn kho khi đặt và khi thanh toán, kể cả lúc nhiều khách đặt đồng thời.
- **Phối hợp khách và quầy:** khách theo dõi tiến độ; nhân viên cập nhật các mốc pha chế, sẵn sàng nhận và bàn giao.

Mục tiêu là giảm thời gian chờ ở bước gọi món và giảm sai sót khi phục vụ. Thời gian pha chế vẫn phụ thuộc số lượng đơn và năng lực cửa hàng.

### 1.3. Mục tiêu đánh giá MVP

Các chỉ số dưới đây là mục tiêu của bản nộp, chưa phải kết quả đã đo. Cách đo, bộ dữ liệu và tiêu chí chấp nhận tương ứng được cụ thể hóa trong SRS ở Task 1.2.

| Mã | Mục tiêu | Phạm vi đánh giá |
| --- | --- | --- |
| G-01 | Ít nhất 4/5 người dùng thử tự hoàn tất một đơn mà không cần hướng dẫn trực tiếp. | Từ menu đến xác nhận đơn, dùng tài khoản thử nghiệm đã chuẩn bị. |
| G-02 | 100% đơn demo hiển thị đúng món, size, topping, số lượng và tổng tiền giữa khách và quầy. | Bộ kịch bản demo được xác định trong SRS. |
| G-03 | Không ghi nhận thanh toán thành công cho đơn thiếu hàng hoặc ghi nhận lặp cùng lần thanh toán. | Các kịch bản thiếu hàng, đặt đồng thời và gửi lại yêu cầu. |
| G-04 | 100% đơn demo được phục vụ theo luồng chính theo dõi được các mốc pha chế, sẵn sàng nhận và bàn giao. | Luồng phục vụ tại quầy; tình huống từ chối đơn được đánh giá riêng. |

---

## 2. Stakeholder

### 2.1. Các bên liên quan

| STT | Stakeholder | Vai trò | Mục tiêu | Kỳ vọng | Actor trong hệ thống |
| --- | --- | --- | --- | --- | --- |
| 1 | **Khách hàng** | Xem món, đặt, thanh toán và nhận đồ uống. | Đặt đúng nhu cầu, biết chi phí và tiến độ. | Dễ dùng trên điện thoại; tùy chọn rõ ràng; xem được kết quả và lịch sử đơn của mình. | Customer - tương tác trực tiếp. |
| 2 | **Nhân viên quầy** | Tiếp nhận đơn, pha chế, cập nhật tiến độ và bàn giao. | Xử lý đúng món, tránh bỏ sót đơn. | Thấy đủ món, size, topping, số lượng và thanh toán; cập nhật được tiến độ theo quyền. | Barista - tương tác trực tiếp. |
| 3 | **Quản lý cửa hàng** | Cung cấp quy tắc phục vụ và góp ý vận hành. | Kiểm soát khả năng nhận đơn và sai sót phục vụ. | Thông tin đơn, thanh toán và khả năng phục vụ nhất quán; phạm vi quản trị được xác định rõ. | Không có actor quản trị riêng trong MVP. |
| 4 | **Giảng viên/người nghiệm thu** | Đánh giá tạo phẩm và sản phẩm theo đề. | Kiểm chứng yêu cầu, thiết kế, code, kiểm thử và triển khai. | Chạy lại được demo, có truy vết và bản production qua HTTPS. | Không có actor riêng; dùng vai trò thử nghiệm khi đánh giá. |
| 5 | **Nhóm phát triển** | Phân tích, xây dựng, kiểm thử, triển khai và cập nhật tài liệu. | Hoàn thành MVP qua hai Sprint. | Phạm vi rõ, phối hợp được giữa frontend/backend và tái tạo được môi trường. | Không phải actor nghiệp vụ. |
| 6 | **Đơn vị thanh toán** | Tiếp nhận yêu cầu và cung cấp kết quả giao dịch. | Xử lý đúng đơn, đúng tiền, không ghi nhận lặp. | Yêu cầu và kết quả rõ ràng; hệ thống cập nhật đơn nhất quán. | Payment Provider khi tích hợp bên ngoài. |

### 2.2. Ranh giới vai trò trong MVP

- **Khách hàng và nhân viên quầy** là hai vai trò trực tiếp sử dụng luồng nghiệp vụ chính.
- **Quản lý cửa hàng** cung cấp quy tắc và phản hồi; MVP không nghiệm thu cổng quản trị hoặc quyền quản lý riêng.
- **Giảng viên và nhóm phát triển** là stakeholder, không mặc định trở thành actor nghiệp vụ riêng.
- **Đơn vị thanh toán** là stakeholder; MVP dùng dịch vụ mô phỏng nội bộ. Khi mô hình hóa toàn bộ BrewLite, không mặc định thành phần mô phỏng bên trong là actor bên ngoài. Ranh giới use-case được xác định ở Task 1.3.

---

## 3. Phạm vi MVP (In-scope)

**Bảng tóm tắt phạm vi trong MVP**

| Nhóm chức năng | Phạm vi |
| --- | --- |
| Menu và tùy chọn | Xem món, chi tiết, giá, tình trạng có thể đặt; chọn size, topping và số lượng. |
| Giỏ hàng | Thêm, sửa số lượng, xóa món và kiểm tra tổng tiền trước khi đặt. |
| Tài khoản | Đăng ký, đăng nhập trước khi gửi đơn; khách chỉ truy cập đơn của mình. |
| Đặt đơn và tồn kho | Kiểm tra dữ liệu, tính giá và kiểm tra đủ tồn khi đặt; kiểm tra lại khi thanh toán. |
| Thanh toán | Ví/Thẻ mô phỏng, kết quả thành công/thất bại, thử lại; gửi lại cùng yêu cầu không ghi nhận thêm giao dịch. |
| Xác nhận và theo dõi | Xem mã đơn, nội dung, tổng tiền, kết quả thanh toán, lịch sử và tiến độ. |
| Vận hành quầy | Nhân viên được cấp quyền xem hàng đợi, cập nhật tiến độ và đối chiếu mã đơn khi bàn giao. |
| Mobile-first/PWA | Giao diện ưu tiên điện thoại; cài/mở trên trình duyệt phù hợp; đặt món và thanh toán cần Internet. |
| Kiểm thử và bàn giao | Dữ liệu thử nghiệm, kiểm thử luồng chính, Docker Compose local và bản production qua HTTPS. |

### 3.1. Luồng người dùng cốt lõi

**Xem menu → chọn size/topping → giỏ hàng → đăng nhập → đặt đơn → thanh toán Ví/Thẻ mô phỏng → xác nhận và theo dõi đơn.**

1. Khách mở web, xem danh sách và chi tiết đồ uống.
2. Chọn size, topping, số lượng và thêm món vào giỏ.
3. Kiểm tra nội dung giỏ và tổng tiền trước khi tiếp tục.
4. Đăng nhập hoặc đăng ký nếu chưa có tài khoản; khách đã đăng nhập tiếp tục đặt đơn ngay.
5. Gửi đơn; hệ thống kiểm tra giá, dữ liệu và khả năng đáp ứng từ tồn kho.
6. Chọn Ví hoặc Thẻ mô phỏng, nhận kết quả thành công/thất bại và thử lại khi cần.
7. Xem xác nhận, theo dõi tiến độ và đến nhận món tại quầy.

### 3.2. Các nhóm chức năng trong MVP

MVP A2 được hoàn thiện qua hai Sprint: Sprint 1 cung cấp nền tảng và luồng xem menu; Sprint 2 hoàn thành luồng đặt món đến theo dõi đơn, tích hợp, kiểm thử và bàn giao.

#### A. Giao diện khách hàng

1. **Xem menu và chi tiết món:** hiển thị món, giá và tình trạng có thể đặt; có phản hồi khi đang tải, danh sách rỗng hoặc xảy ra lỗi.
2. **Chọn tùy chọn đồ uống:** ghi nhận size, topping và số lượng; hiển thị giá tạm tính theo lựa chọn.
3. **Quản lý giỏ hàng:** thêm món, thay đổi số lượng, xóa món và kiểm tra tổng tiền trước khi đặt.
4. **Tài khoản:** đăng ký, đăng nhập trước khi gửi đơn; khách chỉ truy cập thông tin đơn của mình.
5. **Thanh toán và theo dõi:** cho chọn Ví/Thẻ mô phỏng, hiển thị kết quả, chi tiết và lịch sử đơn; theo dõi tiến độ phục vụ.

Luồng đăng ký bằng số điện thoại kế thừa có bước xác minh OTP. Demo luồng đặt món dùng tài khoản thử nghiệm đã xác minh. OTP mô phỏng chỉ dùng tại môi trường phát triển/kiểm thử; đăng ký mới trên production sử dụng cơ chế gửi mã phù hợp với cấu hình môi trường. Không mặc định OTP demo được phép chạy trên production.

#### B. Xử lý đơn và vận hành quầy

1. **Giá và tạo đơn:** hệ thống tự kiểm tra dữ liệu, xác định giá từ dữ liệu quản lý và ghi nhận đơn chờ thanh toán.
2. **Kiểm tra tồn kho:** kiểm tra đủ tồn cho toàn bộ món, số lượng và tùy chọn khi đặt đơn; kiểm tra lại khi thanh toán. Nếu thiếu hàng, thông báo để khách điều chỉnh. Đơn được tạo trước chưa bảo đảm hàng còn đến lúc thanh toán.
3. **Thanh toán mô phỏng:** xử lý thành công/thất bại, thử lại và gửi lại cùng yêu cầu mà không ghi nhận thêm giao dịch. Việc xác nhận đơn và phân bổ lượng hàng phải nhất quán khi có nhiều khách đặt cùng lúc.
4. **Tiến độ tại quầy:** nhân viên được cấp quyền xem hàng đợi và cập nhật theo luồng **đã thanh toán → đang pha chế → sẵn sàng nhận → đã bàn giao**. Khách không tự thay đổi tiến độ pha chế.
5. **Bàn giao món:** nhân viên đối chiếu mã đơn hiển thị trên màn hình khách với đơn tại quầy.

Thời điểm tạo đơn, kiểm tra tồn và giữ/cập nhật tồn trong các giao dịch cơ sở dữ liệu được mô tả chính xác ở sequence diagram Task 2.2. Kiểm tra tồn để phục vụ đơn thuộc MVP; quản lý nhập kho, công thức và hao hụt thuộc E-04.

#### C. Kiểm thử và bàn giao

- Có dữ liệu thử nghiệm và hướng dẫn để chạy lại luồng chính.
- Có kiểm thử nghiệp vụ quan trọng, tích hợp tạo đơn/thanh toán và luồng từ menu đến xác nhận đơn.
- Chạy web, API và database ở local bằng Docker Compose.
- Bàn giao bản production truy cập qua HTTPS, URL API và kiểm tra tình trạng hoạt động theo đề.

### 3.3. Mức PWA trong MVP

| Khả năng | Phạm vi |
| --- | --- |
| Giao diện mobile-first | Ưu tiên thao tác trên điện thoại, đồng thời dùng được trên trình duyệt máy tính. |
| Cài/mở từ màn hình chính | Hỗ trợ trên trình duyệt phù hợp; đây là mục tiêu cần hiện thực và kiểm chứng. |
| Kết nối khi sử dụng | Đặt món, thanh toán và theo dõi đơn cần Internet. |
| Ngoại tuyến và thông báo đẩy | Ngoài phạm vi MVP; xem OOS-03. |

### 3.4. Hiện trạng và phần cần hoàn thiện

Qua kiểm tra mã nguồn kế thừa của nhóm:

- **Backend đã có thanh toán Ví/Thẻ mô phỏng**, gồm kết quả thành công/thất bại và xử lý yêu cầu gửi lại.
- **Giao diện còn thiếu lựa chọn Ví/Thẻ:** màn hình thanh toán hiện chỉ cho chọn VNPAY cho phần tiền phải trả; cần bổ sung lựa chọn theo phạm vi MVP.
- **Kiểm tra tồn kho và quyền tại quầy đã có trong code**, cần kiểm chứng tình huống thiếu hàng, đặt đồng thời và thao tác sai quyền.
- **Khả năng cài PWA chưa được xác nhận hoàn thiện:** code hiện có cơ chế ngừng PWA cũ, nên phải hoàn thiện và kiểm chứng mục tiêu PWA của A2.

Đây là ghi nhận từ việc đọc code, không phải kết luận toàn bộ luồng đã kiểm thử đạt yêu cầu. Các cấu hình và chi tiết cài đặt được mô tả trong tài liệu thiết kế/triển khai tương ứng.

---

## 4. Ngoài phạm vi (Out-of-scope)

### 4.1. Các phương án mở rộng

Các phương án dưới đây là **Đề xuất mở rộng** để nhóm xem xét sau khi hoàn thành luồng cốt lõi. Trong phạm vi làm việc hiện tại, chúng được giữ ngoài phần nghiệm thu MVP; việc mã nguồn A1 đã có chức năng liên quan không tự làm tăng phạm vi bài nộp.

| Mã | Phần mở rộng | Nội dung đề xuất | Ranh giới với MVP |
| --- | --- | --- | --- |
| E-01 | **VNPAY Sandbox** | Tích hợp, tiếp nhận và kiểm tra kết quả từ cổng thanh toán bên ngoài. | MVP dùng Ví/Thẻ mô phỏng. |
| E-02 | **Điểm thưởng** | Tích, xem, sử dụng điểm và quy tắc quy đổi/hoàn điểm. | Không thuộc nghiệm thu nghiệp vụ MVP; vẫn mô hình hóa domain theo đề. |
| E-03 | **Voucher** | Áp dụng ưu đãi kèm điều kiện, thời hạn và giới hạn lượt dùng. | Không thuộc nghiệm thu nghiệp vụ MVP; vẫn mô hình hóa domain theo đề. |
| E-04 | **Quản lý kho chi tiết** | Nhập kho, quản trị nguyên liệu, công thức/định lượng, điều chỉnh tồn và hao hụt. | Kiểm tra đủ tồn và cập nhật lượng hàng phục vụ đơn vẫn thuộc MVP. |

**Liên kết với Task 2.3:** class diagram vẫn phải có các lớp domain `Promotion` và `LoyaltyTransaction` theo đề, kèm quan hệ với người dùng và đơn hàng. Ghi rõ nghiệp vụ tương ứng thuộc phần mở rộng. Việc chưa đưa vào nghiệm thu MVP không có nghĩa các chức năng này chưa tồn tại trong code kế thừa.

### 4.2. Các nội dung ngoài phạm vi

| Mã | Nội dung | Ranh giới và lý do |
| --- | --- | --- |
| OOS-01 | **Giao hàng** | Ngoài bài nộp: không nhận địa chỉ, tính phí hoặc điều phối giao hàng; khách nhận món tại quầy. |
| OOS-02 | **Quyết toán giao dịch thật** | Ngoài bài nộp: không chuyển tiền hoặc quyết toán thật với ngân hàng/đơn vị thanh toán; demo dùng giao dịch thử nghiệm. |
| OOS-03 | **Đặt món ngoại tuyến và thông báo đẩy** | Ngoài MVP: khách cần Internet và xem tiến độ trực tiếp trong web. |
| OOS-04 | **Khách tự hủy đơn và yêu cầu hoàn tiền** | Ngoài phạm vi nghiệm thu MVP. Các xử lý đã có trong code kế thừa không được coi là cam kết của luồng tự phục vụ A2. |
| OOS-05 | **Nhiều chi nhánh** | Ngoài MVP: chỉ phục vụ một cửa hàng, không phân tách menu hoặc tồn kho theo chi nhánh. |
| OOS-06 | **Cổng quản trị và quyền quản lý riêng** | Ngoài MVP: quản lý cung cấp quy tắc nghiệp vụ, không có chức năng quản trị riêng được nghiệm thu. |

### 4.3. Ranh giới kiểm tra tồn và quản lý kho

MVP phải kiểm tra đủ tồn khi đặt, kiểm tra lại khi thanh toán và cập nhật lượng hàng phục vụ đơn nhất quán. Dữ liệu nguyên liệu/công thức có sẵn có thể được dùng cho bước kiểm tra này.

Nghiệp vụ quản lý nhập kho, sửa công thức, định lượng và ghi nhận hao hụt thuộc E-04. Khi không còn đủ hàng, hệ thống phải thông báo và từ chối xác nhận thanh toán; không dùng luồng hoàn tiền tự phục vụ làm cách xử lý mặc định của MVP.

---

## 5. Giả định và ràng buộc

### 5.1. Giả định áp dụng

Các giả định là cơ sở viết SRS và mô hình cho bài nộp; cần xem xét lại nếu bối cảnh phục vụ thay đổi.

| Mã | Giả định | Nội dung |
| --- | --- | --- |
| A-01 | Nhận món tại quầy | Khách đặt trên web, đến quầy nhận đồ uống và đối chiếu bằng mã đơn. |
| A-02 | Dữ liệu demo | Dùng menu, tài khoản, tồn kho và giao dịch thử nghiệm có thể chuẩn bị lại. |
| A-03 | Thiết bị và kết nối | Khách và nhân viên có trình duyệt phù hợp, có Internet khi sử dụng/demo. |
| A-04 | Một cửa hàng | Hệ thống phục vụ một cửa hàng/một chi nhánh trong phạm vi bài nộp. |
| A-05 | Tiền tệ | Giá và số tiền thanh toán dùng đồng Việt Nam (VND), không chuyển đổi ngoại tệ. |

### 5.2. Ràng buộc công nghệ và triển khai

| Mã | Ràng buộc | Nội dung |
| --- | --- | --- |
| C-01 | Công nghệ theo đề | Frontend dùng Next.js, backend dùng NestJS, dữ liệu lưu trong PostgreSQL; có thể bổ sung nhưng không thay thế ba thành phần này. |
| C-02 | Giao diện theo đề | Xây dựng theo hướng mobile-first/PWA, với mức áp dụng ở mục 3.3. |
| C-03 | Môi trường local | Docker Compose chạy web, API và database; có migration/seed để tái tạo dữ liệu thử nghiệm. |
| C-04 | Production | Có URL frontend qua HTTPS, URL API và kiểm tra tình trạng hoạt động. |
| C-05 | Bảo vệ môi trường | Database production không công khai trực tiếp; thông tin bí mật không nằm trong repository hoặc log CI. |
| C-06 | Cấu trúc repository | Repository dùng `apps/web` cho Next.js, `apps/api` cho NestJS, `docs` cho tài liệu và `tests` cho kiểm thử toàn hệ thống theo cấu trúc đề. |

### 5.3. Ràng buộc quy trình

| Mã | Ràng buộc | Nội dung |
| --- | --- | --- |
| C-07 | Thứ tự thực hiện | Thực hiện Task 1 đến Task 5 theo thứ tự; quản lý tạo phẩm và lý do thay đổi trên Git. |
| C-08 | Truy vết | Duy trì truy vết từ yêu cầu đến use-case, thiết kế, mã nguồn và kiểm thử. |
| C-09 | Review thay đổi | Thay đổi tài liệu hoặc chức năng cần được review cùng phần liên quan để giữ nội dung nhất quán. |
| C-10 | Kiểm tra qua CI | Kiểm tra lint, test và build qua CI trước khi merge theo quy trình của đề. |
| C-11 | Đặc tả yêu cầu | Nội dung FR/NFR, MoSCoW và tiêu chí nghiệm thu chi tiết được xác định trong SRS ở Task 1.2. |

### 5.4. Quyết định còn mở

| Mã | Nội dung cần xác định | Mốc hoàn thành |
| --- | --- | --- |
| Q-06 | Nền tảng triển khai, phương án lưu dữ liệu production và cấu hình dịch vụ bên ngoài. | Task 3; phản ánh trong ADR và deployment diagram. |

Đây là lựa chọn triển khai còn cần nhóm chốt. Các phương án E-01 đến E-04 vẫn là đề xuất mở rộng; nếu đưa vào kế hoạch A2 phải cập nhật phạm vi, SRS và các tạo phẩm liên quan.

---

## 6. Rủi ro ban đầu

Mức độ ghi theo **xác suất / tác động**, dùng Thấp, TB (trung bình), Cao. Đây là ước lượng ban đầu phục vụ theo dõi dự án, cần cập nhật khi có minh chứng mới.

| Mã | Rủi ro | Ảnh hưởng | Mức độ | Biện pháp giảm thiểu |
| --- | --- | --- | --- | --- |
| R-01 | **Nhiều khách cùng đặt lượng hàng cuối.** | Đơn không thể phục vụ hoặc bị từ chối khi thanh toán. | TB / Cao | Kiểm tra tồn khi đặt và khi thanh toán; kiểm thử đặt đồng thời và phân bổ lượng hàng nhất quán. |
| R-02 | **Gửi lại hoặc bấm thanh toán nhiều lần.** | Ghi nhận giao dịch hoặc phân bổ hàng lặp. | Cao / Cao | Cùng lần thanh toán chỉ ghi nhận một kết quả; kiểm thử bấm lại, mạng chậm và gửi lại yêu cầu. |
| R-03 | **Dịch vụ SMS hoặc cổng thanh toán bên ngoài gián đoạn.** | Đăng ký mới hoặc luồng thanh toán mở rộng bị gián đoạn. | TB / Cao | Chuẩn bị tài khoản đã xác minh; MVP dùng Ví/Thẻ mô phỏng. Kiểm thử OTP mô phỏng chỉ ở môi trường được phép. |
| R-04 | **Tài liệu lệch với code hoặc bản triển khai.** | Hiểu sai phạm vi, kiểm thử và nghiệm thu sai hành vi. | TB / Cao | Review tài liệu cùng thay đổi code; cập nhật SRS, sơ đồ, truy vết và chạy lại luồng demo. |
| R-05 | **Thiếu thời gian trong hai Sprint hoặc phát sinh phạm vi.** | Chậm hoàn thành luồng cốt lõi và bàn giao production. | TB / Cao | Ưu tiên MVP, theo dõi việc còn lại; chỉ bổ sung mở rộng sau khi đánh giá ảnh hưởng và cập nhật phạm vi. |
| R-06 | **Chưa quen công nghệ hoặc phối hợp tích hợp.** | Ước lượng thiếu, lỗi frontend/backend xuất hiện muộn. | TB / TB | Làm sớm một luồng nhỏ xuyên suốt; review chéo và thống nhất dữ liệu trao đổi. |
| R-07 | **Nền tảng miễn phí khởi động chậm hoặc ngừng hoạt động.** | Demo phản hồi chậm hoặc không truy cập được. | TB / Cao | Kiểm tra giới hạn nền tảng và chạy thử trước nghiệm thu; bản local hỗ trợ xử lý sự cố, không thay bản production bắt buộc. |
| R-08 | **Cập nhật cấu trúc dữ liệu production thất bại.** | Bản mới không chạy hoặc dữ liệu không phù hợp. | TB / Cao | Thử cập nhật trên dữ liệu kiểm thử; chuẩn bị sao lưu và cách phục hồi trước triển khai. |
| R-09 | **Thông tin bí mật bị đưa vào repository hoặc log CI.** | Lộ quyền truy cập, phải thu hồi và thay cấu hình. | Thấp / Cao | Kiểm tra thay đổi và log; bảo vệ cấu hình môi trường, thu hồi ngay thông tin bị lộ. |
