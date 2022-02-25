import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
// import Bootstrap Styles
import { Col, Container, Image, Row } from "react-bootstrap";

// import Icons
import {
  IoCartOutline,
  IoHeartOutline,
  IoLogoFacebook,
  IoLogoGoogle,
  IoLogoTwitter,
  IoStar,
} from "react-icons/io5";
import { FiBarChart2 } from "react-icons/fi";

// import Page 404
import Page404 from "./Page404";

// import Styles
import "./Product.scss";

// import Skeleton Components
import Skeleton from "react-loading-skeleton";

const Loading = (
  <div>
    <div className="col-md-12">
      <Skeleton height={40} />
    </div>
    <div className="col-md-12">
      <Skeleton height={70} count={2} />
    </div>
  </div>
);

function Product() {
  const { productId } = useParams();
  const { products, isLoading } = useSelector((state) => state.products);

  const [qnt, setQnt] = useState(1);

  console.log("qnt ", qnt);

  const getProduct = products.find((product) => {
    return product.id === parseInt(productId);
  });

  // check if isnt exist product show Error Page404
  if (!getProduct) return <Page404 />;

  return (
    <section className="product__page  position-relative  border-bottom mb-5">
      <Container>
        <Row>
          {/* Product content */}
          <Col lg={5} className="py-4">
            {/* 
            <Breadcrumb>
              <Breadcrumb.Item>
                <Link to="/">Home</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <Link to="/shop">Shop</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item active>Data</Breadcrumb.Item>
            </Breadcrumb>
            <h1 className="Product__Title mb-3 pb-4">{getProduct.title}</h1>
          */}
            <div className="product__Img_preview text-center pt-5">
                <Image src={getProduct.image} fluid alt={getProduct.title} />
            </div>
            <div className="d-flex align-items-center justify-content-center justify-content-md-end py-4 pt-md-0 pt-lg-5">
              <h6 className="text-nowrap my-2 me-3">Share product:</h6>

              <a class="btn-social ms-2 my-2" href="#!">
                <IoLogoFacebook />
              </a>
              <a class="btn-social ms-2 my-2" href="#!">
                <IoLogoGoogle />
              </a>
              <a class="btn-social ms-2 my-2" href="#!">
                <IoLogoTwitter />
              </a>
            </div>
          </Col>
          <Col lg={1}></Col>
          {/* Product Info */}
          <Col lg={6} className="Product__info bg-light pt-5 ps-lg-5 pb-md-2">
            <Link
              to={`/category/${getProduct.category.replace(" ", "_")}`}
              className="d-inline-block text-capitalize fw-bold text-muted mb-2"
            >
              {getProduct.category}
            </Link>
            <h2 className="Product__Title  mb-2">{getProduct.title}</h2>
            <div className="d-flex align-items-center justify-content-between mb-3">
              {/* Price */}
              <div class="py-4">
                <del class="text-muted me-2">$140.00</del>
                <span class="h4 mb-0">${getProduct.price}</span>
              </div>
              {/* star-rating */}
              <div className="star-rating mb-3">
                <a className="d-inline-block" href="#reviews">
                  <IoStar className="active" />
                  <strong>{getProduct.rating.rate}</strong>
                  <small className="text-muted  ms-1 ">
                    ({getProduct.rating.count}) reviews
                  </small>
                </a>
              </div>
            </div>
            {/* Product Options */}
            <div className="product__options">
              {/* Choose size */}
              <div className="d-flex align-items-center justify-content-between mb-3">
                <span className="text-muted">Choose size</span>
                <a className="fs-sm" href="#!">
                  <FiBarChart2 />
                  Size chart
                </a>
              </div>
              <div className="d-block">
                <div className="form-check form-option form-option-size form-check-inline mb-2">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="size"
                    id="s12_5"
                    checked
                  />
                  <label className="form-option-label" htmlFor="s12_5">
                    S
                  </label>
                </div>
                <div className="form-check form-option form-option-size form-check-inline mb-2">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="size"
                    id="s15_5"
                  />
                  <label className="form-option-label" htmlFor="s15_5">
                    M
                  </label>
                </div>
                <div className="form-check form-option form-option-size form-check-inline mb-2">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="size"
                    id="s155"
                    disabled
                  />
                  <label className="form-option-label" htmlFor="s155">
                    l
                  </label>
                </div>
              </div>
            </div>

            {/* Buttons Box*/}
            <div className="d-flex mt-4 mb-3">
              <input
                className="form-control me-3"
                type="number"
                min="1"
                onChange={(e) => setQnt(e.target.value)}
                value={qnt}
                style={{ width: "5rem" }}
              />
              <button className="btn btn-primary  fw-bold text-light btn-lg d-block w-100">
                <IoCartOutline className="me-1" />
                Add to Cart
              </button>
              <button
                className="btn btn-outline-secondary d-block fs-4 fw-bold ms-3"
                type="button"
              >
                <IoHeartOutline />
              </button>
            </div>
            <div className="my-4">
              <p>{getProduct.description}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Product;
