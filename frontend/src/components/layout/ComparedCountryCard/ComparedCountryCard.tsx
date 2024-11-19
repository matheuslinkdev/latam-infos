import formatToUSD from "@/utils/formatToUSD";
import CompareField from "../CompareField/CompareField";
import formatPopulation from "@/utils/formatPopulation";
import formatInflation from "@/utils/formatInflation";
import ordinalSufixByPosition from "@/utils/ordinalSufix";
import formatMeasurement from "@/utils/formatMeasurement";
import Image from "next/image";
import { useCompareStore } from "@/_store/compare";

export const CompareCountryCard = ({ country, countryOne, countryTwo }) => {

  const removeCountry = useCompareStore((state) => state.removeCountry);

  const comparisonCountry = country === countryOne ? countryTwo : countryOne;

  return (
    <div className="country-card">
      <h2>{country?.name}</h2>

      {comparisonCountry && (
        <>
          <Image src={country.flag_url} width={160} height={90} />
          <CompareField
            label="GDP"
            valueA={country.total_gdp}
            valueB={comparisonCountry.total_gdp}
            shouldBeCompared
            formatter={formatToUSD}
            highestXLowest={true}
            shoulBeFormatted={true}
          />
          <CompareField
            label="GDP per capita"
            valueA={country.gdp_per_capita}
            valueB={comparisonCountry.gdp_per_capita}
            shouldBeCompared
            formatter={formatToUSD}
            highestXLowest={true}
            shoulBeFormatted={true}
          />
          <CompareField
            label="Population"
            valueA={country.population}
            valueB={comparisonCountry.population}
            formatter={formatPopulation}
            shouldBeCompared
            highestXLowest={true}
            shoulBeFormatted={true}
          />
          <CompareField
            label="Inflation Rate"
            valueA={country.inflation_rate}
            valueB={comparisonCountry.inflation_rate}
            shouldBeCompared
            formatter={formatInflation}
            highestXLowest={false}
            shoulBeFormatted={true}
          />
          <CompareField
            label="Latam GDP Rank"
            valueA={country.latam_rank}
            valueB={comparisonCountry.latam_rank}
            shouldBeCompared
            formatter={ordinalSufixByPosition}
            highestXLowest={false}
            shoulBeFormatted={true}
          />
          <CompareField
            label="Global GDP Rank"
            valueA={country.global_rank}
            valueB={comparisonCountry.global_rank}
            shouldBeCompared
            formatter={ordinalSufixByPosition}
            highestXLowest={false}
            shoulBeFormatted={true}
          />
          <CompareField
            label="Total Area"
            valueA={country.area_sq_km}
            valueB={comparisonCountry.area_sq_km}
            shouldBeCompared
            formatter={formatMeasurement}
            measurement="km²"
            highestXLowest={true}
            shoulBeFormatted={true}
          />
          <CompareField
            label="Border Length"
            valueA={country.border_length_km}
            valueB={comparisonCountry.border_length_km}
            shouldBeCompared
            formatter={formatMeasurement}
            measurement="km"
            highestXLowest={true}
            shoulBeFormatted={true}
          />
          <CompareField
            label="Leader"
            valueA={country.current_leader}
            valueB={comparisonCountry.current_leader}
            shoulBeFormatted={false}
            shouldBeCompared={false}
          />
          <CompareField
            label="Leader"
            valueA={country.government_system}
            valueB={comparisonCountry.government_system}
            shoulBeFormatted={false}
            shouldBeCompared={false}
          />

          <button onClick={()=> removeCountry(country)}>Remove</button>
        </>
      )}
    </div>
  );
};