import Navbar from "@/components/navbar";

import Home from "./home";

export default function Index() {
  return (
    <main
      className={`bg-white h-full w-screen  bg-[url(../../public/background.jpg)] fixed bg-center bg-cover `}
    >
      <Navbar />

      <Home />
    </main>
  );
}
