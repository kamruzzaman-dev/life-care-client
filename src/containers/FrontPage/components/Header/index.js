import React, { useRef, useState } from "react";
import { FaBars, FaRegUserCircle } from "react-icons/fa";
import Logo from "../../../../assets/logo.png";
import CustomLink from "../../../../components/Link";
import {
  getLocalStorage,
  removeLocalStorage,
} from "../../../../utils/function/localStorage";
import { useNavigate } from "react-router-dom";
import { useClickOutside } from "../../../../hooks/useClickOutside";
import { Link } from "react-router-dom";
import Popover from "../../../../components/Popover";
const Header = ({ hidePackageRoute }) => {
  const navigate = useNavigate();
  const [stickyNav, setStickyNav] = useState(false);
  const stickyNavbar = () => {
    if (window.pageYOffset > 100) {
      setStickyNav(true);
      return;
    } else {
      setStickyNav(false);
      return;
    }
  };
  const handleLogout = () => {
    removeLocalStorage("testingToken");
    window.location.reload();
  };
  window.addEventListener("scroll", stickyNavbar);
  const [showToggleNav, setShowToggleNav] = useState(false);

  const [openUserMenu, setOpenUserMenu] = useState(false);
  const userMenuRef = useRef(null);
  useClickOutside(userMenuRef, () => setOpenUserMenu(false));
  const handleUserDashboard = () => {
    setShowToggleNav(false);
    setOpenUserMenu(!openUserMenu);
  };

  return (
    <div
      className={`life_care_project_frontpage_header_wrapper ${
        stickyNav ? "sticky" : ""
      }`}
    >
      <div className="container">
        <div className="life_care_project_front_navbar">
          <div className="life_care_project_front_logo">
            <CustomLink href="/" className="logo">
              <img src={Logo} alt="logo" />
            </CustomLink>
            <ul className="life_care_project_front_navbar_lists2">
              <div className="user_toggler" ref={userMenuRef}>
                <div
                  className="icon"
                  onClick={() => handleUserDashboard(!openUserMenu)}
                >
                  <FaRegUserCircle />
                </div>
                <Popover openPopover={openUserMenu} className="user_menu_list">
                  <ul>
                    {getLocalStorage("testingToken") ? (
                      <>
                        <li>
                          <Link to="/dashboard">Dashboard</Link>
                        </li>
                        <li onClick={handleLogout}>
                          <Link to="#">Logout</Link>
                        </li>
                      </>
                    ) : (
                      <>
                        <li>
                          <Link to="/login">Log In</Link>
                        </li>
                        <li>
                          <Link to="/register">Sign Up</Link>
                        </li>
                      </>
                    )}
                    <li>
                      <Link to="/faq">FAQ</Link>
                    </li>
                  </ul>
                </Popover>
              </div>
              <div className="toggler_icon">
                <FaBars onClick={() => setShowToggleNav(!showToggleNav)} />
              </div>

              {/* {getLocalStorage("testingToken") ? (
                <li className="life_care_project_front_navbar_list2 ">
                  <CustomLink
                    href="/dashboard"
                    className="life_care_project_front_nav_link2 life_care_project_front_navbar_dashboard"
                  >
                    Dashboard
                  </CustomLink>
                </li>
              ) : (
                <li className="life_care_project_front_navbar_list2">
                  <CustomLink
                    href="/login"
                    className="life_care_project_front_nav_link2 login2"
                  >
                    Login
                  </CustomLink>
                </li>
              )}
              {getLocalStorage("testingToken") ? (
                <li
                  className="life_care_project_front_navbar_list2"
                  onClick={handleLogout}
                >
                  <CustomLink
                    href="/login"
                    className="life_care_project_front_nav_link2 life_care_project_front_navbar_logOut"
                  >
                    Logout
                  </CustomLink>
                </li>
              ) : (
                <li className="life_care_project_front_navbar_list2">
                  <CustomLink
                    href="/register"
                    className="life_care_project_front_nav_link2 register2"
                  >
                    Register
                  </CustomLink>
                </li>
              )} */}
            </ul>
          </div>
          {/* large screen */}
          <div
            className={`life_care_project_front_navbar_menu ${
              showToggleNav ? "toggle_navbar" : ""
            }`}
          >
            <ul className="life_care_project_front_navbar_lists">
              <li className="life_care_project_front_navbar_list">
                <CustomLink
                  href="/"
                  className="life_care_project_front_nav_link"
                >
                  Home
                </CustomLink>
              </li>
              <li className="life_care_project_front_navbar_list">
                <CustomLink
                  href="/appointment"
                  className="life_care_project_front_nav_link"
                >
                  Appointment
                </CustomLink>
              </li>
              <li className="life_care_project_front_navbar_list">
                <CustomLink
                  href="/blood-bank"
                  className="life_care_project_front_nav_link"
                >
                  Blood bank
                </CustomLink>
              </li>
              <li className="life_care_project_front_navbar_list">
                <CustomLink
                  href="/about-contact"
                  className="life_care_project_front_nav_link"
                >
                  About & contact
                </CustomLink>
              </li>

              <div
                className="user_toggler life_care_project_front_navbar_list"
                ref={userMenuRef}
              >
                <div
                  className="icon"
                  onClick={() => setOpenUserMenu(!openUserMenu)}
                >
                  <FaRegUserCircle />
                </div>
                <Popover openPopover={openUserMenu} className="user_menu_list">
                  <ul>
                    {getLocalStorage("testingToken") ? (
                      <>
                        <li>
                          <Link to="/dashboard">Dashboard</Link>
                        </li>
                        <li onClick={handleLogout}>
                          <Link to="#">Logout</Link>
                        </li>
                      </>
                    ) : (
                      <>
                        <li>
                          <Link to="/login">Log In</Link>
                        </li>
                        <li>
                          <Link to="/register">Sign Up</Link>
                        </li>
                      </>
                    )}
                    <li>
                      <Link to="/faq">FAQ</Link>
                    </li>
                  </ul>
                </Popover>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
