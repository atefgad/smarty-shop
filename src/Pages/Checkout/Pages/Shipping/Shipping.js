import React from "react";

function Shipping() {
  return (
    <div className="row mb-4">
      <h4 className="mb-3 text-capitalize">Shipping address</h4>
      <div className="col-sm-6 mb-3 pb-1">
        <label className="form-label" htmlFor="ch-fn">
          First name<sup className="text-danger ms-1">*</sup>
        </label>
        <input className="form-control" type="text" id="ch-fn" />
      </div>
      <div className="col-sm-6 mb-3 pb-1">
        <label className="form-label" htmlFor="ch-ln">
          Last names<sup className="text-danger ms-1">*</sup>
        </label>
        <input className="form-control" type="text" id="ch-ln" />
      </div>
      <div className="col-sm-6 mb-3 pb-1">
        <label className="form-label" htmlFor="ch-address">
          Street address<sup className="text-danger ms-1">*</sup>
        </label>
        <input
          className="form-control"
          type="text"
          id="ch-address"
          placeholder="House number and street name"
        />
      </div>
      <div className="col-sm-6 mb-3 pb-1">
        <label className="form-label" htmlFor="ch-address">
          Apartment
        </label>
        <input
          className="form-control"
          type="text"
          placeholder="Apartment, suite, unit, etc. (optional)"
        />
      </div>
      <div className="col-12 mb-3 pb-1">
        <label className="form-label" htmlFor="ch-city">
          Town / City<sup className="text-danger ms-1">*</sup>
        </label>
        <input className="form-control" type="text" id="ch-city" />
      </div>
      <div className="col-9 mb-3 pb-1">
        <label className="form-label" htmlFor="ch-country">
          Country<sup className="text-danger ms-1">*</sup>
        </label>
        <select className="form-select" id="ch-country">
          <option value="" selected="" disabled="" hidden="">
            Choose country
          </option>
          <option value="Australia">Australia</option>
          <option value="Canada">Canada</option>
          <option value="Francee">France</option>
          <option value="Germany">Germany</option>
          <option value="Switzerland">Switzerland</option>
          <option value="USA">USA</option>
        </select>
      </div>
      <div className="col-3 mb-3 pb-1">
        <label className="form-label" htmlFor="ch-postcode">
          Postcode<sup className="text-danger ms-1">*</sup>
        </label>
        <input
          className="form-control"
          type="text"
          id="ch-postcode"
          placeholder="00-000"
        />
      </div>
      <div className="col-sm-6 mb-3 pb-1">
        <label className="form-label" htmlFor="ch-phone">
          Phone<sup className="text-danger ms-1">*</sup>
        </label>
        <input
          className="form-control"
          type="text"
          id="ch-phone"
          placeholder="00-000-000-00"
        />
      </div>
      <div className="col-sm-6 mb-3 pb-1">
        <label className="form-label" htmlFor="ch-email">
          Email address<sup className="text-danger ms-1">*</sup>
        </label>
        <input className="form-control" type="email" id="ch-email" />
      </div>
    </div>
  );
}

export default Shipping;
