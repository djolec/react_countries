import React from "react";
import { useContext } from "react";
import { queryContext } from "../Main";
import { Link } from "react-router-dom";

const BorderButton = ({ border }) => {

    const { isLoading, data } = useContext(queryContext);

    if(!isLoading) {
        const borderCountryDetailsArr = data.data.filter((country) => country.cca3 == border)

        const borderCountry = borderCountryDetailsArr[0]
        const id = borderCountry.name.common.split(" ").join("")

        return (
            <button className="bg-[var(--elem)] rounded-md 2xl:text-2xl text-[var(--text)] hover:text-[var(--orange)]  mt-[10px] transition-colors ease-in-out duration-150 shadow-[1px_2px_6px_2px_rgba(0,0,0,0.3)]">
              <Link className="w-full h-full block py-[0.3rem]" to={`/${id}`}>{border}</Link>
            </button>
          );
    }
};

export default BorderButton;
