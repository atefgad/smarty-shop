import React from "react";
import { IoArrowForward } from "react-icons/io5";
import { Link } from "react-router-dom";

import "./SectionHead.scss";

function SectionHead({ title, linkTitle = "view all", linkPath = null }) {
  return (
    <div className="section-head d-flex align-items-center justify-content-between mb-4 pb-2">
      <h3 className="h3 mb-sm-0 section-title">{title}</h3>
      {linkPath ? (
        <Link
          className="title-link position-relative fw-bold ms-sm-3 p-0"
          to={linkPath}
        >
          {linkTitle} <IoArrowForward className="ms-1"></IoArrowForward>
        </Link>
      ) : null}
    </div>
  );
}

export default SectionHead;
