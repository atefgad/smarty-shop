import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const items = [
  { name: "home", to: "/", icon: <IoHomeOutline /> },
  { name: "about", to: "/about", icon: <IoHomeOutline /> },
  { name: "shop", to: "/shop", icon: <IoHomeOutline /> },
];
function MenuList({ setCloseMenu }) {
  return (
    <React.Fragment>
      {items.map((item) => (
        <li key={`key#${item.name}`}>
          {setCloseMenu ? (
            <NavLink
              to={item.to}
              className="nav-link"
              onClick={() => setCloseMenu(false)}
            >
              {item.name}
              <span className="nav-link-icon">{item.icon}</span>
            </NavLink>
          ) : (
            <NavLink to={item.to} className="nav-link">
              {item.icon}
              {item.name}
            </NavLink>
          )}
        </li>
      ))}
    </React.Fragment>
  );
}

export default MenuList;
