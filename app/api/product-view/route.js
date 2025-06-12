import { db } from '@/lib/db'
import { NextResponse } from 'next/server'

export async function POST(req) {
  try {
    const { product_id, viewed_hour } = await req.json()
    const forwarded = req.headers.get('x-forwarded-for');
    const ip = forwarded ? forwarded.split(',')[0].trim() : 'unknown';


    await db.query(
      `INSERT IGNORE INTO product_views (product_id, ip_address, viewed_hour) VALUES (?, ?, ?)`,
      [product_id, ip, viewed_hour]
    )

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('View log error:', error)
    return NextResponse.json({ message: 'Error logging view' }, { status: 500 })
  }
}
