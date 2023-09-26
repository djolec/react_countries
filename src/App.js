import Header from "./components/Header";
import Main from "./components/Main";
import ScrollBtn from "./components/HomePageComponents/ScrollBtn";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useEffect, createContext, useState, useCallback } from "react";
import "./theme.css";
const queryClient = new QueryClient();
export const AppContext = createContext();

function App() {
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("isDark")) || null
  );
  const [page, setPage] = useState(1);
  const [region, setRegion] = useState("All");
  const [searchCountry, setSearchCountry] = useState("");

  useEffect(() => {
    if (localStorage.getItem("isDark")) {
      setDarkMode(JSON.parse(localStorage.getItem("isDark")));
    } else {
      const darkModeMediaQuery = window.matchMedia(
        "(prefers-color-scheme: dark)"
      );
      setDarkMode(darkModeMediaQuery.matches);
      localStorage.setItem(
        "isDark",
        JSON.stringify(darkModeMediaQuery.matches)
      );

      const handleDarkModeChange = (e) => {
            setDarkMode(e.matches) 
      };

      // Add a scroll event listener to track theme change
      darkModeMediaQuery.addEventListener("change", handleDarkModeChange);

      // Remove the event listener when the component unmounts
      return () => {
        darkModeMediaQuery.removeEventListener("change", handleDarkModeChange);
      };
    }
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <div
        className="App min-h-screen flex flex-col font-nunito"
        data-theme={darkMode ? "dark" : "light"}
      >
        <AppContext.Provider
          value={{
            darkMode,
            setDarkMode,
            scrollToTop,
            region,
            setRegion,
            searchCountry,
            setSearchCountry,
            page,
            setPage,
          }}
        >
          <Header />
          <ScrollBtn />
          <Main />
        </AppContext.Provider>
      </div>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
