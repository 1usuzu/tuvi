// backend/workers/geminiWorker.js
const { chromium } = require('playwright');
const path = require('path');
const User = require('../models/userModel');
const pdfService = require('../utils/pdfService');
const { sendResultEmail } = require('../utils/emailService');
const { updateSheetStatus } = require('../utils/googleSheet');
const { getHoroscopeImage } = require('../utils/getHoroscopeImage');

// 👉 ĐÂY NÈ! CHÌA KHÓA LÀ DÒNG NÀY: Lôi cái Siêu Prompt khổng lồ vào
const { getMasterPrompt } = require('../data/systemPrompt');

async function startGeminiWorker() {
    console.log("🚀 KHỞI ĐỘNG BOT TRÌNH DUYỆT - BẢN 1 PHÁT ĂN NGAY!");

    const userDataDir = path.join(__dirname, '../gemini-profile-data');
    let context;

    try {
        context = await chromium.launchPersistentContext(userDataDir, {
            headless: false,
            channel: 'chrome', 
            args: ['--disable-blink-features=AutomationControlled', '--no-sandbox', '--disable-infobars'],
            viewport: { width: 1280, height: 720 },
            userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36'
        });
    } catch (err) {
        console.error("❌ Lỗi khởi tạo trình duyệt:", err.message);
        return; 
    }

    const pageGemini = await context.newPage();
    console.log("🌐 Đang mở trang Gemini...");
    await pageGemini.goto('https://gemini.google.com/app', { waitUntil: 'domcontentloaded', timeout: 60000 });

    const isLoginRequired = await pageGemini.locator('a[href*="ServiceLogin"], input[type="email"]').isVisible();
    if (isLoginRequired) {
        console.log("⚠️ Vui lòng đăng nhập Google trên cửa sổ Chrome...");
        await pageGemini.waitForSelector('div[contenteditable="true"]', { state: 'visible', timeout: 0 });
        console.log("✅ Đã đăng nhập thành công!");
        await pageGemini.waitForTimeout(3000); 
    }

    while (true) {
        try {
            const request = await User.findPending();
            if (!request) {
                await new Promise(resolve => setTimeout(resolve, 5000));
                continue;
            }

            const clientName = request.full_name || request.fullName || "Khách hàng";
            console.log(`\n=== 🎬 ĐANG XỬ LÝ ĐƠN HÀNG VIP: ${clientName} ===`);
            
            await User.updateStatus(request.id, 'processing');
            await updateSheetStatus(request.email, 'PROCESSING');

            console.log("📸 Đang lấy ảnh lá số từ tuvi.vn...");
            const imageBuffer = await getHoroscopeImage(request);

            try {
                await pageGemini.goto('https://gemini.google.com/app', { waitUntil: 'domcontentloaded', timeout: 60000 });
                
                // 👉 LẤY CÁI SIÊU PROMPT GỘP 21 NGÀY BẮN VÀO ĐÂY
                const prompt = getMasterPrompt(request); 
                
                // GỌI BOT CHẠY ĐÚNG 1 LẦN DUY NHẤT
                const geminiFinalResponse = await askGeminiOneShot(pageGemini, prompt, imageBuffer);

                if (!geminiFinalResponse || geminiFinalResponse.length < 500) {
                    throw new Error("Lấy thiếu chữ hoặc không copy được!");
                }
                
                await User.updateResult(request.id, geminiFinalResponse.substring(0, 1500) + "... (Đã lưu đủ 21 ngày)");

                console.log("📦 Đã có chữ! Đang đổ vào xưởng in PDF...");
                const chapterResults = [{ day: 1, title: `Luận Giải Chiến Lược 21 Ngày`, content: geminiFinalResponse }];
                const pdfBuffer = await pdfService.generateUltimateReport(request, chapterResults, imageBuffer);
                
                console.log("📧 Đang gửi Email cho khách...");
                await sendResultEmail(request.email, clientName, pdfBuffer);
                
                await User.updateStatus(request.id, 'completed');
                await updateSheetStatus(request.email, 'DONE');
                
                console.log(`✅ NỔ ĐƠN THÀNH CÔNG RỰC RỠ CHO ${clientName}!`);

            } catch (innerError) {
                console.error("❌ Lỗi luồng xử lý AI/PDF:", innerError.message);
                await User.updateStatus(request.id, 'failed');
                await updateSheetStatus(request.email, 'FAILED');
            }

        } catch (error) {
            console.error("⚠️ Lỗi vòng lặp chính:", error.message);
            await new Promise(resolve => setTimeout(resolve, 5000));
        }
    }
}

// =====================================================================
// 🛠️ HÀM TƯƠNG TÁC GEMINI (Chống đứt hơi khi chat dài)
// =====================================================================
async function askGeminiOneShot(page, prompt, imageBuffer) {
    console.log("⌛ Đợi ô chat Gemini xuất hiện...");
    await page.waitForSelector('div[contenteditable="true"]', { timeout: 60000 });
    const chatInput = page.locator('div[contenteditable="true"]').first();
    await chatInput.click();

    if (imageBuffer) {
        console.log("🖼️ Đang nạp hình lá số...");
        const base64Image = imageBuffer.toString('base64');
        await page.evaluate((base64) => {
            const byteString = atob(base64);
            const ab = new ArrayBuffer(byteString.length);
            const ia = new Uint8Array(ab);
            for (let i = 0; i < byteString.length; i++) ia[i] = byteString.charCodeAt(i);
            const file = new File([ab], "la_so.png", { type: "image/png" });
            const dataTransfer = new DataTransfer();
            dataTransfer.items.add(file);
            document.querySelector('div[contenteditable="true"]').dispatchEvent(
                new ClipboardEvent("paste", { clipboardData: dataTransfer, bubbles: true })
            );
        }, base64Image);
        await page.waitForTimeout(3000);
    }

    console.log("📤 Đang nạp Siêu Prompt...");
    await page.keyboard.insertText(prompt);
    await page.waitForTimeout(1000);
    await page.keyboard.press("Control+Enter");
    console.log("🤖 Gemini đang viết bài chiến lược...");

    let previousLength = 0;
    let stableCount = 0;

    while (true) {
        await page.waitForTimeout(4000);

        const continueBtn = page.locator('button:has-text("Continue generating"), button:has-text("Continue"), button:has-text("Tiếp tục tạo"), button:has-text("Tiếp tục")');
        if (await continueBtn.count() > 0 && await continueBtn.first().isVisible()) {
            console.log("🔄 AI bị ngắt hơi, đang bấm Continue để nối bài...");
            await continueBtn.first().click();
            await page.waitForTimeout(3000);
            continue;
        }

        const currentLength = await page.evaluate(() => {
            const selectors = [
                'message-content', 
                '.model-response-text', 
                '[data-message-author-role="model"]', 
                '.markdown-renderer'
            ];
            let length = 0;
            for (let sel of selectors) {
                const elements = document.querySelectorAll(sel);
                if (elements.length > 0) {
                    length = elements[elements.length - 1].innerText.length;
                    break; 
                }
            }
            return length;
        });

        console.log(`🕵️ Camera soi: Đã viết được ${currentLength} chữ...`);

        if (currentLength > 500 && currentLength === previousLength) {
            stableCount++;
            if (stableCount >= 2) { 
                console.log("✅ Xác nhận AI đã buông bút! Bắt đầu lấy bài...");
                break; 
            }
        } else {
            stableCount = 0; 
            previousLength = currentLength; 
        }
    }

    await page.waitForTimeout(2000);

    console.log("📄 Đang hút nội dung sạch từ Gemini...");
    const text = await page.evaluate(() => {
        const selectors = [
            'message-content', 
            '.model-response-text', 
            '[data-message-author-role="model"]', 
            '.markdown-renderer'
        ];
        for (let sel of selectors) {
            const elements = document.querySelectorAll(sel);
            if (elements.length > 0) {
                return elements[elements.length - 1].innerText;
            }
        }
        return "";
    });

    console.log(`📊 Gemini text length: ${text.length} ký tự`);
    return text;
}

startGeminiWorker();