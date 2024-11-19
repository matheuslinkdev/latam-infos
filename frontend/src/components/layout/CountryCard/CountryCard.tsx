"use client";

import { useCompareStore } from "@/_store/compare";
import { CountryProps } from "@/types/countries";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  country: CountryProps;
  isComparable: boolean;
};

const CountryCard = ({ country, isComparable }: Props) => {
  const { selectCountry, removeCountry, selectedCountries } = useCompareStore();

  return (
    country && (
      <article className="w-52 bg-gray-900 relative">
        <Link href={`/${country.name}`}>
          <Image
            src={country.flag_url}
            width={200}
            height={120}
            alt={`${country.name} flag`}
            className="w-full rounded-sm"
          />
          <section className="absolute top-0 bottom-0 opacity-0 hover:opacity-100 w-full h-full flex items-center justify-center hover:bg-gray-950/70">
            <h1>{country.name}</h1>
          </section>
        </Link>
        {selectedCountries.length < 2 && !selectedCountries.includes(country) && (
          <button
          style={{ display: isComparable ? "block" : "none" }}
          onClick={() => selectCountry(country)}
          className="absolute"
          >
          Compare
        </button>
        )}
        {selectedCountries.includes(country) && (

          <button
          style={{ display: isComparable ? "block" : "none" }}
          onClick={() => removeCountry(country)}
          className="absolute right-0"
          >
          Remove
        </button>
        )}
      </article>
    )
  );
};

export default CountryCard;
