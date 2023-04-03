import React from "react";
import CustomLink from "../Link";
import { FiLogOut } from "react-icons/fi";
import avatar from "../../assets/avatar.png";
const AvatarDropdownMenu = ({ setOpenMenu, logout, data }) => {
  return (
    <>
      <ul className="submenu">
        <div className="header" style={{paddingTop:"5px"}}>
          <div className="img">
            <img src={data?.avatar ? data?.avatar : avatar} alt="img" />
          </div>
          <div className="name">
            <h4>{data?.name}</h4>
          </div>
        </div>
        <li className="submenu_list" onClick={() => setOpenMenu(false)}>
          <CustomLink href="#" onClick={logout} className="submenu_link">
            <FiLogOut />
            &nbsp; Logout
          </CustomLink>
        </li>
      </ul>
    </>
  );
};

export default AvatarDropdownMenu;


