// backend/utils/emailService.js
const nodemailer = require('nodemailer');

const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASS = process.env.EMAIL_PASS;
const EMAIL_FROM = process.env.EMAIL_FROM || (EMAIL_USER ? `"Thuận Thời Hiếu Mệnh" <${EMAIL_USER}>` : undefined);

if (!EMAIL_USER || !EMAIL_PASS) {
  console.warn(
    "⚠️ EMAIL_USER/EMAIL_PASS chưa được set. Email service sẽ không gửi được mail (production nên set qua env)."
  );
}

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS,
  }
});

// 2. Hàm gửi Mail 1: Xác nhận (ĐÃ FIX LỖI AUTO-DETECT EMAIL)
const sendSuccessEmail = async (dataOrEmail, oldFullNameParam) => {
  let userEmail = typeof dataOrEmail === 'string' ? dataOrEmail : dataOrEmail.email;
  let fullName = typeof dataOrEmail === 'string' ? (oldFullNameParam || "Khách hàng") : (dataOrEmail.full_name || dataOrEmail.fullName || "Khách hàng");
  let data = typeof dataOrEmail === 'object' ? dataOrEmail : {};

  if (!userEmail) return console.log(">> Bỏ qua gửi mail 1 vì không tìm thấy email khách hàng.");

  const genderText = data.gender === 'male' ? 'Nam' : (data.gender === 'female' ? 'Nữ' : 'Không rõ');

  const mailOptions = {
    from: EMAIL_FROM,
    to: userEmail,
    subject: '✨ Xác nhận đăng ký luận giải Tử Vi thành công',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
        <h2 style="color: #d97706; text-align: center;">Xin chào ${fullName},</h2>
        <p>Cảm ơn bạn đã tin tưởng gửi thông tin tới <strong>Thuận Thời Hiểu Mệnh</strong>.</p>
        <p style="background-color: #f3f4f6; padding: 15px; border-radius: 5px;">
          Hồ sơ của bạn đã được hệ thống ghi nhận thành công.<br>
          Các chuyên gia và AI đang tiến hành phân tích lá số của bạn.
        </p>

        <div style="background-color: #fff8f0; padding: 15px; border-left: 4px solid #d97706; margin: 20px 0;">
          <h3 style="color: #d97706; margin-top: 0;">Thông tin bạn đã cung cấp:</h3>
          <ul style="list-style-type: none; padding-left: 0; line-height: 1.8; margin-bottom: 0;">
            <li> <strong>Họ và tên:</strong> ${fullName}</li>
            <li> <strong>Ngày sinh dương lịch:</strong> ${data.dob || 'Không rõ'}</li>
            <li> <strong>Giờ sinh:</strong> ${data.tob || 'Không rõ'}</li>
            <li> <strong>Giới tính:</strong> ${genderText}</li>
            <li> <strong>Mục tiêu hiện tại:</strong> ${data.goal || 'Không ghi'}</li>
            <li> <strong>Vấn đề đang gặp:</strong> ${data.description || data.note || 'Không ghi'}</li>
          </ul>
        </div>
        <p>Kết quả luận giải chi tiết sẽ được gửi lại qua email này trong thời gian sớm nhất.</p>
        <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
        <p style="font-size: 12px; color: #666; text-align: center;">
          Đây là email tự động, vui lòng không trả lời email này.<br>
          Chúc bạn một ngày an lành!
        </p>
      </div>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(">> Đã gửi mail thông báo tới: " + userEmail);
  } catch (error) {
    console.error(">> Lỗi gửi mail 1:", error.message);
  }
};

// 3. Hàm gửi Mail 2: Gửi kết quả (GIỮ NGUYÊN)
const sendResultEmail = async (userEmail, fullName, pdfBuffer) => {
  const mailOptions = {
    from: EMAIL_FROM,
    to: userEmail,
    subject: '📜 Kết quả luận giải Tử Vi của bạn đã sẵn sàng',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
        <h2 style="color: #d97706; text-align: center;">Chúc mừng ${fullName},</h2>
        <p>Bản luận giải Tử Vi kết hợp Trí tuệ nhân tạo dành riêng cho bạn đã hoàn thành.</p>
        <p style="text-align: center; font-weight: bold; font-size: 16px;">
            👉 MỜI BẠN MỞ FILE PDF ĐÍNH KÈM TRONG EMAIL NÀY ĐỂ XEM CHI TIẾT.
        </p>
        <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
        <p style="font-size: 12px; color: #666; text-align: center;">
          Hy vọng bản luận giải này sẽ giúp ích cho hành trình của bạn.<br>
          <strong>Thuận Thời Hiếu Mệnh</strong>
        </p>
      </div>
    `,
    attachments: [
        {
            filename: `Tu_Vi_Luan_Giai_${fullName.replace(/\s/g, '_')}.pdf`,
            content: pdfBuffer,
            contentType: 'application/pdf'
        }
    ]
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(">> Đã gửi mail kết quả (kèm file) tới: " + userEmail);
  } catch (error) {
    console.error(">> Lỗi gửi mail 2:", error.message);
  }
};

module.exports = { sendSuccessEmail, sendResultEmail };