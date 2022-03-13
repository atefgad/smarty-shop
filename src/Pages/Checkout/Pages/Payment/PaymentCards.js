import React from "react";
import { useDispatch } from "react-redux";

import mastercard from "../../../../Assets/images/icons/mastercard.png";
import visa from "../../../../Assets/images/icons/visa.png";
import { openModal } from "../../../../store/modalSlice";

function PaymentCards() {
  const dispatch = useDispatch();
  return (
    <div className="payment__card">
      <h6 className="text-capitalize">select a saved card</h6>
      <hr className="border-top border-2" />
      <div className="payment__method__item mb-3 border-2 border-success  row d-flex align-items-center">
        <div className="col-md-2 col-sm-4 col-2">
          <img className="img-fluid" alt="mastercard" src={mastercard} />
        </div>
        <div className="col-md-7 col-8">
          <input type="text" placeholder="**** **** **** 3193" disabled />
        </div>
        <div className="d-none d-md-block col-md-3">
          <a href="#!">Select card</a>
        </div>
      </div>
      <div className=" payment__method__item row d-flex align-items-center">
        <div className="col-md-2 col-sm-4 col-2">
          <img className="img-fluid" src={visa} alt="visa" />
        </div>
        <div className="col-md-7 col-8">
          <input type="text" disabled placeholder="**** **** **** 4296" />
        </div>
        <div className="d-none d-md-block col-md-3">
          <a href="#!">Select card</a>
        </div>
      </div>

      <div className="d-flex justify-content-end ">
        <button
          className="position-relative border-text text-uppercase pb-0 d-block btn text-primary fw-bolder"
          onClick={() => dispatch(openModal("AddPaymentCard"))}
        >
          Add a new card
        </button>
      </div>
    </div>
  );
}

export default PaymentCards;
