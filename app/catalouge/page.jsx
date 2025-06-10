"use client"
import Catalouge from "@/components/catalouge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export default function catPage(){
    return(
        <>
        <Navbar></Navbar>

        <div className="md:my-10 md:mx-30">
            <Catalouge></Catalouge>
        </div>
        <Footer></Footer>
        </>
    )
}