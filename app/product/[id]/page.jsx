'use client';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import '@splidejs/splide/dist/css/splide.min.css';
import { Grid } from '@splidejs/splide-extension-grid';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

const ProductPage = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [dropdownTextOpen, setDropdownTextOpen] = useState(false);
  const [dropdownProductDetails, setDropdownProductDetails] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const decrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : prev));
  const increase = () => setQuantity((prev) => (prev < 100 ? prev + 1 : prev));

  const product = {
    id: '335',
    name: 'ROUND TABLE CORNER',
    price: '6999',
    higher_price: '11999',
    discount_amount: '1',
    description:
      "A cane rattan side table with a circular top and tripod base is a stylish, lightweight piece of furniture. It features a handwoven rattan surface, supported by three sturdy legs, blending natural aesthetics with functionality.",
    images: [
      '/products/2025030833565.webp',
      '/products/2025030857716.webp',
      '/products/2025030823165.webp',
      '/products/2025030840647.webp',
    ],
    retailer: 'Growhub',
    location: 'ASSAM',
    sku: 'N/A',
    stock: '1',
    unit: 'PC',
  };

  const discount = Math.round(
    ((product.higher_price - product.price) / product.higher_price) * 100
  );

  // ✅ Log product view with deviceId
  useEffect(() => {
    const getOrCreateDeviceId = () => {
      let deviceId = localStorage.getItem('device_id');
      if (!deviceId) {
        deviceId = crypto.randomUUID();
        localStorage.setItem('device_id', deviceId);
      }
      return deviceId;
    };

    const logView = async () => {
      const deviceId = getOrCreateDeviceId();
      const now = new Date();
      const viewed_hour = now.toISOString().slice(0, 13).replace('T', ' ');

      try {
        const res = await axios.post('/api/product-view', {
          product_id: product.id,
          viewed_hour,
          deviceId,
        });
        console.log('Logged:', res.data);
      } catch (err) {
        console.error('Logging failed:', err.response?.data || err.message);
      }
    };

    logView();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="max-w-7xl mx-auto p-4 sm:p-6 lg:px-8 py-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Carousel */}
          <div>
            <Splide
              options={{
                type: 'slide',
                perPage: 1,
                gap: '1rem',
                pagination: false,
                arrows: false,
                drag: false,
                grid: {
                  rows: 2,
                  cols: 2,
                  gap: { row: '1rem', col: '1rem' },
                },
                breakpoints: {
                  1024: {
                    grid: { rows: 1, cols: 1 },
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
                    className="w-full h-[390px] sm:h-[480px] md:h-[550px] lg:h-[350px] object-cover cursor-zoom-in rounded-lg"
                    onClick={() => {
                      setIndex(idx);
                      setOpen(true);
                    }}
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
              controller={{ arrow: false, closeOnBackdropClick: true }}
              styles={{
                container: {
                  backdropFilter: 'blur(3px)',
                  backgroundColor: 'rgba(0, 0, 0, 0.75)',
                },
              }}
            />
          </div>

          {/* Product Details */}
          <div className="bg-white rounded-xl shadow p-6 flex flex-col">
            <h1 className="text-2xl md:text-3xl font-bold font-playfair mb-1">{product.name}</h1>
            <a className="text-blue-800 mb-4" href="#">{product.retailer}</a>
            <p className="text-gray-600 mb-6">{product.description}</p>

            <div className="mb-1">
              <span className="text-2xl text-blue-900">₹{product.price}</span>
              <span className="ml-3 line-through text-red-500">₹{product.higher_price}</span>
              <span className="ml-4 bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">
                {discount}% Discount
              </span>
            </div>

            <p className="text-xs mb-0">Tax Included</p>
            <p className="text-xs mb-2 font-thin">Delivery Charges Applicable</p>
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
                <input type="number" min={1} value={quantity} className="w-10 py-1 text-center border focus:outline-none focus:ring-2 focus:ring-slate-500" />
                <button onClick={increase} className="px-3 py-1 border rounded-r-full hover:bg-gray-100 transition">+</button>
              </div>
              <button className="text-lg h-12 text-white bg-blue-800 px-5 rounded-3xl p-2">Add to Cart</button>
              <button className="text-lg h-12 border rounded-3xl p-2 px-5 hover:bg-green-700 hover:text-white">Buy Now</button>
            </div>

            {/* Icons */}
            <div className="flex flex-row gap-1 mt-10 text-[8px] md:text-xs justify-center font-playfair">
              {[
                { img: 'handcraft.png', title: 'HAND CRAFTED', desc: 'Handmade With Love' },
                { img: 'EcoFriendly-Green.png', title: 'ECO FRIENDLY', desc: 'Go Green For A Better Tomorrow' },
                { img: 'delivery-truck.png', title: 'FAST DELIVERY', desc: 'Fast Shipping On All Orders' },
                { img: 'credit-card.png', title: 'SECURE PAYMENTS', desc: 'Safe, Fast And Secure Online Payments' },
              ].map((icon, i) => (
                <div key={i} className="flex flex-col items-center text-center pt-2">
                  <img className="h-12" src={`/productpageIcons/${icon.img}`} alt={icon.title} />
                  <h1 className="font-semibold">{icon.title}</h1>
                  <p>{icon.desc}</p>
                </div>
              ))}
            </div>

            {/* Key Features */}
            <div className="cursor-pointer mt-10 p-3 border-t border-b border-slate-400 flex justify-between" onClick={() => setDropdownTextOpen(!dropdownTextOpen)}>
              <button className="font-semibold text-lg">Key Features</button>
              <ChevronDownIcon className={`h-10 w-10 text-slate-900 transition-transform duration-300 ${dropdownTextOpen ? 'rotate-180' : ''}`} />
            </div>
            {dropdownTextOpen && (
              <ul className="mt-2 text-sm md:text-lg text-gray-700 mb-6 space-y-1">
                <li>• Handcrafted, Sustainable and Natural</li>
                <li>• Light and Portable</li>
                <li>• Indoor Friendly</li>
                <li>• Durable Versatile Design</li>
              </ul>
            )}

            {/* Product Details */}
            <div className="cursor-pointer p-3 border-b border-slate-400 flex justify-between" onClick={() => setDropdownProductDetails(!dropdownProductDetails)}>
              <button className="font-semibold text-lg">Product Details</button>
              <ChevronDownIcon className={`h-10 w-10 text-slate-900 transition-transform duration-300 ${dropdownProductDetails ? 'rotate-180' : ''}`} />
            </div>
            {dropdownProductDetails && (
              <ul className="mt-2 text-sm md:text-lg text-gray-700 mb-6 space-y-1">
                <li>• Dimensions: 24” L x 24” W x 28” H</li>
                <li>• Weight: 7.5 kg (16.5 lbs)</li>
                <li>• Material: Engineered wood with matte laminate finish</li>
                <li>• Load Capacity: Up to 30 kg (66 lbs)</li>
              </ul>
            )}
          </div>
        </div>
      </main>

      <section className="px-5 pt-10">
        <h2 className="text-2xl md:text-[35px] text-slate-700 text-center font-playfair mb-5">
          Explore Related Products
        </h2>
      </section>

      <Footer />
    </div>
  );
};

export default ProductPage;
