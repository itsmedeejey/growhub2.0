"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

export default function SubCategoryCard({ categories }) {
  const params = useParams();
  const paramId = params?.id;

  const filteredCategories = categories.filter(
    (item) => String(item.category_id) === String(paramId)
  );

  return (
    <div className="w-full py-5 flex ">
      <div className="max-w-7xl md:mx-auto ">
        <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {filteredCategories.map((item) => (
            <Link
              href={`/subcategoryproduct/${item.id}`}
              key={item.category_id}
              className="bg-white cursor-pointer shadow-xs hover:shadow-md transition-shadow duration-200 overflow-hidden flex flex-col h-full"
            >
              <div className="aspect-[4/5] h-full overflow-hidden relative">
                <img
                  src={item.logo}
                  alt={item.name}
                  className="relative aspect-[4/5] object-cover hover:scale-105 transition-transform duration-200"
                />
              </div>
              <div>
                <h1 className="items-center text-center text-amber-900 p-1 text-[8px] md:text-xs md:text-md font-light ">
                  {item.name}
                </h1>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
