import React from "react";
import { useContext, useState } from "react";
import { AppContext } from "../../App";
import { FaChevronDown } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

const Filter = () => {
  const [filterToggle, setFilterToggle] = useState(false);
  const { setPage, region, setRegion } = useContext(AppContext);

  const contVars = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        delay: 0.2,
      },
    },
    exit: {
      opacity: 0,
    },
  };

  const filterVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.2,
      },
    },
  };

  return (
    <div className="flex flex-col sm:w-[30%] w-[60%] relative shadow-md">
      <button
        aria-label="filter by region"
        className="text-[var(--text)] 2xl:text-2xl flex flex-row justify-between items-center transition-colors ease-in-out duration-150 w-full rounded-md text-left p-2 h-10 2xl:h-16 bg-[var(--elem)]"
        onClick={() => setFilterToggle(!filterToggle)}
      >
        <h1>{region}</h1>
        <FaChevronDown
          className={`${
            filterToggle ? "rotate-180 duration-300" : "rotate-0 duration-300"
          }`}
        />
      </button>
      <AnimatePresence>
        {filterToggle && (
          <motion.ul
            className="text-[var(--text)] 2xl:text-2xl transition-colors ease-in-out duration-150 w-full z-10 absolute top-12 2xl:top-20 outline-none origin-top cursor-pointer bg-[var(--elem)] rounded-md overflow-hidden"
            variants={filterVars}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <motion.li
              className="hover:bg-[var(--hover)] px-2 py-1 2xl:text-2xl"
              onClick={(e) => {
                setRegion(e.target.textContent);
                setFilterToggle(false);
                setPage(1);
              }}
              variants={contVars}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              All
            </motion.li>
            <motion.li
              className="hover:bg-[var(--hover)] px-2 py-1"
              onClick={(e) => {
                setRegion(e.target.textContent);
                setFilterToggle(false);
                setPage(1);
              }}
              variants={contVars}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              North America
            </motion.li>
            <motion.li
              className="hover:bg-[var(--hover)] px-2 py-1"
              onClick={(e) => {
                setRegion(e.target.textContent);
                setFilterToggle(false);
                setPage(1);
              }}
              variants={contVars}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              South America
            </motion.li>
            <motion.li
              className="hover:bg-[var(--hover)] px-2 py-1"
              onClick={(e) => {
                setRegion(e.target.textContent);
                setFilterToggle(false);
                setPage(1);
              }}
              variants={contVars}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              Africa
            </motion.li>
            <motion.li
              className="hover:bg-[var(--hover)] px-2 py-1"
              onClick={(e) => {
                setRegion(e.target.textContent);
                setFilterToggle(false);
                setPage(1);
              }}
              variants={contVars}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              Europe
            </motion.li>
            <motion.li
              className="hover:bg-[var(--hover)] px-2 py-1"
              onClick={(e) => {
                setRegion(e.target.textContent);
                setFilterToggle(false);
                setPage(1);
              }}
              variants={contVars}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              Asia
            </motion.li>
            <motion.li
              className="hover:bg-[var(--hover)] px-2 py-1"
              onClick={(e) => {
                setRegion(e.target.textContent);
                setFilterToggle(false);
                setPage(1);
              }}
              variants={contVars}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              Oceania
            </motion.li>
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Filter;
