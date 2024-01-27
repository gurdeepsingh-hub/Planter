import HeroSection from "@/components/heroSection";
import Navbar from "@/components/navbar";
import back from "../../public/background.jpg";
import Image from "next/image";
import Intro from "@/components/intro";

export default function Home() {
  const url = back;
  return (
    <div className="relative border-[30px] box-border border-white h-full no-scrollbar w-[102.5%] justify-center -left-[1rem] rounded-[3rem] -top-3 -z-10 overflow-y-auto">
      <div className=" h-full">
        <HeroSection />
        <Intro />
      </div>
    </div>
  );
}
