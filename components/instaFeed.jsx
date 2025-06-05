"use client"
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "@splidejs/splide/dist/css/splide.min.css";
import Link from "next/link";

export default function Instafeed(){
    const instaFeedProducts = [
  { name: "Product 1", image: "/instafeed/1.png" },
  { name: "Product 2", image: "/instafeed/2.png" },
  { name: "Product 3", image: "/instafeed/3.png" },
  { name: "Product 4", image: "/instafeed/4.png" },
  { name: "Product 5", image: "/instafeed/5.png" },
  { name: "Product 6", image: "/instafeed/6.png" },
  { name: "Product 7", image: "/instafeed/7.png" },
  { name: "Product 8", image: "/instafeed/8.png" },
  { name: "Product 9", image: "/instafeed/9.png" },
  { name: "Product 10", image: "/instafeed/10.png" },
  { name: "Product 11", image: "/instafeed/11.png" },
  { name: "Product 12", image: "/instafeed/12.png" },
];


    return (
        <div>
              <Splide
                          options={{
                            type: "loop",
                            perPage: 7,
                            gap: "1rem",
                            pagination: false,
                            arrows: true,
                            drag: true,
                            
                            breakpoints: {
                  1024: {
                    
                    perPage:5,

                  },
                  640:{
                    perPage:4,
                  },
                  420:{
                    perPage:3,
                  }
                },
                          }}
                          aria-label="Product banner carousel"
                        >
                   
                 {instaFeedProducts.map((product, idx) => (
                     <SplideSlide key={idx}>
                        <div className=" md:p-2 ">

                            <Link href={"https://www.instagram.com/growhub.shop/"}>
                              <img
                                src={product.image}
                                className="aspect-[4/5] md:aspect-square transform ease-in-out duration-300 hover:scale-[105%]  "
                                loading="lazy"
                                
                                />
                            </Link> 
                              <h1 className="flex justify-center text-xs mt-2">
                                {product.name}
                              </h1>
                                </div>
                            </SplideSlide>
                          ))}
                        </Splide>
        </div>
    )
}