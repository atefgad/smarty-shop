import React from "react";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import { IoChevronForwardOutline } from "react-icons/io5";

import { useSelector } from "react-redux";

import "./HeroSection.scss";

function HeroSection() {
  const { products } = useSelector((state) => state.products);

  console.log(" products => ", products);

  const filteredProducts = products.filter(
    (product) => product.rating.rate < 3
  );
  const featuredProducts = filteredProducts.slice(0, 3);
  console.log("filteredProducts => ", featuredProducts);

  const ShowTabItem = (
    <React.Fragment>
      {featuredProducts.map((product) => (
        <Nav.Item className="me-3 mb-3" key={product.id}>
          <Nav.Link eventKey={product.id}>
            <div className="d-flex align-items-center">
              <img
                className="tab-img flex-shrink-0 rounded-1"
                src={product.image}
                alt={product.title}
              />
              <div className="w-100 ps-2 ms-1">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="fs-sm pe-1">
                    {` ${product.title.substr(0, 20)} ...`}
                  </div>
                  <IoChevronForwardOutline className="tab-icon ms-2 me-1" />
                </div>
              </div>
            </div>
          </Nav.Link>
        </Nav.Item>
      ))}
    </React.Fragment>
  );

  const ShowTabContent = (
    <React.Fragment>
      {featuredProducts.map((product) => (
        <Tab.Pane eventKey={product.id} key={product.id}>
          <Row className="align-items-center">
            <Col lg={6} className="order-lg-2 pb-1 mb-4 pb-lg-0 mb-lg-0">
              <div className="mx-auto" style={{ maxWidth: "443px" }}>
                <img src={product.image} alt={product.title} />
              </div>
            </Col>
            <Col lg={6} className="order-lg-1 text-center text-lg-start">
              <div className="t">
                <h2 className="h1 mb-3 text-light fw-bolder">
                  {product.title}
                </h2>
                <p className="fs-lg text-light mb-lg-5">
                  {` ${product.description.substr(0, 50)} ...`}
                </p>
                <a className="btn btn-lg btn-translucent-light" href="#!">
                  {`Get now - $ ${product.price}`}
                </a>
              </div>
            </Col>
          </Row>
        </Tab.Pane>
      ))}
    </React.Fragment>
  );

  return (
    <div className="hero__section position-relative gradient-3 pt-5 pt-lg-6 pb-7 mb-7">
      <Container className="pb-7">
        <Tab.Container defaultActiveKey="first">
          <Row className="align-items-center pb-7">
            <Col lg={3}>
              {/* nav-tabs */}
              <Nav className="nav-tabs nav__tabs flex-column">
                {ShowTabItem}
              </Nav>
              {/* nav-tabs:END */}
            </Col>

            <Col lg={9}>
              {/* nav-content */}
              <Tab.Content className="tab__content d-flex align-items-center">
                {ShowTabContent}
              </Tab.Content>
              {/* nav-content:END */}
            </Col>
          </Row>
        </Tab.Container>
      </Container>

      {/* heroSection bottom shape */}
      <div className="shape shape-bottom shape-curve bg-body">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3000 185.4">
          <path
            fill="currentColor"
            d="M3000,0v185.4H0V0c496.4,115.6,996.4,173.4,1500,173.4S2503.6,115.6,3000,0z"
          ></path>
        </svg>
      </div>
      {/* heroSection bottom shape:END */}
    </div>
  );
}

export default HeroSection;
