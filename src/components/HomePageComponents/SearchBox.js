import React from "react";
import { useContext } from "react";
import { AppContext } from "../../App";
import { FaMagnifyingGlass } from "react-icons/fa6";

const SearchBox = () => {
  const { setPage, setSearchCountry } = useContext(AppContext);
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="sm:w-[40%] w-full min-w-[200px] relative h-10 2xl:h-16 text-[var(--text)]"
    >
      <FaMagnifyingGlass
        className="absolute h-full w-auto p-2 2xl:p-4
        } transition-colors ease-in-out duration-150"
      />
      <input
        onChange={(e) => {
          setSearchCountry(e.target.value)
          setPage(1)
        } }
        className="w-full h-full px-12 pr-4 2xl:px-16 2xl:text-2xl outline-none bg-[var(--elem)] rounded-md text-[var(--text)] transition-colors ease-in-out duration-150 shadow-md"
        type="text"
        placeholder="Search Country"
      />
    </form>
  );
};

export default SearchBox;
