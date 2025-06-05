"use client"
import Sidebar from "./sidebar";
import Image from "next/image";
import { useState } from "react";
export default function Navbar (){

    const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 bg-white shadow-md w-full">
    <div className="flex flex-row justify-between">



      <div className="h-16 flex items-center px-2 justify-between ">
        <img src="/brownlogonew.svg" alt="logo" className="h-14 py-2 " />
      </div >

        <div className="hidden  lg:flex flex-row overflow-x-auto    justify-between lg:gap-5 xl:gap-10 items-center text-amber-900 ">
          <h1>FURNITURE</h1>

          <h1>FLOWER</h1>

          <h1>HOME DECOR</h1>

          <h1>HOME & KITCHEN</h1>

          <h1>LIFESTYLE & FASHION</h1>

          <h1>LIGHTS</h1>


        </div>
        <div className="flex flex-row gap-5 mr-5">
          
          <Image src="navbarIcon/search.svg" alt="search" width={20} height={10}  />
          <Image src="navbarIcon/cart.svg" alt="cart" width={20} height={10} />
         <Image src="navbarIcon/user.svg" alt=".." width={20} height={10} />



        <Image
          src={isOpen ? "/navbarIcon/cross.svg" : "/navbarIcon/3bar.svg"}
          alt="Menu Toggle"
          width={30}
          height={20}
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer"
          
        />
        </div>




 <div
        className={`fixed top-16 right-0 h-screen w-74  text-white transform transition-transform duration-400 ease-in-out z-40 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        
        <Sidebar></Sidebar>
      </div>


    </div>
    </div>
  );
};
