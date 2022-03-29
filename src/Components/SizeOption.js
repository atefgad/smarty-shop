import React from "react";

function SizeOption({ sizeItems, size, setSize }) {
  return (
    <div className="d-block">
      {sizeItems.map((item, index) => {
        return (
          <div
            key={index}
            className="form-check form-option form-option-size form-check-inline mb-2"
          >
            <input
              className="form-check-input"
              type="radio"
              name="size"
              id={`#${item}_${index}`}
              value={item}
              checked={size === item}
              onChange={(e) => setSize(e.target.value)}
            />
            <label
              className="form-option-label  me-2"
              htmlFor={`#${item}_${index}`}
            >
              {item.toUpperCase()}
            </label>
          </div>
        );
      })}
    </div>
  );
}

export default SizeOption;
