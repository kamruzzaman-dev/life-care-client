import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../containers/AuthPages/Login";
import Register from "../containers/AuthPages/Register";
import Dashboard from "./dashboard";
import FrontPage from "./frontPage";


const Routers = () => {
  return (
    <>
      {/* <BrowserRouter> */}
      <Routes>
        <Route path="/*" index element={<FrontPage />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="*" element={<Page404/>} /> */}
      </Routes>
    </>
  );
};

export default Routers;
