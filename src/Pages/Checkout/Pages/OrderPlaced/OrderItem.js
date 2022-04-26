import React from "react";
import { Link } from "react-router-dom";

function OrderItem({ cartItem }) {
  const { id, title, price, image, size, color, quantity } = cartItem;
  return (
    <div className="d-sm-flex justify-content-between my-4 pb-3 border-bottom">
      <div className="d-sm-flex align-items-center text-center text-sm-start">
        <Link
          to={`/product/${id}`}
          className="d-inline-block flex-shrink-0 mx-auto me-sm-4"
        >
          <img src={image} width="90" height="90" alt={title} />
        </Link>
        <div className="pt-2">
          <h5 className="product-title mb-2">
            <Link to={`/product/${id}`}>{title}</Link>
          </h5>
          {size && (
            <div className="fs-sm">
              <span className="text-muted fw-bold me-2">Size:</span>
              {size}
            </div>
          )}
          {color && (
            <div className="fs-sm">
              <span className="text-muted fw-bold me-2">Color:</span>
              {color}
            </div>
          )}
        </div>
      </div>

      <div
        className="d-sm-flex align-items-center justify-content-center flex-column pt-2 pt-sm-0 ps-sm-3 mx-auto mx-sm-0 text-center text-sm-end"
        style={{ maxWidth: "9rem" }}
      >
        <div className="text-primary fs-4 pt-2">${price}</div>
        <div className="mb-0">
          <span className="text-muted fs-6 fw-bold">Qty:</span>
          <span className="text-muted fs-6 fw-bold"> {quantity}</span>
        </div>
      </div>
    </div>
  );
}

export default OrderItem;
