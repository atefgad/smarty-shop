import React, { useState } from "react";

import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { IoAlertCircle, IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../../store/authSlice";

// Login Validations
const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Please Enter Your Email!"),
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Please Enter Your Password!"),
});

function Login({ show, setActive }) {
  const [showPassword, setshowPassword] = useState(false);
  const dispatch = useDispatch();

  const { isLoggedIn } = useSelector((state) => state.auth);

  return (
    <div className={`${show === "login" ? "" : "d-none"}`}>
      {/* form fields */}
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
        }}
        validationSchema={LoginSchema}
        onSubmit={(values) => {
          if (dispatch(login(values))) {
            if (isLoggedIn) {
              setActive(1);
            }
          }
        }}
      >
        {({ errors, touched }) => (
          <Form className="form">
            {/* 

            <small className="d-block mt-2 mb-2 text-start">
              Login with demo account
            </small>
            <div className="alert alert-info d-flex align-items-center ">
              <IoAlertCircle className="fs-xl me-3" />

              <div className="me-3">
                <strong>Email: </strong> kate@gmail.com
              </div>
              <div>
                <strong> Password: </strong> kfejk@*_
              </div>
            </div>

*/}
            {/* Email field */}
            <div className="mb-3">
              <Field
                className={`form-control ${errors.email ? "is-invalid" : null}`}
                name="email"
                placeholder="Email"
              />
              {errors.email && touched.email ? (
                <div className="invalid-feedback">{errors.email}</div>
              ) : null}
            </div>
            {/* password field */}
            <div className="position-relative mb-3">
              <Field
                className={`form-control ${
                  errors.password ? "is-invalid " : null
                }`}
                name="password"
                placeholder="password"
                type={!showPassword ? "password" : "text"}
              />
              {errors.password && touched.password ? (
                <div className="invalid-feedback">{errors.password}</div>
              ) : (
                <a
                  href="#!"
                  className="eye_icon"
                  onClick={() => setshowPassword(!showPassword)}
                >
                  {!showPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
                </a>
              )}
            </div>
            <div className="text-center ">
              <button
                type="submit"
                className="btn btn-primary btn-lg w-50 mt-3"
              >
                Login
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Login;
