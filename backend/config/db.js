const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

// Kết nối Database Online (Neon)
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  },
  idleTimeoutMillis: 30000, // Cứ 30 giây không xài là Pool tự đóng ống mạng (Neon khỏi mắng)
  connectionTimeoutMillis: 5000 // Chờ tối đa 5s để nối mạng
});

// Bắt lỗi ngầm của Pool
pool.on('error', (err, client) => {
  console.error(' [Cảnh báo] Database báo rớt mạng (Hệ thống tự động bỏ qua):', err.message);
});

// 👉 ĐÃ SỬA: Dùng 'query' thay vì 'connect' để Ping thử, không bị ngâm kết nối
pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error(' Lỗi kết nối Neon:', err.message);
  } else {
    console.log(' Đã kết nối thành công tới Neon Database!');
  }
});

module.exports = pool;