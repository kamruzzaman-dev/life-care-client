import React from "react";
import CustomLink from "../../../../../components/Link";
import {
  FcBusinesswoman,
  FcBusinessman,
  MdOutlineLocationOn,
} from "react-icons/fc";
import { FaArrowCircleRight } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import Avatar from "../../../../../assets/avatar.png";

const Results = ({ resData }) => {
  return (
    <div className="life_care_project_donor_search_result">
      <div className="landingPage_container container">
        <div className="life_care_project_donor_search_content">
          <div className="title">
            <h2 id="packages">There are some donor's Details</h2>
          </div>
          <div className="life_care_project_table_donors_card">
            {resData?.map((d) => (
              <Card
                name={d?.name}
                Eligible={d?.eligibility}
                location={d?.location}
                image={d?.avatar}
                id={d?._id}
                bloodGroup={d?.bloodGroup}
                className="dark_blue"
                buttonText="contact"
                buttonStyle="#e8c743"
                fontSize="20px"
                headingSize="45px"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;

const Card = ({
  className,
  buttonText,
  buttonStyle,
  buttonColor,
  Eligible,
  name,
  location,
  avatar,
  bloodGroup,
  id,
}) => {
  return (
    <div className={`table_sale ${className}`}>
      <div className="table_content">
        <div className="table_content_left">
          <img src={avatar ? avatar : Avatar} alt="" />
          <span className="bloodGroup">{bloodGroup}</span>
        </div>
        <div className="table_content_right">
          <span className="table_content_details">
            <FcBusinessman />
            <p className="">{name}</p>
          </span>
          <span className="table_content_details">
            <MdLocationOn />
            <p className="">{Eligible}</p>
          </span>
          <span className="table_content_details">
            <FaArrowCircleRight />
            <p className="">{location}</p>
          </span>
        </div>
      </div>
      <div className="horizontal"></div>
      <div className="button">
        <CustomLink
          to="/login"
          className="card_btn"
          style={{ backgroundColor: `${buttonStyle}` }}
        >
          <span
            className="buy_button"
            style={{
              color: `${buttonColor} !important`,
            }}
          >
            {buttonText}
          </span>
        </CustomLink>
      </div>
    </div>
  );
};
