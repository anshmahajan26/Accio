import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice.js";
import checkboxReducer from "./checkboxSlice.js";
import wishlistCartReducer from "./wishlistCartSlice.js";
import productReducer from "./productApiSlice.js";
import paginationReducer from "./paginationSlice.js";

const store = configureStore({
  reducer: {
    todos: todoReducer,
    checkbox: checkboxReducer,
    wishlistCart: wishlistCartReducer,
      products: productReducer,
       pagination: paginationReducer
  }
});

export default store;