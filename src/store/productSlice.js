import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (_, athunkAPI) => {
    const { rejectWithValue } = athunkAPI;
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

{
  /*
// getProduct
export const getProduct = createAsyncThunk(
  "products/getProduct",
  async (product, athunkAPI) => {
    const { rejectWithValue } = athunkAPI;
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${product.id}`);
      const data = await response.json();

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
*/
}

// products [actions - reducers]
const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    errors: null,
    isLoading: false,
  },
  extraReducers: {
    [getProducts.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;

      console.log(action);
    },
    [getProducts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.products = action.payload;

      console.log(action);
    },
    [getProducts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = null;

      console.log(action);
    },

    // getProduct
    // [getProduct.pending]: () => {

    // }
  },
});

export default productSlice.reducer;
