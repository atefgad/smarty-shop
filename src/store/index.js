import { configureStore } from "@reduxjs/toolkit";
import products from "./productSlice";
import cart, { cartTotalPrice } from "./cartSlice";
import wish from "./wishlistSlice";
import auth, { getUsers } from "./authSlice";
import modal from "./modalSlice";

const store = configureStore({
  reducer: {
    products,
    cart,
    wish,
    auth,
    modal,
  },
});

store.dispatch(cartTotalPrice());
store.dispatch(getUsers());
export default store;
