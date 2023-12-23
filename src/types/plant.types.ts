export interface Distribution {
  id: number;
  name: string;
  slug: string;
  tdwg_code: string;
  tdwg_level: number;
  species_count: number;
  links: {
    self: string;
    plants: string;
    species: string;
  };
}
export interface Image {
  id: number;
  image_url: string;
  copyright: string;
}

export interface ImageCategories {
  flower: Image[];
  leaf: Image[];
  bark: Image[];
  habit: Image[];
  fruit: Image[];
  other: Image[];
}
export interface CommonNames {
  [language: string]: string[];
}
export interface Growth {
  description: string | null;
  sowing: string | null;
  days_to_harvest: number | null;
  row_spacing: {
    cm: number | null;
  };
  spread: {
    cm: number | null;
  };
  ph_maximum: number | null;
  ph_minimum: number | null;
  light: string | null;
  atmospheric_humidity: string | null;
  growth_months: string | null;
  bloom_months: string | null;
  fruit_months: string | null;
  minimum_precipitation: {
    mm: number | null;
  };
  maximum_precipitation: {
    mm: number | null;
  };
  minimum_root_depth: {
    cm: number | null;
  };
  minimum_temperature: {
    deg_f: number | null;
    deg_c: number | null;
  };
  maximum_temperature: {
    deg_f: number | null;
    deg_c: number | null;
  };
  soil_nutriments: string | null;
  soil_salinity: string | null;
  soil_texture: string | null;
  soil_humidity: string | null;
}

export interface PlantSpecies {
  id: number;
  common_name: string | null;
  slug: string;
  scientific_name: string;
  year: number;
  bibliography: string;
  author: string;
  status: string;
  rank: string;
  family_common_name: string;
  genus_id: number;
  image_url: string | null;
  synonyms: never[]; // Assuming synonyms is always an empty array
  genus: string;
  family: string;
  links: {
    self: string;
    plant: string;
    genus: string;
  };
}

export interface PlantGenus {
  id: number;
  name: string;
  slug: string;
  links: {
    self: string;
    plants: string;
    species: string;
    family: string;
  };
}

export interface PlantFamily {
  id: number;
  name: string;
  common_name: string;
  slug: string;
  links: {
    self: string;
    division_order: string;
    genus: string;
  };
}

export interface PlantSource {
  last_update: string;
  id: string;
  name: string;
  url: string;
  citation: string | null;
}

export interface PlantData {
  data: {
    id: number;
    common_name: string | null;
    slug: string;
    scientific_name: string;
    main_species_id: number;
    image_url: string | null;
    year: number;
    bibliography: string;
    author: string;
    family_common_name: string;
    genus_id: number;
    observations: string;
    vegetable: boolean;
    links: {
      self: string;
      species: string;
      genus: string;
    };
    main_species: {
      id: number;
      common_name: string | null;
      slug: string;
      scientific_name: string;
      year: number;
      bibliography: string;
      author: string;
      status: string;
      rank: string;
      family_common_name: string;
      genus_id: number;
      observations: string;
      vegetable: boolean;
      image_url: string | null;
      genus: string;
      family: string;
      duration: string | null;
      edible_part: string | null;
      edible: boolean;
      images: ImageCategories;
      common_names: CommonNames;
      distribution: {
        native: string[];
        introduced: string[];
      };
      distributions: {
        native: Distribution[];
      };
      flower: {
        color: string | null;
        conspicuous: string | null;
      };
      foliage: {
        texture: string | null;
        color: string | null;
        leaf_retention: string | null;
      };
      fruit_or_seed: {
        conspicuous: string | null;
        color: string | null;
        shape: string | null;
        seed_persistence: string | null;
      };
      specifications: {
        ligneous_type: string | null;
        growth_form: string | null;
        growth_habit: string | null;
        growth_rate: string | null;
        average_height: {
          cm: number | null;
        };
        maximum_height: {
          cm: number | null;
        };
        nitrogen_fixation: string | null;
        shape_and_orientation: string | null;
        toxicity: string | null;
      };
      growth: Growth;
      links: {
        self: string;
        plant: string;
        genus: string;
      };
      synonyms: never[];
    };
    genus: PlantGenus;
    family: PlantFamily;
    species: PlantSpecies[];
    subspecies: never[];
    varieties: never[];
    hybrids: never[];
    forms: never[];
    subvarieties: never[];
    sources: PlantSource[];
  };
  meta: {
    last_modified: string;
  };
}
