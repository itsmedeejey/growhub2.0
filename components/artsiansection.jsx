"use client";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "@splidejs/splide/dist/css/splide.min.css";
import Link from "next/link";

export default function Artsiansec() {
  const artsianImages = [
    {
      name: "Rise of self help groups in northeast India",
      src: "/artsian/newArticianImage.png",
    },
    {
      name: "The Bell Metal Industry of Sarthebari",
      src: "/artsian/The-Bell-Metal-Industry-of-Sarthebari.png",
    },
    {
      name: "The Global Treasure of Northeast India",
      src: "/artsian/The-Global-Treasure-of-Northeast-India.png",
    },
    {
      name: "Water Hyacinth – A Blessing in Disguise for Assam",
      src: "/artsian/Water-Hyacinth-A-Blessing-in-Disguise-For-Assam.png",
    },
  ];

  return (
    <div className=" mx-5">
      <Splide
        options={{
          type: "loop",
          perPage: 4,
          gap: "5px",
          pagination: false,
          arrows: false,
          drag: true,
          breakpoints: {
            420: {
              perPage: 3,
            },
          },
        }}
        aria-label="Product banner carousel"
      >
        {artsianImages.map((product, idx) => (
          <SplideSlide key={idx}>
            <div className="md:p-2 flex flex-col justify-center items-center">
              <img
                src={product.src}
                alt={product.name}
                className="aspect-square rounded-full h-20 transform transition-transform duration-300 hover:scale-[105%]"
                loading="lazy"
              />
              <h1 className="text-xs mt-2 text-center  text-amber-900">{product.name}</h1>
            </div>
          </SplideSlide>
        ))}

        <SplideSlide>
          <div className="md:p-2 flex flex-col justify-center items-center">
            <Link href="/home" className="flex flex-col items-center">
              <div className="rounded-full h-20 w-20 bg-amber-900 border border-gray-300 flex items-center justify-center ">
                <span className="text-2xl font-bold text-white">→</span>
              </div>
              <p className="text-xs mt-2 text-center text-amber-900  ">View All</p>
            </Link>
          </div>
        </SplideSlide>
      </Splide>
    </div>
  );
}
