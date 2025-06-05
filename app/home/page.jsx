import FeatureCollection from "@/components/featureCollection"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
export default function home(){
    return(
        <div className="m-3">
            <Navbar></Navbar>
            <FeatureCollection></FeatureCollection>
            <Footer></Footer>
        </div>
    )
}