import React from "react";
import { useParams } from "react-router-dom";

const BloodDonorDetails = () => {
  let { id } = useParams();
  return <div>hello donor</div>;
};

export default BloodDonorDetails;
