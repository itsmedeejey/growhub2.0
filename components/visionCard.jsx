export default function VisionCard({title,text}){
    return(
        <div>
            <div className="bg-neutral-200/60 hover:text-neutral-100  hover:bg-amber-900 h-full w-[320px] rounded-sm p-3 hover:shadow-lg transition-all  duration-350 ease-in-out hover:scale-[104%]">
                <div className="font-semibold mb-2">
    {title}
                    </div>
                <div className="font-light text-sm">
                    {text}
            </div>

        </div>
        </div>
    )

}