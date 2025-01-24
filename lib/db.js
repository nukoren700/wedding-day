import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: 'localhost', // หรือ IP ฐานข้อมูล
  user: 'root', // ชื่อผู้ใช้ MySQL
  password: '123456', // รหัสผ่าน MySQL
  database: 'testdb', // ชื่อฐานข้อมูล
});

export default pool;