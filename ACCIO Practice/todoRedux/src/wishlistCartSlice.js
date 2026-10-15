
import { createSlice } from "@reduxjs/toolkit";

const wishlistCartSlice = createSlice({
  name: "wishlistCart",

  // Initial data
  initialState: {
    products: [
      { id: 1, name: "Laptop", price: 50000 },
      { id: 2, name: "Mobile", price: 20000 },
      { id: 3, name: "Headphones", price: 2000 }
    ],
    wishlist: [],
    cart: []
  },

  reducers: {
    // Add a product to Wishlist
    addToWishlist: (state, action) => {
      const product = state.wishlist.find(
        (item) => item.id === action.payload.id
      );

      // Add only if it is not already in Wishlist
      if (!product) {
        state.wishlist.push(action.payload);
      }
    },

    // Remove a product from Wishlist
    removeFromWishlist: (state, action) => {
      state.wishlist = state.wishlist.filter(
        (item) => item.id !== action.payload
      );
    },

    // Add a product to Cart
    addToCart: (state, action) => {
      const product = state.cart.find(
        (item) => item.id === action.payload.id
      );

      if (product) {
        // Increase quantity if already in Cart
        product.quantity++;
      } else {
        // Otherwise, add it with quantity 1
        state.cart.push({
          ...action.payload,
          quantity: 1
        });
      }
    },

    // Remove a product from Cart
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(
        (item) => item.id !== action.payload
      );
    },

    // Move a product from Wishlist to Cart
    moveToCart: (state, action) => {
      const product = state.wishlist.find(
        (item) => item.id === action.payload
      );

      if (product) {
        // Check whether product already exists in Cart
        const cartProduct = state.cart.find(
          (item) => item.id === product.id
        );

        if (cartProduct) {
          cartProduct.quantity++;
        } else {
          state.cart.push({
            ...product,
            quantity: 1
          });
        }

        // Remove product from Wishlist
        state.wishlist = state.wishlist.filter(
          (item) => item.id !== action.payload
        );
      }
    }
  }
});

export const {
  addToWishlist,
  removeFromWishlist,
  addToCart,
  removeFromCart,
  moveToCart
} = wishlistCartSlice.actions;

export default wishlistCartSlice.reducer;
