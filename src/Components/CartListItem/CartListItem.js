import React, { useState, useEffect } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { IoAddOutline, IoRemoveOutline, IoTrashOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  increaseCart,
  cartTotalPrice,
  decreaseCart,
  removeCartItem,
} from "../../store/cartSlice";

function CartListItem({ cartItem, setCloseCart }) {
  const shoppingCart = useSelector((state) => state.cart);

  const [quantity, setQuantity] = useState(cartItem.quantity);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cartTotalPrice());
  }, [dispatch, shoppingCart, quantity]);

  const handleIncrease = (cartItem) => {
    dispatch(increaseCart(cartItem));
  };
  const handleDecrease = (cartItem) => {
    dispatch(decreaseCart(cartItem));
  };
  const handleRemoveItem = (cartItem) => {
    dispatch(removeCartItem(cartItem));
  };

  return (
    <div className="d-flex align-items-center pe-2 mb-3">
      {/* Product Image */}
      <Link
        to={`/product/${cartItem.id}`}
        className="d-block flex-shrink-0"
        onClick={() => setCloseCart(false)}
      >
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
          <div className="w-100 me-3">
            {/* Product Title */}
            <h4 className="fs-md mb-1" onClick={() => setCloseCart(false)}>
              <Link to={`/product/${cartItem.id}`}>
                {cartItem.title.length > 27
                  ? `${cartItem.title.substr(0, 27)}..`
                  : cartItem.title}
              </Link>
            </h4>
            <div className="d-flex align-items-center justify-content-start fs-sm">
              {/* Price */}
              <span className="me-2">${cartItem.price.toFixed(2)}</span>
              <span className="text-dark fs-4 me-2">x</span>
              {/* Quantity */}
              <div className="d-flex align-items-center justify-content-between">
                {/* Quantity[MINS BTN] */}
                <OverlayTrigger
                  placement="top"
                  overlay={
                    <Tooltip id="tooltip-top">
                      <span className="btn-tooltip">remove</span>
                    </Tooltip>
                  }
                >
                  <button
                    className="btn btn-secondary btn-sm rounded-circle"
                    onClick={() => handleDecrease(cartItem)}
                  >
                    <IoRemoveOutline />
                  </button>
                </OverlayTrigger>
                {/* Quantity[INPUT] */}
                <input
                  className="form-control form-control-sm px-2 border-primary rounded-2"
                  type="number"
                  style={{
                    maxWidth: "3rem",
                    textAlign: "center",
                  }}
                  value={cartItem.quantity}
                  // onChange={(e) => setQuantity(e.target.value)}
                />
                {/* Quantity[ADD BTN] */}
                <OverlayTrigger
                  placement="top"
                  overlay={
                    <Tooltip id="tooltip-top">
                      <span className="btn-tooltip">add</span>
                    </Tooltip>
                  }
                >
                  <button
                    className="btn btn-secondary btn-sm rounded-circle"
                    onClick={() => handleIncrease(cartItem)}
                  >
                    <IoAddOutline />
                  </button>
                </OverlayTrigger>
              </div>
            </div>
          </div>
          <div className="border-start">
            <OverlayTrigger
              placement="top"
              overlay={
                <Tooltip id="tooltip-top">
                  <span className="btn-tooltip">remove</span>
                </Tooltip>
              }
            >
              <button
                className="btn btn-link d-block text-danger fs-xl"
                onClick={() => handleRemoveItem(cartItem)}
              >
                <IoTrashOutline />
              </button>
            </OverlayTrigger>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartListItem;
