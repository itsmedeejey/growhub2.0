'use client';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import ProductCard from '@/components/productCard';
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
  const [product, setProduct] = useState(null);
const [relatedProducts, setRelatedProducts] = useState([]);

  const decrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : prev));
  const increase = () => setQuantity((prev) => (prev < 100 ? prev + 1 : prev));

  const { slug } = useParams();
  useEffect(() => {
  if (!slug) return;

  const getrelatedProducts = async () => {
    try {
      const res = await fetch(`/api/related-products/${slug}`);
      const related = await res.json();
      setRelatedProducts(related);
    } catch (err) {
      console.error("Error fetching related products:", err);
    }
  };

  getrelatedProducts();
}, [slug]);


  useEffect(() => {
    if (!slug) return;

    const fetchProductData = async () => {
      try {
        const response = await axios.get(`/api/product/${slug}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };
    


    fetchProductData();
  }, []);

  useEffect(() => {
    if (!product) return;

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
      const viewed_hour = new Date().toISOString().slice(0, 13).replace('T', ' ');
      try {
        await axios.post('/api/product-view', {
          product_id: product.id,
          viewed_hour,
          deviceId,
        });
      } catch (err) {
        console.error('Logging failed:', err);
      }
    };

    logView();
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col  items-center justify-center">
        <p>Loading product...</p>
      </div>
    );
  }

  const discount = Math.round(
    ((product.higher_price - product.unit_price) / product.higher_price) * 100
  );

  const images = [
    `https://api.growhub.shop/${product.product_thumbnail }`,
    `https://api.growhub.shop/${product.additional_image_1 }`,
    `https://api.growhub.shop/${product.additional_image_2 }`,
    `https://api.growhub.shop/${product.additional_image_3 }`,
  ];

  return (
    <div className="min-h-screen bg-white">
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
              {images.map((img, idx) => (
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
              slides={images.map((src) => ({ src }))}
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
            <h1 className="text-xl md:text-2xl font-mediums  text-amber-900 mb-1">{product.name}</h1>
            <a className="text-blue-800 mb-4" href="#">{product.retailer}</a>
            <p className="text-gray-600 mb-6">{product.description}</p>

            <div className="mb-1">
              <span className="text-2xl text-amber-900">₹{product.unit_price}</span>
              <span className="ml-3 line-through text-neutral-800">₹{product.higher_price}</span>
              <span className="ml-4 bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">
                {discount}% Discount
              </span>
            </div>

            <p className="text-xs">Tax Included</p>
            <p className="text-xs mb-2">Delivery Charges Applicable</p>
            <p className="text-xs mb-2">Location: {product.location}</p>

            <input
              type="text"
              placeholder="Special Customization"
              className="w-full p-2 border rounded-xl mb-2"
            />

            <div className="flex flex-col lg:flex-row gap-2 mt-2">
              <div className="flex items-center gap-0 max-w-xs">
                <button onClick={decrease} className="px-3 py-1 border rounded-l-full">−</button>
                <input type="number" readOnly value={quantity} className="w-10 py-1 text-center border" />
                <button onClick={increase} className="px-3 py-1 border rounded-r-full">+</button>
              </div>
              <button className="text-md h-10 cursor-pointer  text-white bg-[#CA7842] hover:bg-amber-700  px-5 rounded-3xl">Add to Cart</button>
              <button className="text-md h-10 text-neutral-800 cursor-pointer border rounded-3xl px-5 bg-white hover:bg-[#5A827E] hover:text-white">Buy Now</button>
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
                  <img className="h-8" src={`/productpageIcons/${icon.img}`} alt={icon.title} />
                  <h1 className="font-light text-md">{icon.title}</h1>
                  <p className='font-thin text-8px]'>{icon.desc}</p>
                </div>
              ))}
            </div>

            {/* Dropdown Sections */}
            <div className="cursor-pointer mt-10 p-3 border-t border-b border-slate-400 flex justify-between" onClick={() => setDropdownTextOpen(!dropdownTextOpen)}>
              <button className="font-medium text-lg">Key Features</button>
              <ChevronDownIcon className={`h-6 w-6 transition-transform ${dropdownTextOpen ? 'rotate-180' : ''}`} />
            </div>
            {dropdownTextOpen && (
              <ul className="mt-2 text-sm md:text-lg text-gray-700 mb-6 space-y-1">
                <li>• Handcrafted, Sustainable and Natural</li>
                <li>• Light and Portable</li>
                <li>• Indoor Friendly</li>
                <li>• Durable Versatile Design</li>
              </ul>
            )}

            <div className="cursor-pointer p-3 border-b border-slate-400 flex justify-between" onClick={() => setDropdownProductDetails(!dropdownProductDetails)}>
              <button className="font-medium text-lg">Product Details</button>
              <ChevronDownIcon className={`h-6 w-6 transition-transform ${dropdownProductDetails ? 'rotate-180' : ''}`} />
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

      <section className="mx-5 md:mx-14 md:mt-10 pt-10">
        <h2 className="text-xl md:text-[26px] text-amber-900 text-center font-thin  mb-1">
          Explore Related Products
        </h2>

        <ProductCard items={relatedProducts} ></ProductCard>
      </section>

    </div>
  );
};

export default ProductPage;
