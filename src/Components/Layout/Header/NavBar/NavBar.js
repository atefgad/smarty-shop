import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Navbar, Offcanvas } from "react-bootstrap";
import "./NavBar.scss";
import Logo from "../../../../Assets/images/logo.png";

// import Icons
import {
  IoSearchOutline,
  IoCartOutline,
  IoPersonOutline,
  IoListOutline,
  IoCardOutline,
} from "react-icons/io5";

import CartListItem from "../../../CartListItem/CartListItem";

import NoCartItems from "../NoCartItems";
import NavMenu from "./NavMenu";
import MenuList from "../../../MenuList/MenuList";

import { AuthModal, SignIn, SignUp } from "../../..";

export default function NavBar() {
  const cart = useSelector((state) => state.cart.cartItems);
  const [showCart, setShowCart] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const [modalShow, setModalShow] = useState(false);
  const [signToggle, setSignToggle] = useState(true);

  // Cart
  const ShowCart = (
    <React.Fragment>
      {/* primary Menu_SideBar offcanvas offcanvas-collapse */}
      <Offcanvas
        className="order-lg-2"
        show={showCart}
        onHide={() => setShowCart(false)}
        placement="end"
      >
        {/* offcanvas-header */}
        <Offcanvas.Header closeButton className="navbar-shadow">
          <Offcanvas.Title className="mt-1 mb-0 position-relative d-flex align-items-center justify-content-between">
            {cart.length > 0 ? (
              <span className="navbar-tool-badge position-absolute top-0 start-0 translate-middle badge rounded-pill bg-primary">
                {cart.length}
              </span>
            ) : null}
            <IoCartOutline className="me-1" />
            shopping cart
          </Offcanvas.Title>
        </Offcanvas.Header>
        {/* offcanvas-header:END */}

        {/* offcanvas-body */}
        <Offcanvas.Body>
          <div className="pg-2">
            {cart.length > 0 ? (
              cart.map((item) => <CartListItem cartItem={item} key={item.id} />)
            ) : (
              <NoCartItems setShowCart={setShowCart} />
            )}
          </div>
        </Offcanvas.Body>
        {/* offcanvas-body:END */}

        {/* offcanvas-footer */}
        {cart.length > 0 ? (
          <div className="offcanvas-footer d-block border-top pt-4 px-4 mb-2">
            <div className="d-flex justify-content-between mb-4">
              <strong>subtotal:</strong>
              <span className="h6 mb-0">$855.99</span>
            </div>
            <a className="btn btn-primary d-block w-100">
              <IoCardOutline /> Checkout
            </a>
          </div>
        ) : null}
        {/* offcanvas-footer:END */}
      </Offcanvas>
      {/* primary Menu_SideBar:END */}
    </React.Fragment>
  );

  return (
    <Navbar bg="light" expand="lg" className="navbar-shadow">
      {/* container */}
      <div className="container px-xl-3">
        <Button
          className="navbar-toggler btn__toggle border-0 ms-n2 me-4"
          onClick={() => setShowMenu(true)}
        >
          <IoListOutline style={{ fontSize: "1.8rem" }} />
        </Button>

        <Link
          className="navbar-brand flex-shrink-0 order-lg-0 mx-auto ms-lg-0 pe-lg-2 me-lg-4"
          to="/"
        >
          <img src={Logo} alt="smarty shop logo" />
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
              {cart.length > 0 ? (
                <span className="navbar-tool-badge">{cart.length}</span>
              ) : (
                <span className="navbar-tool-badge">0</span>
              )}
            </a>
          </div>
          <div className="border-start ms-2" style={{ height: 30 }}></div>
          <div className="navbar-tool ms-2 d-sm-flex">
            <a
              className="navbar-tool-icon-box "
              href="#!"
              onClick={() => setModalShow(true)}
            >
              <IoPersonOutline /> <span className="fw-bold">Login</span>
            </a>
          </div>
        </div>
        {/* Right Box-icon:END */}
      </div>
      {/* container:END */}

      {/* Right Sidebar[Cart] */}
      {ShowCart}

      {/* Left Sidebar[Menu] */}
      <NavMenu showMenu={showMenu} setShowMenu={setShowMenu} />

      {/* Login Modal*/}
      <AuthModal show={modalShow} onHide={() => setModalShow(false)}>
        {signToggle ? (
          <SignIn showSign={signToggle} signToggle={setSignToggle} />
        ) : (
          <SignUp showSign={signToggle} signToggle={setSignToggle} />
        )}
      </AuthModal>
      {/* Navbar:END */}
    </Navbar>
  );
}
