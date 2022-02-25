import React from "react";
import { Link } from "react-router-dom";
import "./MainButton.scss";

function MainButton({ title, to = "/", ...props }) {
  return (
    <Link to={to} className="main-button" {...props}>
      <span>{title}</span>
      <svg width="15px" height="10px" viewBox="0 0 13 10">
        <path d="M1,5 L11,5"></path>
        <polyline points="8 1 12 5 8 9"></polyline>
      </svg>
    </Link>
  );
}

export default MainButton;
