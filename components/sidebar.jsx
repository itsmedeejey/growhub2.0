import Link from "next/link"
export default function Sidebar(){

    return(
        <div>
            <div className=" flex flex-col gap-4  bg-white text-amber-900 uppercase text-center py-5 px-10">
               <Link href={"/"}>
               
                <h1 className="flex border-b text-center justify-center py-3 text-lg hover:underline cursor-pointer hover:text-amber-800  hover:text-xl  duration-300">home</h1>
               </Link>
               
               <Link href={"/categories"}>
               
                <h1 className="flex border-b text-center justify-center py-3 text-lg hover:underline cursor-pointer hover:text-amber-800  hover:text-xl  duration-300">categories</h1>
               </Link>
               
                <h1 className="flex border-b text-center justify-center py-3 text-lg hover:underline cursor-pointer hover:text-amber-800  hover:text-xl  duration-300">brands</h1>
                <h1 className="flex border-b text-center justify-center py-3 text-lg hover:underline cursor-pointer hover:text-amber-800  hover:text-xl  duration-300">about us</h1>
                <Link href={"/catalouge"}>
                
                                <h1 className="flex border-b text-center justify-center py-3 text-lg hover:underline cursor-pointer hover:text-amber-800  hover:text-xl  duration-300">catalouge</h1>
                </Link>

                <h1 className="flex border-b text-center justify-center py-3 text-lg hover:underline cursor-pointer hover:text-amber-800  hover:text-xl  duration-300">blogs</h1>
                <h1 className="flex border-b text-center justify-center py-3 text-lg hover:underline cursor-pointer hover:text-amber-800  hover:text-xl  duration-300">shop</h1>



            </div>

        </div>
    )
}