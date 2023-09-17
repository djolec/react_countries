import Header from "./components/Header";
import Main from "./components/Main";
import ScrollBtn from "./components/HomePageComponents/ScrollBtn";
import useCustomReducer from "./Hooks/useCustomReducer";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { useEffect, createContext } from "react";
import "./theme.css";
const queryClient = new QueryClient();
export const AppContext = createContext();

function App() {

  const [state, dispatch] = useCustomReducer();

  useEffect(() => {
    // Add a scroll event listener to track scrolling
    window.addEventListener("scroll", handleScroll);

    if (localStorage.getItem("isDark")) {
      dispatch({
        type: "darkModeToggle",
        darkModePayload: JSON.parse(localStorage.getItem("isDark")),
      });
    } else {
      const darkModeMediaQuery = window.matchMedia(
        "(prefers-color-scheme: dark)"
      );

      dispatch({
        type: "darkModeToggle",
        darkModePayload: darkModeMediaQuery.matches,
      });
      localStorage.setItem(
        "isDark",
        JSON.stringify(darkModeMediaQuery.matches)
      );

      const handleDarkModeChange = (e) => {
        dispatch({ type: "darkModeToggle", darkModePayload: e.matches });
      };

      // Add a scroll event listener to track theme change
      darkModeMediaQuery.addEventListener("change", handleDarkModeChange);

      // Remove the event listener when the component unmounts
      return () => { 
        darkModeMediaQuery.removeEventListener("change", handleDarkModeChange);
      };
    }

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    // Calculate the scroll position
    const scrollY = window.scrollY;
    if (scrollY > 300) {
      dispatch({ type: "visible" }); // Show the button when scrolled down
    } else {
      dispatch({ type: "invisible" }); // Hide the button when at the top
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", //  Add smooth scrolling behavior
    });
  };

  return (
    <QueryClientProvider client={queryClient}>
      <div
        className="App min-h-screen flex flex-col font-nunito"
        data-theme={state.darkMode ? "dark" : "light"}
      >
        <AppContext.Provider
          value={{
            state,
            dispatch,
            scrollToTop,
          }}
        >
          <Header />
          <ScrollBtn />
          <Main />
        </AppContext.Provider>
        
      </div>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right"/>
    </QueryClientProvider>
  );
}

export default App;
