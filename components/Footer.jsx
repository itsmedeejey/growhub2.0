import React from 'react';
import { Link } from 'next/navigation';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from 'react-icons/fa';

export default function Footer () {
  return (
    <footer className='w-full mt-10  pt-4'>

    <div className="">
      <div className="max-w-7xl mx-auto ">
        <div className="flex flex-col md:flex-row gap-0">

          <div className="w-full md:w-3/4 bg-white p-4 md:p-8">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-6 pt-6 ">
              {/* Our Story */}
              <div>
                <h3 className="font-medium mb-3 uppercase text-sm">Our Story</h3>
                <ul className="space-y-2 text-md font-thin">
                  <li><a href="/shop" className="hover:text-red-800">Our Collection</a></li>
                  <li><a href="/blog" className="hover:text-red-800">Artisian's Story</a></li>
                  <li><a href="/refundPolicy" className="hover:text-red-800">RefundPolicy</a></li>
                  <li className="block md:hidden"><a href="/contact-us" className="hover:text-red-800">Contact Us</a></li>
                  <li className="block md:hidden"><a href="/about" className="hover:text-red-800">About Us</a></li>
                </ul>
              </div>

              {/* Help */}
              <div>
                <h3 className="font-medium mb-3 uppercase text-sm">Help</h3>
                <ul className="space-y-2 text-md font-thin">
                  <li><a href="#" className="hover:text-red-800">Cookies Policy</a></li>
                  <li><a href="/privacy-policy" className="hover:text-red-800">Privacy & Policy</a></li>
                  <li><a href="/terms-conditions" className="hover:text-red-800">Terms & Conditions</a></li>
                </ul>
              </div>

              {/* Support  */}
              <div className="col-span-2 md:col-span-1 hidden md:block">
                <h3 className="font-medium mb-3 uppercase text-sm">Support</h3>
                <ul className="space-y-2 text-md font-thin">
                  
                  <li><a href="/contact-us" className="hover:text-red-800">Contact Us</a></li>
                  <li><a href="/about" className="hover:text-red-800">About Us</a></li>
                  <li><a href="/SDGSection" className="hover:text-red-800">SDG Goals</a></li>
                </ul>
              </div>
            </div>

            {/* Bottom Bar .. */}
            <div className="flex flex-col md:flex-row justify-between items-center border-t pt-4 text-sm font-light gap-3">
              <a href="mailto:growhub.b2b@gmail.com" className="flex flex-row items-center gap-1 hover:text-red-800">
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail mr-2 group-hover:scale-110 transition-transform duration-300" aria-hidden="true"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect x="2" y="4" width="20" height="16" rx="2"></rect></svg>                growhub.b2b@gmail.com
              </a>

              <div className="flex flex-row items-center gap-1 text-center md:text-left">
                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin mr-2 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" aria-hidden="true"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
                <span>Silpukhuri, 3rd Floor, SBI Building, Guwahati, 781003</span>
              </div>

              <div className="flex flex-row  items-baseline gap-1 text-center">
                <span>© 2025 Copyright | All rights reserved</span>
                <a href="https://growhub.shop" className="text-red-800 hover:underline font-semibold">GrowHub</a>
              </div>
            </div>
          </div>

          {/* Right Section:*/}
          <div className="w-full md:w-1/4  px-2 md:px-2  flex flex-col items-center justify-center ">
            <div className="mb-6">
              <img src="bronwlogonewV.svg" alt="GrowHub Logo" className="w-36 md:w-44 lg:w-48 pt-5" />
            </div>

            <div className="flex gap-4 lg:gap-6 mb-6 text-black text-xl">
              <a href="https://www.facebook.com/profile.php?id=61557504611856&mibextid=ZbWKwL"><FaFacebookF /></a>
              <a href="https://www.instagram.com/growhub.shop/"><FaInstagram /></a>
              <a href="https://www.linkedin.com/company/growhub-pvt-ltd/"><FaLinkedinIn /></a>
              <a href="https://www.youtube.com/@growhubconnect"><FaYoutube /></a>
            </div>

            <div className="text-center text-black font-medium ">
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

