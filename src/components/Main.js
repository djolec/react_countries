import React from "react";
import Home from "../pages/Home"
import DetailsPage from "../pages/DetailsPage";
import { createContext } from "react";
import { Routes, Route } from "react-router-dom";
import useFetchCountries from "../Hooks/useFetchCountries";
export const queryContext = createContext();


const Main = () => {
  
  const { isLoading, data, isError, error } = useFetchCountries()


  return (
    <main className="grow bg-[var(--primary-bg)] transition-colors ease-in-out duration-150 pb-12 pt-20 sm:pt-24">
      <queryContext.Provider value={{ isLoading, data, isError, error }}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/:id" element={<DetailsPage />} />
        </Routes>
      </queryContext.Provider>
    </main>
  );
};

export default Main;
