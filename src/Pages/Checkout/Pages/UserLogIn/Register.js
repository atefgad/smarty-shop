import React, { useState } from "react";

import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { register } from "../../../../store/authSlice";
import { useDispatch } from "react-redux";

// Signup Validations
const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Please Enter Your First Name!"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Please Enter Your Last Name!"),
  email: Yup.string()
    .email("Invalid email")
    .required("Please Enter Your Email!"),
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Please Enter Your Password!"),
});
function Register({ show, setActive }) {
  const [showPassword, setshowPassword] = useState(false);
  const dispatch = useDispatch();

  return (
    <div className={`${show === "register" ? "" : "d-none"}`}>
      {/* form fields */}
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          if (dispatch(register(values))) {
            setActive(1);
          }
        }}
      >
        {({ errors, touched }) => (
          <Form className="form">
            <div className="row">
              <div className="col-sm-12 col-md-6">
                {/* firstName field */}
                <div className="mb-3">
                  <Field
                    className={`form-control ${
                      errors.firstName ? "is-invalid" : null
                    }`}
                    name="firstName"
                    placeholder="Firstname"
                  />
                  {errors.firstName && touched.firstName ? (
                    <div className="invalid-feedback">{errors.firstName}</div>
                  ) : null}
                </div>
              </div>
              <div className="col-sm-12 col-md-6">
                {/* lastName field */}
                <div className="mb-3">
                  <Field
                    className={`form-control ${
                      errors.lastName ? "is-invalid" : null
                    }`}
                    name="lastName"
                    placeholder="Lastname"
                  />
                  {errors.lastName && touched.lastName ? (
                    <div className="invalid-feedback">{errors.lastName}</div>
                  ) : null}
                </div>
              </div>
            </div>
            {/* Email field */}
            <div className="mb-3">
              <Field
                className={`form-control ${errors.email ? "is-invalid" : null}`}
                name="email"
                placeholder="Email or Username"
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
                Register
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Register;
