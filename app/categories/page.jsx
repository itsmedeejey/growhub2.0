import  Categories  from "@/testData/catagoryData"
import  CategoryCard  from "@/components/categoryCard"
import Image from "next/image"
export default function CatagoriesPage(){
    return(
        <div>
            <Image className="hidden md:block"  src={"/banner/category.png"} width={1920} height={400}   alt={"banner"}></Image>
            <Image className=" md:hidden"  src={"/banner/category-mobile.png"} width={1920} height={400} alt={"banner"}></Image>

            <div className="mx-8">
            <div className="flex justify-center ">
                <h1 className="text-amber-900  text-xl md:text-3xl mt-4  md:mt-8 font-thin">Categories</h1>
            </div >    
             <CategoryCard categories={Categories}></CategoryCard>
            </div>

        </div>
    )
}