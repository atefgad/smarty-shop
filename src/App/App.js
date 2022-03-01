import React, { useEffect } from "react";
// import route components
import { Routes, Route, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../store/productSlice";

import { AnimatePresence } from "framer-motion";
// import Skeleton styles
// import "react-loading-skeleton/dist/skeleton.css";
// import react-toastify styles
import "react-toastify/dist/ReactToastify.min.css";
// import "react-toastify/dist/ReactToastify.css";

import { Header, Footer, Loading } from "../Components";

// import Pages Components
import { Home, Product, Category, Shop, About, Page404 } from "../Pages";

import { ToastContainer } from "react-toastify";

function App() {
  const { isLoading } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const location = useLocation();

  // const isLoading = true;
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  console.log(isLoading);

  return (
    <React.Fragment>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="app__container">
          <Header />
          <AnimatePresence exitBeforeEnter>
            <Routes key={location.pathname} location={location}>
              <Route index path="/" element={<Home isLoading={isLoading} />} />
              <Route path="shop" element={<Shop />} />
              <Route path="category/:catName" element={<Category />} />
              <Route path="product/:productId" element={<Product />} />
              <Route path="*" element={<Page404 />} />
            </Routes>
          </AnimatePresence>
          <Footer />
          {/* ReactToastify */}
          <ToastContainer
            position="top-left"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </div>
      )}
    </React.Fragment>
  );
}

export default App;
