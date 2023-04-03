import React from "react";
import Lottie from "lottie-react";
import doctor from "../../../../assets/lottie/doctor.json";

const AppointmentSection = () => {
  return (
    <div className="life_care_project_frontpage_wrapper" id="home">
      <div className="landingPage_container container hero_section">
        <div className="life_care_project_front_hero_section">
          <div className="life_care_project_front_hero_img">
            <Lottie animationData={doctor} loop={true} />
          </div>
          <div className="life_care_project_front_hero_content">
            <h2>
              LifeCare - <br /> Anytime, Anywhere!
            </h2>
            <p>
              We are on a mission to change how healthcare is delivered in
              Bangladesh. We know how daunting getting access to the right care
              can be which is why we focus on turning a doctor visit into a
              delightful experience.Our goal is to make the process intuitive
              for our patients and provide care where ever you are – in person
              or at-home.
            </p>
            <a>
              Doctor <span> Appointment!</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentSection;
