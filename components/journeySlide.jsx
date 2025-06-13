"use client"
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "@splidejs/splide/dist/css/splide.min.css";


export default function JourneySlide(){
   const journeyImages = [
  { name: "2025042417523", src: "/journey/2025042417523.webp" },
  { name: "2025042427546", src: "/journey/2025042427546.webp" },
  { name: "2025042427660", src: "/journey/2025042427660.webp" },
  { name: "2025042443345", src: "/journey/2025042443345.webp" },
  { name: "2025042460296", src: "/journey/2025042460296.webp" },
  { name: "2025042476336", src: "/journey/2025042476336.webp" },
  { name: "2025042485235", src: "/journey/2025042485235.webp" },
  { name: "2025042486995", src: "/journey/2025042486995.webp" },
  { name: "2025042662535", src: "/journey/2025042662535.webp" }
];

   
    return(<div> 
         <Splide
                          options={{
                            type: "loop",
                            perPage: 5,
                            gap: "1rem",
                            pagination: false,
                            arrows: true,
                            drag: true,
                            
                            breakpoints: {
                  1024: {
                    
                    perPage:5,

                  },
                  640:{
                    perPage:3,
                  },
                  420:{
                    perPage:2,
                  }
                },
                          }}
                          aria-label="Product banner carousel"
                        >
                   
                 {journeyImages.map((product, idx) => (
                     <SplideSlide key={idx}>
                        <div className=" md:p-2 ">

                              <img
                                src={product.src}
                                className="aspect-auto md:aspect-auto  transform ease-in-out duration-300 hover:scale-[105%]  "
                                loading="lazy"
                                
                                />
                             
                              
                                </div>
                            </SplideSlide>
                          ))}
                        </Splide>

        </div>
    )
}