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
  FormCheckInput,
  HeartIcon,
  ProductsSlides,
  SectionHead,
  Select,
} from "../../Components";

import { addToCart } from "../../store/cartSlice";
import { toast } from "react-toastify";

function Product() {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const { products } = useSelector((state) => state.products);

  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");

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
    if (size !== "" || color !== "") {
      dispatch(addToCart(date));
      setClicked(true);
      setTimeout(() => {
        setClicked(false);
      }, 3000);
    } else {
      toast.warn("Please Choose color and size");
    }
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
                  {getProduct.newPrice !== null ? (
                    <React.Fragment>
                      <del className="text-muted me-2">${getProduct.price}</del>
                      <span className="h4 mb-0">${getProduct.newPrice}</span>
                    </React.Fragment>
                  ) : (
                    <React.Fragment>
                      <span className="h4 mb-0">${getProduct.price}</span>
                    </React.Fragment>
                  )}
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
                {/* color */}
                {getProduct.color.length > 0 && (
                  <React.Fragment>
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <span className="text-muted">Choose color</span>
                    </div>
                    {getProduct.color.map((item, index) => (
                      <FormCheckInput
                        key={index}
                        item={item}
                        circle
                        sm
                        checkedVal={color}
                        change={setColor}
                      />
                    ))}
                  </React.Fragment>
                )}

                {/* Choose size */}
                {getProduct.size.length > 0 && (
                  <React.Fragment>
                    <div className="d-flex align-items-center justify-content-between mb-2 mt-2">
                      <span className="text-muted">Choose size</span>
                      <a className="fs-sm" href="#!">
                        <FiBarChart2 />
                        Size chart
                      </a>
                    </div>
                    {/* Size */}
                    <div className="d-block">
                      {getProduct.size.map((item, index) => (
                        <FormCheckInput
                          key={index}
                          item={item}
                          checkedVal={size}
                          change={setSize}
                        />
                      ))}
                    </div>
                  </React.Fragment>
                )}
              </div>

              {/* Buttons Box*/}
              <div className="p-sm-fixed d-flex align-items-center justify-content-center mt-4 mb-3">
                {/* select Qty Box*/}
                <Select
                  qty={setQty}
                  options={getProduct.inStock}
                  style={{ width: "5rem", height: "60px" }}
                />
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
