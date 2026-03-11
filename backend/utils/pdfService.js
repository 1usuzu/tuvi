// backend/utils/pdfService.js
const PDFDocument = require('pdfkit');
const path = require('path');
const fs = require('fs');

class PDFService {
    constructor() {
        this.fontRegular = path.join(__dirname, '../assets/fonts/BeVietnamPro-Regular.ttf');
        this.fontBold = path.join(__dirname, '../assets/fonts/BeVietnamPro-Bold.ttf');
        this.logoPath = path.join(__dirname, '../assets/images/logo_tps.jpg'); 
        this.bgPath = path.join(__dirname, '../assets/images/hoa-van-trong-dong-9.png'); 
    }

    async generateUltimateReport(userInfo, allChapters) {
        return new Promise((resolve, reject) => {
            try {
                const doc = new PDFDocument({
                    margin: 50,
                    size: 'A4',
                    bufferPages: true 
                });

                let fileName = `HoSo_ChuyenSau_${userInfo.fullName ? userInfo.fullName.replace(/\s/g, '_') : 'KhachHang'}_${Date.now()}.pdf`;
                
                const reportsDir = path.join(__dirname, '../assets/reports');
                if (!fs.existsSync(reportsDir)) fs.mkdirSync(reportsDir, { recursive: true });
                
                let filePath = path.join(reportsDir, fileName);
                let stream = fs.createWriteStream(filePath);

                doc.pipe(stream);

                // --- VẼ ẢNH NỀN CHO TẤT CẢ CÁC TRANG ---
                this._drawBackground(doc);
                doc.on('pageAdded', () => {
                    this._drawBackground(doc);
                });

                // --- 1. TRANG BÌA CẤP CAO ---
                this._drawCover(doc, userInfo);

                // --- 2. DÀN TRANG NỘI DUNG TỪ GEMINI ---
                if (allChapters && allChapters.length > 0) {
                    this._parseAndDrawContent(doc, allChapters[0].content);
                }

                // --- 3. BẢNG THỐNG KÊ & LIÊN HỆ TPS ---
                this._drawSummaryDashboard(doc, userInfo);

                // --- 4. ĐÁNH SỐ TRANG & FOOTER ---
                this._finalizeReport(doc, userInfo);

                doc.end();
                stream.on('finish', () => resolve(fs.readFileSync(filePath))); 
            } catch (err) {
                reject(err);
            }
        });
    }

    _drawBackground(doc) {
        if (fs.existsSync(this.bgPath)) {
            doc.save(); 
            doc.opacity(0.12); 
            
            // ÉP GIÃN FULL TRANG A4 - XÓA SẠCH VIỀN TRẮNG
            doc.image(this.bgPath, 0, 0, { 
                width: doc.page.width, 
                height: doc.page.height 
            });
            doc.restore(); 
        }
    }

    _drawCover(doc, userInfo) {
        if (fs.existsSync(this.logoPath)) {
            doc.image(this.logoPath, 50, 40, { width: 150 });
        } else {
            doc.font(this.fontBold).fontSize(14).fillColor('#1e293b').text('TPS THÀNH PHONG', 50, 50);
        }

        doc.moveDown(8);
        
        doc.fillColor('#d97706').font(this.fontBold).fontSize(18)
           .text('THUẬN THỜI HIẾU MỆNH - VẠN SỰ HANH THÔNG', { align: 'center', characterSpacing: 1 });
        
        doc.moveDown(1);
        
        doc.fillColor('#1e3a8a').font(this.fontBold).fontSize(30)
           .text('HỒ SƠ LUẬN GIẢI CHIẾN LƯỢC', { align: 'center' });
        doc.fillColor('#1e3a8a').font(this.fontBold).fontSize(26)
           .text('21 NGÀY CHUYÊN SÂU', { align: 'center' });

        doc.moveDown(2);
        doc.moveTo(150, doc.y).lineTo(445, doc.y).strokeColor('#d97706').lineWidth(2).stroke();
        doc.moveDown(2);

        doc.fillColor('#1e293b').font(this.fontBold).fontSize(24)
           .text(userInfo.full_name || userInfo.fullName || 'Khách Hàng VIP', { align: 'center' });
        doc.moveDown(0.5);
        doc.font(this.fontRegular).fontSize(16)
           .text(`Ngày sinh: ${userInfo.dob || 'Đã bảo mật'}`, { align: 'center' });
        doc.moveDown(0.5);
        doc.font(this.fontRegular).fontSize(14)
           .text(`Được phân tích bởi: Hệ Thống AI - TPS Thành Phong`, { align: 'center' });
    }

    _parseAndDrawContent(doc, text) {
        // Cắt bỏ khoảng trắng thừa ở đầu và cuối bài để tránh sinh trang ảo
        const lines = text.trim().split('\n');
        doc.addPage(); 

        let isFirstHeading = true; // Biến cờ bảo vệ chống ngắt trang trống

        for (const line of lines) {
            const cleanLine = line.trim();
            if (!cleanLine) {
                doc.moveDown(0.6);
                continue;
            }

            if (cleanLine.startsWith('# ')) {
                // CHỈ ngắt trang nếu ĐÃ QUA tiêu đề đầu tiên
                if (!isFirstHeading) {
                    doc.addPage();
                }
                isFirstHeading = false; 

                doc.moveDown(1);
                doc.fillColor('#1e3a8a').font(this.fontBold).fontSize(22)
                   .text(cleanLine.replace('# ', '').replace(/\*\*/g, ''), { align: 'center' });
                doc.moveDown(1);
                doc.moveTo(100, doc.y).lineTo(495, doc.y).strokeColor('#e2e8f0').lineWidth(1.5).stroke();
                doc.moveDown(2);
            } 
            else if (cleanLine.startsWith('## ')) {
                // Ép rớt trang thật sâu (y > 700) mới cho qua trang mới
                if (doc.y > 700) doc.addPage(); 
                else doc.moveDown(1.5);
                
                doc.fillColor('#d97706').font(this.fontBold).fontSize(18)
                   .text(cleanLine.replace('## ', '').replace(/\*\*/g, ''));
                doc.moveDown(0.8);
            } 
            else if (cleanLine.startsWith('### ')) {
                if (doc.y > 730) doc.addPage(); 
                else doc.moveDown(1);

                doc.fillColor('#1e293b').font(this.fontBold).fontSize(15)
                   .text(cleanLine.replace('### ', '').replace(/\*\*/g, ''));
                doc.moveDown(0.5);
            }
            else if (cleanLine.startsWith('- ') || cleanLine.startsWith('* ')) {
                doc.fillColor('#334155').font(this.fontRegular).fontSize(14)
                   .text('    • ' + cleanLine.substring(2).replace(/\*\*/g, ''), { lineGap: 8, align: 'justify' });
            } 
            else {
                if (cleanLine.startsWith('**') && cleanLine.endsWith('**')) {
                    doc.fillColor('#1e293b').font(this.fontBold).fontSize(14)
                       .text(cleanLine.replace(/\*\*/g, ''), { lineGap: 8, align: 'justify' });
                } else {
                    doc.fillColor('#334155').font(this.fontRegular).fontSize(14)
                       .text(cleanLine.replace(/\*\*/g, ''), { lineGap: 8, align: 'justify' });
                }
            }
        }
    }

    _drawSummaryDashboard(doc, userInfo) {
        // Tối ưu để không đẻ thêm trang trắng ở đoạn cuối
        if (doc.y > 450) {
            doc.addPage();
        } else {
            doc.moveDown(3);
        }
        
        doc.rect(50, doc.y, 495, 260).fill('#fffbeb');
        
        doc.moveDown(2);
        doc.fillColor('#d97706').font(this.fontBold).fontSize(22)
           .text('TỔNG KẾT & CAM KẾT ĐỒNG HÀNH', { align: 'center' });
        doc.moveDown(2);

        const leftX = 80;
        const rightX = 200;

        doc.font(this.fontBold).fontSize(14).fillColor('#1e293b');
        
        const drawRow = (label, value, yPos) => {
            doc.text(label, leftX, yPos);
            doc.font(this.fontRegular).text(value, rightX, yPos, { width: 310, align: 'left' });
            doc.moveTo(leftX, yPos + 25).lineTo(500, yPos + 25).strokeColor('#fcd34d').lineWidth(1).stroke();
            doc.font(this.fontBold); 
        };

        let currentY = doc.y;
        drawRow('Chủ sở hữu:', userInfo.full_name || userInfo.fullName || 'Khách Hàng', currentY);
        drawRow('Đơn vị phân tích:', 'Hệ Thống AI - TPS Thành Phong', currentY + 40);
        drawRow('Mục tiêu chiến lược:', userInfo.goal || 'Phát triển sự nghiệp & Tài chính', currentY + 80);

        doc.moveDown(5);
        doc.fillColor('#1e3a8a').font(this.fontBold).fontSize(18).text('THÔNG TIN LIÊN HỆ', leftX);
        doc.font(this.fontRegular).fontSize(14).fillColor('#334155').moveDown(1);
        
        doc.text('TPS Thành Phong Corporation', leftX);
        doc.text('VPGD: 31B Đường số 23, P.Hiệp Bình Chánh, Q.Thủ Đức, TP.HCM', leftX);
        doc.text('Website: www.thanhphong.vn', leftX);

        doc.moveDown(4);
        doc.font(this.fontBold).fontSize(16).fillColor('#d97706').text('THUẬN THỜI HIẾU MỆNH - VẠN SỰ HANH THÔNG', { align: 'center' });
    }

    _finalizeReport(doc, userInfo) {
        const pages = doc.bufferedPageRange();
        for (let i = 0; i < pages.count; i++) {
            doc.switchToPage(i);
            
            doc.font(this.fontBold).fontSize(10).fillColor('#d97706')
               .text('Thuận Thời Hiếu Mệnh', 50, doc.page.height - 40, { align: 'left' });
               
            doc.font(this.fontRegular).fontSize(10).fillColor('#94a3b8')
               .text(
                   `Tài liệu bảo mật của ${userInfo.full_name || userInfo.fullName} | Trang ${i + 1} / ${pages.count}`,
                   50,
                   doc.page.height - 40,
                   { align: 'right' }
               );
        }
    }
}

module.exports = new PDFService();