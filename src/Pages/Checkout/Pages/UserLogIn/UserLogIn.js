import React, { useState } from "react";

// import Components
import Login from "./Login";
import Register from "./Register";

import "./styles.scss";

function UserLogIn({ setActive }) {
  const [show, setShow] = useState("login");

  return (
    <div className="UserLogIn mb-5 mt-4">
      <div className="d-flex align-items-center justify-content-center">
        <button
          className={`btn pb-0 fw-bold fs-5  text-dark border-text ${
            show === "login" && "active"
          }`}
          onClick={() => setShow("login")}
        >
          Login
        </button>
        <div className="btn btn-primary rounded-pill border-3 border-secondary">
          Or
        </div>
        <button
          className={`btn pb-0 fw-bold fs-5 text-dark border-text ${
            show === "register" && "active"
          }`}
          onClick={() => setShow("register")}
        >
          Register
        </button>
      </div>

      <hr className="hr" />

      <div className="mt-5">
        <Login show={show} setActive={setActive} />
        <Register show={show} setActive={setActive} />
      </div>
    </div>
  );
}

export default UserLogIn;
