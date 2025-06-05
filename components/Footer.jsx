import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { GoLocation } from 'react-icons/go';

export default Footer = () => {
  return (
    <footer className='w-full mt-10  pt-4'>

    <div className=" bg-[repeating-linear-gradient(46deg,_white_0px,_white_20px,_transparent_20px,_transparent_50px,_#d1cac6_30px,_#d1cac6_100px)]">
      <div className="max-w-7xl mx-auto  px-2 md:px-2 py-2">
        <div className="flex flex-col md:flex-row gap-0">

          <div className="w-full md:w-3/4 bg-white p-4 md:p-8">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-6 pt-6 ">
              {/* Our Story */}
              <div>
                <h3 className="font-bold mb-3 uppercase text-sm">Our Story</h3>
                <ul className="space-y-2 text-sm md:text-lg">
                  <li><a href="/shop" className="hover:text-red-800">Our Collection</a></li>
                  <li><a href="/blog" className="hover:text-red-800">Artisian's Story</a></li>
                  <li><a href="/refundPolicy" className="hover:text-red-800">RefundPolicy</a></li>
                  <li className="block md:hidden"><a href="/contact-us" className="hover:text-red-800">Contact Us</a></li>
                  <li className="block md:hidden"><a href="/about" className="hover:text-red-800">About Us</a></li>
                </ul>
              </div>

              {/* Help */}
              <div>
                <h3 className="font-bold mb-3 uppercase text-sm">Help</h3>
                <ul className="space-y-2 text-sm md:text-lg">
                  <li><a href="#" className="hover:text-red-800">Cookies Policy</a></li>
                  <li><a href="/privacy-policy" className="hover:text-red-800">Privacy & Policy</a></li>
                  <li><a href="/terms-conditions" className="hover:text-red-800">Terms & Conditions</a></li>
                </ul>
              </div>

              {/* Support  */}
              <div className="col-span-2 md:col-span-1 hidden md:block">
                <h3 className="font-bold mb-3 uppercase text-sm">Support</h3>
                <ul className="space-y-2 text-lg">
                  
                  <li><a href="/contact-us" className="hover:text-red-800">Contact Us</a></li>
                  <li><a href="/about" className="hover:text-red-800">About Us</a></li>
                  <li><a href="/SDGSection" className="hover:text-red-800">SDG Goals</a></li>
                </ul>
              </div>
            </div>

            {/* Bottom Bar .. */}
            <div className="flex flex-col md:flex-row justify-between items-center border-t pt-4 text-sm gap-4">
              <a href="mailto:growhub.b2b@gmail.com" className="flex flex-row items-center gap-1 hover:text-red-800">
                <MdEmail className="text-lg" />
                growhub.b2b@gmail.com
              </a>

              <div className="flex flex-row items-center gap-1 text-center md:text-left">
                <GoLocation className="text-lg" />
                <span>Silpukhuri, 3rd Floor, SBI Building, Guwahati, 781003</span>
              </div>

              <div className="flex flex-row items-center gap-1 text-center">
                <span><strong>©</strong> 2025 Copyright | All rights reserved</span>
                <a href="https://growhub.shop" className="text-red-800 hover:underline font-semibold">GrowHub</a>
              </div>
            </div>
          </div>

          {/* Right Section:*/}
          <div className="w-full md:w-1/4 bg-[#d2cbc4] px-2 md:px-2  flex flex-col items-center justify-center">
            <div className="mb-6">
              <img src="blackLogo.png" alt="GrowHub Logo" className="w-40 md:w-48 lg:w-64 pt-5" />
            </div>

            <div className="flex gap-4 lg:gap-6 mb-6 text-black text-xl">
              <a href="https://www.facebook.com/profile.php?id=61557504611856&mibextid=ZbWKwL"><FaFacebookF /></a>
              <a href="https://www.instagram.com/growhub.shop/"><FaInstagram /></a>
              <a href="https://www.linkedin.com/company/growhub-pvt-ltd/"><FaLinkedinIn /></a>
              <a href="https://www.youtube.com/@growhubconnect"><FaYoutube /></a>
            </div>

            <div className="text-center text-black font-medium">
              <p className="text-lg">+91 7002433959</p>
              <p className="text-sm">Mon - Sun 9.00 am to 8.00 pm (IST)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </footer>
  );
};

