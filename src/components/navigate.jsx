import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { NotFound } from "../pages/NotFound";

const RoutesPages = () => {
  return (
    <Routes >
      <Route path="/" element={<Home />} /> {/* Загрузка Home по умолчанию */}
      <Route path="*" element={<NotFound />} />{" "}
    </Routes>
  );
};

export default RoutesPages;
