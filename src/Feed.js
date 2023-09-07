import React from "react";
import CountryCard from "./CountryCard";
import SkeletonMain from "./SkeletonMain";
import { useContext } from "react";
import { AppContext } from "./App";
import { queryContext } from "./Main";

const Feed = () => {
  const { search, region } = useContext(AppContext);
  const { isLoading, data, isError, error } = useContext(queryContext);
  const numArr = Array.from({ length: 16 }, (_, index) => index + 1);

  if (isLoading) {
    return (
        <div className="w-full grid grid-cols-card 2xl:grid-cols-cardBig sm:gap-[40px] gap-[20px] bg-[var(--primary-bg)] sm:px-12 px-4">
          {numArr.map((num) => {
            return <SkeletonMain key={num}/>
          })}
        </div>

    );
  }

  if (isError) {
    return (
      <h1 className="text-[var(--text)] transition-colors ease-in-out duration-150 text-2xl w-full text-center mt-16">
        {error.response.status === 404 ? "An error occurred while fetching data. Please try reloading the page." : error.message}
      </h1>
    );
  }

  const regionFilter = data?.data.filter((country) =>
    region === "All"
      ? country
      : country.continents
          .join(", ")
          .toLowerCase()
          .includes(region.toLowerCase())
  );

  return (
    <div className="w-full relative grid grid-cols-card 2xl:grid-cols-cardBig sm:gap-[40px] gap-[20px] bg-[var(--primary-bg)] transition-colors ease-in-out duration-150 sm:px-12 px-4">
      {regionFilter.filter((country) =>
        country.name.common.toLowerCase().includes(search.toLowerCase())
      ).length ? (
        regionFilter
          .filter((country) =>
            country.name.common.toLowerCase().includes(search.toLowerCase())
          )
          .map((country) => {
            const capitals =
              country.capital !== undefined
                ? country.capital.join(", ")
                : "No capital city";
            const population = country.population
              .toString()
              .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ");
            const continents = country.continents.join(", ");
            return (
              <CountryCard
                id={country.name.common.split(" ").join("")}
                key={country.name.common}
                flag={country.flags.png}
                name={country.name.common}
                population={population}
                capitals={capitals}
                region={continents}
              />
            );
          })
      ) : (
        <h1 className="text-[var(--text)] transition-colors ease-in-out duration-150 absolute text-2xl w-full text-center mt-16">
          There is no country with such name. Check whether the continent filter is set to "All".
        </h1>
      )}
    </div>
  );
};

export default Feed;
