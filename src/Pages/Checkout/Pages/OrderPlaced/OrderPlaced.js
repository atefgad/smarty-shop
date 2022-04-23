import React from "react";
import { useSelector } from "react-redux";

import { NextBtn, PrevBtn } from "../../../../Components/Buttons";
import OrderItem from "./OrderItem";

function OrderPlaced({ setActive, setHide }) {
  const { cartItems } = useSelector((state) => state.cart);
  const handleNextBtn = () => {
    setActive(3);
  };
  const handlePrevBtn = () => {
    setActive(2);
    setHide((isHide) => setHide(!isHide));
  };
  return (
    <div>
      <h4>Review your order</h4>
      <hr className="hr" />

      {cartItems.map((cartItem, index) => (
        <OrderItem key={index} cartItem={cartItem} />
      ))}
      {/* Navigation (Prev && Next) */}
      <div className="navigation__bnts d-lg-flex pt-4 mt-3">
        <div className="w-50 pe-3">
          <PrevBtn onClick={handlePrevBtn} />
        </div>
        <div className="w-50 pe-3">
          <NextBtn name="Confirm Order" onClick={handleNextBtn} />
        </div>
      </div>
    </div>
  );
}

export default OrderPlaced;
