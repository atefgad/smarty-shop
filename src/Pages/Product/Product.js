import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
// import Bootstrap Styles
import { Col, Container, Image, Row } from "react-bootstrap";

// import Icons
import {
  IoLogoFacebook,
  IoLogoGoogle,
  IoLogoTwitter,
  IoStar,
} from "react-icons/io5";
import { FiBarChart2 } from "react-icons/fi";

// import Page 404
import { Page404 } from "../../Pages";

// import Styles
import "./Product.scss";

import {
  AddToCartBtn,
  Animated,
  HeartIcon,
  ProductsSlides,
  SectionHead,
} from "../../Components";

import { addToCart } from "../../store/cartSlice";

function Product() {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const { products } = useSelector((state) => state.products);

  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("s");

  const [Clicked, setClicked] = useState(false);

  const [active, setActive] = useState(false);

  const getProduct = products.find((product) => {
    return product.id === parseInt(productId);
  });

  const getProductsByCategory = products.filter((product) => {
    return (
      product.category === getProduct.category && product.id !== getProduct.id
    );
  });

  // check if isnt exist product show Error Page404
  if (!getProduct) return <Page404 />;

  // handleAddToCart
  const handleAddToCart = (date) => {
    dispatch(addToCart(date));
    setClicked(true);
    setTimeout(() => {
      setClicked(false);
    }, 3000);
  };

  return (
    <Animated>
      <section className="product__page mb-5">
        <Container>
          <Row className="border-bottom shadow rounded-2 mt-5 mb-5">
            {/* Product content */}
            <Col lg={5} className="py-4">
              <div className="product__Img_preview text-center pt-5">
                <Image src={getProduct.image} fluid alt={getProduct.title} />
              </div>
              <div className="d-flex align-items-center justify-content-center justify-content-md-end py-4 pt-md-0 pt-lg-5">
                <h6 className="text-nowrap my-2 me-3">Share product:</h6>

                <a className="btn-social ms-2 my-2" href="#!">
                  <IoLogoFacebook />
                </a>
                <a className="btn-social ms-2 my-2" href="#!">
                  <IoLogoGoogle />
                </a>
                <a className="btn-social ms-2 my-2" href="#!">
                  <IoLogoTwitter />
                </a>
              </div>
            </Col>
            <Col lg={1}></Col>
            {/* Product Info */}
            <Col
              lg={6}
              className="Product__info bg-secondary pt-5 ps-lg-5 pb-md-2"
            >
              <Link
                to={`/category/${getProduct.category.replace(" ", "_")}`}
                className="d-inline-block text-capitalize fw-bold text-muted mb-2"
              >
                {getProduct.category}
              </Link>
              <h2 className="Product__Title  mb-2">{getProduct.title}</h2>
              <div className="d-flex align-items-center justify-content-between mb-3">
                {/* Price */}
                <div className="py-4">
                  <del className="text-muted me-2">$140.00</del>
                  <span className="h4 mb-0">${getProduct.price}</span>
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
                      id={`s-${getProduct.id}`}
                      value="s"
                      checked={size === "s"}
                      onChange={(e) => setSize(e.target.value)}
                    />
                    <label
                      className="form-option-label"
                      htmlFor={`s-${getProduct.id}`}
                    >
                      S
                    </label>
                  </div>
                  <div className="form-check form-option form-option-size form-check-inline mb-2">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="size"
                      id={`m-${getProduct.id}`}
                      value="m"
                      checked={size === "m"}
                      onChange={(e) => setSize(e.target.value)}
                    />
                    <label
                      className="form-option-label"
                      htmlFor={`m-${getProduct.id}`}
                    >
                      M
                    </label>
                  </div>
                  <div className="form-check form-option form-option-size form-check-inline mb-2">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="size"
                      id={`l-${getProduct.id}`}
                      disabled
                      value="l"
                      checked={size === "l"}
                      onChange={(e) => setSize(e.target.value)}
                    />
                    <label
                      className="form-option-label"
                      htmlFor={`l-${getProduct.id}`}
                    >
                      l
                    </label>
                  </div>
                </div>
              </div>

              {/* Buttons Box*/}
              <div className="p-sm-fixed d-flex align-items-center justify-content-center mt-4 mb-3">
                {/* select Qty Box*/}
                <select
                  className="form-select me-3"
                  style={{ width: "5rem", height: "60px" }}
                  onChange={(e) => setQty(e.target.value)}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
                {/* ADD TO CART[btn] */}
                <AddToCartBtn
                  onClick={() =>
                    handleAddToCart({
                      ...getProduct,
                      quantity: qty,
                      size,
                    })
                  }
                  qty={qty}
                  clicked={Clicked}
                  className="btn-primary fw-bold text-light btn-lg d-block w-100"
                />
                {/* ADD TO Wishlist[btn] 
                <button
                  className="btn btn-outline-primary rounded-2 d-flex align-items-center justify-content-center ms-3"
                  style={{ width: "5rem" }}
                  type="button"
                >
                  <IoHeartOutline className="fw-bold fs-2" />
                </button>
                */}

                <HeartIcon
                  active={active ? "active" : ""}
                  onClick={() => setActive(!active)}
                />
              </div>
              <div className="my-4">
                <p className="text-muted">{getProduct.description}</p>
              </div>
            </Col>
          </Row>

          <div className="bg-light border-top mb-5 mt-5 mt-md-3 pt-5">
            <SectionHead title="You may also like" />
            <ProductsSlides products={getProductsByCategory} />
          </div>
        </Container>
      </section>
    </Animated>
  );
}

export default Product;
