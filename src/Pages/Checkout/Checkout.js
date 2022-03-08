import React from "react";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
// import route components
import { Outlet } from "react-router-dom";

// import Component Styles
import "./Checkout.scss";

// import Components
import {
  Animated,
  PageTitle,
  CartListItem,
  NoCartItems,
} from "../../Components";
import Steps from "./Steps";

function Checkout() {
  const { cartItems, cartTotalAmount } = useSelector((state) => state.cart);

  return (
    <React.Fragment>
      <PageTitle name="Checkout" />
      <div className="checkout__page">
        <form className="container">
          <Row className="d-flex">
            {/* Content */}
            <Col lg={8} className="col-lg-8 checkout-body pb-4">
              {/* CheckOut Heading [STEPS] */}
              <div className="checkout-heading d-flex justify-content-between align-items-center pt-3 pb-4 pb-sm-5 mt-1">
                <Steps />
              </div>
              {/* checkout Content */}
              <Animated>
                <div className="checkout-content pt-1 pb-2 pb-sm-5 mt-1">
                  <Outlet />
                </div>
              </Animated>
            </Col>
            {/* sidebar */}
            <Col
              lg={4}
              className="order__sidebar bg-secondary pt-4 pb-4 ps-lg-4 shadow-lg rounded-2"
            >
              {/* order summary - cart items */}
              <div className="border-bottom py-3 pb-sm-2 mb-2">
                <h2 className="h5 text-capitalize text-center">
                  Order summary
                </h2>
              </div>
              {cartItems.length > 0 ? (
                <React.Fragment>
                  <div className="cart__summary__items pt-1">
                    {cartItems.map((item, i) => (
                      <motion.div
                        initial={{
                          opacity: 0,
                          translateX: 50,
                          translateY: 50,
                        }}
                        animate={{ opacity: 1, translateX: 0, translateY: 0 }}
                        exit={{ opacity: 0, duration: 0.5 }}
                        transition={{ duration: 0.3, delay: i * 0.3 }}
                        key={item.id}
                      >
                        <CartListItem cartItem={item} />
                      </motion.div>
                    ))}
                  </div>
                  <hr className="mt-2 mb-4" />
                  {/* order subtotal */}
                  <div className="d-flex justify-content-between mb-3">
                    <span className="h6 mb-0">Subtotal:</span>
                    <span className="text-nav">
                      ${cartTotalAmount.toFixed(2)}
                    </span>
                  </div>
                  {/* order Tax */}
                  <div className="d-flex justify-content-between mb-3">
                    <span className="h6 mb-0">Tax:</span>
                    <span className="text-nav">—</span>
                  </div>
                  {/* order Shipping */}
                  <div className="d-flex justify-content-between mb-3">
                    <span className="h6 mb-0">Shipping:</span>
                    <span className="text-nav">$15.50</span>
                  </div>
                  {/* order Total */}
                  <div className="d-flex justify-content-center  mb-4">
                    <h3 className="fw-normal text-center position-relative w-50 border-text">
                      <span>Total: </span>
                      <small className="fw-bold">
                        ${(cartTotalAmount + 15.5).toFixed(2)}
                      </small>
                    </h3>
                  </div>

                  {/* 
                    coupon code [Modal] 
                  <div
                    className="alert d-flex alert-info fs-md mb-5"
                    role="alert"
                  >
                    <i className="ai-alert-circle fs-xl me-3"></i>
                    <div>
                      Have a coupon code?
                      <a href="#!" className="alert-link ms-1">
                        Click here to enter your code
                      </a>
                    </div>
                  </div>
                */}
                  {/* coupon code */}
                  <form className=" needs-validation">
                    <div className="mb-2">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="coupon code"
                      />
                      <div className="invalid-feedback">
                        Please provide coupon code.
                      </div>
                    </div>
                    <button
                      className="btn btn-primary d-block w-100 text-capitalize"
                      type="submit"
                    >
                      Apply coupon code
                    </button>
                  </form>
                </React.Fragment>
              ) : (
                <NoCartItems />
              )}
            </Col>
          </Row>
        </form>
      </div>
    </React.Fragment>
  );
}

export default Checkout;
