import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload.data;
      // Check if the product is already exist in the cart
      const isExist = state.find((item) => item.id === product.id);
      if (isExist) {
        // increase the Quantity
        return state.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        return [
          ...state,
          {
            ...product,
            qty: 1,
          },
        ];
      }
    },
    removeCartItem: (state, action) => {
      const product = action.payload.data;
      // Check if the product is already exist in the cart
      const isExist = state.find((item) => item.id === product.id);

      console.log("action", action);
      console.log("state", state);
      console.log("isExist", isExist);

      if (isExist.qty === 1) {
        return state.filter((item) => item.id !== isExist.id);
      } else {
        return state.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty - 1 } : item
        );
      }
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, removeCartItem } = cartSlice.actions;
