import React from "react";

function Select(props) {
  let options = [];
  for (let i = 1; i <= props.options; i++) {
    options.push(i);
  }
  return (
    <select
      className={
        props.className
          ? `form-select ${props.className} `
          : "form-select me-3 " + props.className
      }
      onChange={(e) => props.qty(e.target.value)}
      {...props}
    >
      {options.map((val, i) => (
        <option key={i} value={val}>
          {val}
        </option>
      ))}
    </select>
  );
}

export default Select;
