import React from 'react'
import { useReducer } from 'react';

const reducer = (state, action) => {
    switch (action.type) {
      case "visible":
        return { ...state, isVisible: true };
      case "invisible":
        return { ...state, isVisible: false };
      case "countryInput":
        return { ...state, searchCountry: action.payload };
      case "countryInputEmpty":
        return { ...state, searchCountry: "" };
      case "filterToggle":
        return { ...state, filterToggle: !state.filterToggle };
      case "setRegion":
        return { ...state, region: action.regionPayload };
      case "darkModeToggle":
        return { ...state, darkMode: action.darkModePayload };
      default:
        return state;
    }
  };

const useCustomReducer = () => {

    const [state, dispatch] = useReducer(reducer, { isVisible: false, searchCountry: "", filterToggle: false, region: "All", darkMode: JSON.parse(localStorage.getItem("isDark")) || null });



      return  [state, dispatch]
}

export default useCustomReducer