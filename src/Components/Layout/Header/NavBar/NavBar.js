import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Dropdown, Navbar } from "react-bootstrap";
import "./NavBar.scss";
import Logo from "../../../../Assets/images/logo.png";

// import Icons
import {
  IoSearchOutline,
  IoCartOutline,
  IoPersonOutline,
  IoListOutline,
} from "react-icons/io5";

import NavMenu from "./NavMenu";
import MenuList from "../../../MenuList/MenuList";

import { AuthModal, Login, Register } from "../../../index";
import { logout } from "../../../../store/authSlice";
import { toast } from "react-toastify";

import avatar from "../../../../Assets/images/avatar.svg";
import Cart from "../Cart";
import { openModal } from "../../../../store/modalSlice";

export default function NavBar() {
  const { cartItems, cartTotalAmount } = useSelector((state) => state.cart);
  const { user, isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [showCart, setShowCart] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const [modalShow, setModalShow] = useState(false);
  const [signToggle, setSignToggle] = useState(true);

  const handleLogout = () => {
    setTimeout(() => {
      dispatch(logout());
      toast.info("logout successful!");
    }, [2000]);
  };

  return (
    <Navbar bg="light" expand="lg" className="navbar-shadow">
      {/* container */}
      <div className="container px-xl-3 flex-sm-nowrap">
        <Button
          className="navbar-toggler btn__toggle border-0 text-black ms-n2 me-4"
          onClick={() => setShowMenu(true)}
        >
          <IoListOutline style={{ fontSize: "1.8rem" }} />
        </Button>

        <Link
          className="navbar-brand flex-shrink-0 order-lg-0 mx-auto ms-lg-0 pe-lg-2 me-lg-4"
          to="/"
        >
          <img src={Logo} title="smarty shop" alt="smarty shop logo" />
          {/*<small>marty</small>*/}
          <span className="sub-logo text-primary fw-bold">hop</span>
        </Link>

        {/* Navbar Menu */}
        <Navbar className="d-none d-xl-block py-xl-3 ml-0 ">
          <ul className="navbar-nav">
            <MenuList />
          </ul>
        </Navbar>

        {/* Right Box-icon */}
        <div className="d-flex align-items-center order-lg-3 ms-lg-auto">
          <div className="navbar-tool">
            <a className="navbar-tool-icon-box me-2" href="#!">
              <IoSearchOutline />
            </a>
          </div>

          <div className="navbar-tool me-2">
            <a
              href="#!"
              className="navbar-tool-icon-box"
              onClick={() => setShowCart(true)}
            >
              <IoCartOutline />
              {cartItems.length > 0 ? (
                <span className="navbar-tool-badge">{cartItems.length}</span>
              ) : (
                <span className="navbar-tool-badge">0</span>
              )}
            </a>
          </div>
          <div className="border-start ms-3 ps-2" style={{ height: 30 }}></div>

          <div className="navbar-tool ms-1 d-sm-flex">
            {!isLoggedIn ? (
              <a
                className="navbar-tool-icon-box "
                href="#!"
                onClick={() => dispatch(openModal("Login"))}
              >
                <IoPersonOutline /> <span className="fw-bold">Login</span>
              </a>
            ) : (
              <Dropdown className="avatar">
                <div className="d-flex align-items-center justify-content-center">
                  <Dropdown.Toggle
                    as="a"
                    className="navbar-tool-icon-box d-block rounded-circle"
                  >
                    <img className="avatar-img" src={avatar} alt="avtar" />
                  </Dropdown.Toggle>
                  {isLoggedIn && (
                    <span className="avatar-name fw-bold ms-2">
                      {user.firstName + " " + user.lastName}
                    </span>
                  )}
                </div>

                <Dropdown.Menu
                  className="shadow-sm rounded-1 border-0 w-50"
                  style={{ minWidth: "15rem" }}
                >
                  <Dropdown.Item href="#action3">Profile</Dropdown.Item>
                  <Dropdown.Item href="#action4">Settings</Dropdown.Item>
                  <div className="pb-2 border-bottom"></div>
                  <Dropdown.Item href="#!" onClick={() => handleLogout()}>
                    Logout
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            )}
          </div>
        </div>
        {/* Right Box-icon:END */}
      </div>
      {/* container:END */}

      {/* Right Sidebar[Cart] */}
      <Cart
        showCart={showCart}
        setShowCart={setShowCart}
        cartItems={cartItems}
        cartTotalAmount={cartTotalAmount}
      />

      {/* Left Sidebar[Menu] */}
      <NavMenu showMenu={showMenu} setShowMenu={setShowMenu} />

      {/* Navbar:END */}
    </Navbar>
  );
}
