import React, { useEffect, useState } from "react";
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
import {
  Home,
  Product,
  Category,
  Checkout,
  About,
  Page404,
  //checkout sub pages
  UserLogIn,
  Shipping,
  Payment,
  OrderPlaced,
} from "../Pages";

import { ToastContainer } from "react-toastify";

import { motion } from "framer-motion";

function App() {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.products);
  const { isLoggedIn } = useSelector((state) => state.auth);

  const location = useLocation();

  const [signToggle, setSignToggle] = useState(true);

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
        <AnimatePresence exitBeforeEnter initial={false}>
          <ScrollToTop>
            <motion.div
              variants={animations}
              initial="initial"
              animate="animate"
              exit="exit"
              className="app__container"
            >
              <Header />

              <Routes key={location.pathname} location={location}>
                <Route path="/" element={<Home isLoading={isLoading} />} />
                <Route path="about" element={<About />} />
                <Route path="checkout" element={<Checkout />}>
                  {/* <Route index element={<Navigate to="/checkout/login" />} /> */}
                  {!isLoggedIn ? (
                    <Route
                      index
                      element={
                        <UserLogIn
                          signToggle={signToggle}
                          setSignToggle={setSignToggle}
                        />
                      }
                    />
                  ) : (
                    <Route element={<Shipping />} />
                  )}
                  <Route path="shipping" index element={<Shipping />} />
                  <Route path="payment" element={<Payment />} />
                  <Route path="order-placed" element={<OrderPlaced />} />
                </Route>
                <Route path="category/:catName" element={<Category />} />
                <Route path="product/:productId" element={<Product />} />
                <Route path="*" element={<Page404 />} />
              </Routes>

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
        </AnimatePresence>
      )}
    </React.Fragment>
  );
}

export default App;
