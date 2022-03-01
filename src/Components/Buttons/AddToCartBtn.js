import React, { useState } from "react";
import { FaBox, FaShoppingCart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

import "./Buttons.scss";

// Add To Cart
export function AddToCartBtn({
  title = "Add to Cart",
  className,
  clicked = false,
  onClick,
  qty,
  ...props
}) {
  return (
    <button
      onClick={onClick}
      className={`cart-button ${className} ${clicked ? "clicked" : ""}`}
    >
      <span className="add-to-cart">{title}</span>
      <span className="added">
        <i className="translate-middle-x badge rounded-pill bg-light text-primary">
          {qty}
        </i>
        Added to cart
      </span>
      <IoCartOutline className="fa-shopping-cart" />
      <FaBox className="fa-box" />
    </button>
  );
}
