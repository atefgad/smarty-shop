import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Form } from "react-bootstrap";

import { Formik, Form as FORM, Field } from "formik";
import * as Yup from "yup";
import { closeModal } from "../../store/modalSlice";
import { addAddress } from "../../store/authSlice";

// AddAddress Validations
const AddAddressSchema = Yup.object().shape({
  firstName: Yup.string().min(2, "Too Short!").required("required!"),
  lastName: Yup.string().min(2, "Too Short!").required("required!"),
  phone: Yup.string().min(2, "Too Short!").required("required!"),
  add_address: Yup.string().min(2, "Too Short!"),
  city: Yup.string().min(2, "Too Short!"),
});

const options = [
  { value: "", text: "--State/Region--" },
  { value: "cairo", text: "Cairo" },
  { value: "giza", text: "Giza" },
  { value: "alexandria", text: "Alex." },
  { value: "asyut", text: "Asyut" },
  { value: "sohag", text: "Sohag" },
  { value: "aswan", text: "Aswan" },
];

const AddAddress = () => {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(options[0].value);

  const handleChange = (e) => {
    setSelected(e.target.value);
  };

  return (
    <div className="Add__Address">
      {/* form fields */}
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          phone: "",
          add_address: "",
          city: "",
        }}
        validationSchema={AddAddressSchema}
        onSubmit={(values) => {
          // same shape as initial values
          console.log(values);
          dispatch(addAddress(values));
          dispatch(closeModal());
        }}
      >
        {({ errors, touched }) => (
          <FORM>
            <h5 className="mt-4 mb-2 ">Add Address</h5>
            <hr className="border-top border-2" />
            <div className="row mt-1 mb-2">
              {/* firstName field */}
              <div className="col-sm-6 mb-2 pb-1">
                <Field
                  className={`form-control ${
                    errors.firstName ? "is-invalid" : null
                  }`}
                  name="firstName"
                  placeholder="first name"
                />
                {errors.firstName && touched.firstName ? (
                  <div className="invalid-feedback">{errors.firstName}</div>
                ) : null}
              </div>
              {/* lastName field */}
              <div className="col-sm-6 mb-2 pb-1">
                <Field
                  className={`form-control ${
                    errors.lastName ? "is-invalid" : null
                  }`}
                  name="lastName"
                  placeholder="last name"
                />
                {errors.lastName && touched.lastName ? (
                  <div className="invalid-feedback">{errors.lastName}</div>
                ) : null}
              </div>
              {/* phone field */}
              <div className="col-sm-12 mb-2 pb-1">
                <Field
                  className={`form-control ${
                    errors.phone ? "is-invalid" : null
                  }`}
                  name="phone"
                  placeholder="phone"
                />
                {errors.phone && touched.phone ? (
                  <div className="invalid-feedback">{errors.phone}</div>
                ) : null}
              </div>
              {/* add_address field */}
              <div className="col-sm-12 mb-2 pb-1">
                <textarea
                  className="form-control"
                  name="add_address"
                  placeholder="St.name/Building number/Apartment numbe"
                  rows="5"
                ></textarea>
              </div>
              {/* City field */}
              <div className="col-sm-12 mb-2 pb-1">
                <select
                  className={`form-control ${
                    errors.add_address ? "is-invalid" : null
                  }`}
                  name="city"
                  value={selected}
                  onChange={handleChange}
                >
                  {options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.text}
                    </option>
                  ))}
                </select>
                {errors.city && touched.city ? (
                  <div className="invalid-feedback">{errors.city}</div>
                ) : null}
              </div>

              <div className="col-sm-12 py-2">
                <Form.Check
                  type="switch"
                  id="custom-switch"
                  label="Set as default address"
                />
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-center">
              <button type="submit" className="btn btn-primary fw-bold">
                save address
              </button>
            </div>
          </FORM>
        )}
      </Formik>
    </div>
  );
};

export default AddAddress;
