"use client"
import { useState } from 'react';
import  ProductCard  from '@/components/productCard';
const ProductFilter = ({ products }) => {
  const [maxPrice, setMaxPrice] = useState(15000);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('');

  const filteredProducts = products
    .filter(product => 
      product.unit_price <= maxPrice &&
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOrder === 'lowToHigh') return a.unit_price - b.unit_price;
      if (sortOrder === 'highToLow') return b.unit_price - a.unit_price;
      return 0;
    });
console.log("Filtered products:", filteredProducts);
console.log("Original products from API:", products);

  return (
     
    <div className="p-4 md:mx-20 ">
      <div className="flex flex-wrap gap-1 md:gap-4 items-center mt-6 mb-3">
      

        {/* Sort Filter */}
        <select
          value={sortOrder}
          onChange={e => setSortOrder(e.target.value)}
          className="underline outline-none  w-28 h-10 rounded-full px-3 bg-transparent  py-2"
        >
          <option  value="">Sort by</option>
          <option value="lowToHigh">Price: Low to High</option>
          <option value="highToLow">Price: High to Low</option>
        </select>

        <input
          type="text"
          placeholder="Search product..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="border  focus:outline-slate-500 rounded-full py-1 px-2 w-72"
        />
      </div>

      

      <ProductCard items={filteredProducts}></ProductCard>
        {filteredProducts.length === 0 && (
          <p className="text-center text-gray-500 mt-6">No products found.</p>
        )}
    </div>
  );
};

export default ProductFilter;
