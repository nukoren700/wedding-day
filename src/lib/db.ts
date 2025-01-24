import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: 'fdb1030.awardspace.net', // ชื่อโฮสต์ของ MySQL
  user: '4579887_testdb',      // ชื่อผู้ใช้ MySQL
  password: 'YYge9nZgyww2zOxZ', // รหัสผ่าน MySQL
  database: '4579887_testdb', // ชื่อฐานข้อมูล
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default pool;
