import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { NotFound } from "../pages/NotFound";
import { HeroDetails} from "../pages/InfoCard";

const RoutesPages = () => {
  return (
    <Routes >
      <Route path="/" element={<Home />} /> 
      <Route path="*" element={<NotFound />} />
      <Route path="/hero/:id" element={<HeroDetails/>} />
    </Routes>
  );
};

export default RoutesPages;
