import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { NotFound } from "../pages/NotFound";

const RoutesPages = () => {
  return (
    <Routes >
      <Route path="/" element={<Home />} /> 
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default RoutesPages;
