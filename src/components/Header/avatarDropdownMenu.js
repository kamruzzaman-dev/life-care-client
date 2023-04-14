import React, { useEffect, useState } from "react";
import CustomLink from "../Link";
import { FiLogOut, FiUser } from "react-icons/fi";
import { FiSun } from "react-icons/fi";
import { MdOutlineDarkMode } from "react-icons/md";
import avatar from "../../assets/avatar.png";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { getLocalStorage } from "../../utils/function/localStorage";
const AvatarDropdownMenu = ({ setOpenMenu, logout, data }) => {
  getLocalStorage("dark-mode");
  const [value, setValue] = useLocalStorage("dark-mode", "light");
  const handleThemeMode = () => {
    if (value === "dark") {
      setValue("light");
    } else {
      setValue("dark");
    }
  };
  useEffect(() => {
    if (value === "dark") {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    }
  }, [value]);
  return (
    <>
      <ul className="submenu">
        <div className="header" style={{ paddingTop: "5px" }}>
          <div className="img">
            <img src={data?.avatar ? data?.avatar : avatar} alt="img" />
          </div>
          <div className="name">
            <h4>{data?.name}</h4>
          </div>
        </div>
        {avatarMenu
          .filter((pt) => pt?.permission?.includes(data?.role))
          ?.map((drop) => {
            return (
              <li
                key={drop.id}
                className="submenu_list"
                onClick={() => setOpenMenu(false)}
              >
                <CustomLink href={drop.route} className="submenu_link">
                  {drop.icon}
                  &nbsp; {drop.menu}
                </CustomLink>
              </li>
            );
          })}
        <li className="submenu_list">
          <CustomLink href="#" className="submenu_Dark_mode">
            <span>Dark mode</span>
            <button onClick={handleThemeMode} id="">
              {value === "dark" ? <FiSun /> : <MdOutlineDarkMode />}
            </button>
          </CustomLink>
        </li>
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

const avatarMenu = [
  {
    id: "my7s88ersr",
    menu: "my profile",
    icon: <FiUser />,
    route: "/dashboard/donor-info",
    permission: ["donor"],
  },
];
