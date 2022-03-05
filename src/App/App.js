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

import { Header, Footer, Loading, ScrollToTop } from "../Components";

// import Pages Components
import { Home, Product, Category, Checkout, About, Page404 } from "../Pages";

import { ToastContainer } from "react-toastify";

import { motion } from "framer-motion";

function App() {
  const { isLoading } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const location = useLocation();

  // const isLoading = true;
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

  const animations = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { duration: 0.5, ...transition },
    },
    exit: { opacity: 0 },
  };

  return (
    <React.Fragment>
      {isLoading ? (
        <Loading />
      ) : (
        <ScrollToTop>
          <motion.div
            variants={animations}
            initial="initial"
            animate="animate"
            exit="exit"
            className="app__container"
          >
            <Header />
            <AnimatePresence exitBeforeEnter>
              <Routes key={location.pathname} location={location}>
                <Route
                  index
                  path="/"
                  element={<Home isLoading={isLoading} />}
                />
                <Route path="about" element={<About />} />
                <Route path="checkout" element={<Checkout />} />
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
          </motion.div>
        </ScrollToTop>
      )}
    </React.Fragment>
  );
}

export default App;
