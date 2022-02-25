import React, { useEffect } from "react";
// import route components
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../store/productSlice";

// import Skeleton styles
import "react-loading-skeleton/dist/skeleton.css";

import Header from "../Layout/Header/Header";

import Shop from "../../Pages/Shop";
import Home from "../../Pages/Home";
import About from "../../Pages/About";
import Product from "../../Pages/Product";
import Category from "../../Pages/Category";
import Page404 from "../../Pages/Page404";

function App() {
  const { isLoading } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="app__container">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Home isLoading={isLoading} />} />
          <Route path="shop" element={<Shop />} />
          <Route path="category/:catName" element={<Category />} />
          <Route path="products/:productId" element={<Product />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
