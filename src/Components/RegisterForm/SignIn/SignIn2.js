import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form } from "react-bootstrap";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

import { login, reset } from "../../../store/authSlice";

import "../styles.scss";

const animations = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

function SignIn({ showSign, signToggle }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = formData;
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const { user, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    dispatch(reset());
  }, [user, isLoading, isError, isSuccess, message, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      username,
      password,
    };

    dispatch(login(userData));
  };
  return (
    <motion.div
      className="register__form"
      variants={animations}
      initial="initial"
      animate="animate"
      transition={{ ease: "easeOut", duration: 1.5 }}
    >
      <div className="text-center mb-5">
        <p className="text-dark">Welcome back!</p>
        <h3 className="text-dark mb-3">Sign in to your account</h3>
        <div className="d-flex justify-content-center">
          <span className="text-muted">Don't have an account?</span>
          <a
            className="ms-2 fw-bold border-text"
            href="#!"
            onClick={() => signToggle(!showSign)}
          >
            Sign Up
          </a>
        </div>
      </div>
      {/* form fields */}
      <Form onSubmit={onSubmit}>
        <div className="px-4">
          {/* Email field */}
          <Form.Group className="mb-3">
            <Form.Label>username</Form.Label>
            <Form.Control
              name="username"
              type="text"
              value={username}
              placeholder="Enter your username"
              onChange={onChange}
            />
          </Form.Group>
          {/* password field */}
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <div className="d-flex align-items-center justify-content-center position-relative">
              <Form.Control
                name="password"
                type={!show ? "password" : "text"}
                value={password}
                placeholder="Enter your password"
                onChange={onChange}
              />
              <a href="#!" className="eye_icon" onClick={() => setShow(!show)}>
                {!show ? <IoEyeOutline /> : <IoEyeOffOutline />}
              </a>
            </div>
          </Form.Group>
          <div className="text-center mt-5 border-top">
            <button
              type="submit"
              className="btn-primary w-100 text-primary text-capitalize fw-bold py-3"
            >
              Create an account
            </button>
          </div>
        </div>
      </Form>
    </motion.div>
  );
}

export default SignIn;
