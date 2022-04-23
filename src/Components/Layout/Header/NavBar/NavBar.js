import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Navbar } from "react-bootstrap";
import "./NavBar.scss";
import Logo from "../../../../Assets/images/logo.png";

// import Icons
import { IoSearchOutline, IoCartOutline, IoMenu } from "react-icons/io5";

import NavMenu from "./NavMenu";
import MenuList from "../../../MenuList/MenuList";

import Cart from "../Cart";
import AvatarUi from "./AvatarUi";
import SearchBar from "./SearchBar";

export default function NavBar() {
  const { cartItems, cartTotalAmount } = useSelector((state) => state.cart);

  const [showCart, setShowCart] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);

  return (
    <Navbar bg="light" expand="lg" className="navbar-shadow">
      {/* container */}
      <div className="container">
        <Button
          className="navbar-toggler btn__toggle border-0 text-black ms-n2 me-4"
          onClick={() => setShowMenu(true)}
        >
          <IoMenu style={{ fontSize: "1.8rem" }} />
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
            <a
              className="navbar-tool-icon-box me-2"
              href="#!"
              onClick={() => setShowSearchBar(true)}
            >
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
              {cartItems.length > 0 && (
                <span className="navbar-tool-badge">{cartItems.length}</span>
              )}
            </a>
          </div>
          <div className="border-start ms-3 ps-2" style={{ height: 30 }}></div>

          {/* AvatarUi */}
          <AvatarUi />
        </div>
        {/* Right Box-icon:END */}
      </div>
      {/* container:END */}

      {/* Search Bar */}
      <SearchBar show={showSearchBar} hide={setShowSearchBar} />
      {/* Search Bar */}

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
