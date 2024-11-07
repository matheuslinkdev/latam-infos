"use client"

import { getCountry } from '@/api/countries';
import formatMeasurement from '@/utils/formatMeasurement';
import formatToUSD from '@/utils/formatToUSD';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React from 'react'



const Country = () => {
    const { name } = useParams()

 const { data, isLoading, isError } = useQuery({
    queryKey: ["country"],
    queryFn: async () => await getCountry(name),
  });

  if (isLoading) return <h1>Loading</h1>;
  if (isError) return <div>Sorry There was an Error</div>;

  const formattedPopulation = data.population.toLocaleString("pt-BR")
  const formattedPerCapitaGDP = formatToUSD(data.gdp_per_capita)
  const formattedTotalGDP = formatToUSD(data.total_gdp)
  const formattedAreaSQKM = formatMeasurement(data.area_sq_km, "km²")
  const formattedBorderLength = formatMeasurement(data.border_length_km, "km");

  return (
    <main className="flex flex-col justify-center items-center min-h-screen w-full p-16">
      <article className="flex flex-col items-center justify-center max-w-xl w-full">
        <Image
          src={data.flag_url}
          width={160}
          height={90}
          alt={`${data.name} flag`}
          className="w-full rounded-sm"
        />
        <section className="flex flex-col gap-4 text-2xl">
          <div className="bg-gray-900 p-2 rounded-sm">
            <h1 className="text-3xl">{data.name}</h1>
            <h2 className="">Capital: {data.capital}</h2>
            <h1 className="">Population: {formattedPopulation}</h1>
          </div>
          <div className="bg-gray-900 p-2 rounded-sm">
            <h1 className="">
              GDP Per Capita: {formattedPerCapitaGDP}
            </h1>
            <h1 className="">Total GDP: {formattedTotalGDP}</h1>
            <h1>GDP World Rank: {data.global_rank}</h1>
            <h1>GDP LATAM Rank: {data.latam_rank}</h1>
            <h1>Inflation Rate: {data.inflation_rate}%</h1>
          </div>
          <div className="bg-gray-900 p-2 rounded-sm">
            <h1 className="">Total Area: {formattedAreaSQKM}</h1>
            <h1 className="">
              Border Length: {formattedBorderLength}
            </h1>
          </div>
          <div></div>
        </section>
      </article>
    </main>
  );
}

export default Country