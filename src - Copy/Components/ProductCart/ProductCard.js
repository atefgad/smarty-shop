import React from "react";
import { useSelector } from "react-redux";

// import Bootstrap Components
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom";

// import Icons
import { IoHeartOutline, IoStar } from "react-icons/io5";
import { BsCartPlus } from "react-icons/bs";

// import Styles
import "./ProductCard.scss";

// import Skeleton Components
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";


const Loading = (
  <div>
    <div className="col-md-12">
      <Skeleton height={40} />
    </div>
    <div className="col-md-12">
      <Skeleton height={70} count={2} />
    </div>
  </div>
)


function ProductCard({ product }) {
    const { isLoading } = useSelector((state) => state.products);

  return (
    <React.Fragment>
    <div className="card card-product card-shadow ">
      <Link className="card-img" to={`/products/${product.id}`}>
        <img src={product.image} alt={product.title} />
      </Link>
      <div className="card-body">
        <Link
          className="meta-link fs-xs mb-1"
          to={`/category/${product.category.replace(" ", "_")}`}
        >
          {product.category}
        </Link>
        <h3 className="fs-md fw-medium mb-2">
          <a className="meta-link" href="#!">
            {` ${product.description.substr(0, 35)} ...`}
          </a>
        </h3>
        <span className="text-heading fw-semibold">${product.price}</span>
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
          {product.rating.rate} <small>({product.rating.count})</small>
        </div>
        <div className="d-flex align-items-center">
          <OverlayTrigger
            placement="top"
            overlay={
              <Tooltip id="tooltip-top">
                <span className="btn-tooltip">Add to Wishlist</span>
              </Tooltip>
            }
          >
            <a className="btn-wishlist" href="#">
              <IoHeartOutline />
            </a>
          </OverlayTrigger>

          <span className="btn-divider"></span>

          <OverlayTrigger
            placement="top"
            overlay={
              <Tooltip id="tooltip-top">
                <span className="btn-tooltip">Add to Cart</span>
              </Tooltip>
            }
          >
            <a className="btn-addtocart" href="#">
              <BsCartPlus />
            </a>
          </OverlayTrigger>
        </div>
      </div>
    </div>
    </React.Fragment>
  );
}

export default ProductCard;
