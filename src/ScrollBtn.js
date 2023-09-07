import React from "react";
import { FaArrowUp } from "react-icons/fa6";

const ScrollBtn = ({ isVisible, scrollToTop }) => {
  return (
    <button onClick={scrollToTop} className={`w-12 h-12 2xl:w-20 2xl:h-20 fixed bg-[var(--topbtn)] text-[var(--text)] right-4 bottom-12 grid place-content-center z-10 rounded-full transition-colors ease-out duration-150 ${isVisible ? 'visible' : 'hidden'}`}>
      <FaArrowUp className="h-8 w-6 2xl:h-14 2xl:w-12" />
    </button>
  );
};

export default ScrollBtn;
