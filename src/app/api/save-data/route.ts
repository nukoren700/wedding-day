import { NextResponse } from 'next/server';
import pool from '@/lib/db';
import { ResultSetHeader } from 'mysql2';

// ฟังก์ชันสำหรับจัดการ POST Request

export async function GET() {
    try {
      const query = 'SELECT * FROM messages';
      const [rows] = await pool.execute(query);
  
      return NextResponse.json({
        success: true,
        data: rows,
      });
    } catch (error) {
      console.error('Error fetching data:', error);
      return NextResponse.json(
        { error: 'An error occurred while fetching data.' },
        { status: 500 }
      );
    }
  }

export async function POST(request: Request) {
    try {
      const body = await request.json();
      const { firstname, lastname, message } = body;
  
      if (!firstname || !lastname || !message) {
        return NextResponse.json(
          { error: 'Please provide firstname, lastname, and message.' },
          { status: 400 }
        );
      }
  
      const query = 'INSERT INTO messages (firstname, lastname, message) VALUES (?, ?, ?)';
      const values = [firstname, lastname, message];
  
      // ระบุชนิดของผลลัพธ์เป็น ResultSetHeader
      const [result] = await pool.execute<ResultSetHeader>(query, values);
  
      return NextResponse.json({
        success: true,
        message: 'Data saved successfully!',
        data: { id: result.insertId, firstname, lastname, message },
      });
    } catch (error) {
        console.error('Error saving data:', error); // แสดงรายละเอียดของ error
        return NextResponse.json(
          { error: 'An error occurred while saving data.' },
          { status: 500 }
        );
      }
  }
