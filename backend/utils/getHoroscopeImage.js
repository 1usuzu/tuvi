const { chromium } = require('playwright');

/**
 * Hàm lấy ảnh lá số (Phiên bản Robust - Chống lỗi undefined)
 */
async function getHoroscopeImage(userData) {
    // --- 1. CHUẨN HÓA DỮ LIỆU (FIX LỖI UNDEFINED Ở ĐÂY) ---
    // Tìm mọi biến thể có thể có của tên
    const fullName = userData.full_name || userData.fullName || userData['Họ tên'] || '';
    
    // Xử lý ngày sinh (ưu tiên dob, nếu không có thì lấy 'Ngày sinh')
    const dob = userData.dob || userData['Ngày sinh'] || ''; 
    
    // Xử lý giờ sinh
    const tob = userData.tob || userData['Giờ sinh'] || '00:00';
    
    // Xử lý giới tính (chấp nhận cả 'male', 'Nam', '1')
    let genderInput = userData.gender || userData['Giới tính'] || 'male';
    if (typeof genderInput === 'string') genderInput = genderInput.toLowerCase();
    const isMale = (genderInput === 'male' || genderInput === 'nam' || genderInput === '1');

    console.log(`📸 [Playwright] Đang xử lý: Tên="${fullName}" | Ngày="${dob}" | Giờ="${tob}" | Nam?=${isMale}`);

    // Kiểm tra an toàn: Nếu không có tên thì dừng luôn, đỡ mở trình duyệt tốn RAM
    if (!fullName) {
        throw new Error(" Dữ liệu đầu vào thiếu Tên (full_name/fullName)!");
    }

    // --- 2. KHỞI ĐỘNG TRÌNH DUYỆT ---
    const browser = await chromium.launch({ 
        headless: false, // Để false để bạn nhìn thấy nó chạy lần đầu, sau này đổi thành true
        args: ['--start-maximized'] 
    });
    
    // Tạo context để tránh lưu cache cũ
    const context = await browser.newContext();
    const page = await context.newPage();

    try {
        console.log("... Đang truy cập tuvi.vn");
        await page.goto('https://tuvi.vn/lap-la-so-tu-vi', { timeout: 60000 });

        // --- 3. ĐIỀN FORM (Dùng biến đã chuẩn hóa) ---
        
        // Nhập tên
        await page.locator('input[name="name"]').fill(fullName);

        // Xử lý ngày tháng năm sinh từ chuỗi "YYYY-MM-DD" hoặc "DD/MM/YYYY"
        // Code của bạn đang giả định input là Date object hoặc string chuẩn ISO
        const dateObj = new Date(dob);
        if (isNaN(dateObj.getTime())) {
             throw new Error(`Định dạng ngày sinh không hợp lệ: ${dob}`);
        }

        const day = dateObj.getDate().toString();
        const month = (dateObj.getMonth() + 1).toString();
        const year = dateObj.getFullYear().toString();

        await page.selectOption('select[name="dayOfDOB"]', day);
        await page.selectOption('select[name="monthOfDOB"]', month);
        await page.locator('input[name="yearOfDOB"]').fill(year);

        // Chọn lịch dương
        await page.click('#lichDuongRes');

        // Xử lý giờ sinh
        const [hour, minute] = tob.split(':');
        await page.selectOption('select[name="hourOfDOB"]', parseInt(hour).toString());
        
        try {
            // Cố gắng chọn phút chính xác
            await page.selectOption('select[name="minOfDOB"]', parseInt(minute).toString());
        } catch (e) {
            // Nếu web không có phút đó (ví dụ web chỉ có 0, 15, 30...), chọn 00
            await page.selectOption('select[name="minOfDOB"]', "0");
        }

        // Chọn giới tính
        if (isMale) {
            await page.click('#male2Res');
        } else {
            await page.click('#female2Res');
        }

        // --- 4. SUBMIT & CHỤP ẢNH ---
        console.log("... Bấm nút lấy lá số");
        await page.click('button[type="submit"]');

        console.log(" Đang đợi lá số hiện ra...");
        // Đợi 5s cho chắc ăn (hoặc dùng waitForSelector nếu biết class của lá số)
        await page.waitForTimeout(5000); 

        // Chụp toàn trang (Full Page) để lấy trọn lá số
        const imageBuffer = await page.screenshot({ fullPage: true });
        
        console.log(" Chụp thành công (Lưu vào RAM)!");

        await browser.close();
        return imageBuffer; // Trả về RAM để Worker dùng tiếp

    } catch (error) {
        console.error(" Lỗi Robot chụp ảnh:", error.message);
        // Chụp ảnh màn hình lỗi để debug (tạo file debug-error.png)
        await page.screenshot({ path: 'debug-error.png' }); 
        await browser.close();
        throw error;
    }
}

module.exports = { getHoroscopeImage };