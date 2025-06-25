"use client"
import Image from "next/image";
import React from "react";
import HTMLFlipBook from "react-pageflip";

const imagePages = [
  "/catalouge/1.png",
  "/catalouge/2.png",
  "/catalouge/3.png",
  "/catalouge/4.png",
  "/catalouge/5.png",
  "/catalouge/6.png",
  "/catalouge/7.png",
  "/catalouge/8.png",
  "/catalouge/9.png",
  "/catalouge/10.png",
  "/catalouge/11.png",
  "/catalouge/12.png",
  "/catalouge/13.png",
  "/catalouge/14.png",
  "/catalouge/15.png",
  "/catalouge/16.png",
  "/catalouge/17.png",
  "/catalouge/18.png",
  "/catalouge/19.png",
  "/catalouge/20.png",
  "/catalouge/21.png",
  "/catalouge/22.png",
  "/catalouge/23.png",
  "/catalouge/24.png",
  "/catalouge/25.png",
  "/catalouge/26.png",
  "/catalouge/27.png",
  "/catalouge/28.png",
  "/catalouge/29.png",
  "/catalouge/30.png",
  "/catalouge/31.png",
  "/catalouge/32.png",
  "/catalouge/33.png",
  "/catalouge/34.png"
  
];

export default function Catalouge () {
  return (
    <div className="flex mx-2 flex-col justify-top items-center min-h-screen bg-white">
        
            <h1 className="font-medium uppercase mt-10 text-amber-900 mb-5" >product catalouge</h1>
        
            
      <HTMLFlipBook
        width={300}
        height={400}
        size="stretch"
        minWidth={315}
        maxWidth={700}
        minHeight={400}
        maxHeight={1080}
        maxShadowOpacity={0.5}
        showCover={true}
        mobileScrollSupport={true}
        swipeDistance={20}
        className="shadow-xl rounded-md"
      >
        {imagePages.map((src, index) => (
          <div key={index} className=" bg-white overflow-hidden">
            <Image
              width={500}  
              height={500}
              src={src}
              alt={`Page ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </HTMLFlipBook>
      <a
  href="/Catalouge.pdf"
  download
  className="bg-amber-600 shadow-md rounded-full text-sm mt-5 text-center items-center justify-center text-white px-3 py-2  hover:bg-amber-700 transition duration-300 hover:scale-90"
>
  Download Catalouge
</a>
    </div>
  );
};

