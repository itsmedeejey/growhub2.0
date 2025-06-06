import { useState } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ProductData } from "../testingdata/products";
import { RelatedProducts } from "../components/realtedProducts";
import ReviewSection from "../components/Reviewsection";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "@splidejs/splide/dist/css/splide.min.css";
import { Grid } from "@splidejs/splide-extension-grid";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { ChevronDownIcon } from '@heroicons/react/20/solid';

export const Product = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [dropdownTextOpen,setdropdownTextOpen] = useState(false);
  const [dropdownProductDetails,setdropdownProductDetails] = useState(false);

  

 const [quantity, setQuantity] = useState(1);

const decrease = () => {
  setQuantity((prev) => (prev > 1 ? prev - 1 : prev));
};

const increase = () => {
  setQuantity((prev) => (prev < 100 ? prev + 1 : prev));
};

  const product = {
    id: "372",
    name: "ROUND TABLE CORNER",
    price: "6999",
    higher_price: "11999",
    discount_amount: "1",
    description:
      "A cane rattan side table with a circular top and tripod base is a stylish, lightweight piece of furniture. It features a handwoven rattan surface, supported by three sturdy legs, blending natural aesthetics with functionality.",
    images: [
      "/products/2025030833565.webp",
      "/products/2025030857716.webp",
      "/products/2025030823165.webp",
      "/products/2025030840647.webp",
    ],
    retailer: "Growhub",
    location: "ASSAM",
    sku: "N/A",
    stock: "1",
    unit: "PC",
  };

  const handleImageClick = (idx) => {
    setIndex(idx);
    setOpen(true);
  };
  const discount = Math.round((((product.higher_price)-(product.price))/product.higher_price)*100)
  return (
    <div className="min-h-screen bg-[#fff]">
      <Navbar />

      <main className="max-w-7xl mx-auto p-4 sm:p-6 lg:px-8 py-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Carousel */}
          <div>
            <Splide
              options={{
                type: "slide",
                perPage: 1,
                gap: "1rem",
                pagination: false,
                arrows: false,
                drag: false,
                grid: {
                  rows: 2,
                  cols: 2,
                  gap: {
                    row: "1rem",
                    col: "1rem",
                  },
                },
                breakpoints: {
                  1024: {
                    
                    grid: {
                      rows: 1,
                      cols: 1,
                    },
                    arrows: true,
                    drag: true,
                  },
                },
              }}
              extensions={{ Grid }}
              aria-label="Product images carousel"
            >
              {product.images.map((img, idx) => (
                <SplideSlide key={idx}>
                  <img
                    src={img}
                    alt={`${product.name} ${idx + 1}`}
                    className="w-full h-[390px] sm:h-[480px] md:h-[550px] lg:h-[350px] object-cover cursor-zoom-in rounded-lg "
                    onClick={() => handleImageClick(idx)}
                    loading="lazy"
                  />
                </SplideSlide>
              ))}
            </Splide>

            <Lightbox
              
              open={open}
              close={() => setOpen(false)}
              slides={product.images.map((src) => ({ src }))}
              index={index}
              controller={{ 
                arrow:false,
                closeOnBackdropClick: true }}
              styles={{
              container: {
              backdropFilter: "blur(3px)",
              backgroundColor: "rgba(0, 0, 0, 0.75)",
            },
            }}
            />
          </div>

          {/* Product Details */}
          <div className="bg-white rounded-xl shadow p-6 flex flex-col">
            <h1 className="text-2xl md:text-3xl font-bold font-playfair mb-1 leading-1">{product.name}</h1>
            
            <a className="text-blue-800 mb-4" href="">{product.retailer}</a>
            <p className="text-gray-600 mb-6">{product.description}</p>


            <div className="mb-1">
              <span className="text-2xl font text-blue-900">₹{product.price}</span>
              <span className="ml-3 line-through text-red-500">₹{product.higher_price}</span>
              <span className="ml-4 bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">
                {discount}% Discount
              </span>
            </div>

            <p className="text-xs mb-0">Tax Included</p>
            <p className="text-xs mb-2 font-thin">Delivery Charges Applicable</p>
            <p className="text-sm mb-2 hidden">SKU: {product.sku}</p>
            <p className="text-xs mb-2">Location: {product.location}</p>

            <label className="block text-sm font-medium mb-1">Special Customization:</label>
            <input
              type="text"
              placeholder="Customization Here..."
              className="w-full p-2 border rounded-xl mb-2"
            />


            <label className="block text-sm font-medium mb-2">Quantity:</label>
              <div className="flex flex-col lg:flex-row gap-2 mt-2">
            <div className="flex items-center gap-0 max-w-xs">
              <button className="px-3 py-1 border rounded-l-full hover:bg-gray-100 transition" onClick={decrease}>−</button>
              <input
                type="number"
                defaultValue={1}
                min={1}
                value={quantity}
                className="w-10 py-1  text-center border  focus:outline-none focus:ring-2 focus:ring-slate-500"
              />
              <button onClick={increase} className=" px-3 py-1 border rounded-r-full hover:bg-gray-100 transition">+</button>
            </div>
                <button className=" text-lg h-12 text-white bg-blue-800 px-5 rounded-3xl p-2">Add to Cart</button>
                <button className="text-lg h-12  border rounded-3xl p-2 px-5 transition ease-in-out hover:bg-green-700 hover:text-white">Buy Now</button>
            </div>
           
{/* icons  */}
            <div className="flex flex-row gap-1 mt-10  text-[8px] md:text-xs  justify-center  font-playfair ">
              <div className="flex  pt-2 flex-col   justify-center items-center text-center ">
                  <img className="h-12 " src="/productpageIcons/handcraft.png" alt="handcrafted" />
                  <h1 className="font-semibold">HAND CRAFTED</h1>
                  <p>Handmade With Love</p>
              </div>
              <div className="flex  flex-col justify-center items-center text-center">
                  <img className="h-12" src="/productpageIcons/EcoFriendly-Green.png" alt="ecoFriendly" />
                  <h1 className="font-semibold">ECO FRIENDLY</h1>
                  <p>Go Green For A Better Tomorrow</p>
              </div>
              <div className="flex  flex-col justify-center items-center text-center">
                  <img className="h-12" src="/productpageIcons/delivery-truck.png" alt="fast delivery" />
                  <h1 className="font-semibold">FAST DELIVERY</h1>
                  <p>Fast Shipping On All Orders</p>
              </div>
              <div className="flex  flex-col justify-center items-center text-center">
                  <img className="h-12" src="/productpageIcons/credit-card.png" alt="secure payments" />
                  <h1 className="font-semibold">SECURE PAYMENTS</h1>
                  <p>Safe, Fast And Secure Online Payments</p>
              </div>
            </div>



{/* key features colapesable */}
            <div className="cursor-pointer cursor- mt-10 p-3 border-t-[1px] border-b-[1px] border-slate-400 flex flex-row gap-10 justify-between" onClick={()=>setdropdownTextOpen(!dropdownTextOpen)}>

            <button className="font-semibold text-lg  text-start" >Key Features </button>
             <ChevronDownIcon
          className={`h-10 w-10 text-slate-900 transform transition-transform duration-300 ${
            dropdownTextOpen ? 'rotate-180' : ''
          }`}
        />

            </div>
           {dropdownTextOpen&& <ul className="mt-2 text-sm md:text-lg text-gray-700 mb-6 space-y-1">
              <li>• Handcrafted, Sustainable and Natural</li>
              <li>• Light and Portable</li>
              <li>• Indoor Friendly</li>
              <li>• Durable Versatile Design</li>
            </ul>}

{/* product details */}
             <div className="cursor-pointer  p-3  border-b-[1px] border-slate-400 flex flex-row gap-10 justify-between" onClick={()=>setdropdownProductDetails(!dropdownProductDetails)}>

            <button className="font-semibold text-lg  text-start" >Product details </button>
             <ChevronDownIcon
          className={`h-10 w-10 text-slate-900 transform transition-transform duration-300 ${
            dropdownProductDetails ? 'rotate-180' : ''
          }`}
        />

            </div>
           {dropdownProductDetails&& <ul className="mt-2 text-sm md:text-lg text-gray-700 mb-6 space-y-1">
              
            <li>• Dimensions: 24” L x 24” W x 28” H</li>
            <li>• Weight: 7.5 kg (16.5 lbs)</li>
            <li>• Material: Engineered wood with matte laminate finish</li>
            <li>• Load Capacity: Up to 30 kg (66 lbs)</li>
          </ul>}



          </div>
        </div>
      </main>
          
            <div className="px-5 pt-10 flex flex-col">
            <h1 className="text-2xl md:text-[35px]   text-slate-700 md:mb-5 justify-center text-center  font-playfair ">Explore Related products</h1>
          <RelatedProducts items={ProductData}></RelatedProducts>
            </div>
        <ReviewSection></ReviewSection>
      <Footer></Footer>
    </div>
  );
};
