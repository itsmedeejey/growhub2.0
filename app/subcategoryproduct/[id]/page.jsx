import ProductFilter from "@/components/ProductFilter"
import  Navbar  from "@/components/Navbar"
import Footer  from "@/components/Footer"
import Banner from "@/components/banner"
import  ProductList  from "@/testData/productListData"

export default function ProductPage(){
    return(
        <div className="bg-white">
            <Navbar></Navbar>
             <div className="relative">
     
            <Banner></Banner>


      </div>

            <div className="mt-4  shadow-xl rounded-2xl">
                <ProductFilter products={ProductList}></ProductFilter>
            </div>
            <Footer></Footer>
        </div>
    )
}