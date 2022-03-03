import React from "react";
import { Nav, NavDropdown, Offcanvas } from "react-bootstrap";
import MenuList from "../../../MenuList/MenuList";

function NavMenu({ showMenu, setShowMenu }) {
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
          <Nav className="sidebar__nav ps-2 pt-2">
            <ul>
              <MenuList setCloseMenu={setShowMenu} />
            </ul>
          </Nav>
        </Offcanvas.Body>
        {/* offcanvas-body:END */}

        {/* offcanvas-footer */}
        <div className="offcanvas-footer border-top">
          <a
            className="btn btn-outline-primary d-block w-100"
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
}

export default NavMenu;
