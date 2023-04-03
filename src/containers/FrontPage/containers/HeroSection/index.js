import React from "react";
import heroimg from "../../../../assets/logo.png";
const HeroSection = () => {
  return (
    <div className="life_care_project_frontpage_wrapper" id="home">
      <div className="landingPage_container container hero_section">
        <div className="life_care_project_front_hero_section">
          <div className="life_care_project_front_hero_content">
            <h2>hello du sumu</h2>
            <p>
              lorem lorem ipsum dolor sit amet, consectetur adip lorem ipsum
              dolor sit amet, consectetur adip lorem
            </p>
          </div>
          <div className="life_care_project_front_hero_img">
            <img src={heroimg} width="100%" alt="heroimage" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
