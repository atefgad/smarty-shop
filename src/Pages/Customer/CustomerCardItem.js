import React from "react";

function CustomerCardItem({ item }) {
  return (
    <div className="border rounded d-flex align-items-center p-3 mb-3 shadow-sm ">
      <div className="me-2">
        <img src={item.icon} alt={item.title} width="60" height="60" />
      </div>
      <div className="t">
        <a href="#!">
          <h3 className="fs-md text-gray mb-1">{item.title}</h3>
          <p className="fs-xs text-muted">{item.description}</p>
        </a>
      </div>
    </div>
  );
}

export default CustomerCardItem;
