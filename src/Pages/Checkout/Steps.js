import React from "react";
import { useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";

// import Icons
import {
  IoBagCheckOutline,
  IoCardOutline,
  IoLocationOutline,
  IoPersonOutline,
} from "react-icons/io5";

function Steps() {
  const { isLoggedIn } = useSelector((state) => state.auth);

  const location = useLocation();

  console.log("location", location);

  return (
    <div className="steps steps-light pt-2 pb-3 mb-4">
      {!isLoggedIn ? (
        <NavLink to="/checkout/login" className="step-item">
          <div className="step-progress">
            <span className="step-count">1</span>
          </div>
          <div className="step-label">
            <IoPersonOutline className="label-icon" />
            Login
          </div>
        </NavLink>
      ) : null}

      <NavLink to="/checkout/shipping" className="step-item">
        <div className="step-progress">
          <span className="step-count">2</span>
        </div>
        <div className="step-label">
          <IoLocationOutline className="label-icon" />
          Shipping address
        </div>
      </NavLink>

      <NavLink to="/checkout/payment" className="step-item">
        <div className="step-progress">
          <span className="step-count">3</span>
        </div>
        <div className="step-label">
          <IoCardOutline className="label-icon" />
          Payment
        </div>
      </NavLink>

      <NavLink to="/checkout/order-placed" className="step-item">
        <div className="step-progress">
          <span className="step-count">4</span>
        </div>
        <div className="step-label">
          <IoBagCheckOutline className="label-icon" />
          Order Placed
        </div>
      </NavLink>
    </div>
  );
}

export default Steps;
