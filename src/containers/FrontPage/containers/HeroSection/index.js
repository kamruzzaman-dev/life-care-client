import React from "react";
import Lottie from "lottie-react";
import heroSection from "../../../../assets/lottie/heroSection.json";
const HeroSection = () => {
  return (
    <div className="life_care_project_frontpage_wrapper" id="home">
      <div className="landingPage_container container hero_section">
        <div className="life_care_project_front_hero_section">
          <div className="life_care_project_front_hero_content">
            <h2>save people life</h2>
            <p>
              here you can find blood donors and you also a become donor.you can
              be join as a doctor.
            </p>
            <a>
              <span>Become </span>Blooddonor
            </a>
            <a>
              Blood Donors <span> search</span>
            </a>
          </div>
          <div className="life_care_project_front_hero_img">
            <Lottie animationData={heroSection} loop={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
