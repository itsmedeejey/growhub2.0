import { db } from '@/lib/db'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const [rows] = await db.query('SELECT * FROM products')
     return NextResponse.json(rows)
     
  } catch (error) {
    console.error('DB Error:', error)
    return NextResponse.json({ message: 'Error fetching products' }, { status: 500 })
  }
}
