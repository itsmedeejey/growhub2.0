"use client";

import { useState } from "react";
import Image from "next/image";
import Sidebar from "./sidebar";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
<header className="sticky top-0 z-50 bg-white shadow-md w-full">
      <div className="flex items-center justify-between px-2 md:px-4 h-16">
        <div className="flex items-center justify-center">
          <Image
            src="/brownLogo.png"
            alt="logo"
            className="  "
            width={120} height={120}
          />
        </div>

        <div className="hidden lg:flex gap-8 text-amber-900">
          <h1 className="hover:text-amber-700 cursor-pointer">FURNITURE</h1>
          <h1 className="hover:text-amber-700 cursor-pointer">FLOWER</h1>
          <h1 className="hover:text-amber-700 cursor-pointer">HOME DECOR</h1>
          <h1 className="hover:text-amber-700 cursor-pointer">HOME & KITCHEN</h1>
          <h1 className="hover:text-amber-700 cursor-pointer">LIFESTYLE & FASHION</h1>
          <h1 className="hover:text-amber-700 cursor-pointer">LIGHTS</h1>
        </div>

        <div className="flex items-center gap-5">
          <Image
            src="/navbarIcon/search.svg"
            alt="search"
            width={20}
            height={20}
            className="cursor-pointer"
          />
          <Image
            src="/navbarIcon/cart.svg"
            alt="cart"
            width={20}
            height={20}
            className="cursor-pointer"
          />
          <Image
            src="/navbarIcon/user.svg"
            alt="user"
            width={20}
            height={20}
            className="cursor-pointer"
          />

          <div className="cursor-pointer ">
            <Image
              src={isOpen ? "/navbarIcon/cross.svg" : "/navbarIcon/3bar.svg"}
              alt="Menu Toggle"
              width={30}
              height={20}
              onClick={() => setIsOpen(!isOpen)}
            />
          </div>
        </div>

        <div
          className={`
            fixed top-16 right-0  w-72 bg-white shadow-lg
            transform transition-transform duration-300 ease-in-out z-40
            ${isOpen ? "translate-x-0" : "translate-x-full"}
          `}
        >
          <Sidebar />
        </div>
      </div>
    </header>
  );
}
