import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// import Bootstrap Components
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom";

// import Icons
import { IoHeart, IoHeartOutline, IoStar } from "react-icons/io5";
import { BsCartPlus } from "react-icons/bs";

// import Styles
import "./ProductCard.scss";

import { addToCart } from "../../store/cartSlice";
import { addWishItem, removeWishItem } from "../../store/wishlistSlice";

function ProductCard({ product }) {
  // const { wishList } = useSelector((state) => state.wish);
  const [toggleFav, setToggleFav] = useState(false);

  // const wlist = wishList.map((item) => item.id === 2);

  const dispatch = useDispatch();

  // Add to cart
  const handleAddToCart = (data) => {
    dispatch(addToCart(data));
  };

  // handle Add Wishlist
  const handleAddWishList = (data) => {
    dispatch(addWishItem(data));
    setToggleFav(!toggleFav);
  };
  // handle Remove Wishlist
  const handleRemoveWishList = (data) => {
    dispatch(removeWishItem(data));
    setToggleFav(!toggleFav);
  };

  return (
    <React.Fragment>
      <div className="card card-product card-shadow ">
        <Link className="card-img" to={`/product/${product.id}`}>
          <img src={product.image} alt={product.title} />
        </Link>
        <div className="card-body">
          <Link
            className="meta-link fs-xs mb-2"
            to={`/category/${product.category.replace(" ", "_")}`}
          >
            {product.category}
          </Link>
          <h3 className="fs-6 fw-normal mb-2 ellipsis">
            <Link
              className="meta-link text-muted"
              to={`/product/${product.id}`}
            >
              {product.title}
              {/*` ${product.title.substr(0, 30)} ...`*/}
            </Link>
          </h3>
          {/* <del className="fs-sm text-muted me-1">$130.00</del> */}
          <span className="text-heading fw-bold">${product.price}</span>
        </div>
        <div className="card-footer">
          <div className="star-rating mt-n1">
            {/*
          <IoStar className="active me-1" />
          <IoStar className="active me-1" />
          <IoStar className="active me-1" />
          <IoStar className="active me-1" />
          <IoStarOutline />
        */}
            <IoStar className="active me-1" />
            {product.rating.rate} <small> ({product.rating.count})</small>
          </div>
          <div className="d-flex align-items-center">
            {/* wishlist[BTN] */}

            {!toggleFav ? (
              <OverlayTrigger
                placement="top"
                overlay={
                  <Tooltip id="tooltip-top">
                    <span className="btn-tooltip">Add to Wishlist</span>
                  </Tooltip>
                }
              >
                <button
                  className=" btn btn-link p-0 btn-wishlist"
                  onClick={() => handleAddWishList(product)}
                >
                  <IoHeartOutline />
                </button>
              </OverlayTrigger>
            ) : (
              <OverlayTrigger
                placement="top"
                overlay={
                  <Tooltip id="tooltip-top">
                    <span className="btn-tooltip">remove Wishlist</span>
                  </Tooltip>
                }
              >
                <button
                  className=" btn btn-link p-0 btn-wishlist"
                  onClick={() => handleRemoveWishList(product)}
                >
                  <IoHeart className="text-danger" />
                </button>
              </OverlayTrigger>
            )}

            <span className="btn-divider"></span>

            <OverlayTrigger
              placement="top"
              overlay={
                <Tooltip id="tooltip-top">
                  <span className="btn-tooltip">Add to Cart</span>
                </Tooltip>
              }
            >
              <button
                className="btn-addtocart"
                onClick={() => handleAddToCart(product)}
              >
                <BsCartPlus />
              </button>
            </OverlayTrigger>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ProductCard;