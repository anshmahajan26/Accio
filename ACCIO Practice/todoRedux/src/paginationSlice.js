
import { createSlice } from "@reduxjs/toolkit";

const paginationSlice = createSlice({
  name: "pagination",

  // Starting data
  initialState: {
    products: [
      { id: 1, name: "Laptop", price: 50000 },
      { id: 2, name: "Mobile", price: 20000 },
      { id: 3, name: "Keyboard", price: 2000 },
      { id: 4, name: "Mouse", price: 1000 },
      { id: 5, name: "Headphones", price: 3000 },
      { id: 6, name: "Monitor", price: 12000 },
      { id: 7, name: "Tablet", price: 15000 },
      { id: 8, name: "Webcam", price: 2500 },
      { id: 9, name: "Speaker", price: 1800 },
      { id: 10, name: "Charger", price: 800 },
      { id: 11, name: "USB Cable", price: 300 },
      { id: 12, name: "Power Bank", price: 1500 }
    ],
    currentPage: 1,
    itemsPerPage: 5
  },

  reducers: {
    // Go to the next page
    nextPage: (state) => {
      const totalPages = Math.ceil(
        state.products.length / state.itemsPerPage
      );

      // Move forward only if another page exists
      if (state.currentPage < totalPages) {
        state.currentPage++;
      }
    },

    // Go to the previous page
    previousPage: (state) => {
      // Do not go below page 1
      if (state.currentPage > 1) {
        state.currentPage--;
      }
    },

    // Return to the first page
    resetPage: (state) => {
      state.currentPage = 1;
    }
  }
});

export const { nextPage, previousPage, resetPage } =
  paginationSlice.actions;

export default paginationSlice.reducer;
