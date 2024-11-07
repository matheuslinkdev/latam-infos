"use client";

import { orderByQuery } from "@/api/countries";
import QuerySelect from "@/components/fragments/querySelect";
import CountryCard from "@/components/layout/CountryCard";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";

const HomeCountryList = () => {
  const [countries, setCountries] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["countries", query, page],
    queryFn: async () => await orderByQuery(query, page),
  });

  useEffect(() => {
    if (data) {
      setCountries(data);
    }
  }, [data]);

  const incrementPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const decrementPage = () => {
    if (page >= 2) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  const handleSelectChange = (e) => {
    const value = e.target.value;
    setQuery(value);
  };

  if (isLoading) return <h1>Loading</h1>;
  if (isError) return <div>Sorry There was an Error</div>;

  return (
    <>
  <QuerySelect handleSelectChange={handleSelectChange}/>
      <section className="flex flex-wrap justify-center items-center gap-12 p-8">
        {countries?.map((country) => (
          <CountryCard country={country} key={country.name} isComparable={false}/>
        ))}
      </section>

{query != "" && (
  <div className="pagination-controls">
        <button onClick={decrementPage} disabled={page === 1}>
          Previous
        </button> 
        <span>Page {page}</span>
        <button onClick={incrementPage}>Next</button>
      </div>
      )}
    </>
  );
};

export default HomeCountryList;
