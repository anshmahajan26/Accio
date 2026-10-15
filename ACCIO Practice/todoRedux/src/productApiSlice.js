import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Fetch products from the API
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await fetch(
      "https://fakestoreapi.com/products"
    );

    // Throw an error if the API request fails
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }

    // Convert the API response into JavaScript data
    return await response.json();
  }
);

const productApiSlice = createSlice({
  name: "products",

  // Initial state before the API responds
  initialState: {
    products: [],
    loading: false,
    error: null
  },

  reducers: {},

  // Handle the different stages of the API request
  extraReducers: (builder) => {
    builder
      // API request has started
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      // API request succeeded
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })

      // API request failed
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

// Export the reducer for the Redux store
export default productApiSlice.reducer;