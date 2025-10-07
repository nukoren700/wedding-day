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

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: 4000, 
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  ssl: {
    rejectUnauthorized: true,
  },
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default pool;

