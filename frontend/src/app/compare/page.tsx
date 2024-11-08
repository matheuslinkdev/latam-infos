"use client"

import { useCompareStore } from "@/_store/compare";
import { CompareCountryCard } from "@/components/layout/ComparedCountryCard/ComparedCountryCard";
import CountryCard from "@/components/layout/CountryCard";
import CountryComparision from "@/ui/CountryComparision";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getCountries } from "@/api/countries";

const Compare = () => {
  const { countryOne, countryTwo } = useCompareStore()

  const { data, isLoading, isError } = useQuery({
    queryKey: ["countries"],
    queryFn: getCountries,
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Erro ao carregar países.</p>;

  return (
    <main className="flex flex-col items-center justify-center min-h-screen w-full font-[family-name:var(--font-geist-sans)]">
      <article className="flex flex-wrap justify-center items-center w-full py-8">
        <CountryComparision>
          <CompareCountryCard country={countryOne} compareCountry={countryTwo}/>
        </CountryComparision>
      </article>

<article className="flex flex-wrap gap-8">
        {data?.map((country) => (
          <CountryCard country={country} key={country.name} isComparable={true} />
        ))}
        </article>
    </main>
  );
};

export default Compare;
