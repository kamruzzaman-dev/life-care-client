import React from "react";

const CardLayout = ({ children, style, className }) => {
  return <div className={`life_care_project_all_card ${className}`} style={style}>{children}</div>;
};

export default CardLayout;
