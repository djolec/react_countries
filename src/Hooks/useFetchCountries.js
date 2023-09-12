import React from 'react'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useFetchCountries = () => {
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

  return { isLoading, data, isError, error }
    
}

export default useFetchCountries