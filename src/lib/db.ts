// import mysql from 'mysql2/promise';

// const pool = mysql.createPool({
//   host: 'gateway01.ap-southeast-1.prod.aws.tidbcloud.com', // ชื่อโฮสต์ของ MySQL
//   user: 'pSqSMLCFhgheTbj.root',      // ชื่อผู้ใช้ MySQL
//   password: 'YYge9nZgyww2zOxZ', // รหัสผ่าน MySQL
//   database: 'test', // ชื่อฐานข้อมูล
//   waitForConnections: true,
//   connectionLimit: 10,
//   queueLimit: 0,
// });

// export default pool;

import mysql from 'mysql2/promise';

// กำหนดค่าการเชื่อมต่อฐานข้อมูล
const pool = mysql.createPool({
  host: process.env.DB_HOST, // เช่น xxx.tidbcloud.com
  port: 4000, // Default port ของ TiDB
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  ssl: {
    rejectUnauthorized: true, // ใช้ SSL สำหรับการเชื่อมต่อ
  },
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default pool;

