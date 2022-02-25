import React from "react";
import { useSelector } from "react-redux";

// Import bootstrap components
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
// Import Icons
import { IoChevronForwardOutline } from "react-icons/io5";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Parallax, Pagination, Navigation } from "swiper";

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
      <Container>
        {/* heroSection Main-Slider */}
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          speed={600}
          parallax={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Parallax, Pagination, Navigation]}
          className="mySwiper"
        >
          <div
            slot="container-start"
            className="parallax-bg"
            style={
              {
                // "background-image":
                //   "url(https://swiperjs.com/demos/images/nature-1.jpg)",
              }
            }
            data-swiper-parallax="-23%"
          ></div>
          {featuredProducts.map((product) => (
            <SwiperSlide key={product.id}>
              <Row className="d-flex align-items-center justify-content-center">
                <Col lg={6} className="order-md-2">
                  <h5
                    className="h5 text-muted fw-bold pb-1"
                    data-swiper-parallax="-200"
                  >
                    <a href="#!">{product.category}</a>
                  </h5>
                  <h2
                    className="text-light fw-bold display-5 delay-1"
                    data-swiper-parallax="-300"
                  >
                    {` ${product.title.substr(0, 20)} ...`}
                  </h2>
                  <div className="delay-2" data-swiper-parallax="-100">
                    <p className="text-muted pb-3 fs-5">
                      {` ${product.description.substr(0, 100)} ...`}
                    </p>
                  </div>
                  <div className="d-block delay-3 mx-auto mx-lg-0">
                    <a href="#!" className="btn btn-primary btn-lg w-50">
                      Shop Now
                    </a>
                  </div>
                </Col>
                <Col lg={4} className="order-md-1 order-sm-0">
                  <div className="img_box">
                    <img src={product.image} alt={product.title} />
                  </div>
                </Col>
              </Row>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* heroSection Main-Slider */}

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
      </Container>
    </div>
  );
}

export default HeroSection;
