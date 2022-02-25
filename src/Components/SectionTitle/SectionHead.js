import React from "react";
import { IoArrowForward } from "react-icons/io5";
import { Link } from "react-router-dom";

import "./SectionHead.scss";

function SectionHead({ title, linkPath = null }) {
  return (
    <div className="section-head d-sm-flex align-items-center justify-content-between mb-4 pb-2">
      <h3 className="h3 mb-sm-0 section-title">{title}</h3>
      {linkPath ? (
        <Link
          className="title-link position-relative fw-bold ms-sm-3 p-0"
          to={linkPath}
        >
          view all <IoArrowForward className="ms-2"></IoArrowForward>
        </Link>
      ) : null}
    </div>
  );
}

export default SectionHead;
