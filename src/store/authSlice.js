import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getLocalStorage, setLocalStorage } from "./functions";

import { toast } from "react-toastify";

const getUsers = createAsyncThunk("users/getUsers", async (_, thunkAPi) => {
  const { rejectWithValue } = thunkAPi;
  try {
    const response = await fetch("https://fakestoreapi.com/users");
    const data = await response.json();
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const initialState = {
  cartItems: getLocalStorage("cartItems")
    ? JSON.parse(getLocalStorage("cartItems"))
    : [],
  isLoggedIn: false,
  name: "atef",
};

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
    name: "atef",
  },
  reducers: {
    logInOut: (state) => {
      state.isLoggedIn = !state.isLoggedIn;
    },
  },
  extraReducers: {
    [getUsers.pending]: (state) => {
      console.log("users", state);
    },
    [getUsers.pending]: (state) => {
      console.log("users", state);
    },
  },
});

export const { logInOut } = authSlice.actions;
export default authSlice.reducer;
