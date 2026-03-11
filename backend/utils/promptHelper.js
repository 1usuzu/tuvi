// backend/utils/promptHelper.js
function injectVariables(template, user) {
    if (!template) return "";
    
    return template
        .replace(/{{FULL_NAME}}/g, user.full_name || "Nguyễn Thị Thủy Tiên")
        .replace(/{{DOB}}/g, "30/07/2005 (5h30 sáng)")
        .replace(/{{JOB}}/g, "IT (Information Technology)")
        .replace(/{{GOAL}}/g, "Kiếm tiền, Tự do tài chính, Hiểu rõ bản chất hệ thống")
        .replace(/{{ISSUE}}/g, "Chưa có hướng đi rõ ràng, mông lung")
        // Biến số Thần số học
        .replace(/{{SCĐ}}/g, "8")
        .replace(/{{LH}}/g, "5")
        .replace(/{{SM}}/g, "11")
        .replace(/{{MUI_TEN}}/g, "3-5-7 (Thực chứng)")
        .replace(/{{SO_THIEU}}/g, "1 và 4")
        .replace(/{{NAM_CN}}/g, "2")
        // Biến số Tử Vi
        .replace(/{{CUC}}/g, "Kim")
        .replace(/{{MENH}}/g, "Thủy")
        .replace(/{{SAO_MENH}}/g, "Thiên Cơ, Thiên Lương");
}

module.exports = { injectVariables };