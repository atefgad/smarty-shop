import { createSlice } from "@reduxjs/toolkit";
import { getLocalStorage, setLocalStorage } from "./functions";

import { toast } from "react-toastify";

const initialState = {
  cartItems: getLocalStorage("cartItems")
    ? JSON.parse(getLocalStorage("cartItems"))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // Check if the product is already exist in the cart
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].quantity += 1;

        toast.info("increased cart quantity!");
      } else {
        const productData = { ...action.payload, quantity: 1 };
        state.cartItems.push(productData);

        toast.success("success added to cart!");
      }

      // localStorage.setItem("cart", JSON.stringify(state.cartItems));
      setLocalStorage("cartItems", state.cartItems);
    },
    removeCartItem: (state, action) => {
      const cartItemsFiltered = state.cartItems.filter(item => item.id !== action.payload.id);
      state.cartItems = cartItemsFiltered;

      setLocalStorage("cartItems", state.cartItems);

      toast.error("removed item from the cart!");
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, removeCartItem } = cartSlice.actions;
