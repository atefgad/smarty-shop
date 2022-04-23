import React, { useState } from "react";
import { Col, Row, Tab } from "react-bootstrap";

// import Components
import { UserLogIn, Shipping, Payment, OrderPlaced } from "../index";

// import Component Styles
import "./Checkout.scss";

// import Components
import { Animated, PageTitle } from "../../Components";
import Steps from "./Steps";
import OrderSummarySideBar from "./OrderSummarySideBar";
import { useSelector } from "react-redux";

function Checkout() {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const [activeTab, setActiveTab] = useState(
    !isLoggedIn ? "login" : "shipping"
  );
  const [IsActive, setActive] = useState(!isLoggedIn ? 0 : 1);

  //hide cart items
  const [isHide, setHide] = useState(true);

  return (
    <React.Fragment>
      <PageTitle name="Checkout" />
      <div className="checkout__page">
        <div
          // onSubmit={(e) => {
          //   e.preventDefault();
          // }}
          className="container"
        >
          <Row className="d-flex">
            {/* Content */}
            <Col lg={8} className="col-lg-8 checkout-body pb-4">
              <Tab.Container
                activeKey={activeTab}
                onSelect={(activeTab) => setActiveTab(activeTab)}
              >
                {/* CheckOut Heading [STEPS] */}
                <div className="checkout-heading d-flex justify-content-between align-items-center pt-3 pb-0 mt-1">
                  <Steps
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                    IsActive={IsActive}
                    isLoggedIn={isLoggedIn}
                  />
                  {/* Tabs */}
                </div>
                {/* checkout Content */}
                <Animated>
                  <div className="checkout-content pt-1 pb-2 pb-sm-5 mt-1">
                    {/* Tabs Content */}
                    <Tab.Content>
                      {!isLoggedIn && (
                        <Tab.Pane eventKey="login">
                          <UserLogIn
                            setActiveTab={setActiveTab}
                            setActive={setActive}
                          />
                        </Tab.Pane>
                      )}

                      <Tab.Pane eventKey="shipping">
                        <Shipping setActive={setActive} />
                      </Tab.Pane>
                      <Tab.Pane eventKey="payment">
                        <Payment setActive={setActive} setHide={setHide} />
                      </Tab.Pane>
                      <Tab.Pane eventKey="order_placed">
                        <OrderPlaced setActive={setActive} setHide={setHide} />
                      </Tab.Pane>
                    </Tab.Content>
                  </div>
                </Animated>
              </Tab.Container>
            </Col>

            {/* sidebar */}
            {/* order summary - cart items */}
            <OrderSummarySideBar isHide={isHide} />
          </Row>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Checkout;
