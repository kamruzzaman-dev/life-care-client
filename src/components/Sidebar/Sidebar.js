import React from "react";
import logoDark from "../../assets/logo.png";
import logoLight from "../../assets/logo.png";
import { menus } from "../../utils/tools/menu";
import MenuAccordion from "./MenuAccordion";
import { removeLocalStorage } from "../../utils/function/localStorage";
import { useGetLoginUserQuery } from "../../Services/userApi";
const Sidebar = ({ sideBarShow,theme }) => {
  const handleLogout = () => {
    removeLocalStorage("testingToken");
    window.location.reload();
  };
  // get user
  const { data } = useGetLoginUserQuery();
  return (
    <div className="life_care_project_sidebar">
      <div className="life_care_project_logo_container">
        <img
          src={theme === "dark" ? logoDark : logoLight}
          width="100%"
          alt="logo"
        />
      </div>
      <div className="life_care_project_user_profile">
        <div className="life_care_project_user_info">
          <h2>{data?.data?.name}</h2>
          <p>{data?.data?.email}</p>
        </div>
      </div>
      <div className="life_care_project_sidebar_menu">
        <ul className="life_care_project_sidebar_menu_lists">
          <MenuAccordion
            d={menus}
            sideBarShow={sideBarShow}
            logout={handleLogout}
            userRole={data?.data?.role}
          />
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
