export type CountryProps = {
  name: string;
  capital: string;
  flag_url: string;
  languages: string[];
  currencies: string[];
  economic_strengths: string[];
  total_gdp: number;
  gdp_per_capita: number;
  population: number;
  area_sq_km: number;
  borders: borderProps[];
  border_length_km: number;
  inflation_rate: number;
  global_rank: number;
  latam_rank: number;
  climates: string[];
  government_system: string;
  current_leader: string;
};

type borderProps = {
  name: string;
  flag_url: string;
};
