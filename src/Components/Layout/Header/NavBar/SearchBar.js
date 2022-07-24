import React, { useEffect, useRef } from "react";
import { IoCloseOutline, IoSearchOutline } from "react-icons/io5";

function SearchBar({ show, hide }) {
  const searchREF = useRef(null);

  useEffect(() => {
    searchREF.current.focus();
  }, [searchREF]);

  return (
    <div className={`search__bar bg-light ${show ? "show" : null}`}>
      <div className="container d-flex flex-nowrap align-items-center">
        <IoSearchOutline className="fw-bold fs-1 me-1" />
        <input
          className="form-control form-control-xl navbar-search-field"
          type="text"
          placeholder="What are you looking for?"
          ref={searchREF}
        />
        <div
          className="d-none d-sm-block flex-shrink-0 ps-2 me-4 border-start border-end"
          style={{ width: "10rem" }}
        >
          <select className="form-select ps-2 pe-0">
            <option value="all">All categories</option>
            <option value="clothing">Clothing</option>
            <option value="electronics">Electronics</option>
            <option value="accessoriies">Accessories</option>
          </select>
        </div>
        <div
          className="d-flex align-items-center BTN-close"
          onClick={() => hide(false)}
        >
          <span className="text-muted fs-xs d-none d-sm-inline">Close</span>
          <IoCloseOutline className="fw-bold fs-4 ms-1" />
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
