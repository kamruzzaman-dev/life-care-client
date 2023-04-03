import React from "react";
import { FaFacebookF } from "react-icons/fa";
import {
  AiOutlineInstagram,
  AiFillYoutube,
  AiOutlineWhatsApp
} from "react-icons/ai";
import { RiTelegramLine } from "react-icons/ri";
const Footer = () => {

  return (
    <div className="life_care_project_front_footer_wrapper">
      <div className="container">
        <footer className="footer-container">
          <p style={{ color: "#fff !important" }}>
            Copyright © 2023, Powered By {" "}
            <a href="https://tesing.com/">md kamruzzaman</a>{" "}
          </p>
          <div className="content">
            <ul className="social_link">
            <li>
                <a className="footer_menu" rel="noreferrer" href=""  target="_blank">
                  <AiOutlineInstagram className="instagram"/>{" "}
                </a>
              </li>
              <li>
                <a className="footer_menu" rel="noreferrer" href=""  target="_blank">
                  <FaFacebookF className="facebook"/>{" "}
                </a>
              </li>
              <li>
                <a className="footer_menu" rel="noreferrer" href=""  target="_blank">
                  <AiFillYoutube className="youtube" />{" "}
                </a>
              </li>
              <li>
                <a className="footer_menu" rel="noreferrer" href=""  target="_blank">
                  <RiTelegramLine className="telegram" />{" "}
                </a>
              </li>
              <li>
                <a className="footer_menu" rel="noreferrer" href=""  target="_blank">
                  <AiOutlineWhatsApp className="whatsapp" />{" "}
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
