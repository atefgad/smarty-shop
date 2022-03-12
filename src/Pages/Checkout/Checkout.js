import React from "react";
import { Col, Row } from "react-bootstrap";

// import route components
import { Outlet } from "react-router-dom";

// import Component Styles
import "./Checkout.scss";

// import Components
import { Animated, PageTitle } from "../../Components";
import Steps from "./Steps";
import OrderSummarySideBar from "./OrderSummarySideBar";

function Checkout() {
  return (
    <React.Fragment>
      <PageTitle name="Checkout" />
      <div className="checkout__page">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="container"
        >
          <Row className="d-flex">
            {/* Content */}
            <Col lg={8} className="col-lg-8 checkout-body pb-4">
              {/* CheckOut Heading [STEPS] */}
              <div className="checkout-heading d-flex justify-content-between align-items-center pt-3 pb-0 mt-1">
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
              <OrderSummarySideBar />
            </Col>
          </Row>
        </form>
      </div>
    </React.Fragment>
  );
}

export default Checkout;
