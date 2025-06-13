import { db } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET(req, { params }) {
  const { slug } = params;

  try {
    // Step 1: Get the category_id for the given slug
    const [productRows] = await db.query(
      'SELECT id, category_id FROM products WHERE slug = ?',
      [slug]
    );

    if (productRows.length === 0) {
      return NextResponse.json({ message: 'Product not found' }, { status: 404 });
    }

    const { id: originalProductId, category_id } = productRows[0];

    // Step 2: Get up to 10 other products in the same category
    const [relatedProducts] = await db.query(
      'SELECT * FROM products WHERE category_id = ? AND id != ? LIMIT 10',
      [category_id, originalProductId]
    );

    return NextResponse.json(relatedProducts);
  } catch (error) {
    console.error('DB Error:', error);
    return NextResponse.json({ message: 'Error fetching related products' }, { status: 500 });
  }
}
