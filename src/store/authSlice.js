import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

// const API_URL = "https://fakestoreapi.com/users";
// const API_URL = "http://localhost:3005/users";
const API_URL = "https://my-api-project22.herokuapp.com/users";

export const getUsers = createAsyncThunk(
  "users/getUsers",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await fetch(API_URL);
      const data = await response.json();

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Get user from the localStorage
const user = JSON.parse(localStorage.getItem("user"));
const isLoggedIn = localStorage.getItem("isLoggedIn");

const initialState = {
  users: [],
  user: user ? user : [],
  isLoggedIn: isLoggedIn ? isLoggedIn : false,
  message: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    register: (state, action) => {
      state.isLoggedIn = true;
      const userDate = {
        email: action.payload.email,
        password: action.payloadpassword,
        name: {
          firstname: action.payload.firstName,
          lastname: action.payload.lastName,
        },
        addresses: [
          {
            name: {
              firstname: "atef",
              lastname: "gad",
            },
            phone: "01156789547",
            city: "Giza",
            add_address: "25 ahmed orabi st",
            is__default: true,
          },
        ],
      };
      state.user = userDate;
      state.users.push(userDate);
      state.message = "register successful";
      toast.success("register successful");

      localStorage.setItem("user", JSON.stringify(userDate));
      localStorage.setItem("isLoggedIn", "true");
    },
    login: (state, action) => {
      const check = state.users.find(
        (user) =>
          user.email === action.payload.email &&
          user.password === action.payload.password
      );
      if (check) {
        state.isLoggedIn = true;
        state.user = check;
        state.message = "login successful";

        localStorage.setItem("user", JSON.stringify(check));
        localStorage.setItem("isLoggedIn", "true");
      } else {
        state.message = "email and password incorrect";
        toast.error("email and password incorrect");
      }
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = [];
      state.message = "logout successful";
      toast.success("logout successful");

      localStorage.removeItem("user");
      localStorage.removeItem("isLoggedIn");
    },
    addAddress: (state, action) => {
      const addressDate = {
        name: {
          firstname: action.payload.firstName,
          lastname: action.payload.lastName,
        },
        phone: action.payload.phone,
        city: action.payload.city,
        add_address: action.payload.add_address,
      };
      state.user.addresses.push(addressDate);
      // toast.success("address has been added successful");

      localStorage.setItem("user", JSON.stringify(state.user));
    },
  },
  extraReducers: {
    [getUsers.pending]: (state) => {
      state.error = null;
    },
    [getUsers.fulfilled]: (state, action) => {
      state.users = action.payload;
    },
    [getUsers.rejected]: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { register, login, logout, addAddress } = authSlice.actions;
export default authSlice.reducer;
