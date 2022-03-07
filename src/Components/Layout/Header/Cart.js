// Cart
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Offcanvas } from "react-bootstrap";
import { IoCardOutline, IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import CartListItem from "../../CartListItem/CartListItem";
import NoCartItems from "./NoCartItems";

function Cart({ cartTotalAmount, cartItems, showCart, setShowCart }) {
  return (
    <React.Fragment>
      {/* primary Menu_SideBar offcanvas offcanvas-collapse */}
      <Offcanvas
        className="order-lg-2"
        show={showCart}
        onHide={() => setShowCart(false)}
        placement="end"
      >
        {/* offcanvas-header */}
        <Offcanvas.Header closeButton className="navbar-shadow">
          <Offcanvas.Title className="mt-1 mb-0 position-relative d-flex align-items-center justify-content-between">
            {cartItems.length > 0 ? (
              <span className="navbar-tool-badge position-absolute top-0 start-0 translate-middle badge rounded-pill bg-primary">
                {cartItems.length}
              </span>
            ) : null}
            <IoCartOutline className="me-1" />
            shopping cart
          </Offcanvas.Title>
        </Offcanvas.Header>
        {/* offcanvas-header:END */}

        {/* offcanvas-body */}
        <Offcanvas.Body>
          <div className="cartItems">
            <AnimatePresence>
              {cartItems.length > 0 ? (
                cartItems.map((item, i) => (
                  <motion.div
                    key={item.id}
                    initial={{
                      opacity: 0,
                      translateX: 50,
                      translateY: 50,
                    }}
                    animate={{ opacity: 1, translateX: 0, translateY: 0 }}
                    exit={{ translateX: -300, opacity: 0, duration: 0.2 }}
                    transition={{ duration: 0.3, delay: i * 0.3 }}
                  >
                    <CartListItem setCloseCart={setShowCart} cartItem={item} />
                  </motion.div>
                ))
              ) : (
                <NoCartItems setCloseCart={setShowCart} />
              )}
            </AnimatePresence>
          </div>
        </Offcanvas.Body>
        {/* offcanvas-body:END */}

        {/* offcanvas-footer */}
        {cartItems.length > 0 ? (
          <div className="offcanvas-footer d-block border-top pt-4 px-4 mb-2">
            <div className="d-flex justify-content-between mb-4">
              <strong>subtotal:</strong>
              <span className="h6 mb-0">${cartTotalAmount.toFixed(2)}</span>
            </div>
            <Link
              className="btn btn-primary d-block w-100"
              to="/checkout"
              onClick={() => setShowCart(false)}
            >
              <IoCardOutline /> Checkout
            </Link>
          </div>
        ) : null}
        {/* offcanvas-footer:END */}
      </Offcanvas>
      {/* primary Menu_SideBar:END */}
    </React.Fragment>
  );
}

export default Cart;
