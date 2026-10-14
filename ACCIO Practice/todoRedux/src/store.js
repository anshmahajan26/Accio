import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice.js";
import checkboxReducer from "./checkboxSlice.js";

const store = configureStore({
  reducer: {
    todos: todoReducer,
    checkbox: checkboxReducer
  }
});

export default store;