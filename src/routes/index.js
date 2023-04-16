import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../containers/AuthPages/Login";
import Register from "../containers/AuthPages/Register";
import Dashboard from "./dashboard";
import BloodBank from "../containers/FrontPage/Pages/BloodBank/index";
import Appointment from "../containers/FrontPage/Pages/Appointment/Appointment";
import FrontPage from "./frontPage";
import BloodDonorDetails from "../containers/FrontPage/Pages/BloodDonorDetails";
import AboutContact from "../containers/FrontPage/Pages/AboutContact";

const Routers = () => {
  return (
    <>
      {/* <BrowserRouter> */}
      <Routes>
        <Route path="/*" index element={<FrontPage />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="/blood-bank" element={<BloodBank />} />
        <Route path="/donor/:id" element={<BloodDonorDetails />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/about-contact" element={<AboutContact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="*" element={<Page404/>} /> */}
      </Routes>
    </>
  );
};

export default Routers;
