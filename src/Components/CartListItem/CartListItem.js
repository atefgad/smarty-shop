import React, { useState } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { IoTrashOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeCartItem } from "../../store/cartSlice";

function CartListItem({ cartItem }) {
  const dispatch = useDispatch();
  const [quantity, setquantity] = useState(cartItem.quantity);

  const handleRemoveItem = (cartItem) => {
    dispatch(removeCartItem(cartItem));
  };
  return (
    <div className="d-flex align-items-center pe-2 mb-3">
      <Link to={`/product/${cartItem.id}`} className="d-block flex-shrink-0">
        <img
          src={cartItem.image}
          alt={cartItem.title}
          width="60"
          height="60"
          className="rounded"
        />
      </Link>
      <div className="w-100 ps-2 ms-1">
        <div className="d-flex align-items-center justify-content-between">
          <div className="me-3">
            <h4 className="nav-heading fs-md mb-1">
              <Link to={`/product/${cartItem.id}`}>{` ${cartItem.title.substr(
                0,
                25
              )} ...`}</Link>
            </h4>
            <div className="d-flex align-items-center fs-sm">
              <span className="me-2">${cartItem.price.toFixed(2)}</span>
              <span className="text-danger fs-4 me-2">x</span>
              <input
                className="form-control form-control-sm px-2"
                type="number"
                style={{ maxWidth: "3.5rem" }}
                min="1"
                value={quantity}
                onChange={(e) => setquantity(e.target.value)}
              />
              <span className="text-success fs-4 ms-1 me-1">=</span>
              <span className="fw-bold ms-2">
                ${(cartItem.price * quantity).toFixed(2)}
              </span>
            </div>
          </div>
          <div className="ps-3 border-start">
            <OverlayTrigger
              placement="top"
              overlay={
                <Tooltip id="tooltip-top">
                  <span className="btn-tooltip">remove</span>
                </Tooltip>
              }
            >
              <a
                href="#!"
                className="d-block text-danger text-decoration-none fs-xl"
                onClick={() => handleRemoveItem(cartItem)}
              >
                <IoTrashOutline />
              </a>
            </OverlayTrigger>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartListItem;
