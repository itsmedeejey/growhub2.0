import Link from "next/link";
import Image from "next/image";
export default function CategoryCard({ categories }) {
  return (
    <div className="w-full py-5 font-thin">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6 lg:gap-8 lg:mx-20">
          {categories.map((item) => (
            <Link key={item.id} href={`/subCategories/${item.id}`}>
              <div className=" cursor-pointer shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden flex flex-col h-full">
                <div className="aspect-[4.5/5] overflow-hidden relative ">
                  <Image

                      width={500}
                      height={500}
                    src={item.logo}
                    alt={item.name}
                    className="w-full h-full aspect-[4/5]  object-cover hover:scale-105 transition-transform duration-200"
                  />
                </div>
                <div>
                  <h1 className="text-center text-amber-900 py-1 px-1 text-xs font-light  md:font-medium">
                    {item.name}
                  </h1>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
