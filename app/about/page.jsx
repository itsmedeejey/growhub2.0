import VisionCard from "@/components/visionCard";
import Image from "next/image";
import Team from "@/components/Team";
export default function AboutUs() {
  return (
    <div className="mx-3 md:mx-14">
      {/* Heading */}
      <div className="flex w-full items-center justify-center text-center mt-5 md:mt-10  text-amber-900">
        <h1 className="text-xl md:text-3xl  font-serif">
          GROWHUB from HERITAGE to LIVELIHOOD
        </h1>
      </div>

      {/* Intro Text */}
      <div className=" md:mx-50 text-neutral-700 mt-5 mb-3 flex flex-col items-center text-center">
        <p className="text-sm  ">
          A journey born from the heart of Northeast India. We're more than just
          a brand; we're a passionate community on a mission to bring incredible
          beauty to your home while nurturing the planet and empowering the
          hands that create.
        </p>
      </div>
      <div className="flex flex-col relative text-center justify-center items-center mb-5">
       
        <div  className="w-72 mb-1 " >
        <Image src={"/about-page/maharathi.png"}
        width={500}
        alt="winner"
        height={500}
        className="rounded-lg "
        >
        </Image>
          </div>
        <h1 className="w-65 text-xs text-amber-900 ">Winner of Startup maharathi challenge 2025 (B2B Category) at Startup Mahakumbh,Bharatmandapam, New Delhi</h1>
      </div>

        <div className="bg-[url(/about-page/straws.png)] m-0 h-12 bg-repeat rounded-xl"></div>
      {/* Content Sections */}
      <div className="flex flex-col   gap-3 items-start">
        {/* Section 1 */}
        <div className="flex flex-col-reverse group md:flex-row items-center  justify-center gap-2 bg-[#] rounded-sm p-3 m-3 max-w-[750px] ">
          <div className="flex-1 md:text-left text-center ">
            <h2 className="text-2xl font-medium mb-2 text-amber-900">
              The Story Behind Our Craft
            </h2>
            <p className="text-xs     leading-relaxed text-neutral-700 ">
              In the lush landscapes of Northeast India, we saw a dual
              challenge: the quiet struggle of talented rural artisans for
              stable livelihoods, often earning less than ₹10,000 per month, and
              the overlooked potential of abundant agricultural byproducts and
              natural resources, frequently going to waste. We also felt the
              urgency of preserving unique, centuries-old crafts that risked
              fading away. GrowHub was founded in 2024 to bridge this gap,
              transforming these challenges into opportunities.
            </p>
          </div>
          <div className="items-center   overflow-hidden md:justify-center  flex">
            <Image
              className="h-auto w-72   items-center justify-center transition-all duration-350  group-hover:scale-[105%] "
              src="/about-page/working-women.jpg"
              alt="Artisan at work"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="flex flex-col gap-3 items-end">
        <div className="flex flex-col md:flex-row group gap-5 items-center justify-center rounded-sm p-3 m-3 max-w-[750px]">
          <div className="items-center overflow-hidden md:justify-center flex">
            <Image
              className=" h-auto w-72 items-center justify-center transition-all duration-350  group-hover:scale-[105%] "
              src="/about-page/basket.jpg"
              alt="Empowered artisan"
              width={500}
              height={500}
            />
          </div>
          <div className="flex-1 text-center md:text-right">
            <h2 className="text-2xl font-medium  mb-2 text-amber-900" >
              Our Unique Eco-System of Empowerment
            </h2>
            <p className="text-xs  leading-relaxed text-neutral-700">
              At GrowHub, we've built a holistic AgriCraft ecosystem. This means
              we personally connect with farmers for ethical sourcing of
              materials like banana fiber, bamboo, and water hyacinth. Then, we
              partner directly with artians, providing them with skill
              development, design guidance, and direct access to markets. This
              ensures every artisan earns a fair wage and finds dignity in their
              craft. It's a transparent journey from resource to exquisite
              product, built on mutual respect and shared growth — a model that
              earned us the Startup Maharathi 2025 B2B Winner title.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col  gap-3 items-start">
        {/* Section 3 */}
        <div className="flex flex-col-reverse group md:flex-row gap-5 justify-center items-center rounded-sm p-3 m-3 max-w-[750px] ">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl text-amber-900 font-medium mb-2">
              Our Creations: A Blend of Tradition & Tomorrow
            </h2>
            <p className="text-xs leading-relaxed text-neutral-700 ">
              Explore our cherished collections: handcrafted furniture,
              exquisite natural fiber decor, and timeless bellmetal & brass
              wares. Each piece is a testament to the artisan's skill and our
              dedication to sustainability. Find us not only on our website and
              our welcoming Guwahati store but also on trusted platforms like
              Amazon, Flipkart, Pepperfry, and IndiaMart.
            </p>
          </div>
          <div className="items-center overflow-hidden md:justify-center flex">
            <Image
              className="h-auto w-72   items-center justify-center transition-all duration-350  group-hover:scale-[105%]  "
              src="/about-page/flowers.png"
              alt="Artisan at work"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>

      {/* Our Vision for Tomorrow */}
      <div className="mt-10 text-center ">
        <h1 className="text-3xl md:text-4xl  font-medium">
          Our Vision for Tomorrow: Growing Together
        </h1>
      </div>

      <div className="flex items-center justify-center">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-5 gap-5 ">
          <VisionCard
            title="Expanding Our Artisan Family"
            text={
              "Our goal is to onboard hundreds more skilled artisans, creating even wider ripples of economic empowerment across the region. "
            }
          />
          <VisionCard
            title={"Global Reach, Local Roots"}
            text={
              "We aim to bring the unique artistry of Northeast India to more homes worldwide, exploring international markets and potentially launching a franchise model to replicate our impactful ecosystem."
            }
          />

          <VisionCard
            title={"Beyond Products"}
            text={
              "We plan to offer our sustainable raw materials to other businesses and even provide our platform's tools via a subscription model, extending our impact beyond direct sales."
            }
          />
        </div>
      </div>

      {/* why choose growhub */}
      <div className="">
        <div className="mt-14 text-center ">
          <h1 className="text-3xl md:text-4xl  font-medium">
            Why Choose Growhub?
          </h1>
          <p className="md:mx-32 mt-4 font-light text-xs md:text-sm">
            When you choose our products, you're not just bringing beauty into
            your life; you're becoming a vital part of a story of growth,
            empowerment, and a sustainable future for all.
          </p>
        </div>

<div className="flex justify-center items-center">

           <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-5 gap-5 ">
            <VisionCard title={"Support Sustainable Livelihoods"}
            text={
              "Your purchase directly empowers talented artisans across Northeast India, providing fair wages and fostering economic independence within their communities"
            }></VisionCard>

            <VisionCard title={"Discover Authentic Northeast Indian Craftsmanship"}
            text={
              " Explore a curated collection showcasing the diverse artistry of Assam and beyond, featuring intricate Bell metal work, elegant Cane Furniture, delicate wildflower crafts, robust bamboo creations, and textiles woven from natural fibers."
            }></VisionCard>

            <VisionCard title={"Embrace Eco-Conscious Choices"}
            text={
              " From upcycled agricultural waste to sustainably harvested cane and responsibly crafted bell metal, our products embody environmental responsibility, contributing to a circular economy within our region."
            }></VisionCard>

            <VisionCard title={"Your Reliable Partner for Unique Gifting"}
            text={
              "GrowHub is your trusted source for distinctive and meaningful gifts for institutions, corporate events, and personal functions. Impress with culturally rich and sustainable items that leave a lasting positive impact."
            }></VisionCard>


            <VisionCard
            
            title={"Customization to Your Vision"}

                  text={"We offer bespoke customization options for almost all our product lines. Collaborate with our skilled artisans to create unique pieces that perfectly align with your specific needs and aesthetic."}
            ></VisionCard>
            <VisionCard title={" Sustainable Raw Materials for Manufacturers & Start-ups: "} text={"Beyond finished products, GrowHub is developing as a reliable supplier of sustainably sourced raw materials like processed bamboo, cane, and natural fibers for other manufacturers and start-ups looking for eco-friendly inputs"}>

            </VisionCard>
           </div>

      </div>
            </div>

      {/* our  teams  section */}

      <div className="mt-14  text-center ">
        <h1 className="text-2xl mx-5 md:text-4xl  font-medium">
          Meet the passionate team behind GrowHub{" "}
        </h1>
      </div>
      <div className="mt-3  flex flex-col md:flex-row justify-center items-center">
        <Team
          name={"Sakil Ahmed"}
          role={"Founder & CEO"}
          img={"/team/sakilkl.png"}
          bio={
            "As the Founder & CEO of GrowHub, I’m committed to unlocking economic opportunities in Northeast India through sustainable innovation. Based in Guwahati, GrowHub transforms agricultural waste and natural fibers into high-value, handcrafted products — empowering artisans, supporting local livelihoods, and addressing environmental challenges.Our mission is to connect the region’s rich craftsmanship with global markets. Winning the Startup Maharathi Challenge reflects our vision of building a scalable, eco-conscious enterprise that uplifts communities and drives economic growth."
          }
        ></Team>

        <Team
          name={"Nilotpala Sahariah"}
          role={"Co-founder & Director"}
          img={"/team/nilotpola-maam-new.png"}
          bio={
            "Co-founder & Director, GrowHub — Empowering Women Through Sustainable Craft At GrowHub, we're transforming agricultural waste and natural fibers into eco-friendly crafts while creating dignified livelihoods for women artisans in Northeast India. Recognized by the Startup Maharathi Challenge and Spark Women Cohort, my journey is driven by a passion for sustainability and women’s economic independence. GrowHub is more than a business — it’s a movement rooted in empowerment, creativity, and community."
          }
        ></Team>

        <Team
          name={"Dr. Swapnil Sinha"}
          role={"Mentor"}
          img={"/team/DrSwapnilSinha.png"}
          bio={
            "CEO BioNEST, IIT Guwahati | Entrepreneur & Innovator | Founder Altanostics Labs | Co-Founder Hummsa Biotech\nWith over 15 years of experience in biotechnology innovation, Dr. Sinha brings invaluable expertise to GrowHub's mission of sustainable resource transformation."
          }
        />
      </div>
    </div>
  );
}


