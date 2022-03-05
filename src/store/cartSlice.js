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
        state.cartItems[itemIndex].quantity = parseInt(action.payload.quantity)
          ? parseInt(action.payload.quantity)
          : 1;

        toast.info(
          `${action.payload.title.substr(0, 20)}... increased quantity`
        );
      } else {
        const productData = {
          ...action.payload,
          quantity: parseInt(action.payload.quantity)
            ? parseInt(action.payload.quantity)
            : 1,
        };
        state.cartItems.push(productData);

        toast.success(`${action.payload.title.substr(0, 25)}... added to cart`);
      }
      // localStorage.setItem("cart", JSON.stringify(state.cartItems));
      setLocalStorage("cartItems", state.cartItems);
    },
    // removeCartItem
    removeCartItem: (state, action) => {
      const cartItemsFiltered = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );

      state.cartItems = cartItemsFiltered;
      setLocalStorage("cartItems", state.cartItems);

      toast.error(`${action.payload.title.substr(0, 25)}... removed from cart`);
    },
    // decreaseCart
    decreaseCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );

      let cartItemQty = state.cartItems[itemIndex].quantity;

      if (cartItemQty > 1) {
        cartItemQty -= 1;

        toast.info(
          `${action.payload.title.substr(0, 20)}... decrease quantity`
        );
      } else if (cartItemQty === 1) {
        const cartItemsFiltered = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );

        state.cartItems = cartItemsFiltered;
        setLocalStorage("cartItems", state.cartItems);

        toast.error(
          `${action.payload.title.substr(0, 25)}... removed from cart`
        );
      }
    },
    cartTotalPrice: (state, action) => {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, quantity } = cartItem;
          const itemTotal = price * quantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += quantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );

      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, decreaseCart, removeCartItem, cartTotalPrice } =
  cartSlice.actions;
