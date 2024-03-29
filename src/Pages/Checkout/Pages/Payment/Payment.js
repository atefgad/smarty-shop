import React from "react";
import { Nav, Tab } from "react-bootstrap";
import PaymentCards from "./PaymentCards";

import "./Payment.scss";
import {
  IoAlertCircleOutline,
  IoCardSharp,
  IoCashOutline,
} from "react-icons/io5";

import { NextBtn, PrevBtn } from "../../../../Components/Buttons";

function Payment({ setActive, setHide }) {
  const handleNextBtn = () => {
    setActive(3);
    setHide((isHide) => setHide(!isHide));
  };
  const handlePrevBtn = () => {
    setActive(1);
  };
  return (
    <div className="payment__method">
      <h5 className="h4 mb-3">Choose payment method</h5>
      <div className="payment__cards">
        <Tab.Container defaultActiveKey="payWithCard">
          {/* Tabs */}
          <Nav
            variant="pills"
            className="d-flex justify-content-center align-items-center mb-3"
          >
            <Nav.Item className="w-50">
              <Nav.Link eventKey="payWithCard">
                <IoCardSharp className="me-1 fw-bold fs-4" /> Pay with card
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="w-50">
              <Nav.Link eventKey="payWithCash">
                <IoCashOutline className="me-1 fw-bold fs-4" /> Pay with cash
              </Nav.Link>
            </Nav.Item>
          </Nav>
          {/* Tabs Content */}
          <Tab.Content>
            {/* pay With Card */}
            <Tab.Pane eventKey="payWithCard">
              <PaymentCards />
            </Tab.Pane>
            {/* pay With Cash */}
            <Tab.Pane eventKey="payWithCash">
              <div className="bg-secondary d-flex align-items-center rounded-2 fs-md border border-1 p-2 my-5 ">
                <IoAlertCircleOutline className="fs-2 me-3" />
                <div className="d">
                  <p className="text-gray-600 m-0">
                    Please note there is a non-refundable fee of{" "}
                    <span className=" fw-bold">$ 10.00 </span>for our cash on
                    delivery service.
                  </p>
                  <p className="text-gray-600 m-0">
                    To save on this amount,
                    <a className="text-gray-900 alert-link " href="#!">
                      please proceed with debit/credit card.
                    </a>
                  </p>
                </div>
              </div>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </div>

      {/* Navigation (Prev && Next) */}
      <div className="navigation__bnts pt-4 mt-3">
        <div className="w-50 pe-3">
          <PrevBtn onClick={handlePrevBtn} />
        </div>
        <div className="w-50">
          <NextBtn name="next" onClick={handleNextBtn} />
        </div>
      </div>
    </div>
  );
}
export default Payment;
