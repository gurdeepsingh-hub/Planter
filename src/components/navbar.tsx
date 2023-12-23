import Image from "next/image";
import Link from "next/link";
import img from "@/../../public/leaf.png";
import { useRouter } from "next/router";
import { MouseEvent } from "react";

interface Option {
  name: string;
  to: string;
}

const options: Option[] = [
  {
    name: "Explore",
    to: "/",
  },
  {
    name: "About",
    to: "/about",
  },
  {
    name: "FAQ's",
    to: "faq",
  },
];

const Navbar: React.FC = () => {
  const router = useRouter();
  const handleSubmit = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    e.preventDefault();
    router.push("/finder");
  };
  return (
    <nav className="flex justify-between px-10 pt-5 items-center bg-white  backdrop-blur-sm ">
      <div className="flex items-center opacity-100">
        <div className="h-10 w-10">
          <Image src={img} alt="logo" width={0} height={0} />
        </div>
        <h1 className="text-lg font-bold">Planter</h1>
      </div>
      <div className="flex basis-1/3 justify-around  gap-4 text-green-900 ">
        {options.map((option) => (
          <div
            key={option.to} // Add a unique key for each option
            className="hover:scale-105 hover:ease-in-out duration-100 hover:font-semibold"
          >
            <Link href={option.to}>{option.name}</Link>
          </div>
        ))}
      </div>
      <div>
        <button
          className="flex items-center gap-2 rounded-full border border-black border-1 px-3 py-1"
          onClick={(e) => handleSubmit(e)}
        >
          {" "}
          Try Now
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
