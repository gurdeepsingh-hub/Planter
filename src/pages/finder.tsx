import PlantCard from "@/components/plantCard";
import { FinderProps, PlantData } from "@/types/types";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React, { ChangeEvent, useState } from "react";

interface FinderPageProps extends FinderProps {}

const Finder: React.FC<FinderPageProps> = ({ data }) => {
  const [plants, setPlants] = useState<PlantData[]>(data);
  const [commonName, setCommonName] = useState<string | undefined>(undefined);
  const router = useRouter();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement>,
    func: React.Dispatch<React.SetStateAction<string | undefined>>
  ) => {
    e.preventDefault();
    func(e.target.value);
  };

  const handleSubmit = () => {
    router.push(`/finder?query=${commonName}`);
  };

  return (
    <div className="flex">
      <div
        className={`flex flex-col items-center  p-10 h-screen ${
          plants.length >= 0 ? "w-[20%] justify-start gap" : "w-full "
        }`}
      >
        <h1 className="text-4xl font-bold mb-6">Find a Plant!</h1>
        <div className="flex flex-col gap-2 ">
          <input
            type="text"
            value={commonName || ""}
            className="border border-green-300 bg-green-200 rounded-md px-2 py-1 outline-none "
            onChange={(e) => handleChange(e, setCommonName)}
          />
          <button
            type="button"
            className="px-2 py-1 bg-green-700 rounded ml-3 text-white w-fit self-end"
            onClick={handleSubmit}
          >
            Search
          </button>
        </div>
      </div>
      <div className="flex flex-wrap gap-4">
        {plants.map((plant, index) => (
          <PlantCard key={index} data={plant} />
        ))}
      </div>
    </div>
  );
};

export default Finder;

export const getServerSideProps: GetServerSideProps<FinderPageProps> = async (
  context
) => {
  try {
    const { query } = context;
    const url = !query.query
      ? `${process.env.NEXT_PUBLIC_BASE_URL}/api/getall`
      : `${process.env.NEXT_PUBLIC_BASE_URL}/api/search?id=${
          query.query || ""
        }`;
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data = await res.json();
    console.log(data.body, "data");

    return { props: { ...data.body } as FinderPageProps };
  } catch (error) {
    console.error(`Error: ${error}`);
    return { props: {} as FinderPageProps }; // You might want to handle errors more gracefully
  }
};
