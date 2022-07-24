import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NextBtn, PrevBtn } from "../../../../Components/Buttons";
import { openModal } from "../../../../store/modalSlice";

import "./Shipping.scss";

function Shipping({ setActive }) {
  const { user, isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const handleNextBtn = () => {
    setActive(2);
  };
  return (
    <div className="row mt-2 mb-4">
      <div className="d-flex align-items-center justify-content-between mb-4 ">
        <h4 className="text-capitalize">Shipping address</h4>
        <button
          className="btn btn-primary"
          onClick={() => dispatch(openModal("AddAddress"))}
        >
          add ddress
        </button>
      </div>
      <div className="p-2">
        {isLoggedIn &&
          user.addresses.map((item, index) => (
            <div className="address__card__item mb-3" key={index}>
              <div className="card__item__content">
                <div className="__content__left">
                  <input
                    className="form-check-input"
                    type="radio"
                    id={item.index}
                    name="group"
                  />
                  <label htmlFor={item.index}>
                    <h5>{item.name.firstname + " " + item.name.lastname}</h5>
                    <div>+2 {item.phone}</div>
                    <div>{item.add_address + " - " + item.city}</div>
                  </label>
                </div>
                <div className="__content__right">
                  <button className="btn btn-outline-primary">Edit</button>
                </div>
              </div>
            </div>
          ))}
      </div>

      {/* Navigation (Prev && Next) */}
      <div className="navigation__bnts pt-4 mt-3">
        <div className="w-50 pe-3">
          <PrevBtn disabled />
        </div>
        <div className="w-50 pe-3">
          <NextBtn name="next" onClick={handleNextBtn} />
        </div>
      </div>
    </div>
  );
}

export default Shipping;
