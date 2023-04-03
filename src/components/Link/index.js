import React from "react";
import { Link, useLocation } from "react-router-dom";
const CustomLink = (props) => {
  let match = useLocation();
  // without link
  let A = (
    <Link
      to="#"
      className={`${props.className} ${
        props.href && match.pathname === props.href ? "active" : ""
      }`}
      onClick={props.onClick}
      {...props}
    >
      {props.children}
    </Link>
  );
  // with link
  if (props.href) {
    A = (
      <Link
        to={props.href}
        className={`${props.className} ${
          props.href && match.pathname === props.href ? "active" : ""
        }`}
        {...props}
      >
        {props.children}
      </Link>
    );
  }
  return A;
};

export default CustomLink;
