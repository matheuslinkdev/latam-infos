import React from "react";
import { useCompareStore } from "@/_store/compare";
import { CompareCountryCard } from "@/components/layout/ComparedCountryCard/ComparedCountryCard";

const CountryComparison = () => {
  const { countryOne, countryTwo } = useCompareStore();

  if (!countryOne || !countryTwo) {
    return <p>Selecione dois países para comparar.</p>;
  }

  return (
    <section className="flex flex-wrap justify-center items-center gap-12 p-8">
      <CompareCountryCard countryOne={countryOne} countryTwo={countryTwo} country={countryOne}/>
      <CompareCountryCard countryOne={countryOne} countryTwo={countryTwo} country={countryTwo}/>
    </section>
  );
};

export default CountryComparison;
