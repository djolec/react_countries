import React from "react";
import Home from "./Home";
import DetailsPage from "./DetailsPage";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { createContext } from "react";
import { Routes, Route } from "react-router-dom";
export const queryContext = createContext();

const Main = () => {
  const fetchData = () => {
    return axios.get("https://restcountries.com/v3.1/all");
  };

  const { isLoading, data, isError, error } = useQuery(
    ["countries"],
    fetchData,
    {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  );

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
