import React from "react";
import { useContext } from "react";
import { AppContext } from "../../App";

const Filter = () => {
  const { dispatch, state } = useContext(AppContext);

  return (
    <div className="flex flex-col sm:w-[30%] w-[60%] relative shadow-md">
      <button
        aria-label="filter by region"
        className="text-[var(--text)] 2xl:text-2xl transition-colors ease-in-out duration-150 w-full rounded-md text-left p-2 h-10 2xl:h-16 bg-[var(--elem)]"
        onClick={() => dispatch({ type: "filterToggle" })}
      >
        {state.region}
      </button>
      {state.filterToggle && (
        <ul className="text-[var(--text)] 2xl:text-2xl transition-colors ease-in-out duration-150 w-full z-10 absolute top-12 2xl:top-20 outline-none cursor-pointer bg-[var(--elem)] rounded-md overflow-hidden">
          <li
            className="hover:bg-[var(--hover)] px-2 py-1 2xl:text-2xl"
            onClick={(e) => {
              dispatch({ type: "setRegion", regionPayload: e.target.textContent });
              dispatch({ type: "filterToggle" })
              dispatch({ type: "pageOne"})
            }}
          >
            All
          </li>
          <li
            className="hover:bg-[var(--hover)] px-2 py-1"
            onClick={(e) => {
              dispatch({ type: "setRegion", regionPayload: e.target.textContent });
              dispatch({ type: "filterToggle" })
              dispatch({ type: "pageOne"})
            }}
          >
            North America
          </li>
          <li
            className="hover:bg-[var(--hover)] px-2 py-1"
            onClick={(e) => {
              dispatch({ type: "setRegion", regionPayload: e.target.textContent });
              dispatch({ type: "filterToggle" })
              dispatch({ type: "pageOne"})
            }}
          >
            South America
          </li>
          <li
            className="hover:bg-[var(--hover)] px-2 py-1"
            onClick={(e) => {
              dispatch({ type: "setRegion", regionPayload: e.target.textContent });
              dispatch({ type: "filterToggle" })
              dispatch({ type: "pageOne"})
            }}
          >
            Africa
          </li>
          <li
            className="hover:bg-[var(--hover)] px-2 py-1"
            onClick={(e) => {
              dispatch({ type: "setRegion", regionPayload: e.target.textContent });
              dispatch({ type: "filterToggle" })
              dispatch({ type: "pageOne"})
            }}
          >
            Europe
          </li>
          <li
            className="hover:bg-[var(--hover)] px-2 py-1"
            onClick={(e) => {
              dispatch({ type: "setRegion", regionPayload: e.target.textContent });
              dispatch({ type: "filterToggle" })
              dispatch({ type: "pageOne"})
            }}
          >
            Asia
          </li>
          <li
            className="hover:bg-[var(--hover)] px-2 py-1"
            onClick={(e) => {
              dispatch({ type: "setRegion", regionPayload: e.target.textContent });
              dispatch({ type: "filterToggle" })
              dispatch({ type: "pageOne"})
            }}
          >
            Oceania
          </li>
        </ul>
      )}
    </div>
  );
};

export default Filter;
