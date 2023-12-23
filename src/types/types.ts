export interface ImageData {
  image_id: number;
  license: number;
  license_name: string;
  license_url: string;
  original_url: string;
  regular_url: string;
  medium_url: string;
  small_url: string;
  thumbnail: string;
}

export interface PlantData {
  id: number;
  common_name: string | null;
  slug: string;
  scientific_name: string;
  year: number;
  bibliography: string;
  author: string;
  status: string;
  rank: string;
  family_common_name: string | null;
  genus_id: number;
  image_url: string | null;
  synonyms: string[];
  genus: string;
  family: string;
  links: {
    self: string;
    plant: string;
    genus: string;
  };
}

export interface FinderProps {
  data: PlantData[];
  links: {
    self: string;
    first: string;
    last: string;
  };
  meta: {
    total: number;
  };
}
