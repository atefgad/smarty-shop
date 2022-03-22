import React from "react";

function Size({ sizeItems, value, onChange }) {
  return (
    <div className="d-block">
      {sizeItems.map((item, index) => (
        <div
          key={index}
          className="form-check form-option form-option-size form-check-inline mb-2"
        >
          <input
            className="form-check-input"
            type="radio"
            name="size"
            id={`#${item}_${index}`}
          />
          <label className="form-option-label" htmlFor={`#${item}_${index}`}>
            {item}
          </label>
        </div>
      ))}
    </div>
  );
}

export default Size;
