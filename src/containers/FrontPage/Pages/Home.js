import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Homes from "../containers/Home";
const Home = () => {
  useEffect(()=>{
    window.scrollTo(0,1)
  },[])
  return (
    <>
      <Header hidePackageRoute />
      <Homes/>
      <Footer />
    </>
  );
};

export default Home;
