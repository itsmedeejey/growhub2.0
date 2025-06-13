'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import axios from 'axios';

import ProductFilter from "@/components/ProductFilter";

import Banner from "@/components/banner";

export default function ProductPage() {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchProductsBySubCategory = async (id) => {
      try {
        const response = await axios.get(`/api/productsList/${id}`);
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductsBySubCategory(id);
  }, [id]);
  return (
    <div className="bg-white">

      <div className="relative">
        <Banner />
      </div>

      <div className="mt-4 shadow-xl rounded-2xl px-4 py-6">
        {loading ? (
          <p className="text-center text-gray-500">Loading products...</p>
        ) : products.length === 0 ? (
          <p className="text-center text-red-500">No products found.</p>
        ) : (
          <ProductFilter products={products} />
        )}
      </div>

    </div>
  );
}
