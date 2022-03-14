import React from "react";
import { Breadcrumb } from "react-bootstrap";
import { IoHome } from "react-icons/io5";
import { Link } from "react-router-dom";
import "./PageTitle.scss";

function PageTitle({ name = "page-title", className }) {
  return (
    <div className="page__title bg-dark pt-4">
      <div className="container d-lg-flex justify-content-between py-2 py-lg-3">
        <div className="order-lg-2 mb-3 mb-lg-0 pt-lg-2">
          <Breadcrumb>
            <Breadcrumb.Item>
              <Link className="d-flex align-items-center text-light" to="/">
                <IoHome className="me-1" />
                Home
              </Link>
            </Breadcrumb.Item>

            <Breadcrumb.Item active>{name}</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="order-lg-1 pe-lg-4 text-center text-lg-start">
          <h1 className={`h3 text-light mb-0 ${className ? className : ""}`}>
            {name}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default PageTitle;
