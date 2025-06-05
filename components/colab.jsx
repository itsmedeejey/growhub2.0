"use client"
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "@splidejs/splide/dist/css/splide.min.css";
export default function Collab(){
    const collabLogos = [
  { src: "/collab/2024100787746.jpeg" },
  { src: "/collab/2024100934615.png" },
  { src: "/collab/2024112162685.png" },
  { src: "/collab/2024112638164.jpg" },
  { src: "/collab/2024120912531.jpg" },
  { src: "/collab/2025041838060.png" },
  { src: "/collab/2025041889574.png" },
  { src: "/collab/2025041894145.png" },
  { src: "/collab/2025041895044.png" },
];

    return(<div>
              <Splide
                    options={{
                      type: "loop",
                      perPage: 8,
                      gap: "1px",
                      pagination: false,
                      arrows: false,
                      drag: true,
                      autoplay: true,
                interval: 5000, 
                speed: 20000,
                pauseOnHover: false,
                      breakpoints: {
                        1020:{
                            perPage:8,

                        },620: {
                          perPage: 5,
                        },
                      },
                    }}
                    aria-label="Product banner carousel"
                  >
                    {collabLogos.map((product, idx) => (
                      <SplideSlide key={idx}>
                        <div className=" p-1 flex flex-col  justify-center items-center">
                          <img
                            src={product.src}
                            className="aspect-square rounded-full h-20 transform transition-transform duration-300 hover:scale-[105%] "
                            loading="lazy"
                          />
                        </div>
                      </SplideSlide>
                    ))}
            </Splide>

        </div>
    )
}