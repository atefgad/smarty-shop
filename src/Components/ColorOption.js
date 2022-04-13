import React from "react";

function ColorOption({ colorItems, color, setColor }) {
  return (
    <div className="d-block">
      {colorItems.map((item, index) => (
        <div
          key={index}
          className="form-check form-option form-option-size form-check-inline mb-2"
        >
          <input
            className="form-check-input"
            type="radio"
            id={`#${item}_${index}`}
            value={item}
            checked={color === item}
            onChange={(e) => setColor(e.target.value)}
          />
          <label
            className="form-option-label border-4 rounded-circle"
            htmlFor={`#${item}_${index}`}
            style={{ background: item }}
          ></label>
        </div>
      ))}
    </div>
  );
}

export default ColorOption;
