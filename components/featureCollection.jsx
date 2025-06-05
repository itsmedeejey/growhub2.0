"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "@splidejs/splide/dist/css/splide.min.css";
import Link from "next/link";

export default function FeatureCollection() {
  const products = [
    {
      image: "/feature-image/1.webp",
      title: "Anathi Hanging Planter Stand",
      price: "Rs. 2,950.00",
    },
    {
      image: "/feature-image/2.webp",
      title: "Coconut Bowls With Mother",
      price: "Rs. 1,030.00",
    },
    {
      image: "/feature-image/3.webp",
      title: "Gayatri Bar Chair",
      price: "From Rs. 6,995.00",
    },
    {
      image: "/feature-image/4.webp",
      title: "Golden Woods Bamboo Floor",
      price: "Rs. 4,950.00",
    },  {
      image: "/feature-image/5.webp",
      title: "chair",
      price: "Rs. 4,950.00",
    },
  ];

  return (
    <div className="w-full px-4">
      <h2 className="text-2xl font-semibold text-center my-6">Feature Products</h2>
      <Splide
        options={{
          type: "loop",
          perPage: 4,
          gap: "1rem",
          pagination: true,
          arrows: true,
          drag: true,
          breakpoints: {
            1024: { perPage: 3 },
            768: { perPage: 2 },
            640: { perPage: 1 },
          },
        }}
        aria-label="Product carousel"
      >
        {products.map((product, idx) => (
          <SplideSlide key={idx} className="">
            <div className="flex flex-col items-start">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-[280px]  object-cover rounded-lg"
              />
              <p className="text-sm font-medium mt-2">{product.title}</p>
              <p className="text-green-600 font-semibold mb-10">{product.price}</p>
            </div>
          </SplideSlide>
        ))}

        <SplideSlide>
          <div className="flex flex-col items-center justify-center w-full h-[380px] border border-gray-200 rounded-lg text-center py-10">
            <Link href="/all-products" className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 border border-black rounded-full flex items-center justify-center">
                <span className="text-xl font-bold">→</span>
              </div>
              <p className="text-sm font-semibold mt-2">VIEW ALL</p>
              <div className="w-8 h-[2px] bg-orange-600 mt-1" />
            </Link>
          </div>
        </SplideSlide>
      </Splide>
    </div>
  );
}
