import Image from "next/image";

export default function Team({ name, img, bio, role }) {
  return (
    <div className="flex flex-col w-[350px] p-3  hover:shadow-xl  hover:rounded-xl hover:border-[0.5px] transition-all duration-300 ease-in-out">
      <div className="group relative overflow-hidden hover:rounded-md">
        <Image
          className="w-[500px] h-auto   group-hover:scale-[105%] transition-scale     group-hover:filter group-hover:grayscale group-hover:brightness-40 transition-all duration-300 ease-in-out"
          src={img}
          alt={name}
          width={500}
          height={500}
        />

        <div className="transition-all duration-350 ease-in-out group-hover:block hidden absolute top-0 left-0 w-full h-full bg-opacity-80 p-4 overflow-auto text-white text-sm leading-tight space-y-2">
          {bio.split("\n").map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
      </div>

      <div className="text-lg mt-1">{name}</div>
      <div className="text-blue-900 text-lg font-bold">{role}</div>
    </div>
  );
}
