import { createSlice } from "@reduxjs/toolkit";
import { getLocalStorage, setLocalStorage } from "./functions";

import { toast } from "react-toastify";

const initialState = {
  cartItems: getLocalStorage("cartItems")
    ? JSON.parse(getLocalStorage("cartItems"))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
  checkoutProgress: 0,
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

      const check = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      if (check) {
        state.cartItems[itemIndex].quantity =
          parseInt(action.payload.quantity) >= 1
            ? parseInt(action.payload.quantity)
            : state.cartItems[itemIndex].quantity + 1;

        toast.success(
          `${action.payload.title.substr(0, 25)}... has been added to cart`
        );
      } else {
        const productData = {
          ...action.payload,
          quantity:
            parseInt(action.payload.quantity) > 0
              ? parseInt(action.payload.quantity)
              : 1,
        };
        state.cartItems.push(productData);

        toast.success(
          `${action.payload.title.substr(0, 25)}... has been added to cart`
        );
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

      toast.success(
        `${action.payload.title.substr(0, 25)}... has been removed from cart`
      );
    },
    // clearCart
    clearCart: (state) => {
      state.cartItems = [];
      localStorage.removeItem("cartItems");
    },
    // increaseCart
    increaseCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.cartItems[itemIndex].quantity >= 0) {
        state.cartItems[itemIndex].quantity += 1;
      }
    },
    // decreaseCart
    decreaseCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.cartItems[itemIndex].quantity > 1) {
        state.cartItems[itemIndex].quantity -= 1;
      } else if (state.cartItems[itemIndex].quantity === 1) {
        const cartItemsFiltered = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );

        state.cartItems = cartItemsFiltered;
        setLocalStorage("cartItems", state.cartItems);

        toast.success(
          `${action.payload.title.substr(0, 25)}... has been removed from cart`
        );
      }
    },
    // cartTotalPrice
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
export const {
  addToCart,
  increaseCart,
  decreaseCart,
  removeCartItem,
  clearCart,
  cartTotalPrice,
} = cartSlice.actions;
