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
    <div>
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
                <h1 className="md:text-xs text-[8px] font-thin mt-2 text-center  text-amber-900">
                  {product.name}
                </h1>
              </div>
            </SplideSlide>
          ))}

          <SplideSlide>
            <div className="md:p-2 flex flex-col justify-center items-center">
              <Link href="/home" className="flex flex-col items-center">
                <div className="rounded-full h-20 w-20 bg-amber-900 border border-gray-300 flex items-center justify-center ">
                  <span className="text-2xl font-bold text-white">→</span>
                </div>
                <p className="  md:text-xs text-[8px] mt-2 text-center text-amber-900  ">
                  View All
                </p>
              </Link>
            </div>
          </SplideSlide>
        </Splide>
      </div>

      <div className="relative">
        <video
          className=" overflow-x-hidden mt-10"
          width="1920"
          height="1080"
          controls
          preload="auto"
          muted
          
          
          loop
          playsInline
        >
          <source src="/videos/artsian.mp4" type="video/mp4" />
        </video>

        <h1 className="absolute  md:top-4 lg:top-10  md:right-5 max-w-[300px] md:max-w-sm lg:max-w-lg leading-tight  text-xs md:text-lg lg:text-2xl p-5 rounded-sm font-light text-neutral-200 bg-neutral-900/50 z-40">
          "In the heart of our communities, hands tell stories—of heritage,
          resilience, and craft. At GrowHub, we work alongside local artisans,
          transforming nature’s gifts into timeless creations. Each piece, a
          symbol of sustainability. Each maker, a keeper of tradition."
        </h1>
      </div>
    </div>
  );
}
