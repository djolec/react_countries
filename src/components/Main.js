import React from "react";
import AnimatedRoutes from "./AnimatedRoutes";
import { createContext } from "react";
import useFetchCountries from "../Hooks/useFetchCountries";
export const queryContext = createContext();


const Main = () => {
  
  const { isLoading, data, isError, error } = useFetchCountries()
  
  return (
    <main className="grow bg-[var(--primary-bg)] transition-colors ease-in-out duration-150 pb-12 pt-20 sm:pt-24">
      <queryContext.Provider value={{ isLoading, data, isError, error }}>
        <AnimatedRoutes />
      </queryContext.Provider>
    </main>
  );
};

export default Main;
