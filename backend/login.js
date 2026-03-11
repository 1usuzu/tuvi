const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

async function loginGoogle() {
    const userDataDir = path.join(__dirname, '../user_data');

    // TỰ ĐỘNG XÓA DỮ LIỆU CŨ NẾU BỊ KẸT
    if (fs.existsSync(userDataDir)) {
        try {
            console.log(" Đang làm sạch dữ liệu cũ để tránh bị kẹt...");
            fs.rmSync(userDataDir, { recursive: true, force: true });
        } catch (e) {
            console.log(" Không thể xóa thư mục, hãy đảm bảo bạn đã đóng mọi cửa sổ Chrome!");
        }
    }

    console.log(" Đang mở trình duyệt CHỐNG CHẶN để bạn đăng nhập...");
    
    try {
        // DÙNG CHROMIUM MẶC ĐỊNH NHƯNG GIẢ DẠNG NGƯỜI THẬT
        const context = await chromium.launchPersistentContext(userDataDir, {
            headless: false,
            args: [
                '--start-maximized',
                '--disable-blink-features=AutomationControlled', // Ẩn danh bot
                '--use-fake-ui-for-media-stream'
            ],
            viewport: null,
            ignoreDefaultArgs: ['--enable-automation'] // Xóa mác tự động
        });

        const page = await context.newPage();
        
        // Mẹo: Vào YouTube trước để Google tin tưởng hơn là vào thẳng trang đăng nhập
        await page.goto('https://www.youtube.com');
        console.log(" Hãy bấm Đăng nhập (Sign in) ở góc trên bên phải YouTube.");
        console.log(" Sau khi đăng nhập thành công, hãy mở Gemini và NotebookLM để kiểm tra.");
        console.log(" Khi xong hết, quay lại đây bấm Ctrl + C.");

        await new Promise(() => {}); 
    } catch (err) {
        console.error(" LỖI:", err.message);
    }
}

loginGoogle();