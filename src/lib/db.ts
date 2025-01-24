import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: 'localhost', // ชื่อโฮสต์ของ MySQL
  user: 'root',      // ชื่อผู้ใช้ MySQL
  password: '123456', // รหัสผ่าน MySQL
  database: 'testdb', // ชื่อฐานข้อมูล
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default pool;
