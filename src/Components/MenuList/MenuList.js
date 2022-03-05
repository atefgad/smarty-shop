import React from "react";
import { NavLink } from "react-router-dom";

//import Icons
import {
  IoHomeOutline,
  IoShirtOutline,
  IoBasketOutline,
} from "react-icons/io5";
import { RiCustomerService2Line } from "react-icons/ri";
import { BsSmartwatch } from "react-icons/bs";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { name: "home", path: "/", icon: <IoHomeOutline /> },
  {
    name: "men fashion",
    path: "/category/men's_clothing",
    icon: <IoShirtOutline />,
  },
  {
    name: "electronics",
    path: "/category/electronics",
    icon: <BsSmartwatch />,
  },
  { name: "shop", path: "/shop", icon: <IoBasketOutline /> },
  {
    name: "customer service",
    path: "/customer-service",
    icon: <RiCustomerService2Line />,
  },
];
function MenuList({ setCloseMenu }) {
  return (
    <React.Fragment>
      <AnimatePresence>
        {links.map((link, i) => (
          <motion.li
            variants={{
              hidden: {
                opacity: 0,
              },
              visible: (i) => ({
                opacity: 1,
                transition: {
                  delay: i * 0.05,
                },
              }),
            }}
            inital="hidden"
            animate="visible"
            key={`key#${link.name}`}
          >
            {setCloseMenu ? (
              <NavLink
                to={link.path}
                className="nav-link rounded-2"
                onClick={() => setCloseMenu(false)}
              >
                {link.name}
                <span className="nav-link-icon">{link.icon}</span>
              </NavLink>
            ) : (
              <NavLink to={link.path} className="nav-link">
                <span className="me-1">{link.icon}</span>
                {link.name}
              </NavLink>
            )}
          </motion.li>
        ))}
      </AnimatePresence>
    </React.Fragment>
  );
}

export default MenuList;
