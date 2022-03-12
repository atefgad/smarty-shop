import React from "react";
import { useDispatch } from "react-redux";

// import Components
import { openModal } from "../../../../store/modalSlice";

function UserLogIn() {
  const dispatch = useDispatch();
  return (
    <div className="mb-5 mt-6">
      <div className="d-flex justify-content-center mb-3">
        <h3 className="text-dark mb-1">
          you need to an account to continue...
        </h3>
      </div>
      <div className="d-flex align-items-center justify-content-center">
        <button
          className=" btn pb-0 ms-2 fs-5 fw-bold text-dark border-text"
          onClick={() => dispatch(openModal("Login"))}
        >
          Login
        </button>
        <span className="mx-3 fw-bold fs-4 d-block bg-gray-200 p-3 rounded-2">
          or
        </span>
        <button
          className="btn pb-0 fw-bold fs-5 text-dark border-text"
          onClick={() => dispatch(openModal("Register"))}
        >
          Register
        </button>
      </div>
    </div>
  );
}

export default UserLogIn;
