import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "./authService";

// Get user from the localStorage
const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: user ? user : null,
  isLoggedIn: false,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Register user
export const register = createAsyncThunk(
  "auth/register",
  async (user, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      return await authService.register(user);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return rejectWithValue(message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoggedIn = false;
      state.isError = false;
      state.isSuccess = false;
      state.isLoading = false;
      state.message = "";
    },
    logInOut: (state) => {
      state.isLoggedIn = !state.isLoggedIn;
    },
  },
  extraReducers: {
    [register.pending]: (state) => {
      state.isLoading = true;
      console.log("auth/pending", state);
    },
    [register.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.user = action.payload;
      console.log("auth/state", state);
      console.log("auth/action", action);
    },
    [register.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
      state.user = null;
      console.log("auth", state);
    },
  },
});

export const { reset, logInOut } = authSlice.actions;
export default authSlice.reducer;
