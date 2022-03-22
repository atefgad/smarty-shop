import React from "react";
import {
  IoArrowBackCircleOutline,
  IoArrowForwardCircleOutline,
} from "react-icons/io5";
import { Link } from "react-router-dom";

function Navigation({ className }) {
  return (
    <div className={`mb-sm-6 ${className ? className : ""}`}>
      <div className="d-flex pt-4 mt-3">
        <div className="w-50 pe-3">
          <Link
            to={1}
            className="btn btn-lg rounded-0 shadow-lg btn-secondary d-block w-100"
            href="#!"
          >
            <IoArrowBackCircleOutline className="mt-sm-0 me-1" />
            <span className="d-none d-sm-inline">Back to Adresses</span>
            <span className="d-inline d-sm-none">Back</span>
          </Link>
        </div>
        <div className="w-50 ps-2">
          <Link
            to={-1}
            className="btn btn-lg rounded-0 shadow-lg btn-primary d-block w-100"
            href="checkout-payment.html"
          >
            <span className="d-none d-sm-inline">Proceed to Payment</span>
            <span className="d-inline d-sm-none">Next</span>
            <IoArrowForwardCircleOutline className="mt-sm-0 ms-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
