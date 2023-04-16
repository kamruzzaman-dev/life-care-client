import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Search from "./Components/Search";
import Results from "./Components/Results";
import { useAddBloodDonorRequestMutation } from "../../../../Services/BloodApi";
import NoDonorFound from "./Components/NoDonorFound";

const BloodBank = () => {
  const [addBloodDonorRequest, { data: resData, error: ResError, isLoading }] =
    useAddBloodDonorRequestMutation();
  return (
    <>
      <Header hidePackageRoute />
      <Search
        addBloodDonorRequest={addBloodDonorRequest}
        isLoading={isLoading}
      />
      {resData ? <Results resData={resData} /> : <NoDonorFound />}
      <Footer />
    </>
  );
};

export default BloodBank;
