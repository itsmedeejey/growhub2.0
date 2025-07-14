import Image from "next/image";
import "./globals.css";
export default function Loading(){
    return(
        <div className="bg-amber-900 h-screen justify-center items-center flex
        flex-col
        ">
            <div className="flex justify-center-safe p-3 w-40 overflow-hidden items-center-safe">
            <Image src={"/whitelogo1.png"} alt="logo"
            width={500}
            height={500}
            className="w-30 h-auto pr-8 mix-blend-lighten slide-up-fade  "
            >
            </Image>
            </div>  

            <div>

            </div > 

            
            <div className="flex flex-col justify-self-center items-center">

            <h1 className="text-5xl md:text-7xl fade-scale-in text-white font-bold ">
                 GROWHUB
                </h1>
                <p className="text-white text-xl slide-right font-thin">CONNECTING B2B</p>
            </div>
        </div>
    )
}