import React from "react";
import { Link } from "react-router-dom";

import {
  IoGlassesOutline,
  IoHeadsetOutline,
  IoShirtOutline,
} from "react-icons/io5";

import "./CategoryList.scss";

function CategoryList() {
  return (
    <section className="main-categories container d-flex justify-content-center flex-wrap flex-column flex-sm-row pb-5 mb-md-3">
      <Link
        className="icon-box card flex-row align-items-center card-hover border-0 shadow-sm rounded-pill py-2 ps-2 pe-4 mb-2 mb-sm-3 me-sm-3 me-xxl-4"
        to="/category/men's_clothing"
      >
        <div className="icon-box-media bg--accent text-accent rounded-circle me-2">
          <IoShirtOutline />
        </div>
        <div className="text-center">
          <h3 className="icon-box-title fs-sm ps-1 pe-2 mb-0">
            men's clothing
          </h3>
          <span>From $5.99</span>
        </div>
      </Link>

      <Link
        className="icon-box card flex-row align-items-center card-hover border-0 shadow-sm rounded-pill py-2 ps-2 pe-4 mb-2 mb-sm-3 me-sm-3 me-xxl-4"
        to="/category/jewelery"
      >
        <div className="icon-box-media bg--orange text-orange rounded-circle me-2">
          <IoGlassesOutline />
        </div>
        <div className="text-center">
          <h3 className="icon-box-title fs-sm ps-1 pe-2 mb-0">Accessories</h3>
          <span>From $5.99</span>
        </div>
      </Link>
      <Link
        className="icon-box card flex-row align-items-center card-hover border-0 shadow-sm rounded-pill py-2 ps-2 pe-4 mb-2 mb-sm-3 me-sm-3 me-xxl-4"
        to="/category/electronics"
      >
        <div className="icon-box-media bg--success text-success rounded-circle me-2">
          <IoHeadsetOutline />
        </div>
        <div className="text-center">
          <h3 className="icon-box-title fs-sm ps-1 pe-2 mb-0">electronics</h3>
          <span>From $5.99</span>
        </div>
      </Link>
    </section>
  );
}

export default CategoryList;
