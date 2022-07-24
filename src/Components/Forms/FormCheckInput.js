import React from "react";

function FormCheckInput({ id, item, checkedVal, change, circle, sm }) {
  const handleInputChange = (e) => {
    change(e.target.value);
  };
  return (
    <div
      key={item}
      className={`form-check form-option option-size-${
        sm ? "sm" : "default"
      } form-check-inline`}
    >
      <input
        className="form-check-input"
        type="radio"
        id={`#${id}_${item}`}
        value={item}
        checked={checkedVal === item}
        onChange={handleInputChange}
      />
      <label
        className={`form-option-label text-uppercase ${
          circle ? "border-4 rounded-circle" : ""
        } `}
        htmlFor={`#${id}_${item}`}
        style={{ background: item }}
      >
        {!circle && item}
      </label>
    </div>
  );
}

export default FormCheckInput;
