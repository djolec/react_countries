import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../App";
import { ReactComponent as World } from "../../img/worldDM.svg";
import { ReactComponent as City } from "../../img/cityDM.svg";
import { ReactComponent as Population } from "../../img/populationDM.svg";

const CountryCard = ({ flag, name, population, capitals, region, id,  }) => {
  const { state, dispatch } = useContext(AppContext);
  return (
    <div className="flex flex-col justify-between gap-2 rounded-md overflow-hidden bg-[var(--elem)] transition-colors ease-in-out duration-150 shadow-md relative">
      <div className="p-4 aspect-[2/1] overflow-hidden bg-transparent flex justify-center items-center">
        <img
          className="w-fit shadow-[1px_2px_6px_2px_rgba(0,0,0,0.3)] h-full object-contain block"
          src={flag}
        />
      </div>
      <h1 className="text-[var(--text)] transition-colors duration-150 ease-in-out px-4 text-2xl 2xl:text-4xl font-bold">
        <Link onClick={() => dispatch({ type: "countryInputEmpty", payload: "" })}
          className="hover:text-[var(--orange)] text-[var(--text)] transition-colors ease-in-out duration-150 before:content-[''] before:absolute before:inset-0"
          to={`/${id}`}
        >
          {(name.length) > 16 ? `${name.slice(0, 16)}...` : name}
        </Link>
      </h1>

      <div className="flex flex-col gap-[0.2rem] 2xl:gap-[0.4rem] p-4">
        <p className="text-[var(--text)] transition-colors duration-150 ease-in-out text-md 2xl:text-2xl flex flex-row items-center">
          <Population
            className="h-[35px] w-[35px] transition-all duration-150 ease-in-out"
            style={{ fill: state.darkMode ? "#ffffff" : "#000000" }}
          />
          <span className="font-semibold mr-1">Population:</span>
          <span> {population}</span>
        </p>
        <p className="text-[var(--text)] transition-colors duration-150 ease-in-out text-md 2xl:text-2xl flex flex-row items-center">
          <World
            className="h-[35px] w-[35px] transition-all duration-150 ease-in-out"
            style={{ fill: state.darkMode ? "#ffffff" : "#000000" }}
          />
          <span
            className={`font-semibold mr-1 transition-all duration-150 ${
              state.darkMode
                ? "text-[var(--text)] transition-colors duration-150 ease-in-out"
                : "text-black"
            }`}
          >
            Region:
          </span>
          <span> {region}</span>
        </p>
        <p className="text-[var(--text)] transition-colors duration-150 ease-in-out text-md 2xl:text-2xl flex flex-row items-center">
          <City
            className="h-[35px] w-[35px] transition-all duration-150 ease-in-out"
            style={{ fill: state.darkMode ? "#ffffff" : "#000000" }}
          />
          <span className="font-semibold mr-1">Capital:</span>
          <span className="line-clamp-1"> {capitals}</span>
        </p>
      </div>
    </div>
  );
};

export default CountryCard;
