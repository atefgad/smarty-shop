import React from "react";
import { Link, useLocation } from "react-router-dom";
// Import bootstrap components
import { Container, Row, Col } from "react-bootstrap";

// Import Images
import girl from "../../Assets/images/girl.png";

import "./HeroSection.scss";
import { MainButton } from "../../Components";

function HeroSection() {
  const location = useLocation();
  console.log("location =>", location);
  return (
    <div className="hero__section position-relative gradient-3 pt-5 pt-lg-6 pb-lg-7 mb-7">
      <Container>
        {/* heroSection Main-Slider */}
        <Row className="d-flex align-items-center justify-content-center">
          <Col lg={4} className="offset-1 mb-sm-5">
            <h4 className="text-light text-capitalize">
              <Link to="/category/women's_clothing">women's fashion</Link>
            </h4>
            <h2 className="Hero__Title fw-bolder text-black text-capitalize mb-5">
              new <br /> arrivals
            </h2>
            {/* 
            <a href="#!" className="btn btn-light btn-lg ">
              shop now
            </a>
            */}
            <MainButton title="Shop Now" to="/category/women's_clothing" />
          </Col>
          {/* Hero Image */}
          <Col lg={6} className="order-sm-1">
            <div className="imgContainer">
              <img src={girl} alt="hero" />
              <svg
                className="imgBgShape"
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#FFF"
                  d="M47.7,-59.5C62.1,-55.1,74.4,-41.6,81,-25.3C87.7,-9,88.8,10.1,82.9,26.6C77.1,43.1,64.3,57.1,49.4,66.1C34.4,75.2,17.2,79.3,2.2,76.2C-12.7,73.1,-25.4,62.8,-38.6,53.2C-51.7,43.6,-65.2,34.6,-74.3,20.8C-83.4,7,-88,-11.5,-79.5,-22.1C-70.9,-32.6,-49.1,-35.2,-33.7,-39.2C-18.3,-43.2,-9.1,-48.8,3.7,-53.9C16.6,-59.1,33.2,-63.8,47.7,-59.5Z"
                  transform="translate(100 100)"
                />
              </svg>
            </div>
          </Col>
        </Row>
        {/* heroSection Main-Slider */}

        {/* heroSection bottom shape */}
        <div className="shape shape-bottom shape-curve bg-body">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#fff"
              fill-opacity="1"
              d="M0,192L288,288L576,192L864,256L1152,160L1440,128L1440,320L1152,320L864,320L576,320L288,320L0,320Z"
            ></path>
          </svg>
        </div>
        {/* heroSection bottom shape:END */}
      </Container>
    </div>
  );
}

export default HeroSection;
