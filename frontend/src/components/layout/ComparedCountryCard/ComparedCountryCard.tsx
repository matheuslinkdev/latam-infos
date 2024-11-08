import formatToUSD from "@/utils/formatToUSD";
import CompareField from "../CompareField/CompareField";

export const CompareCountryCard = ({ country, countryOne, countryTwo }) => {

  const comparisonCountry = country === countryOne ? countryTwo : countryOne;

  return (
    <div className="country-card">
      <h2>{country?.name}</h2>

      {comparisonCountry && (
        <>
          <CompareField
            label="GDP"
            valueA={country.total_gdp}
            valueB={comparisonCountry.total_gdp}
            formatter={formatToUSD}
          />
          <CompareField
            label="GDP per capita"
            valueA={country.gdp_per_capita}
            valueB={comparisonCountry.gdp_per_capita}
            formatter={formatToUSD}
          />
          
        </>
      )}
    </div>
  );
};