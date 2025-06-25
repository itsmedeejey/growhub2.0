"use client"
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "@splidejs/splide/dist/css/splide.min.css";


export default function Banner(){
    const bannerImg = [
        "/banner/1.png",
        "/banner/2.png",
        "/banner/3.png",
        "/banner/4.png",
        "/banner/5.png",
        "/banner/6.png",
        "/banner/7.png",
    ]
    return(
        <div>
        <Splide
              options={{
                type: "loop",
                perPage: 1,
                gap: "0rem",
                pagination: false,
                arrows: false,
                drag: true,
                autoplay: true,
                interval: 3000, 
                speed: 1000,
                pauseOnHover: false,
              }}
              aria-label="Product banner carousel"
            >
       
     {bannerImg.map((img, idx) => (
                <SplideSlide key={idx}>
                  <img
                    src={img}
                    className="w-full h-full "
                    // onClick={() => handleImageClick(idx)}
                    loading="lazy"
                  />
                </SplideSlide>
              ))}
            </Splide>
            </div>
    )
}

 