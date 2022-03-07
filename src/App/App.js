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
import { Home, Product, Category, Checkout, About, Page404 } from "../Pages";

import { ToastContainer } from "react-toastify";

import { motion } from "framer-motion";
import OrderPlaced from "../Pages/Checkout/Pages/OrderPlaced/OrderPlaced";
import Payment from "../Pages/Checkout/Pages/Payment/Payment";
import Shipping from "../Pages/Checkout/Pages/Shipping/Shipping";
import UserLogIn from "../Pages/Checkout/Pages/UserLogIn/UserLogIn";

function App() {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.products);
  const { user } = useSelector((state) => state.auth);

  const location = useLocation();

  const [signToggle, setSignToggle] = useState(true);

  // const isLoading = true;
  useEffect(() => {
    dispatch(getProducts());
    console.log("inside", getProducts);
  }, [dispatch]);

  console.log("outside", getProducts);

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
                  {!user.length ? (
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
                    <>
                      <Route index element={<Shipping />} />
                      <Route path="shipping" element={<Shipping />} />
                    </>
                  )}

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
