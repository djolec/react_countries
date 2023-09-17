import React from "react";
import SearchBox from "./SearchBox";
import Filter from "./Filter";

const SearchAndFilter = () => {
  return (
    <div className="w-full sm:p-8 2xl:p-16 sm:px-12 px-10 py-8 bg-[var(--primary-bg)] transition-colors ease-in-out duration-150 flex sm:flex-row flex-col sm:justify-between gap-8 sm:gap-0">
      <SearchBox />
      <Filter />
    </div>
  );
};

export default SearchAndFilter;
