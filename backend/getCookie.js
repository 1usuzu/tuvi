// backend/workers/getCookie.js
const { chromium } = require('playwright');
const path = require('path');
const readline = require('readline');

async function generateCookie() {
    console.log("🚀 ĐANG MỞ TRÌNH DUYỆT (CHẾ ĐỘ TÀNG HÌNH CHỐNG GOOGLE CHẶN)...");

    // Dùng Chrome thật của máy tính + Giấu thân phận Bot
    const browser = await chromium.launch({ 
        headless: false,
        channel: 'chrome', // Lệnh này cực kỳ quan trọng: Ép nó dùng Chrome thật!
        args: [
            '--disable-blink-features=AutomationControlled', // Giấu cờ "Tôi là Bot"
            '--no-sandbox',
            '--disable-infobars'
        ]
    });
    
    const context = await browser.newContext({
        // Giả lập như một người dùng Windows bình thường
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36'
    });
    
    const page = await context.newPage();

    await page.goto('https://gemini.google.com/app');

    console.log("\n=========================================================");
    console.log("👉 HƯỚNG DẪN:");
    console.log("1. Hãy tự tay đăng nhập Gmail vào cửa sổ Chrome vừa hiện ra.");
    console.log("2. Đợi đến khi màn hình chat của Gemini load lên xong.");
    console.log("3. Quay lại màn hình đen (Terminal) này, nhấn phím ENTER.");
    console.log("=========================================================\n");

    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
    
    rl.question('Nhấn phím [ENTER] ở đây SAU KHI bạn đã thấy khung chat Gemini: ', async () => {
        const cookiePath = path.join(__dirname, '../cookies.json');
        
        await context.storageState({ path: cookiePath });
        
        console.log(`\n✅ NGON LÀNH! Đã vượt rào thành công và lưu file tại: ${cookiePath}`);
        console.log(`Bây giờ Tiên có thể chạy lệnh 'npm run all' được rồi đó!`);
        
        await browser.close();
        rl.close();
    });
}

generateCookie();