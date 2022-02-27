import React from "react";
import { NavLink } from "react-router-dom";

const items = [
  { name: "home", to: "/" },
  { name: "about", to: "/about" },
  { name: "shop", to: "/shop" },
];
function MenuList() {
  return (
    <React.Fragment>
      {items.map((item) => (
        <NavLink to={item.to} key={`key#${item.name}`} className="nav-link">
          {item.name}
        </NavLink>
      ))}
    </React.Fragment>
  );
}

export default MenuList;
