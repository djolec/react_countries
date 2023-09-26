import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../App";
import { VscColorMode } from "react-icons/vsc";
import { motion } from "framer-motion";

const Header = () => {
  const { darkMode, setDarkMode } = useContext(AppContext);

  return (
    <header className="w-full fixed z-40 sm:py-8 sm:px-12 2xl:p-16 flex px-6 py-6 flex-row justify-between items-center bg-[var(--elem)] transition-colors ease-in-out duration-150 shadow-md">
      <motion.h1
        className="text-lg 2xl:text-6xl sm:text-3xl text-[var(--text)] hover:text-[var(--orange)] font-bold transition-colors ease-in-out duration-150"
        initial={{ opacity: 0, x: 350 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
      >
        <Link to="/">Where in the world?</Link>
      </motion.h1>
      <motion.div
          initial={{ opacity: 0, x: -350 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
      >
        <VscColorMode
          style={{ fill: darkMode ? "#ffffff" : "#000000" }}
          onClick={() => {
            setDarkMode(!darkMode)
            localStorage.setItem(
              "isDark",
              JSON.stringify(!JSON.parse(localStorage.getItem("isDark")))
            );
          }}
          className="2xl:h-16 2xl:w-16 sm:h-8 sm:w-8 h-6 w-6  hover:scale-125 transition-all ease-in-out duration-150 cursor-pointer"
        />
      </motion.div>
    </header>
  );
};

export default Header;
