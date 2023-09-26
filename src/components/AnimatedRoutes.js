import React from "react";
import Home from "../pages/Home";
import DetailsPage from "../pages/DetailsPage";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route exact path="/" element={<Home />} />
        <Route path="/:id" element={<DetailsPage />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
