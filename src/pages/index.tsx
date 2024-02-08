import Navbar from "@/components/navbar";
import img from "../../public/hero.jpg";
import Home from "./home";
import Image from "next/image";

export default function Index() {
  return (
    <main className={`bg-white h-full w-screen  fixed bg-center bg-cover `}>
      <Image
        src={img}
        alt="image"
        height={2000}
        width={2000}
        className="-z-10 absolute object-cover w-full h-full top-0"
        loading="eager"
      />
      <Navbar />

      <Home />
    </main>
  );
}
