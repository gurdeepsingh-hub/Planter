import { PlantData } from "@/types/types";
import Image from "next/image";
import Link from "next/link";

interface PlantCardProps {
  data: PlantData;
}

const PlantCard: React.FC<PlantCardProps> = ({ data }) => {
  return (
    <Link href={`/plant/${data.id}`} key={data.id}>
      <div className="p-2 bg-gray-200 rounded-xl m-4" key={data.id}>
        <Image
          src={data.image_url || ""}
          alt="display"
          width={175}
          height={0}
          className="w-40 h-40 object-cover rounded-xl"
        />
        <div>
          <p className="text-sm font-semibold">{data.common_name}</p>
          <p>{data.year}</p>
        </div>
        {/* Additional content goes here if needed */}
      </div>
    </Link>
  );
};

export default PlantCard;
