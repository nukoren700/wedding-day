import pool from '@/lib/db';
import { NextResponse } from 'next/server';

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
