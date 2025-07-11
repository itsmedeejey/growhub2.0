import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import Categories from "@/testData/catagoryData"
import CategoryCard from "@/components/categoryCard"
import Banner from "@/components/banner"
import AboutBrand from "@/components/aboutBrand"
import JourneySlide from "@/components/journeySlide"
import Instafeed from "@/components/instaFeed"
import Artsiansec from "@/components/artsiansection"
import Collab from "@/components/colab"

export default function Home(){
    return(
        <div className="">
            <Navbar></Navbar>
            
            <Banner></Banner>



            
            
            <div className="mx-5 sm:mx-14">
            <CategoryCard categories={Categories}></CategoryCard>
            </div>

            <div className="mx-5 md:mx-14 overflow-hidden">
            <h1 className=" text-lg text-amber-950 flex justify-center items-center mb-1 mt-10 font-medium">Instagram Feed</h1>
            <div className="sm:mx-14" >

            <Instafeed></Instafeed>
            </div>
            </div>

             <div>
                <AboutBrand></AboutBrand>
            </div>
            <div className=" mx-5 md:mx-14 mt-10 ">
                <h1 className="flex mb-5 text-amber-900 justify-center items-center" >Grouhub Journey</h1>
                <JourneySlide></JourneySlide>
            </div>

            <div className="mx-0  mt-20 overflow-x-hidden">
<h1 className="mb-4 text-amber-900 flex justify-center items-center">
  {"Artisan's Story"}
</h1>
                <Artsiansec></Artsiansec>
            </div>

            <div className=" mt-10 " >
                <h1 className="flex justify-center mb-5 items-center text-amber-900">Collaboration</h1>
            <Collab></Collab>
            </div>

            <Footer></Footer>
        </div>
    )
}