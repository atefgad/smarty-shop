import { configureStore } from "@reduxjs/toolkit";
import products from "./productSlice";
import cart, { cartTotalPrice } from "./cartSlice";
import wish from "./wishlistSlice";
import auth from "./authSlice";

const store = configureStore({
  reducer: {
    products,
    cart,
    wish,
    auth,
  },
});

store.dispatch(cartTotalPrice());
export default store;
