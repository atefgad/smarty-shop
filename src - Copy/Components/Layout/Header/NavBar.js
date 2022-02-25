import React, { useState } from "react";
import { Button, Nav, Navbar, NavDropdown, Offcanvas } from "react-bootstrap";
import "./NavBar.scss";
import Logo from "../../../Assets/images/logo.png";
import {
  IoSearchOutline,
  IoCartOutline,
  IoPersonOutline,
  IoListOutline,
  IoCardOutline,
  IoCloseCircleOutline,
} from "react-icons/io5";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [show, setShow] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Cart
  const ShowCart = (
    <React.Fragment>
      {/* primary Menu_SideBar offcanvas offcanvas-collapse */}
      <Offcanvas
        className="order-lg-2"
        show={show}
        onHide={handleClose}
        placement="end"
      >
        {/* offcanvas-header */}
        <Offcanvas.Header closeButton className="navbar-shadow">
          <Offcanvas.Title className="mt-1 mb-0">Your cart</Offcanvas.Title>
        </Offcanvas.Header>
        {/* offcanvas-header:END */}

        {/* offcanvas-body */}
        <Offcanvas.Body>
          <div className=" p-2">
            <div className="d-flex align-items-center pe-2 mb-3">
              <a href="#!" className="d-block flex-shrink-0">
                <img
                  src="https://around.createx.studio/img/demo/shop-homepage/thumbnails/05.jpg"
                  alt="tt"
                  width="60"
                  className="rounded"
                />
              </a>
              <div className="w-100 ps-2 ms-1">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="me-3">
                    <h4 className="nav-heading fs-md mb-1">
                      <a href="#!">Smart Watch Series 5</a>
                    </h4>
                    <div className="d-flex align-items-center fs-sm">
                      <span className="me-2">$364.99</span>
                      <span className="me-2">x</span>
                      <input
                        class="form-control form-control-sm px-2"
                        type="number"
                        style={{ maxWidth: "3.5rem" }}
                        min="1"
                        value="1"
                      />
                    </div>
                  </div>
                  <div className="ps-3 border-start">
                    <a
                      href="#!"
                      className="d-block text-danger text-decoration-none fs-xl"
                    ><IoCloseCircleOutline /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Offcanvas.Body>
        {/* offcanvas-body:END */}

        {/* offcanvas-footer */}
        <div className="offcanvas-footer d-block border-top pt-4 px-4 mb-2">
          <div className="d-flex justify-content-between mb-4">
            <span>Total:</span>
            <span className="h6 mb-0">$855.99</span>
          </div>
          <a className="btn btn-primary d-block w-100">
            <IoCardOutline /> Checkout
          </a>
        </div>
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
        className="offcanvas-collapse order-lg-2"
        show={show}
        onHide={handleClose}
        placement="end"
      >
        {/* offcanvas-header */}
        <Offcanvas.Header closeButton className="navbar-shadow">
          <Offcanvas.Title className="mt-1 mb-0">Menu</Offcanvas.Title>
        </Offcanvas.Header>
        {/* offcanvas-header:END */}

        {/* offcanvas-body */}
        <Offcanvas.Body>
          <Nav className="me-auto d-none d-xl-block ml-0 pl-0">
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
      <div className="container px-0 px-xl-3">
        <Button
          className="navbar-toggler border-0 ms-n2 me-4"
          onClick={() => setShowMenu(!showMenu)}
        >
          <IoListOutline style={{ fontSize: "1.8rem" }} />
        </Button>

        <Navbar.Brand
          className="flex-shrink-0 order-lg-1 mx-auto ms-lg-0 pe-lg-2 me-lg-4"
          href="/"
        >
          <img src={Logo} alt="smarty shop logo" />
        </Navbar.Brand>

        {/* Navbar Menu */}
        <Navbar className="d-none d-xl-block ml-0 pl-0">
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
            <a className="navbar-tool-icon-box me-2">
              <IoSearchOutline />
            </a>
          </div>
          <div className="navbar-tool d-none d-sm-flex">
            <a className="navbar-tool-icon-box me-2" href="#modal-signin">
              <IoPersonOutline />
            </a>
          </div>
          <div className="border-start me-2" style={{ height: 30 }}></div>
          <div className="navbar-tool me-2">
            <a className="navbar-tool-icon-box" onClick={handleShow}>
              <IoCartOutline />
              <span className="navbar-tool-badge">3</span>
            </a>
          </div>
        </div>
        {/* Right Box-icon:END */}
      </div>
      {/* container:END */}

      {/* ShowCart */}
      {ShowCart}
      {/* Navbar:END */}
    </Navbar>
  );
}
