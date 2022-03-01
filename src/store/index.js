import { configureStore } from "@reduxjs/toolkit";
import products from "./productSlice";
import cart from "./cartSlice";
import auth from "./authSlice";

const store = configureStore({
  reducer: {
    products,
    cart,
    auth,
  },
});

export default store;
