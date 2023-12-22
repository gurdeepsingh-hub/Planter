import HeroSection from "@/components/heroSection";
import Navbar from "@/components/navbar";
import back from "@/../../public/background.jpg";
import Image from "next/image";

export default function Home() {
  return (
    <main className={`bg-white h-screen w-screen overflow-hidden `}>
      <Navbar />
      <div className="relative">
        <Image
          src={back}
          alt="background"
          className=" w-full h-[90%] p-2 overflow-hidden rounded-3xl fixed z-0"
        ></Image>
        <div className="z-10 absolute top-0 left-3 overflow-auto">
          <HeroSection />
        </div>
      </div>
    </main>
  );
}
