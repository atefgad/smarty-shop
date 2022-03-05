import React from "react";
import { Dropdown } from "react-bootstrap";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";

import En from "../../../../Assets/images/flags/en.png";
import De from "../../../../Assets/images/flags/de.png";
import Fr from "../../../../Assets/images/flags/fr.png";
import It from "../../../../Assets/images/flags/it.png";

function Topbar() {
  return (
    <div className="topbar bg-dark text-muted py-2">
      <div className="container d-md-flex align-items-center px-0 px-xl-3">
        <div className="d-none d-md-block text-nowrap me-3">
          <span className="me-2">
            <IoCallOutline className="me-1" color={"#fefefe"} />
            Support
          </span>
          <a className="me-2" href="tel:+9561527856">
            +310-524-6099
          </a>
        </div>
        <div className="d-flex text-md-end ms-md-auto">
          <a
            className="btn btn-link text-muted text-decoration-none me-3"
            href="#!"
          >
            <IoLocationOutline className="me-1" color={"#fefefe"} />
            track your order
          </a>

          <Dropdown className="ms-auto ms-md-0">
            <Dropdown.Toggle
              as="a"
              className="btn btn-link text-uppercase text-muted text-decoration-none dropdown-toggle"
              id="dropdown-autoclose-true"
            >
              <img className="me-2" src={En} alt="English" width="20" />
              En
            </Dropdown.Toggle>
            <Dropdown.Menu className="super-colors">
              <Dropdown.Item as="button">
                <img className="me-2" src={Fr} alt="Français" width="20" />
                Fr
              </Dropdown.Item>
              <Dropdown.Item as="button">
                <img className="me-2" src={De} alt="Deutsch" width="20" />
                De
              </Dropdown.Item>
              <Dropdown.Item as="button">
                <img className="me-2" src={It} alt="Italiano" width="20" />
                It
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
