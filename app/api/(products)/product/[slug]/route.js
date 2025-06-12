
import { db } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET(req, { params }) {
  try {
    const slug = params.slug;
    const [rows] = await db.query(
      'SELECT * FROM products WHERE slug = ?',
      [slug]
    );

    return NextResponse.json(rows[0]);
  } catch (error) {
    console.error('DB Error:', error);
    return NextResponse.json({ message: 'Error fetching products' }, { status: 500 });
  }
}
