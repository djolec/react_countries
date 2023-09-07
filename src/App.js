import Header from "./Header";
import Main from "./Main";
import Home from "./Home";
import DetailsPage from "./DetailsPage";
import ScrollBtn from "./ScrollBtn";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { useState, useEffect, createContext } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./theme.css";

export const AppContext = createContext();

function App() {
  const queryClient = new QueryClient();

  const [filterToggle, setFilterToggle] = useState(false);
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("All");
  const [isDark, setIsDark] = useState(
    JSON.parse(localStorage.getItem("isDark")) || null
  );
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add a scroll event listener to track scrolling
    window.addEventListener('scroll', handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (localStorage.getItem("isDark")) {
      setIsDark(JSON.parse(localStorage.getItem("isDark")));
    } else {
      const darkModeMediaQuery = window.matchMedia(
        "(prefers-color-scheme: dark)"
      );

      setIsDark(darkModeMediaQuery.matches);
      localStorage.setItem(
        "isDark",
        JSON.stringify(darkModeMediaQuery.matches)
      );

      darkModeMediaQuery.addEventListener("change", (e) => {
        setIsDark(e.matches);
      });

      return () => {
        darkModeMediaQuery.removeEventListener("change", (e) => {
          setIsDark(e.matches);
        });
      };
    }
  }, []);

  const handleInput = () => {
    setSearch("")
  }

  const handleScroll = () => {
    // Calculate the scroll position
    const scrollY = window.scrollY;
    if (scrollY > 300) {
      setIsVisible(true); // Show the button when scrolled down
    } else {
      setIsVisible(false); // Hide the button when at the top
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Optional: Add smooth scrolling behavior
    });
  };

  const handleFilterToggle = () => {
    setFilterToggle(!filterToggle);
  };

  const handleThemeToggle = () => {
    setIsDark(!isDark);
    localStorage.setItem("isDark", JSON.stringify(!isDark));
  };

  return (
    <QueryClientProvider client={queryClient}>
      <div
        className="App min-h-screen flex flex-col font-nunito"
        data-theme={isDark ? "dark" : "light"}
      >
        <AppContext.Provider
          value={{
            handleFilterToggle,
            filterToggle,
            search,
            setSearch,
            region,
            setRegion,
            handleThemeToggle,
            isDark,
            handleInput
          }}
        >
          <Header />
          <ScrollBtn isVisible={isVisible} scrollToTop={scrollToTop}/>
          <Main/>
        </AppContext.Provider>
      </div>
    </QueryClientProvider>
  );
}

export default App;
