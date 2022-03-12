import React from "react";
import {
  IoCalendarNumberOutline,
  IoCardOutline,
  IoLockClosedOutline,
} from "react-icons/io5";
import "./Payment.scss";

import mastercard from "../../../../Assets/images/icons/mastercard.png";
import visa from "../../../../Assets/images/icons/visa.png";

function Payment() {
  return (
    <div className="payment__method">
      <div className="card">
        <h4 className="mb-0">Choose payment method</h4>
        <hr className="mb-5" />
        <form>
          <h6 className="text-">SELECT A SAVED CARD</h6>
          <hr className="border-top border-2" />
          <div className="payment__method__item mb-3 border-2 border-primary row d-flex align-items-center">
            <div className="col-2">
              <img className="img-fluid" alt="mastercard" src={mastercard} />
            </div>
            <div className="col-7">
              <input type="text" placeholder="**** **** **** 3193" disabled />
            </div>
            <div className="col-3">
              <a href="#!">Select card</a>
            </div>
          </div>
          <div className=" payment__method__item row d-flex align-items-center">
            <div className="col-2">
              <img className="img-fluid" src={visa} alt="visa" />
            </div>
            <div className="col-7">
              <input type="text" disabled placeholder="**** **** **** 4296" />
            </div>
            <div className="col-3 d-flex justify-content-center">
              <a href="#!">Select card</a>
            </div>
          </div>
          <div className="d-flex align-justify-content justify-content-center text-center my-3">
            <span className="p-4 bg-secondary text-dark border-gray-400 border border-2 fs-4 fw-bolder rounded-circle">
              Or
            </span>
          </div>

          <h5 className="mt-4 mb-2 ">Add new card</h5>
          <hr className="border-top border-2" />
          <div className="payment-card-body">
            <span className="font-weight-normal card-text">Card Number</span>
            <div className="input">
              <IoCardOutline className="input__icon" />
              <input
                type="number"
                className="form-control"
                placeholder="0000 0000 0000 0000"
              />
            </div>
            <div className="row mt-3 mb-3">
              <div className="col-md-8">
                <span className="font-weight-normal card-text">
                  Expiry Date
                </span>
                <div className="input">
                  <IoCalendarNumberOutline className="input__icon" />
                  <input
                    type="number"
                    className="form-control"
                    placeholder="MM/YY"
                  />
                </div>
              </div>
              <div className="col-md-4">
                <span className="font-weight-normal card-text">CVC/CVV</span>
                <div className="input">
                  <IoLockClosedOutline className="input__icon" />
                  <input
                    type="number"
                    className="form-control"
                    placeholder="000"
                  />
                </div>
              </div>
            </div>
            <span className="text-muted certificate-text">
              <IoLockClosedOutline /> Your transaction is secured with ssl
              certificate
            </span>
          </div>
          <button className="btn btn-primary fw-bold">Add new card</button>
        </form>
      </div>
    </div>
  );
}

export default Payment;
