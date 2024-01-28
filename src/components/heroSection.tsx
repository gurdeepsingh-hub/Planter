import Image from "next/image";
import img from "@/../../public/leaf.png";

import React from "react";
import CornerIcon from "./assets/corner";

const HeroSection: React.FC = () => {
  return (
    <div className=" h-[100%] w-full flex justify-center items-center  ">
      <div className=" h-[100%] flex flex-col w-full ">
        <div className="flex w-full ">
          <div className="container relative basis-1/5 ">
            <div className="absolute right-0">
              <CornerIcon />
            </div>
          </div>
          <div className="container relative bg-white text-5xl basis-3/5 p-5 rounded-bl-3xl">
            Nurturing Nature,
            <br />
            Harvesting Excellence
          </div>
          <div className="relative top-0 left-0 container basis-1/5 bg-transparent">
            <div className="absolute top-0">
              <div className="absolute -top-[1px] origin-center -rotate-90 ">
                <CornerIcon />
              </div>
            </div>
            <div className="absolute h-full">
              <div className="absolute -bottom-0.5 -left-[1px] origin-center rotate-180 ">
                <CornerIcon />
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full ">
          <div className="relative container bg-transparent basis-6/12">
            {" "}
            <div className="absolute right-0">
              <CornerIcon />
            </div>
            <div className="w-60 mt-40 ml-10">
              <FarmerCard />{" "}
            </div>
          </div>
          <div className="container basis-5/12">
            <div className=" bg-white  px-10 py-5 rounded-tl-none rounded-3xl">
              Welcome to Planter! 🌿 Explore plants effortlessly with our app.
              Whether you&apos;re a pro gardener or just starting, Planter is
              your green oasis guide. Let&apos;s dive into the beauty and
              science of plants together! 🌱✨
            </div>
          </div>
          <div className="container basis-1/12"></div>
        </div>
        <div className="flex w-full h-full">
          <div className="container basis-1/3 relative">
            <div className="origin-center rotate-180 w-fit h-fit absolute -left-0.5 bottom-0">
              <CornerIcon />
            </div>
          </div>
          <div className="container basis-1/3"></div>
          <div className="container basis-1/3 relative ">
            <div className="origin-center rotate-90 w-fit h-fit absolute right-0 bottom-0">
              <CornerIcon />
            </div>
          </div>
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
