import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchData = () => {
  return axios.get("https://restcountries.com/v3.1/all");
};

const useFetchCountries = () => {
  return useQuery(["countries"], fetchData, {
    staleTime: Infinity,
    cacheTime: Infinity,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
};

export default useFetchCountries;
