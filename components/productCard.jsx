import Link from "next/link";
import Image from "next/image";
export default function ProductCard({ items }) {
  return (
    <div className="w-full py-8 ">
      <div className="max-w-screen  ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 sm:gap-6 lg:gap-6">
          {items.map((product) => {

            const off =
              +product.higher_price > +product.unit_price
                ? Math.round(
                  ((+product.higher_price - +product.unit_price) / +product.higher_price) * 100
                )
                : 0;

            const isAvailable = Number(product.current_stock_qty) > 0;
            const product_img = `https://api.growhub.shop/` + product.product_thumbnail;

            return (
              <Link href={`/product/${product.slug}`}>
                <div
                  key={product.id}
                  className="bg-white hover:rounded-md ease-in-out duration-300 shadow-sm hover:shadow-md transition-shadow  overflow-hidden flex flex-col"
                >
                  <div className="aspect-[4/5] overflow-hidden relative">
                    {off > 0 && (
                      <div className="absolute z-10 rotate-[-45deg] top-4 left-[-35px] pl-3 text-center text-sm text-amber-900 bg-transparent backdrop-blur-xl shadow-md w-28 py-1">
                        {off}% Off
                      </div>

                    )}
                    {!isAvailable && (
                      <div className="text-slate-900 absolute z-10 px-3  py-1 text-xs md:text-[8px]  font-light bg-red-300 shadow-2xl rounded-full mr-3 mt-2 right-0 ">Sold Out</div>
                    )}
                    <Image
                      width={500}
                      height={500}
                      src={product_img}
                      alt={product.name}
                      className="aspect-[4/5] cursor-pointer object-cover hover:scale-105 transition-transform duration-400"

                    />

                  </div>

                  <div className="px-2 py-1 flex  flex-col flex-grow">
                    <h3 className="text-sm md:text-xs text-amber-900 line-clamp-2 flex-grow">
                      {product.name}
                    </h3>
                    <div className="flex flex-row items-baseline mb-2 ">
                      <p className="text-slate-800 font-light text-lg">₹{product.unit_price}</p>
                      {off > 0 && (
                        <p className="ml-2 font-light line-through text-xs text-slate-900">
                          ₹{product.higher_price}
                        </p>
                      )}


                    </div>

                    <div className="flex flex-row gap-2 justify-center  items-center">
                      {isAvailable && (
                        <button className=" rounded-full  bg-[#5A827E] hover:shadow-md text-white  items-center justify-center gap-3 text-xs px-4 py-2 cursor-pointer transition-colors duration-300 ">
                          Buy Now
                        </button>)}

                      <button
                        className={" rounded-full group flex bg-[#EFE5CC] text-slate-800 hover:shadow-md hover:bg-[#CA7842]  hover:text-white items-center justify-center gap-3 text-xs px-4 py-2 cursor-pointer transition-colors duration-300 "
                        }
                      >
                        <span>Add to Cart</span>
                        <img
                          src="/navbarIcon/cart.svg"
                          alt="Cart Icon"
                          className={"h-5 group-hover:invert filter brightness-0 transition-transform duration-300 group-hover:scale-[120%] group-hover:rotate-6 "}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            );


          })}
        </div>
      </div>
    </div>
  );
}
