import React, { useState } from "react";
import { FaBox, FaShoppingCart } from "react-icons/fa";

import "./Buttons.scss";

// Add To Cart
export function AddToCartBtn({
  title = "Add to Cart",
  className,
  clicked = false,
  onClick,
  ...props
}) {
  return (
    <button
      onClick={onClick}
      className={`cart-button ${className} ${clicked ? "clicked" : ""}`}
    >
      <span className="add-to-cart">{title}</span>
      <span className="added">Added</span>
      <FaShoppingCart className="fa-shopping-cart" />
      <FaBox className="fa-box" />
    </button>
  );
}
