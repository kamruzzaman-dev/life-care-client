import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import SearchDonor from "../../../../../assets/lottie/search_donor.json";
import Button from "../../../../../components/Button";
import CardLayout from "../../../../../components/CardLayout";
import Input from "../../../../../components/Input";
import Loading from "../../../../../components/Loading/Loading";
import Select from "../../../../../components/Select";
import CustomDatePicker from "../../../../../components/DatePicker";

const Search = ({ addBloodDonorRequest, isLoading }) => {
  const [data, setData] = useState({ eligibility: "eligible" });
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  //   const isLoading = false;
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(data);
    addBloodDonorRequest(data);
  };
  return (
    <div className="life_care_project_donor_search">
      <div className="life_care_project_donor_search_right">
        <Lottie
          style={{ width: "60%", marginLeft: "auto", marginRight: "0px" }}
          animationData={SearchDonor}
          loop={false}
        />
      </div>
      <div className="life_care_project_donor_search_left">
        <form onSubmit={handleSubmit}>
          <div className="form_group">
            <Select
              className="special_input input_group"
              label="Blood Group"
              value={data.bloodGroup}
              name="bloodGroup"
              onChange={handleChange}
              // options={bloodGroups}
              options={["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"]}
              inputGroupClass="left"
            />
            <Select
              className="special_input input_group"
              label="Location"
              value={data.location}
              name="location"
              onChange={handleChange}
              options={["dhaka", "comilla", "brahmanbaria"]}
              inputGroupClass="left"
            />
            <CustomDatePicker
              className="special_input input_group special_input_date"
              label="Date"
              name="date"
              state={data}
              setState={setData}
              inputGroupClass="right"
            />
          </div>
          <div className="submit_button">
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Loading..." : "Search"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Search;
