import React from "react";
import CountryCard from "./CountryCard";
import SkeletonMain from "./SkeletonMain";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import { useContext, useCallback, useMemo } from "react";
import { AppContext } from "../../App";
import { queryContext } from "../Main";

const Feed = () => {
  const { state, dispatch } = useContext(AppContext);
  const { isLoading, data, isError, error } = useContext(queryContext);
  const numArr = Array.from({ length: 16 }, (_, index) => index + 1);
  
  
  const regionFilter = useCallback(() => {
    if (!data) return [];

    return data.data.filter((country) =>
      state.region === "All"
        ? country
        : country.continents
            .join(", ")
            .toLowerCase()
            .includes(state.region.toLowerCase())
    );
  }, [data, state.region]);

  const searchFilter = useCallback(() => {
    if (!data) return [];

    return regionFilter().filter((country) =>
      country.name.common
        .toLowerCase()
        .includes(state.searchCountry.toLowerCase())
    );
  }, [regionFilter, state.searchCountry]);

  const extractedData = useMemo(() => {
    if (!data) return [];

    return searchFilter().map((country) => {
      return {
        flags: country.flags.png,
        name: country.name.common,
        capitals:
          country.capital !== undefined
            ? country.capital.join(", ")
            : "No capital city",
        population: country.population
          .toString()
          .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 "),
        continents: country.continents.join(", "),
      };
    }).sort((a, b) => (a.name > b.name ? 1 : -1));
  }, [searchFilter]);


  if (isLoading) {
    return (
      <div className="w-full grid grid-cols-card 2xl:grid-cols-cardBig sm:gap-[40px] gap-[20px] bg-[var(--primary-bg)] sm:px-12 px-4">
        {numArr.map((num) => {
          return <SkeletonMain key={num} />;
        })}
      </div>
    );
  }

  if (isError) {
    return (
      <h1 className="text-[var(--text)] transition-colors ease-in-out duration-150 text-2xl w-full text-center mt-16">
        {error.response.status === 404
          ? "An error occurred while fetching data. Please try reloading the page."
          : error.message}
      </h1>
    );
  }

  

  // const regionFilter = data.data.filter((country) =>
  //   state.region === "All"
  //     ? country
  //     : country.continents
  //         .join(", ")
  //         .toLowerCase()
  //         .includes(state.region.toLowerCase())
  // );

  // const searchFilter = regionFilter.filter((country) =>
  //   country.name.common
  //     .toLowerCase()
  //     .includes(state.searchCountry.toLowerCase())
  // );

  // const extractedData = searchFilter
  //   .map((country) => {
  //     return {
  //       flags: country.flags.png,
  //       name: country.name.common,
  //       capitals:
  //         country.capital !== undefined
  //           ? country.capital.join(", ")
  //           : "No capital city",
  //       population: country.population
  //         .toString()
  //         .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 "),
  //       continents: country.continents.join(", "),
  //     };
  //   })
  //   .sort((a, b) => (a.name > b.name ? 1 : -1));

  const itemsPerPage = 100;
  const startIndex = (state.page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData =
    extractedData.length <= itemsPerPage
      ? extractedData
      : extractedData.slice(startIndex, endIndex);

  return (
    <>
      {extractedData.length >= itemsPerPage && (
        <>
          <button
            disabled={endIndex >= extractedData.length}
            className={`text-[var(--text)] hover:text-[var(--orange)] transition-colors ease-out duration-150 fixed z-50 top-1/2 right-0 -translate-x-1 sm:translate-x-1 ${
              endIndex >= extractedData.length ? "hidden" : "visible"
            }`}
            onClick={() => dispatch({ type: "nextPage" })}
          >
            <FaChevronRight className="h-8 lg:h-16 w-auto" />
          </button>
          <button
            disabled={state.page === 1 ? true : false}
            className={`text-[var(--text)] hover:text-[var(--orange)] transition-colors ease-out duration-150 fixed z-50 top-1/2 left-0 translate-x-1 sm:-translate-x-1 ${
              state.page === 1 ? "hidden" : "visible"
            }`}
            onClick={() => dispatch({ type: "prevPage" })}
          >
            <FaChevronLeft className="h-8 lg:h-16 w-auto" />
          </button>
        </>
      )}

      <ul className="w-full relative grid grid-cols-card 2xl:grid-cols-cardBig sm:gap-[40px] gap-[20px]  bg-[var(--primary-bg)] transition-colors ease-in-out duration-150 sm:px-12 px-10">
        {currentData.length ? (
          currentData.map((country, index) => {
            return (
              <CountryCard
                id={country.name.split(" ").join("")}
                key={index + 1}
                flag={country.flags}
                name={country.name}
                population={country.population}
                capitals={country.capitals}
                region={country.continents}
              />
            );
          })
        ) : (
          <h1 className="text-[var(--text)] transition-colors ease-in-out duration-150 absolute text-2xl w-full text-center mt-16">
            There is no country with such name. Check whether the continent
            filter is set to "All".
          </h1>
        )}
      </ul>
    </>
  );
};

export default Feed;
