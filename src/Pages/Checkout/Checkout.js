import React from "react";
import { Col, Container, Row } from "react-bootstrap";

// import Component Styles
import "./Checkout.scss";

// import Components
import {
  ProductCard,
  Animated,
  PageTitle,
  CartListItem,
} from "../../Components";

import { Page404 } from "..";
import { useSelector } from "react-redux";
import NoCartItems from "../../Components/Layout/Header/NoCartItems";

function Checkout() {
  const { cartItems, cartTotalAmount } = useSelector((state) => state.cart);
  // if (e) return <Page404 />;

  return (
    <Animated>
      <PageTitle name="Checkout" />
      <div className="checkout__page">
        <Container>
          <Row className="d-flex">
            {/* Content */}
            <Col lg={8} className="col-lg-8 content py-4">
              <div className="d-flex justify-content-between align-items-center pt-3 pb-4 pb-sm-5 mt-1">
                <h2 className="h3 text-secondary">Billing details</h2>
                <a href="#!" className="btn btn-outline-primary ps-2">
                  Continue shopping
                </a>
              </div>
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
                    {cartItems.map((item) => (
                      <CartListItem cartItem={item} key={item.id} />
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
        </Container>
      </div>
    </Animated>
  );
}

export default Checkout;
