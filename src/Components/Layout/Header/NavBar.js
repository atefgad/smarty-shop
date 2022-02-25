import React, { useState } from "react";
import {
  Button,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";
import "./NavBar.scss";
import Logo from "../../../Assets/images/logo.png";
import {
  IoSearchOutline,
  IoCartOutline,
  IoPersonOutline,
  IoListOutline,
  IoCardOutline,
} from "react-icons/io5";
import { useSelector } from "react-redux";
import CartListItem from "../../CartListItem/CartListItem";
import { Link } from "react-router-dom";

import NoCartItems from "./NoCartItems";

export default function NavBar() {
  const cart = useSelector((state) => state.cart.cartItems);
  const [showCart, setShowCart] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

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

  // NavBarMenu
  const NavBarMenu = (
    <React.Fragment>
      {/* primary Menu_SideBar offcanvas offcanvas-collapse */}
      <Offcanvas
        className="order-lg-1"
        show={showMenu}
        onHide={() => setShowMenu(false)}
        placement="start"
      >
        {/* offcanvas-header */}
        <Offcanvas.Header closeButton className="navbar-shadow">
          <Offcanvas.Title className="mt-1 mb-0">Menu</Offcanvas.Title>
        </Offcanvas.Header>
        {/* offcanvas-header:END */}

        {/* offcanvas-body */}
        <Offcanvas.Body>
          <Nav className="d-none d-sm-block ml-0 pl-0">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Offcanvas.Body>
        {/* offcanvas-body:END */}

        {/* offcanvas-footer */}
        <div className="offcanvas-footer border-top">
          <a
            className="btn btn-translucent-primary d-block w-100"
            href="#modal-signin"
            data-bs-toggle="modal"
            data-view="#modal-signin-view"
          >
            <i className="ai-user fs-lg me-2"></i>Sign in
          </a>
        </div>
        {/* offcanvas-footer:END */}
      </Offcanvas>
      {/* primary Menu_SideBar:END */}
    </React.Fragment>
  );

  return (
    <Navbar bg="light" expand="lg" className="navbar-shadow navbar-sticky">
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
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <NavDropdown title="categories">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </ul>
        </Navbar>
        {/* NavBarMenu */}

        {/* Right Box-icon */}
        <div className="d-flex align-items-center order-lg-3 ms-lg-auto">
          <div className="navbar-tool">
            <a className="navbar-tool-icon-box me-2" href="#!">
              <IoSearchOutline />
            </a>
          </div>
          <div className="navbar-tool d-none d-sm-flex">
            <a className="navbar-tool-icon-box me-2" href="#!">
              <IoPersonOutline />
            </a>
          </div>
          <div className="border-start me-2" style={{ height: 30 }}></div>
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
        </div>
        {/* Right Box-icon:END */}
      </div>
      {/* container:END */}

      {/* Right Sidebar[Cart] */}
      {ShowCart}

      {/* Left Sidebar[Menu] */}
      {NavBarMenu}

      {/* Navbar:END */}
    </Navbar>
  );
}
