import { FinderProps } from "@/types/types";
import { PlantData } from "@/types/plant.types";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import ImageGallery from "@/components/imageGallery";
import CommonNamesComponent from "@/components/commonNames";
import { FcWikipedia } from "react-icons/fc";
import { FaGoogle } from "react-icons/fa";
import React from "react";

interface PageProps extends PlantData {}

const Page: React.FC<PageProps> = ({ data }) => {
  const router = useRouter();

  return (
    <div className="p-5">
      <div className="border-b-[1px] border-black mb-4 flex items-center justify-between">
        <div className="flex">
          <button onClick={() => router.back()} className="mr-4">
            {" "}
            <BackIcon />
          </button>
          <div className="text-base font-semibold">
            {data.common_name + ` (` + data.scientific_name + `)`}
          </div>
        </div>
        <div className="text-sm text-gray-500">
          {"Family: " + data.family.name + "     |   Genus: " + data.genus.name}
        </div>
        <div className="text-sm text-gray-500">
          {"In year: " + data.year + "      |   by Author: " + data.author}
        </div>
      </div>

      <div className="flex w-[full]">
        <ImageGallery {...data.main_species.images} />
        <div className="w-[50%] mx-5">
          <div className="flex gap-3">
            <a
              href={`https://en.wikipedia.org/wiki/${encodeURIComponent(
                data.common_name || ""
              )}`}
              className="text-blue-600 underline flex items-center gap-1"
              target="_blank"
            >
              <FcWikipedia />
              Wiki
            </a>{" "}
            <a
              href={`https://www.google.com/search?q=${encodeURIComponent(
                data.common_name || ""
              )}`}
              className="text-blue-600 underline flex gap-1 items-center"
              target="_blank"
            >
              <FaGoogle />
              Google
            </a>
          </div>
          <div>
            <h2 className="font-bold text-xl mt-6">Names</h2>
            <CommonNamesComponent
              commonNames={data.main_species.common_names}
            />
          </div>
          <div>
            <h2 className="font-bold text-xl mt-8 pt-6">Distribution:</h2>
            <div className="flex justify-between ">
              {data.main_species.distribution?.native.length > 0 && (
                <div>
                  <h2>Native To: </h2>
                  <div className="overflow-auto h-60">
                    <CountryList data={data.main_species.distribution.native} />
                  </div>
                </div>
              )}
              {data.main_species.distribution?.introduced.length > 0 && (
                <div>
                  <h2>Introduced To: </h2>
                  <div className="overflow-auto h-60">
                    <CountryList
                      data={data.main_species.distribution.introduced}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="sources">
            <h2 className="font-bold text-3xl mt-6">Sources</h2>
            <div>
              {data.sources.map((source, index) => {
                return (
                  <div
                    key={index}
                    className="text-sm border-b border-gray-200 "
                  >
                    <a href={source.url}>
                      <span className="text-blue-600">
                        {source.citation || source.name}
                      </span>
                      /
                      <span className="text-blue-600">
                        {source.last_update}
                      </span>
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="w-[30%]">
          <div className="observations border-b border-gray-200">
            Regions: {data.observations}
          </div>
          <div className="eatable border-b border-gray-200">
            Edible: {"" + data.main_species.edible}
          </div>
          {data.main_species.edible && (
            <>
              <div className="border-b border-gray-200">
                Edible Part: {data.main_species.edible_part}
              </div>
              <div>vegetable: {"" + data.vegetable}</div>
            </>
          )}
          {data.main_species.flower.color && (
            <>
              <div className="border-b border-gray-200">
                <>Flower Color: {"" + data.main_species.flower.color}</>
              </div>

              {data.main_species.flower.conspicuous && (
                <div className="border-b border-gray-200">
                  <>
                    Flower Visible: {"" + data.main_species.flower.conspicuous}
                  </>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<FinderProps> = async (
  context
) => {
  const { query } = context;
  console.log(query);

  const url: string = `/api/v1/plants/${query.id}?token=${process.env.SECRET_PLANTER_KEY}`;

  // Fetch data from external API
  const res: FinderProps = await fetch("https://trefle.io" + url).then(
    async (res) => {
      if (!res.ok) throw new Error("Could not find species");
      else return await res.json();
    }
  );

  // Pass data to the page via props
  return { props: { ...res } };
};
export default Page;
const BackIcon: React.FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
      />
    </svg>
  );
};

const CountryList: React.FC<{ data: string[] }> = ({ data }) => {
  console.log(data);

  return data.map((country, index) => (
    <p key={index}>{index + 1 + " : " + country}</p>
  ));
};
