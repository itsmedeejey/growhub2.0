"use client";
import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "@splidejs/splide/dist/css/splide.min.css";
export default function AboutBrand() {
  const icons = [
    {
      src: "/about-icon/Sustainability.png",
      alt: "Sustainability",
      label: "Sustainability",
    },
    {
      src: "/about-icon/EmpoweringArtisian.png",
      alt: "Empowering Artisan",
      label: "Empowering Artisan",
    },

    {
      src: "/about-icon/PreservingCulture.png",
      alt: "Preserving Culture",
      label: "Preserving Culture",
    },

    {
      src: "/about-icon/WasteManagement.png",
      alt: "Waste Management",
      label: "Waste Management",
    },
    {
      src: "/about-icon/EcoFriendly.png",
      alt: "Eco Friendly",
      label: "Eco Friendly",
    },
  ];
  return (
    <div className="overflow-x-hidden">
      <div className="flex flex-col gap-5 mt-20 text-amber-900">
        <h1 className="text-amber-900 flex justify-center   text-2xl">
          Who Are We
        </h1>
        <p className="flex justify-center text-center mx-7 md:mx-40 leading-normal md:leading-normal text-xs md:text-lg font-thin">
          'GrowHub: Where Heritage Blooms At GrowHub', we believe in the
          enduring power of human creativity and the importance of preserving
          our rich cultural heritage. We are more than just an e-commerce
          platform; we are a movement dedicated to empowering artisans,
          fostering sustainable livelihoods, and connecting the world to the
          exquisite craftsmanship of India.
        </p>
      </div>

      <div className="mt-10  mx-10 flex  justify-center">
        <Splide
          options={{
            type: "slide",
            perPage: 5,
            gap: "1rem",
            arrows: false,
            pagination: false,
            breakpoints: {
              1024: { perPage: 5 },
              768: { perPage: 4 },
              480: { perPage: 3 },
            },
          }}
        >
          {icons.map((icon, index) => (
            <SplideSlide key={index}>
              <div className="flex flex-col items-center">
                <img
                  src={icon.src}
                  alt={icon.alt}
                  className="md:w-[50px] md:h-[50px] w-[30px] h-[30px] object-contain"
                />
                <h1 className="mt-2 text-xs font-thin text-center">
                  {icon.label}
                </h1>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
}
