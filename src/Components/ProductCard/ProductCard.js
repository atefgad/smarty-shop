import React, { useState } from "react";
import { useDispatch } from "react-redux";

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
import FormCheckInput from "../Forms/FormCheckInput";
import { toast } from "react-toastify";

function ProductCard({ product }) {
  // const { wishList } = useSelector((state) => state.wish);
  const [toggleFav, setToggleFav] = useState(false);
  const [color, setColor] = useState(product.color[0]);
  const [size, setSize] = useState("");
  const [err, setErr] = useState("");

  // const wlist = wishList.map((item) => item.id === 2);

  const dispatch = useDispatch();

  // Add to cart
  const handleAddToCart = (data) => {
    if (size === "") {
      setErr("choose a size");
      toast.error("choose a size");
    } else {
      dispatch(addToCart(data));
      setErr("");
    }
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
        <div className="card__Pro__image">
          <Link className="card-img" to={`/product/${product.id}`}>
            <img src={product.image} alt={product.title} />
          </Link>
          {/* color */}
          {product.color.length > 0 && (
            <div
              className={`product__options ${
                product.color.length === 1 ? "" : "bg-gray-300"
              }`}
            >
              {product.color.map((item, index) => (
                <FormCheckInput
                  key={index}
                  item={item}
                  circle
                  sm
                  checkedVal={color}
                  change={setColor}
                />
              ))}
            </div>
          )}
        </div>

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

          {/* size */}
          {product.size && (
            <div
              className={`product__size mt-3 ${
                err !== "" ? "border-2 border-danger" : ""
              }`}
            >
              <span>size: </span>
              {product.size.map((item, index) => (
                <FormCheckInput
                  key={index}
                  item={item}
                  sm
                  checkedVal={size}
                  change={setSize}
                />
              ))}
            </div>
          )}

          {/* Price */}
          <div className="py-2">
            {product.newPrice !== null ? (
              <React.Fragment>
                <del className="text-muted me-2">${product.price}</del>
                <span className="h5 mb-0">${product.newPrice}</span>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <span className="h5 mb-0">${product.price}</span>
              </React.Fragment>
            )}
          </div>
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
                onClick={() =>
                  handleAddToCart({
                    ...product,
                    size,
                    color,
                    price:
                      product.newPrice !== null
                        ? product.newPrice
                        : product.price,
                  })
                }
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
