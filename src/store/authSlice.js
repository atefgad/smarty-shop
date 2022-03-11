import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

// Get user from the localStorage
const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: user ? user : [],
  isLoggedIn: false,
  message: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    register: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload;
      state.message = "register successful";

      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    login: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload;
      state.message = "login successful";

      toast.success("login successful");

      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = [];
      state.message = "logout successful";

      localStorage.removeItem("user");
    },
  },
});

export const { register, login, logout } = authSlice.actions;
export default authSlice.reducer;
