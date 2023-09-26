import React from "react";
import InfoSection from "../components/DetailsPageComponents/InfoSection";
import Borders from "../components/DetailsPageComponents/Borders";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { queryContext } from "../components/Main";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const DetailsPage = () => {

  const navigate = useNavigate()


  const { id } = useParams();
  const { isLoading, data } = useContext(queryContext);

  if (!isLoading) {
    const countryDetailsArr = data.data.filter(
      (country) => country.name.common.split(" ").join("") == id
    );
    const country = countryDetailsArr[0];

    return (
      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      >
        <section className="sm:px-16 px-6 py-8 2xl:py-16 flex flex-col sm:gap-16 gap-10">

          <button aria-label="go back" onClick={() => navigate(-1)} className="w-[100px] 2xl:w-[150px] bg-[var(--elem)] py-[0.4rem] rounded-md px-[2rem] shadow-[1px_2px_6px_2px_rgba(0,0,0,0.3)] text-[var(--text)] hover:text-[var(--orange)] transition-colors ease-in-out duration-150 2xl:text-2xl text-center">
            Back
          </button>

          <div className="flex sm:flex-row flex-col sm:items-center sm:gap-16 gap-10 w-full h-full">
            <div className="sm:w-[40%] 2xl:w-[50%] w-full shadow-[1px_2px_6px_2px_rgba(0,0,0,0.3)]">
              <img className="w-full" src={country.flags.svg} alt="" />
            </div>

            <div className="flex flex-col gap-4 sm:w-[60%] 2xl:w-[50%] w-full">
              <h1 className="text-[var(--text)] text-3xl 2xl:text-6xl font-bold">{country.name.common}</h1>
              <InfoSection country={country}/>
              <Borders country={country}/>
            </div>
          </div>
        </section>
      </motion.div>
    );
  }
};

export default DetailsPage;
