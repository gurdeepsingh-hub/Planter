import Image from "next/image";
import img from "@/../../public/leaf.png";
import apple from "@/../../public/apple.jpg";
import React from "react";

const HeroSection: React.FC = () => {
  return (
    <div className=" h-[100%] w-[95vw] flex justify-center items-center mt-2 ">
      <div className="flex flex-col w-full ">
        <div className="flex w-full ">
          <div className="container basis-1/5 bg-transparent rounded-tr-2xl border-"></div>
          <div className="container bg-white text-5xl basis-3/5 p-5 rounded-bl-3xl">
            Nurturing Nature,
            <br />
            Harvesting Excellence
          </div>
          <div className="container basis-1/5 bg-transparent"></div>
        </div>
        <div className="flex w-full ">
          <div className="container bg-transparent basis-6/12">
            {" "}
            <div className="w-60 mt-40 ml-10">
              <FarmerCard />{" "}
            </div>
          </div>
          <div className="container basis-5/12">
            <div className=" bg-white  px-10 py-5 rounded-tl-none rounded-3xl">
              Welcome to our Plant Specs App! 🌿 Discover the fascinating world
              of plants by simply entering their names. From vibrant flowers to
              lush foliage, our app brings you detailed specifications on each
              plant. Explore growth habits, care tips, sunlight requirements,
              and more. Whether you're a seasoned gardener or a budding plant
              enthusiast, our Plant Specs App is your go-to resource for
              cultivating a thriving green oasis. Let's dive into the beauty and
              science of plants together!
            </div>
          </div>
          <div className="container basis-1/12"></div>
        </div>
        <div>
          <div className="container"></div>
          <div className="container"></div>
          <div className="container"></div>
        </div>
      </div>
    </div>
  );
};

const FarmerCard: React.FC = () => {
  return (
    <div className="w-full h-full rounded-3xl overflow-hidden">
      <div className="bg-white">
        <div className="lines text-xs mx-4 mb-2 pt-2 text-justify">
          The apple tree, an emblem of orchards, bears crisp and succulent
          fruits cherished for their sweet taste and versatility. From its
          blossoms to the harvest, the apple fruit captivates with its vibrant
          colors and delightful flavors.
        </div>
        <div className="name mx-4 py-2 flex items-center gap-1 text-sm  border-t-[1px] border-gray-400">
          <Image src={img} alt="" width={0} height={0} className="w-5 h-5 " />
          Planter
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
