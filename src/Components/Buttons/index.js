import React from "react";
import {
  IoArrowBackOutline,
  IoArrowForwardOutline,
  IoChevronBackOutline,
  IoChevronForwardOutline,
} from "react-icons/io5";

export const PrevBtn = (props) => {
  return (
    <React.Fragment>
      <button className="btn btn-secondary btn-lg d-block w-100" {...props}>
        <IoChevronBackOutline className="me-1 fw-bold fs-4" />
        <span className="">{props.name || "Back"}</span>
      </button>
    </React.Fragment>
  );
};
export const NextBtn = (props) => {
  return (
    <React.Fragment>
      <button className="btn btn-primary btn-lg d-block w-100" {...props}>
        <span className="">{props.name || "Next"}</span>
        <IoChevronForwardOutline className="ms-1 fw-bold fs-4" />
      </button>
    </React.Fragment>
  );
};
