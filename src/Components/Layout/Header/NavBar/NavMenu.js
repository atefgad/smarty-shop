import React from "react";
import { Nav, Offcanvas } from "react-bootstrap";
import { IoLogInOutline, IoPersonOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../../store/authSlice";
import { openModal } from "../../../../store/modalSlice";
import MenuList from "../../../MenuList/MenuList";

function NavMenu({ showMenu, setShowMenu }) {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  return (
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
          <Nav className="sidebar__nav pt-2">
            <ul>
              <MenuList setCloseMenu={setShowMenu} />
            </ul>
          </Nav>
        </Offcanvas.Body>
        {/* offcanvas-body:END */}

        {/* offcanvas-footer */}
        <div className="offcanvas-footer border-3 border-top border-primary">
          {!isLoggedIn ? (
            <a
              className="btn btn-outline-primary border-0 rounded-0 d-block w-100 fw-bold"
              href="#!"
              onClick={() => dispatch(openModal("Login"))}
            >
              <IoPersonOutline className="fw-bold me-1" />
              Login
            </a>
          ) : (
            <a
              className="btn btn-outline-primary border-0 rounded-0 d-block w-100 fw-bold"
              href="#!"
              onClick={() =>
                setTimeout(() => {
                  dispatch(logout());
                }, [1000])
              }
            >
              <IoLogInOutline className="fw-bold me-1" />
              logout
            </a>
          )}
        </div>
        {/* offcanvas-footer:END */}
      </Offcanvas>
      {/* primary Menu_SideBar:END */}
    </React.Fragment>
  );
}

export default NavMenu;
