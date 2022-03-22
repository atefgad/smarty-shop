import React from "react";
import "./Footer.scss";
import PaymentCards from "../../../Assets/images/cards-alt.png";

//import Icons
import { IoCardOutline, IoRepeatOutline } from "react-icons/io5";
import { BsTruck } from "react-icons/bs";
import { MdOutlineSupportAgent } from "react-icons/md";

const subMenu = (title, items = []) => {
  return (
    <React.Fragment>
      <h2 className="footer-heading text-capitalize">{title}</h2>
      <ul className="list-unstyled">
        {items.map((item) => (
          <li key={item}>
            <a href="#!" className="d-block mb-1">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};

function Footer() {
  return (
    <footer className="footer position-relative bg-dark pt-5">
      <div className="container">
        <div className="row pb-4 mb-2 pt-5 py-md-5">
          <div className="col-md-3 col-sm-6 mb-4">
            <div className="d-flex align-items-center">
              <BsTruck
                className="text-primary"
                style={{ fontSize: "2.125rem" }}
              />
              <div className="ps-3">
                <h6 className="fs-base text-light mb-1">
                  Fast and free delivery
                </h6>
                <p className="mb-0 fs-xs text-light opacity-50">
                  Free delivery for all orders over $200
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-4">
            <div className="d-flex align-items-center">
              <IoRepeatOutline
                className="text-primary"
                style={{ fontSize: "2.125rem" }}
              />
              <div className="ps-3">
                <h6 className="fs-base text-light mb-1">
                  Money back guarantee
                </h6>
                <p className="mb-0 fs-xs text-light opacity-50">
                  We return money within 30 days
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-4">
            <div className="d-flex align-items-center">
              <MdOutlineSupportAgent
                className="text-primary"
                style={{ fontSize: "2.125rem" }}
              />
              <div className="ps-3">
                <h6 className="fs-base text-light mb-1">
                  24/7 customer support
                </h6>
                <p className="mb-0 fs-xs text-light opacity-50">
                  Friendly 24/7 customer support
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-4">
            <div className="d-flex align-items-center">
              <IoCardOutline
                className="text-primary"
                style={{ fontSize: "2.125rem" }}
              />
              <div className="ps-3">
                <h6 className="fs-base text-light mb-1">
                  Secure online payment
                </h6>
                <p className="mb-0 fs-xs text-light opacity-50">
                  We possess SSL / Secure сertificate
                </p>
              </div>
            </div>
          </div>
        </div>

        <hr className="hr-light my-0 mb-5" />

        <div className="row">
          <div className="col-md-7">
            <div className="row">
              <div className="col-md-4 mb-md-0 mb-4">
                {subMenu("Customer zone", [
                  "Your account",
                  "Shipping rates & policies",
                  "Refunds & replacements",
                  "Order tracking",
                  "Delivery info",
                  "Taxes & fees",
                ])}
              </div>
              <div className="col-md-4 mb-md-0 mb-4">
                {subMenu("about", [
                  "Out story",
                  "Awards",
                  "Our Team",
                  "Career",
                ])}
              </div>

              <div className="col-md-4 mb-md-0 mb-4">
                {subMenu("Resources", ["Blog", "Newsletter", "Privacy Policy"])}
              </div>
            </div>
          </div>
          <div className="col-md-5 mb-md-0 mb-4">
            <h2 className="footer-heading">Stay informed</h2>
            <form className="subscribe-form">
              <div className="form-group d-flex">
                <input
                  type="text"
                  className="form-control rounded-left"
                  placeholder="Enter email address"
                />
                <button
                  type="submit"
                  className="form-control bg-primary submit rounded-right"
                >
                  Subscribe
                </button>
              </div>
              <span className="subheading">
                Get digital marketing updates in your mailbox
              </span>
            </form>
          </div>
        </div>

        <hr className="hr-light my-0 mt-3 mb-3" />

        <div className="row mt-2 pt-3">
          <div className="col-md-6 col-lg-8 mb-md-0 mb-4">
            <p className="text-muted mb-0">
              Copyright {new Date().getFullYear()} &copy; All rights reserved. |
              made by{" "}
              <a
                className="text-light"
                href="https://atef-gad.com"
                target="_blank"
                rel="noreferrer"
              >
                <span>atef gad</span>
              </a>
            </p>
          </div>
          <div className="col-md-6 col-lg-4 text-md-end mb-4">
            <img
              className="d-inline-block"
              src={PaymentCards}
              width="187"
              alt="Payment methods"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
