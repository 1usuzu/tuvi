// backend/data/syllabus.js

/**
 * LỘ TRÌNH 21 NGÀY: METAPHYSICS FOR LEADERS
 * Dựa trên Framework: Product Framework_Metaphysics For Leaders.docx
 */

const syllabus = [
    // =========================================================================
    // MODULE 1: THE OPERATING SYSTEM (HỆ ĐIỀU HÀNH - THẦN SỐ HỌC)
    // Mục tiêu: Thấu hiểu năng lực cốt lõi (Software/Mindset)
    // =========================================================================
    
    {
        day: 1,
        title: "NGÀY 1: GIẢI MÃ MÃ NGUỒN (THE SOURCE CODE)",
        module: "THE OPERATING SYSTEM",
        promptTemplate: (data) => `
        # VAI TRÒ: Chuyên gia Phân tích Dữ liệu Huyền học (Metaphysics Analyst).
        # NHIỆM VỤ: Phân tích bản đồ năng lượng gốc (The Root).
        
        # DỮ LIỆU ĐẦU VÀO:
        - Khách hàng: ${data.fullName}
        - Ngày sinh: ${data.dob}
        
        # YÊU CẦU THỰC HIỆN:
        1. TÍNH TOÁN KỸ THUẬT (Technical Calculation):
           - Tính **Số Chủ Đạo (Life Path Number)**: Nêu rõ con số và cấp độ phát triển (Level).
           - Vẽ **Biểu đồ ngày sinh**: Xác định các con số có mặt và các ô trống.
           - Xác định các **Mũi tên sức mạnh** (Trí tuệ, Quyết tâm...) hoặc **Mũi tên trống** (Uất hận, Hoài nghi...).

        2. TRUY VẤN DỮ LIỆU (RAG - BẮT BUỘC):
           - Hãy **IN ĐẬM** các câu hỏi chuyên sâu để tra cứu kho sách (NotebookLM).
           - Ví dụ: **Ý nghĩa chuyên sâu của Số Chủ Đạo [Số] trong vai trò Lãnh đạo doanh nghiệp.**
           - Ví dụ: **Cách khắc phục mũi tên trống [Tên mũi tên] trong biểu đồ ngày sinh.**

        3. PHÂN TÍCH & ỨNG DỤNG (The Insight):
           - "Vùng thiên tài" của tôi là gì? (Phân tích dựa trên số chủ đạo).
           - "Điểm mù" chết người cần khắc phục? (Dựa trên các ô trống/số thiếu).
           - Action Plan: 01 bài tập cụ thể để kích hoạt năng lượng con số chủ đạo ngay hôm nay.
        `
    },
    {
        day: 2,
        title: "NGÀY 2: BỘ CHỈ SỐ TÊN GỌI (THE DRIVER)",
        module: "THE OPERATING SYSTEM",
        promptTemplate: (data) => `
        # NHIỆM VỤ: Phân tích sức mạnh của Định danh (Họ tên).
        # DỮ LIỆU: ${data.fullName} (Sử dụng tên không dấu để tính toán chuẩn Pitago).

        # YÊU CẦU THỰC HIỆN:
        1. TÍNH TOÁN KỸ THUẬT:
           - **Chỉ số Linh Hồn (Soul Urge)**: Tổng các Nguyên Âm (A, E, I, O, U, Y). Đây là khao khát ẩn giấu.
           - **Chỉ số Nhân Cách (Personality)**: Tổng các Phụ Âm. Đây là "cái áo" mặc ra ngoài xã hội.
           - **Chỉ số Sứ Mệnh (Destiny)**: Tổng Linh Hồn + Nhân Cách. Đây là vai trò xã hội giao phó.

        2. TRUY VẤN DỮ LIỆU (RAG):
           - **Ý nghĩa chỉ số Linh Hồn [Số]: Động lực thầm kín nhất của người này là gì?**
           - **Ý nghĩa chỉ số Sứ Mệnh [Số]: Người này sinh ra để làm nghề gì phù hợp nhất?**

        3. PHÂN TÍCH CHIẾN LƯỢC:
           - So sánh sự mâu thuẫn (nếu có) giữa "Con người bên trong" (Linh Hồn) và "Vẻ ngoài" (Nhân Cách).
           - Định hướng xây dựng Thương hiệu cá nhân (Personal Branding) dựa trên chỉ số Sứ Mệnh.
        `
    },
    {
        day: 3,
        title: "NGÀY 3: BIỂU ĐỒ KIM TỰ THÁP - PHẦN 1 (THE TIMING)",
        module: "THE OPERATING SYSTEM",
        promptTemplate: (data) => `
        # NHIỆM VỤ: Dự báo 4 Đỉnh cao cuộc đời (The 4 Pinnacles).
        # DỮ LIỆU: Ngày sinh ${data.dob}.

        # YÊU CẦU THỰC HIỆN:
        1. TÍNH TOÁN KỸ THUẬT:
           - Xác định 4 mốc độ tuổi tương ứng với 4 đỉnh kim tự tháp (Công thức: 36 - Số chủ đạo).
           - Tính con số ngự trị tại mỗi đỉnh cao.

        2. TRUY VẤN DỮ LIỆU (RAG):
           - **Ý nghĩa đỉnh cao số [Số] tại độ tuổi [Tuổi] (Đỉnh 1).**
           - **Ý nghĩa đỉnh cao số [Số] tại độ tuổi [Tuổi] (Đỉnh 2).**
           - **Cần chuẩn bị gì cho giai đoạn đỉnh cao tiếp theo?**

        3. PHÂN TÍCH:
           - Tôi đang đứng ở đâu trong 4 đỉnh cao này?
           - Giai đoạn hiện tại thiên về Vật chất (Kiếm tiền) hay Tinh thần (Tu tập/Cống hiến)?
        `
    },
    {
        day: 4,
        title: "NGÀY 4: BÀI HỌC & THỬ THÁCH (THE CHALLENGES)",
        module: "THE OPERATING SYSTEM",
        promptTemplate: (data) => `
        # NHIỆM VỤ: Nhận diện các bài thi cuộc đời (Challenge Numbers).
        
        # YÊU CẦU THỰC HIỆN:
        1. TÍNH TOÁN KỸ THUẬT:
           - Tính 4 con số Thử thách (Dựa trên phép trừ Ngày, Tháng, Năm sinh).
           - Xác định "Thử thách chướng ngại vật" lớn nhất trong suốt cuộc đời.

        2. TRUY VẤN DỮ LIỆU (RAG):
           - **Ý nghĩa con số Thử thách số [Số]: Những trở ngại nào thường xuyên lặp lại?**
           - **Cách vượt qua bài thi của con số [Số] trong môi trường doanh nghiệp.**

        3. PHÂN TÍCH & GIẢI PHÁP:
           - Tại sao tôi hay gặp thất bại ở khía cạnh này (Tài chính/Mối quan hệ/Sức khỏe)?
           - Tư duy "Lấy độc trị độc": Biến thử thách thành đòn bẩy phát triển.
        `
    },
    {
        day: 5,
        title: "NGÀY 5: TỔNG HỢP SWOT NĂNG LƯỢNG (THE SYNTHESIS)",
        module: "THE OPERATING SYSTEM",
        promptTemplate: (data) => `
        # NHIỆM VỤ: Đóng gói Module 1 - Lập bảng SWOT cá nhân.
        
        # YÊU CẦU THỰC HIỆN:
        1. TỔNG HỢP DỮ LIỆU: Rà soát lại nội dung từ Ngày 1 đến Ngày 4.
        
        2. LẬP BẢNG SWOT (Strengths - Weaknesses - Opportunities - Threats):
           - **S (Điểm mạnh):** Tổng hợp từ Số chủ đạo, Ngày sinh, Mũi tên sức mạnh.
           - **W (Điểm yếu):** Tổng hợp từ Số thiếu, Mũi tên trống, Bài học nợ nghiệp.
           - **O (Cơ hội):** Các đỉnh cao đang tới.
           - **T (Thách thức):** Các con số thử thách.

        3. KẾT LUẬN CHIẾN LƯỢC:
           - Phong cách lãnh đạo của tôi là gì? (Ví dụ: The Visionary, The Executor, hay The Diplomat?)
           - Lời khuyên cốt lõi để quản trị bản thân hiệu quả nhất.
        `
    },

    // =========================================================================
    // MODULE 2: MARKET ANALYSIS (PHÂN TÍCH THỊ TRƯỜNG - TỬ VI ĐẨU SỐ)
    // Mục tiêu: Thấu hiểu phần cứng & Môi trường (Hardware/Environment)
    // =========================================================================

    {
        day: 6,
        title: "NGÀY 6: CẤU TRÚC MỆNH - CỤC - THÂN (SYSTEM ARCHITECTURE)",
        module: "MARKET ANALYSIS",
        promptTemplate: (data) => `
        # NHIỆM VỤ: Phân tích kết cấu lá số Tử Vi.
        # DỮ LIỆU: Hãy nhìn kỹ ẢNH LÁ SỐ TỬ VI đã được cung cấp đầu phiên.

        # YÊU CẦU THỰC HIỆN:
        1. XÁC ĐỊNH THÔNG SỐ:
           - Hành của Cung Mệnh (Vd: Mệnh Kim).
           - Hành của Cục (Vd: Thủy Nhị Cục).
           - Vị trí cung Thân (Thân cư Mệnh/Tài/Quan/Di/Phu/Phúc).

        2. TRUY VẤN DỮ LIỆU (RAG - QUAN TRỌNG):
           - **Ý nghĩa Mệnh [Hành] tương sinh/tương khắc với Cục [Hành] trong việc khởi nghiệp.**
           - **Ý nghĩa Thân cư [Cung]: Xu hướng phát triển của người này sau 30 tuổi là gì?**

        3. PHÂN TÍCH CHIẾN LƯỢC:
           - Đánh giá độ thuận lợi: Tôi là người "Sinh ra gặp thời" hay "Chiến binh ngược dòng"?
           - Xu hướng hậu vận: Tôi sẽ coi trọng Tiền bạc, Sự nghiệp hay Gia đình hơn?
        `
    },
    {
        day: 7,
        title: "NGÀY 7: CUNG TÀI BẠCH - DÒNG TIỀN (CASH FLOW)",
        module: "MARKET ANALYSIS",
        promptTemplate: (data) => `
        # NHIỆM VỤ: Phân tích năng lực tài chính & Nguồn tiền.
        # DỮ LIỆU: Quan sát Cung Tài Bạch trên lá số.

        # YÊU CẦU THỰC HIỆN:
        1. NHẬN DIỆN TINH BÀN:
           - Chính tinh tại cung Tài? (Vũ Khúc, Thiên Phủ, hay Thái Âm...?).
           - Các sao Tài lộc (Lộc Tồn, Hóa Lộc) hay Hao tán (Song Hao, Địa Kiếp)?

        2. TRUY VẤN DỮ LIỆU (RAG):
           - **Ý nghĩa sao [Chính tinh] tọa thủ cung Tài Bạch.**
           - **Lá số này kiếm tiền bằng Cách cục gì (Làm chủ, Chuyên môn, hay Đầu cơ)?**

        3. ACTION PLAN (TÀI CHÍNH):
           - Nguồn tiền của tôi đến từ đâu là mạnh nhất?
           - Cảnh báo rủi ro mất tiền (nếu có sát tinh).
           - Chiến lược đầu tư: Nên lướt sóng hay tích sản dài hạn?
        `
    },
    {
        day: 8,
        title: "NGÀY 8: CUNG QUAN LỘC - SỰ NGHIỆP (CAREER PATH)",
        module: "MARKET ANALYSIS",
        promptTemplate: (data) => `
        # NHIỆM VỤ: Phân tích lộ trình thăng tiến và năng lực quản lý.
        # DỮ LIỆU: Quan sát Cung Quan Lộc.

        # YÊU CẦU THỰC HIỆN:
        1. NHẬN DIỆN TINH BÀN:
           - Chính tinh tại cung Quan? Các bộ sao Quyền tinh (Quốc Ấn, Tướng Quân, Hóa Quyền).
           - Cung Quan có bị Tuần/Triệt không?

        2. TRUY VẤN DỮ LIỆU (RAG):
           - **Ý nghĩa sao [Chính tinh] cư cung Quan Lộc.**
           - **Mẫu người này phù hợp làm Lãnh đạo (Leader), Chuyên gia (Specialist) hay Hỗ trợ (Supporter)?**

        3. PHÂN TÍCH CHIẾN LƯỢC:
           - Phong cách làm việc của tôi: Quyết liệt, cẩn trọng hay sáng tạo?
           - Giai đoạn nào trong đời sự nghiệp sẽ thăng hoa nhất?
        `
    },
    {
        day: 9,
        title: "NGÀY 9: CUNG THIÊN DI & PHU THÊ - ĐỐI NGOẠI (EXTERNAL RELATIONS)",
        module: "MARKET ANALYSIS",
        promptTemplate: (data) => `
        # NHIỆM VỤ: Phân tích Môi trường bên ngoài và Hậu phương.
        
        # YÊU CẦU THỰC HIỆN:
        1. PHÂN TÍCH CUNG THIÊN DI (Ra ngoài xã hội):
           - Ra ngoài có quý nhân giúp đỡ không hay hay gặp thị phi?
           - Có cơ hội xuất ngoại hoặc làm việc với yếu tố nước ngoài không?
           - **Truy vấn: Ý nghĩa sao [Tên sao] cung Thiên Di.**

        2. PHÂN TÍCH CUNG PHU THÊ (Hậu phương):
           - Người phối ngẫu có hỗ trợ cho sự nghiệp không?
           - Cảnh báo xung đột nếu có sao xấu (Cô Thần, Quả Tú, Phục Binh...).

        3. KẾT LUẬN:
           - Chiến lược Networking: Nên mở rộng quan hệ hay thu mình tập trung chuyên môn?
        `
    },
    {
        day: 10,
        title: "NGÀY 10: NHẬN DIỆN CÁCH CỤC & ĐỊNH VỊ (THE BIG PICTURE)",
        module: "MARKET ANALYSIS",
        promptTemplate: (data) => `
        # NHIỆM VỤ: Đóng gói Module 2 - Định vị bản thân trên thị trường.
        
        # YÊU CẦU THỰC HIỆN:
        1. XÁC ĐỊNH CÁCH CỤC LỚN (MAJOR PATTERN):
           - Nhìn tam hợp Mệnh - Tài - Quan.
           - **TRUY VẤN: Lá số này thuộc bộ nào? (Sát Phá Tham, Tử Phủ Vũ Tướng, Cơ Nguyệt Đồng Lương, hay Cự Nhật...?)**
           - **TRUY VẤN: Ưu nhược điểm cốt lõi của cách cục [Tên cách cục].**

        2. ĐỊNH VỊ VAI TRÒ (POSITIONING):
           - Tôi giống hình tượng nào trong lịch sử/kinh doanh? (Vd: Vị tướng tiên phong, Quân sư mưu lược, hay Nhà buôn tài ba).
           - Tuyên ngôn giá trị: "Tôi mạnh nhất khi được đặt vào môi trường..."
        `
    },

    // =========================================================================
    // MODULE 3: THE STRATEGY (CHIẾN LƯỢC VẬN HẠN & HÀNH ĐỘNG)
    // Mục tiêu: Thiên thời - Địa lợi - Nhân hòa (Timing & Action Plan)
    // =========================================================================

    {
        day: 11,
        title: "NGÀY 11: ĐẠI VẬN 10 NĂM HIỆN TẠI (THE DECADE STRATEGY)",
        module: "THE STRATEGY",
        promptTemplate: (data) => `
        # NHIỆM VỤ: Phân tích bối cảnh lớn 10 năm.
        # DỮ LIỆU: Xác định khách hàng đang ở độ tuổi nào -> Thuộc cung Đại vận nào trên lá số.

        # YÊU CẦU THỰC HIỆN:
        1. PHÂN TÍCH ĐẠI VẬN (Dựa trên Thiên can, Địa chi cung đại vận và Chính tinh):
           - Đắc thời hay Lỗi thời? (So sánh hành Đại vận với hành Mệnh).
           - **TRUY VẤN: Ý nghĩa đại vận tại cung [Tên cung] gặp sao [Tên sao].**

        2. CHIẾN LƯỢC TỔNG THỂ 10 NĂM:
           - Đây là giai đoạn nên "Tấn công mở rộng" (Scale up) hay "Phòng thủ tích lũy" (Consolidate)?
           - Từ khóa chiến lược cho giai đoạn này là gì?
        `
    },
    {
        day: 12,
        title: "NGÀY 12: BỐI CẢNH NĂM NAY - LƯU NIÊN (THE YEAR CONTEXT)",
        module: "THE STRATEGY",
        promptTemplate: (data) => `
        # NHIỆM VỤ: Phân tích tổng quan năm nay (Lưu niên Thái Tuế).
        # DỮ LIỆU: Năm hiện tại (Ví dụ: 2026 Bính Ngọ).

        # YÊU CẦU THỰC HIỆN:
        1. XÁC ĐỊNH VỊ TRÍ:
           - Lưu Thái Tuế đóng ở cung nào? (Đây là nơi phát sinh sự kiện chính).
           - Tiểu Vận đóng ở cung nào?
           - **TRUY VẤN: Năm [Năm nay] đối với người mệnh [Hành] tốt hay xấu?**

        2. CHỦ ĐỀ CỦA NĂM (KEY THEME):
           - Năm nay tâm trí tôi sẽ dồn vào đâu? (Tiền bạc, con cái, hay nhà cửa?).
           - Đánh giá mức độ thuận lợi chung: Thang điểm 1-10.
        `
    },
    {
        day: 13,
        title: "NGÀY 13: BỘ SAO LƯU ĐỘNG - KÍCH HOẠT (DYNAMIC TRIGGERS)",
        module: "THE STRATEGY",
        promptTemplate: (data) => `
        # NHIỆM VỤ: Phân tích các yếu tố kích hoạt sự kiện cụ thể.
        
        # YÊU CẦU THỰC HIỆN:
        1. PHÂN TÍCH CÁC SAO LƯU QUAN TRỌNG:
           - **Lưu Lộc Tồn**: Cơ hội kiếm tiền nằm ở đâu?
           - **Lưu Thiên Mã**: Có sự dịch chuyển, thay đổi chỗ ở/việc làm không?
           - **Lưu Kình Dương/Lưu Đà La**: Cản trở nằm ở đâu?
           - **TRUY VẤN: Ý nghĩa Lưu [Tên sao] gặp sao cố định [Tên sao] tại cung [Tên cung].**

        2. DỰ BÁO SỰ KIỆN:
           - Có khả năng thăng chức, tăng lương hay mất tiền?
           - Có hỷ tín (cưới hỏi/con cái) không?
        `
    },
    {
        day: 14,
        title: "NGÀY 14: THIÊN THỜI - ĐỊA LỢI - NHÂN HÒA (OPPORTUNITY SCORE)",
        module: "THE STRATEGY",
        promptTemplate: (data) => `
        # NHIỆM VỤ: Tổng hợp các yếu tố may mắn.
        
        # YÊU CẦU THỰC HIỆN:
        1. ĐÁNH GIÁ 3 YẾU TỐ:
           - **Thiên Thời (Vận năm):** Thời thế có ủng hộ không?
           - **Địa Lợi (Phong thủy/Môi trường):** Cung Điền Trạch và nơi làm việc có tốt không?
           - **Nhân Hòa (Phúc đức/Quan hệ):** Sự ủng hộ của mọi người.

        2. KẾT LUẬN:
           - Dự báo tỷ lệ thành công cho các dự án lớn trong năm nay.
           - Lời khuyên: Nên tập trung vào yếu tố nào để tối ưu hóa kết quả?
        `
    },
    {
        day: 15,
        title: "NGÀY 15: CHIẾN LƯỢC QUÝ 1 - MÙA XUÂN (THÁNG 1, 2, 3 ÂM)",
        module: "THE STRATEGY",
        promptTemplate: (data) => `
        # NHIỆM VỤ: Dự báo vận hạn chi tiết 3 tháng đầu năm.
        # DỮ LIỆU: Xem cung hạn ứng với Tháng 1, Tháng 2, Tháng 3 Âm lịch.

        # YÊU CẦU THỰC HIỆN:
        1. PHÂN TÍCH TỪNG THÁNG:
           - Tháng 1 (Dần): Sao chủ quản là gì? Tốt/Xấu?
           - Tháng 2 (Mão): Có biến động gì về tài chính/tình cảm?
           - Tháng 3 (Thìn): Lưu ý sức khỏe hay công việc?
           - **TRUY VẤN: Nguyệt vận tháng [Tháng] tại cung [Tên cung].**

        2. HÀNH ĐỘNG TRỌNG TÂM:
           - Kế hoạch khởi động năm mới (New Year Resolution).
           - Những việc NÊN làm và KHÔNG NÊN làm trong quý này.
        `
    },
    {
        day: 16,
        title: "NGÀY 16: CHIẾN LƯỢC QUÝ 2 - MÙA HẠ (THÁNG 4, 5, 6 ÂM)",
        module: "THE STRATEGY",
        promptTemplate: (data) => `
        # NHIỆM VỤ: Dự báo vận hạn chi tiết 3 tháng giữa năm.
        # DỮ LIỆU: Xem cung hạn ứng với Tháng 4, Tháng 5, Tháng 6 Âm lịch.

        # YÊU CẦU THỰC HIỆN:
        1. PHÂN TÍCH TỪNG THÁNG:
           - Tháng 4 (Tỵ): Có sao tài lộc hay hao tán?
           - Tháng 5 (Ngọ): Chú ý các mối quan hệ xã giao.
           - Tháng 6 (Mùi): Giai đoạn giữa năm cần rà soát gì?
           - **TRUY VẤN: Nguyệt vận tháng [Tháng] có sao [Sao xấu/tốt].**

        2. HÀNH ĐỘNG TRỌNG TÂM:
           - Đây là giai đoạn "Tăng tốc" (Acceleration) hay "Điều chỉnh" (Adjustment)?
           - Các quyết định đầu tư/nhân sự quan trọng nên thực hiện tháng nào?
        `
    },
    {
        day: 17,
        title: "NGÀY 17: CHIẾN LƯỢC QUÝ 3 - MÙA THU (THÁNG 7, 8, 9 ÂM)",
        module: "THE STRATEGY",
        promptTemplate: (data) => `
        # NHIỆM VỤ: Dự báo vận hạn chi tiết Quý 3.
        # DỮ LIỆU: Xem cung hạn ứng với Tháng 7, Tháng 8, Tháng 9 Âm lịch.

        # YÊU CẦU THỰC HIỆN:
        1. PHÂN TÍCH TỪNG THÁNG:
           - Tháng 7 (Thân - Tháng Cô Hồn): Cảnh báo rủi ro tâm linh/sức khỏe.
           - Tháng 8 (Dậu): Trung thu, các cơ hội hợp tác mới.
           - Tháng 9 (Tuất): Chuẩn bị cho cuối năm.
           - **TRUY VẤN: Cách hóa giải vận hạn tháng 7 Âm lịch.**

        2. HÀNH ĐỘNG TRỌNG TÂM:
           - Chiến lược "Phòng thủ" cho tháng 7 và "Tấn công" cho tháng 8, 9.
           - Rà soát KPI 9 tháng đầu năm.
        `
    },
    {
        day: 18,
        title: "NGÀY 18: CHIẾN LƯỢC QUÝ 4 - MÙA ĐÔNG (THÁNG 10, 11, 12 ÂM)",
        module: "THE STRATEGY",
        promptTemplate: (data) => `
        # NHIỆM VỤ: Dự báo vận hạn chi tiết 3 tháng cuối năm.
        # DỮ LIỆU: Xem cung hạn ứng với Tháng 10, Tháng 11, Tháng 12 Âm lịch.

        # YÊU CẦU THỰC HIỆN:
        1. PHÂN TÍCH TỪNG THÁNG:
           - Tháng 10 (Hợi): Có lộc hay phải chi tiêu nhiều?
           - Tháng 11 (Tý): Áp lực công việc cuối năm.
           - Tháng 12 (Sửu): Tổng kết, thưởng phạt.
           - **TRUY VẤN: Vận hạn tháng Chạp (Tháng 12) cần lưu ý gì?**

        2. HÀNH ĐỘNG TRỌNG TÂM:
           - Kế hoạch "Về đích" (Finishing Strong).
           - Chuẩn bị nền tảng cho năm sau.
        `
    },
    {
        day: 19,
        title: "NGÀY 19: QUẢN TRỊ RỦI RO & HÓA GIẢI (RISK MANAGEMENT)",
        module: "THE STRATEGY",
        promptTemplate: (data) => `
        # NHIỆM VỤ: Tổng hợp các rủi ro và phương án B (Plan B).
        
        # YÊU CẦU THỰC HIỆN:
        1. CHECKLIST CÁC HẠN LỚN:
           - Năm nay có phạm Tam Tai, Thái Tuế, Kim Lâu, Hoang Ốc không?
           - Sao Kế Đô/Thái Bạch (Cửu Diệu) chiếu mệnh không?
           - **TRUY VẤN: Cách cúng sao giải hạn sao [Tên sao] năm nay.**

        2. GIẢI PHÁP PHONG THỦY & TÂM LINH:
           - Màu sắc may mắn/kỵ trong năm nay.
           - Vật phẩm phong thủy đề xuất (Vd: Đá thạch anh, Tỳ hưu...).
           - Các hoạt động thiện nguyện (Give back) để tích phúc.
        `
    },
    {
        day: 20,
        title: "NGÀY 20: KẾ HOẠCH TỔNG THỂ & MỤC TIÊU (MASTER PLAN)",
        module: "THE STRATEGY",
        promptTemplate: (data) => `
        # NHIỆM VỤ: Tích hợp Thần số + Tử Vi vào Mục tiêu thực tế.
        # INPUT: Mục tiêu cốt lõi của khách hàng là: ${data.goal}.

        # YÊU CẦU THỰC HIỆN:
        1. XÁC ĐỊNH 3 MỤC TIÊU SỐNG CÒN (MUST-WIN BATTLES):
           - Mục tiêu Tài chính (Con số cụ thể).
           - Mục tiêu Sự nghiệp (Vị trí/Dự án).
           - Mục tiêu Cá nhân (Sức khỏe/Gia đình).

        2. CHIẾN LƯỢC THỰC THI (THE HOW):
           - Dùng năng lực Thần số học (Module 1) để thực thi.
           - Chọn thời điểm Tử Vi (Module 2, 3) để ra quyết định.
           - Ví dụ: Dùng năng lực "Số 1 - Tiên phong" để khởi nghiệp vào "Tháng 4 - Có Lộc Tồn".
        `
    },

    // =========================================================================
    // THE FINALE: ĐÓNG GÓI & BÀN GIAO (PACKAGING)
    // Mục tiêu: Executive Summary & Handover
    // =========================================================================

    {
        day: 21,
        title: "NGÀY 21: HỒ SƠ CHIẾN LƯỢC HOÀN CHỈNH (EXECUTIVE SUMMARY)",
        module: "THE FINALE",
        promptTemplate: (data) => `
        # NHIỆM VỤ: Viết lời kết và Tóm tắt điều hành dành cho Lãnh đạo.
        
        # CẤU TRÚC BÀO CÁO (EXECUTIVE SUMMARY):
        1. WHO YOU ARE: 3 Từ khóa mô tả bản chất con người tôi (Tổng hợp từ Module 1).
        2. WHERE YOU ARE: Tôi đang ở giai đoạn nào của cuộc đời (Tổng hợp từ Module 2, 3).
        3. WHAT TO DO: 3 Hành động ưu tiên cao nhất trong năm nay.

        # THƯ GỬI TƯƠNG LAI:
        - Hãy viết một bức thư tâm huyết, giọng văn truyền cảm hứng, gửi đến chính tôi sau 1 năm nữa.
        - Nhắc nhở tôi về Sứ mệnh và Lý tưởng sống.
        
        # LỜI KẾT:
        - Cảm ơn và chúc mừng khách hàng đã hoàn thành lộ trình 21 ngày "Metaphysics for Leaders".
        `
    }
];

module.exports = syllabus;