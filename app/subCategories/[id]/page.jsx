import Navbar  from "@/components/Navbar";
import  Footer  from "@/components/Footer";
import subcatData  from "@/testData/subcatData";
import  SubCatagoryCard  from "@/components/SubcatagoryCard";
import Banner from "@/components/banner";
export default function SubCategoryPage  ()  {
  return (
    <div>
      <div className="relative">
        <Banner></Banner>
      </div>

      <div className=" mx-7 md:mx-30 lg:mx-40 justify-center items-center">
        <SubCatagoryCard categories={subcatData}></SubCatagoryCard>
      </div>
    </div>
  );
};
