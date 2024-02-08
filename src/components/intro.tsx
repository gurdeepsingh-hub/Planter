import Image from "next/image";
import React from "react";

const Intro = () => {
  return (
    <>
      <div className="flex w-full h-full bg-white">
        <div className="basis-1/2 h-[90%] self-center rounded-3xl overflow-hidden">
          <Image
            src={"/intro.jpeg"}
            width={500}
            height={500}
            alt="intro"
            className="w-full h-full object-cover "
          />
        </div>
        <div className="basis-1/2">
          <div className="m-4 text-gray-800 py-20">
            <div className="container mx-auto text-center">
              <h1 className="text-4xl font-bold mb-4">
                Welcome to Planter! 🌿
              </h1>
              <p className="text-lg mb-8">
                Discover the fascinating world of plants by simply entering
                their names. From vibrant flowers to lush foliage, our app
                brings you detailed specifications on each plant. Explore growth
                habits, care tips, sunlight requirements, and more.
              </p>
              <p className="text-lg mb-8">
                Whether you&apos;re a seasoned gardener or a budding plant
                enthusiast, our Planter App is your go-to resource for
                cultivating a thriving green oasis.
              </p>
              <p className="text-lg">
                Let&apos;s dive into the beauty and science of plants together!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
