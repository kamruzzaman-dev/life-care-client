import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../containers/FrontPage/Pages/Home";
const FrontPage = () => {
  return (
    <>
      <Routes>
        <Route path="/" index element={<Home />} />
      </Routes>
    </>
  );
};

export default FrontPage;
