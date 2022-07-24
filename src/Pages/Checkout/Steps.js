import React from "react";

// import Icons
import {
  IoBagCheckOutline,
  IoCardOutline,
  IoLocationOutline,
  IoPersonOutline,
} from "react-icons/io5";
import { FaCheck, FaDotCircle } from "react-icons/fa";
import { Nav } from "react-bootstrap";

function Steps({ activeTab, setActiveTab, IsActive, isLoggedIn }) {
  switch (IsActive) {
    case 1:
      setActiveTab("shipping");
      break;
    case 2:
      setActiveTab("payment");
      break;
    case 3:
      setActiveTab("order_placed");
      break;

    default:
      setActiveTab("login");
  }

  return (
    <Nav variant="pills" className="steps steps-light pt-2 pb-3 mb-4">
      {!isLoggedIn && (
        <div
          eventKey="login"
          className={`step-item ${activeTab === "login" ? "active" : ""}`}
        >
          <div className="step-progress">
            <span className="step-count">
              <FaDotCircle />
            </span>
          </div>
          <div className="step-label">
            <IoPersonOutline className="label-icon" />
            Login
          </div>
        </div>
      )}

      {/* shipping */}
      <div
        eventKey="shipping"
        className={`step-item ${IsActive >= 1 && "active"}`}
      >
        <div className="step-progress">
          <span className="step-count">
            {IsActive >= 2 ? (
              <FaCheck className="fw-bold fs-5" />
            ) : (
              <FaDotCircle />
            )}
          </span>
        </div>
        <div className="step-label">
          <IoLocationOutline className="label-icon" />
          Shipping
        </div>
      </div>

      {/* payment */}
      <div
        eventKey="payment"
        className={`step-item ${IsActive >= 2 && "active"}`}
      >
        <div className="step-progress">
          <span className="step-count">
            {IsActive >= 3 ? (
              <FaCheck className="fw-bold fs-5" />
            ) : (
              <FaDotCircle />
            )}
          </span>
        </div>
        <div className="step-label">
          <IoCardOutline className="label-icon" />
          Payment
        </div>
      </div>

      {/* order_placed */}

      <div
        eventKey="order_placed"
        className={`step-item ${
          (IsActive === 3 && "active") || (IsActive === 4 && "active")
        }`}
      >
        <div className="step-progress">
          <span className="step-count">
            {IsActive >= 4 ? (
              <FaCheck className="fw-bold fs-5" />
            ) : (
              <FaDotCircle />
            )}
          </span>
        </div>
        <div className="step-label">
          <IoBagCheckOutline className="label-icon" />
          Order Placed
        </div>
      </div>
    </Nav>
  );
}

export default Steps;
