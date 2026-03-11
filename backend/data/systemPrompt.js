// backend/data/systemPrompt.js

// =========================================================================
// MẢNG DỮ LIỆU 21 NGÀY SIÊU CHI TIẾT (TỪ SYLLABUS CỦA TIÊN)
// =========================================================================
const syllabus = [
    {
        day: 1,
        title: "NGÀY 1: GIẢI MÃ MÃ NGUỒN (THE SOURCE CODE)",
        module: "THE OPERATING SYSTEM",
        promptTemplate: (data) => `
        - TÍNH TOÁN KỸ THUẬT: Tính **Số Chủ Đạo (Life Path Number)**: Nêu rõ con số và cấp độ phát triển. Vẽ **Biểu đồ ngày sinh**: Xác định các con số có mặt và các ô trống. Xác định các **Mũi tên sức mạnh** hoặc **Mũi tên trống**.
        - PHÂN TÍCH & ỨNG DỤNG: "Vùng thiên tài" là gì? "Điểm mù" chết người cần khắc phục? Action Plan: 01 bài tập cụ thể.
        `
    },
    {
        day: 2,
        title: "NGÀY 2: BỘ CHỈ SỐ TÊN GỌI (THE DRIVER)",
        module: "THE OPERATING SYSTEM",
        promptTemplate: (data) => `
        - TÍNH TOÁN KỸ THUẬT: Tính **Chỉ số Linh Hồn** (Nguyên Âm), **Chỉ số Nhân Cách** (Phụ Âm), **Chỉ số Sứ Mệnh** (Linh Hồn + Nhân Cách).
        - PHÂN TÍCH CHIẾN LƯỢC: So sánh sự mâu thuẫn (nếu có) giữa con người bên trong và vẻ ngoài. Định hướng Thương hiệu cá nhân (Personal Branding).
        `
    },
    {
        day: 3,
        title: "NGÀY 3: BIỂU ĐỒ KIM TỰ THÁP - PHẦN 1 (THE TIMING)",
        module: "THE OPERATING SYSTEM",
        promptTemplate: (data) => `
        - TÍNH TOÁN KỸ THUẬT: Xác định 4 mốc độ tuổi và 4 đỉnh kim tự tháp (36 - Số chủ đạo).
        - PHÂN TÍCH: Khách hàng đang đứng ở đâu trong 4 đỉnh cao này? Giai đoạn hiện tại thiên về Vật chất hay Tinh thần?
        `
    },
    {
        day: 4,
        title: "NGÀY 4: BÀI HỌC & THỬ THÁCH (THE CHALLENGES)",
        module: "THE OPERATING SYSTEM",
        promptTemplate: (data) => `
        - TÍNH TOÁN KỸ THUẬT: Tính 4 con số Thử thách. Xác định "Thử thách chướng ngại vật" lớn nhất.
        - PHÂN TÍCH & GIẢI PHÁP: Tại sao hay gặp thất bại ở khía cạnh này? Tư duy "Lấy độc trị độc" biến thử thách thành đòn bẩy.
        `
    },
    {
        day: 5,
        title: "NGÀY 5: TỔNG HỢP SWOT NĂNG LƯỢNG (THE SYNTHESIS)",
        module: "THE OPERATING SYSTEM",
        promptTemplate: (data) => `
        - TỔNG HỢP SWOT: Điểm mạnh (S), Điểm yếu (W), Cơ hội (O), Thách thức (T).
        - KẾT LUẬN CHIẾN LƯỢC: Phong cách lãnh đạo là gì? (Visionary, Executor, hay Diplomat?).
        `
    },
    {
        day: 6,
        title: "NGÀY 6: CẤU TRÚC MỆNH - CỤC - THÂN (SYSTEM ARCHITECTURE)",
        module: "MARKET ANALYSIS",
        promptTemplate: (data) => `
        - XÁC ĐỊNH THÔNG SỐ: Hành Cung Mệnh, Hành của Cục, Vị trí cung Thân.
        - PHÂN TÍCH CHIẾN LƯỢC: Đánh giá độ thuận lợi (Sinh ra gặp thời hay Chiến binh ngược dòng?). Xu hướng hậu vận.
        `
    },
    {
        day: 7,
        title: "NGÀY 7: CUNG TÀI BẠCH - DÒNG TIỀN (CASH FLOW)",
        module: "MARKET ANALYSIS",
        promptTemplate: (data) => `
        - NHẬN DIỆN TINH BÀN: Chính tinh tại cung Tài? Các sao Tài lộc hay Hao tán?
        - ACTION PLAN: Nguồn tiền mạnh nhất đến từ đâu? Kiếm tiền bằng Cách cục gì (Làm chủ, Chuyên môn, Đầu cơ)? Chiến lược lướt sóng hay tích sản?
        `
    },
    {
        day: 8,
        title: "NGÀY 8: CUNG QUAN LỘC - SỰ NGHIỆP (CAREER PATH)",
        module: "MARKET ANALYSIS",
        promptTemplate: (data) => `
        - NHẬN DIỆN TINH BÀN: Chính tinh cung Quan? Phù hợp làm Leader, Specialist hay Supporter?
        - PHÂN TÍCH CHIẾN LƯỢC: Phong cách làm việc? Giai đoạn nào thăng hoa nhất?
        `
    },
    {
        day: 9,
        title: "NGÀY 9: CUNG THIÊN DI & PHU THÊ - ĐỐI NGOẠI (EXTERNAL RELATIONS)",
        module: "MARKET ANALYSIS",
        promptTemplate: (data) => `
        - CUNG THIÊN DI: Ra ngoài có quý nhân hay thị phi? Cơ hội xuất ngoại?
        - CUNG PHU THÊ: Người phối ngẫu có hỗ trợ không? Cảnh báo xung đột.
        - KẾT LUẬN: Chiến lược Networking: Mở rộng hay thu mình?
        `
    },
    {
        day: 10,
        title: "NGÀY 10: NHẬN DIỆN CÁCH CỤC & ĐỊNH VỊ (THE BIG PICTURE)",
        module: "MARKET ANALYSIS",
        promptTemplate: (data) => `
        - XÁC ĐỊNH CÁCH CỤC LỚN: Nhìn tam hợp Mệnh - Tài - Quan thuộc bộ nào (Sát Phá Tham, Tử Phủ Vũ Tướng...)?
        - ĐỊNH VỊ VAI TRÒ: Hình tượng trong kinh doanh (Tướng tiên phong, Quân sư...). Tuyên ngôn giá trị.
        `
    },
    {
        day: 11,
        title: "NGÀY 11: ĐẠI VẬN 10 NĂM HIỆN TẠI (THE DECADE STRATEGY)",
        module: "THE STRATEGY",
        promptTemplate: (data) => `
        - PHÂN TÍCH ĐẠI VẬN: Đắc thời hay Lỗi thời? 
        - CHIẾN LƯỢC TỔNG THỂ 10 NĂM: Nên Tấn công mở rộng hay Phòng thủ tích lũy? Từ khóa chiến lược.
        `
    },
    {
        day: 12,
        title: "NGÀY 12: BỐI CẢNH NĂM NAY - LƯU NIÊN (THE YEAR CONTEXT)",
        module: "THE STRATEGY",
        promptTemplate: (data) => `
        - XÁC ĐỊNH VỊ TRÍ: Lưu Thái Tuế và Tiểu Vận đóng ở cung nào?
        - CHỦ ĐỀ CỦA NĂM: Tâm trí dồn vào đâu (Tiền, con cái, nhà cửa)? Đánh giá mức độ thuận lợi 1-10.
        `
    },
    {
        day: 13,
        title: "NGÀY 13: BỘ SAO LƯU ĐỘNG - KÍCH HOẠT (DYNAMIC TRIGGERS)",
        module: "THE STRATEGY",
        promptTemplate: (data) => `
        - PHÂN TÍCH SAO LƯU: Lưu Lộc Tồn, Lưu Thiên Mã, Lưu Kình/Đà.
        - DỰ BÁO SỰ KIỆN: Có khả năng thăng chức, hỷ tín hay mất tiền?
        `
    },
    {
        day: 14,
        title: "NGÀY 14: THIÊN THỜI - ĐỊA LỢI - NHÂN HÒA (OPPORTUNITY SCORE)",
        module: "THE STRATEGY",
        promptTemplate: (data) => `
        - ĐÁNH GIÁ 3 YẾU TỐ: Thiên Thời (Vận năm), Địa Lợi (Điền trạch/Môi trường), Nhân Hòa (Phúc đức/Quan hệ).
        - KẾT LUẬN: Dự báo tỷ lệ thành công năm nay.
        `
    },
    {
        day: 15,
        title: "NGÀY 15: CHIẾN LƯỢC QUÝ 1 - MÙA XUÂN (THÁNG 1, 2, 3 ÂM)",
        module: "THE STRATEGY",
        promptTemplate: (data) => `
        - PHÂN TÍCH TỪNG THÁNG: Biến động tài chính/sức khỏe/công việc của Tháng 1, 2, 3 Âm lịch.
        - HÀNH ĐỘNG TRỌNG TÂM: Kế hoạch khởi động năm mới.
        `
    },
    {
        day: 16,
        title: "NGÀY 16: CHIẾN LƯỢC QUÝ 2 - MÙA HẠ (THÁNG 4, 5, 6 ÂM)",
        module: "THE STRATEGY",
        promptTemplate: (data) => `
        - PHÂN TÍCH TỪNG THÁNG: Biến động Tháng 4, 5, 6 Âm lịch.
        - HÀNH ĐỘNG TRỌNG TÂM: Giai đoạn "Tăng tốc" hay "Điều chỉnh"?
        `
    },
    {
        day: 17,
        title: "NGÀY 17: CHIẾN LƯỢC QUÝ 3 - MÙA THU (THÁNG 7, 8, 9 ÂM)",
        module: "THE STRATEGY",
        promptTemplate: (data) => `
        - PHÂN TÍCH TỪNG THÁNG: Tháng Cô Hồn (7) và Tháng 8, 9 Âm lịch.
        - HÀNH ĐỘNG TRỌNG TÂM: Rà soát KPI, phòng thủ hay tấn công?
        `
    },
    {
        day: 18,
        title: "NGÀY 18: CHIẾN LƯỢC QUÝ 4 - MÙA ĐÔNG (THÁNG 10, 11, 12 ÂM)",
        module: "THE STRATEGY",
        promptTemplate: (data) => `
        - PHÂN TÍCH TỪNG THÁNG: Tháng 10, 11, 12 Âm lịch. Áp lực cuối năm và thưởng phạt.
        - HÀNH ĐỘNG TRỌNG TÂM: Kế hoạch "Về đích".
        `
    },
    {
        day: 19,
        title: "NGÀY 19: QUẢN TRỊ RỦI RO & HÓA GIẢI (RISK MANAGEMENT)",
        module: "THE STRATEGY",
        promptTemplate: (data) => `
        - CHECKLIST HẠN LỚN: Tam Tai, Thái Tuế, Kim Lâu, Cửu Diệu.
        - GIẢI PHÁP: Màu sắc may mắn, vật phẩm phong thủy đề xuất.
        `
    },
    {
        day: 20,
        title: "NGÀY 20: KẾ HOẠCH TỔNG THỂ & MỤC TIÊU (MASTER PLAN)",
        module: "THE STRATEGY",
        promptTemplate: (data) => `
        - MỤC TIÊU: 3 Mục tiêu sống còn (Must-win battles) để đạt được "${data.goal}".
        - CHIẾN LƯỢC THỰC THI: Liên kết Thần số và Tử Vi để ra quyết định.
        `
    },
    {
        day: 21,
        title: "NGÀY 21: HỒ SƠ CHIẾN LƯỢC HOÀN CHỈNH (EXECUTIVE SUMMARY)",
        module: "THE FINALE",
        promptTemplate: (data) => `
        - CẤU TRÚC BÁO CÁO: Tóm tắt 3 Hành động ưu tiên cao nhất.
        - THƯ GỬI TƯƠNG LAI: Viết một bức thư tâm huyết, truyền cảm hứng gửi đến chính khách hàng sau 1 năm nữa. Lời kết chúc mừng.
        `
    }
];

// =========================================================================
// HÀM XUẤT MASTER PROMPT ĐỂ ĐƯA CHO AI
// =========================================================================
const getMasterPrompt = (userData) => {
    // Xử lý ngày tháng năm sinh
    let formattedDate = userData.dob;
    if (userData.dob && typeof userData.dob === 'string' && userData.dob.includes('GMT')) {
        const d = new Date(userData.dob);
        formattedDate = `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
    }

    const fullName = userData.full_name || userData.fullName || "Khách hàng";
    const goal = userData.goal || "Tự do tài chính và Xây dựng di sản";

    const dataForSyllabus = { fullName, dob: formattedDate, goal };

    // VÒNG LẶP: Tự động gom 21 cục prompt chi tiết ở trên lại thành 1 văn bản khổng lồ
    let combinedRequirements = "";
    syllabus.forEach(day => {
        combinedRequirements += `\n\n### ${day.title}\n`;
        combinedRequirements += day.promptTemplate(dataForSyllabus);
    });

    return `
# VAI TRÒ CỦA BẠN:
Bạn là "Metaphysics Strategist" - Chuyên gia kết hợp Tử Vi, Thần Số Học và Quản Trị Kinh Doanh.

# DỮ LIỆU KHÁCH HÀNG:
- Họ tên: ${fullName} (Sử dụng tên này để tính chuẩn Pitago)
- Ngày sinh: ${formattedDate} (Dương lịch)
- Mục tiêu cốt lõi: ${goal}
- [QUAN TRỌNG]: Hãy nhìn kỹ Bức ảnh Lá số Tử Vi tôi cung cấp kèm theo đây.

# NHIỆM VỤ ĐỘT PHÁ (XUẤT BẢN SÁCH 21 NGÀY):
Hãy viết một bản Báo cáo Chiến lược Hành động 21 ngày "METAPHYSICS FOR LEADERS" cho khách hàng.
[CẢNH BÁO]: Đây là tài liệu VIP dài tối thiểu 4000 từ. BẠN PHẢI VIẾT TÁCH BIỆT VÀ PHÂN TÍCH SÂU SẮC CHO TỪNG NGÀY MỘT. Tuyệt đối không được viết tóm tắt!

---
# CẤU TRÚC YÊU CẦU CHI TIẾT TỪNG NGÀY (BẠN PHẢI VIẾT ĐỦ 21 MỤC NÀY):
${combinedRequirements}

(Lưu ý: Viết liền mạch, sử dụng Markdown. Bắt buộc hiển thị tiêu đề "### NGÀY 1...", "### NGÀY 2...". KHÔNG CẦN xin lỗi hay xác nhận, hãy xuất trực tiếp nội dung phân tích.)
`;
};

module.exports = { getMasterPrompt };