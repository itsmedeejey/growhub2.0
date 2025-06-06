import  Navbar  from "@/components/Navbar"
import  Footer  from "@/components/Footer"
import  Categories  from "@/testData/catagoryData"
import  CategoryCard  from "@/components/categoryCard"
export default function CatagoriesPage(){

    return(
        <div>
            <Navbar></Navbar>     
            <div className="m-8">
            <div className="flex justify-center ">
                <h1 className="text-amber-900  text-2xl md:text-4xl font- font-">Categories</h1>
            </div >    
             <CategoryCard categories={Categories}></CategoryCard>
            </div>



           <Footer></Footer>
        </div>
    )
}