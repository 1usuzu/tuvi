/**
 * Bộ công cụ xử lý chuỗi dành riêng cho Robot AI (Metaphysics Project)
 */

/**
 * 1. Trích xuất các câu hỏi tra cứu từ văn bản của Gemini.
 * Hỗ trợ cả định dạng **Bold** và [Bracket] để tăng độ chính xác.
 */
function extractBoldQueries(text) {
    if (!text) return [];
    
    // Regex linh hoạt hơn: tìm trong **...** hoặc [CẦN TRA CỨU: ...]
    const regex = /\*\*(.*?)\*\*|\[CẦN TRA CỨU:\s*(.*?)\]/g;
    const matches = [];
    let match;
    
    while ((match = regex.exec(text)) !== null) {
        // Lấy kết quả từ một trong hai nhóm bắt giữ (group 1 hoặc group 2)
        const query = (match[1] || match[2])?.trim();
        
        // Chỉ lấy những câu có độ dài hợp lý (tránh lấy nhầm các từ in đậm đơn thuần)
        if (query && query.length > 5) {
            matches.push(query);
        }
    }
    
    // Loại bỏ các câu trùng lặp để tiết kiệm lượt tra cứu của Worker
    return [...new Set(matches)];
}

/**
 * 2. Làm sạch nội dung trước khi đưa vào PDF (Xóa các lệnh kỹ thuật)
 * Sau khi tra cứu xong, ta không muốn người dùng thấy các dòng [CẦN TRA CỨU] trong file PDF.
 */
function cleanContentForPDF(text) {
    if (!text) return "";
    return text
        .replace(/\*\*(.*?)\*\*/g, '$1') // Giữ lại chữ, bỏ dấu sao
        .replace(/\[CẦN TRA CỨU:.*?\]/g, '') // Xóa hẳn các lệnh tra cứu
        .trim();
}

/**
 * 3. Định dạng lại văn bản cho đẹp (Highlight từ khóa quan trọng)
 * Giúp báo cáo 100 trang chuyên nghiệp hơn.
 */
function formatHighlight(text, keyword) {
    if (!text || !keyword) return text;
    const regex = new RegExp(`(${keyword})`, 'gi');
    return text.replace(regex, '<b>$1</b>');
}

module.exports = { 
    extractBoldQueries, 
    cleanContentForPDF,
    formatHighlight 
};