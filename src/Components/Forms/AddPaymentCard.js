import React from "react";
import {
  IoCalendarNumberOutline,
  IoCardOutline,
  IoLockClosedOutline,
} from "react-icons/io5";

function AddPaymentCard() {
  return (
    <div className="add__payment__card">
      <form onSubmit={(e) => e.preventDefault()}>
        <h5 className="mt-4 mb-2 ">Add a new card</h5>
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
              <span className="font-weight-normal card-text">Expiry Date</span>
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
              <span className="font-weight-normal card-text">CVC</span>
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
  );
}

export default AddPaymentCard;
