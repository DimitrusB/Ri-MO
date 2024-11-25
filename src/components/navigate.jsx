import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { NotFound } from "../pages/NotFound";
import { HeroDetails} from "../pages/InfoCard";
import { EpisodeDetail } from "../pages/Episodes";
import { LocationDetail } from "../pages/location";

const RoutesPages = () => {
  return (
    <Routes >
      <Route path="/" element={<Home />} /> 
      <Route path="*" element={<NotFound />} />
      <Route path="/hero/:id" element={<HeroDetails/>} />
      <Route path="/episode/:id" element={<EpisodeDetail/>} />
      <Route path="/location/:locId" element={<LocationDetail/>} />
    </Routes>
  );
};

export default RoutesPages;
