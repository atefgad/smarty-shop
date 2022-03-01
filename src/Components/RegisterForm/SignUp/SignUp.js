import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { motion } from "framer-motion";

import "../styles.scss";

const animations = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

function SignUp({ showSign, signToggle }) {
  const [show, setShow] = useState(false);
  return (
    <motion.div
      className="register__form"
      variants={animations}
      initial="initial"
      animate="animate"
      transition={{ ease: "easeOut", duration: 1.5 }}
    >
      <div className="text-center mb-3">
        <h3 className="text-dark">Create an account</h3>
        <div className="d-flex justify-content-center">
          <span className="text-muted">Already have an account?</span>
          <a
            className="ms-2 fw-bold border-text"
            href="#!"
            onClick={() => signToggle(!showSign)}
          >
            Sign In
          </a>
        </div>
      </div>
      <Form>
        <div className="px-4">
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" required />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <div className="d-flex align-items-center justify-content-center position-relative">
              <Form.Control type={!show ? "password" : "text"} required />
              <a href="#!" className="eye_icon" onClick={() => setShow(!show)}>
                {!show ? <IoEyeOutline /> : <IoEyeOffOutline />}
              </a>
            </div>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
        </div>
        <div className="text-center mt-5 border-top">
          <button
            type="submit"
            className="btn-primary w-100 text-primary text-capitalize fw-bold py-3"
          >
            Create an account
          </button>
        </div>
      </Form>
    </motion.div>
  );
}

export default SignUp;
