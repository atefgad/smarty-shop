import { createSlice } from "@reduxjs/toolkit";
import { getLocalStorage, setLocalStorage } from "./functions";

import { toast } from "react-toastify";

const wishList = JSON.parse(localStorage.getItem("wishList"));

const initialState = {
  wishList: wishList ? wishList : [],
};

const wishlistSlice = createSlice({
  name: "wishList",
  initialState,
  reducers: {
    addWishItem: (state, action) => {
      // Check if the product is already exist in the cart
      const itemIndex = state.wishList.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        // state.wishList[itemIndex].quantity += 1;

        const wishListFiltered = state.wishList.slice(
          state.wishList[itemIndex],
          1
        );

        // const wishListFiltered = state.wishList.filter(
        //   (item) => item.id !== action.payload.id
        // );

        state.wishList = wishListFiltered;
        // setLocalStorage("wishList", state.wishList);
      } else {
        const productData = {
          ...action.payload,
          isFav: true,
        };
        state.wishList.push(productData);

        // localStorage.setItem("cart", JSON.stringify(state.wishList));
        // setLocalStorage("wishList", state.wishList);
      }
    },
    // removeWishItem
    removeWishItem: (state, action) => {
      const wishListFiltered = state.wishList.filter(
        (item) => item.id !== action.payload.id
      );

      state.wishList = wishListFiltered;
      // localStorage.removeItem("user");
    },
  },
});

export default wishlistSlice.reducer;
export const { addWishItem, removeWishItem } = wishlistSlice.actions;
