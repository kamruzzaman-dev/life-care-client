import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../containers/FrontPage/Pages/Home";
import FAQ from "../containers/FrontPage/Pages/Faq";
const FrontPage = () => {
  return (
    <>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/faq" index element={<FAQ />} />
      </Routes>
    </>
  );
};

export default FrontPage;
