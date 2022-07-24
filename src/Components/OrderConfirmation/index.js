import React from "react";
import "./style.scss";
import { AiOutlineCheck } from "react-icons/ai";

const OrderConfirmation = () => {
  return (
    <div className="OrderConfirmation text-center">
      <span className="icon__container">
        <AiOutlineCheck className="text-success" />
      </span>
      <h3 className="text-success mb-1">Order Successful</h3>
      <p className="text-muted mt-0 mb-3">Thank you so much for your order</p>
      <button className="btn btn-primary mb-4">Check Order Status</button>
    </div>
  );
};

export default OrderConfirmation;
