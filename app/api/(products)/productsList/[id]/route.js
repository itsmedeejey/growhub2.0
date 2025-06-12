
import { db } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET(req, { params }) {
  try {
    const id = params.id;
    const [rows] = await db.query(
      'SELECT * FROM products WHERE sub_category_id = ?',
      [id]
    );

    return NextResponse.json(rows);
  } catch (error) {
    console.error('DB Error:', error);
    return NextResponse.json({ message: 'Error fetching products' }, { status: 500 });
  }
}
