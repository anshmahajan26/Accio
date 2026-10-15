
import { useDispatch, useSelector } from "react-redux";

import {
  addToWishlist,
  removeFromWishlist,
  addToCart,
  removeFromCart,
  moveToCart
} from "./wishlistCartSlice.js";

function WishlistCart() {
  const dispatch = useDispatch();

  // Read products, Wishlist and Cart from Redux
  const { products, wishlist, cart } = useSelector(
    (state) => state.wishlistCart
  );

  // Calculate total price of Cart
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>Products</h2>

      {products.map((product) => (
        <div key={product.id} style={{ marginBottom: "12px" }}>
          <span>
            {product.name} - ₹{product.price}
          </span>

          <button
            onClick={() => dispatch(addToWishlist(product))}
            style={{ marginLeft: "10px" }}
          >
            Add to Wishlist
          </button>

          <button
            onClick={() => dispatch(addToCart(product))}
            style={{ marginLeft: "5px" }}
          >
            Add to Cart
          </button>
        </div>
      ))}

      <hr />

      <h2>Wishlist ({wishlist.length})</h2>

      {wishlist.length === 0 && <p>Wishlist is empty.</p>}

      {wishlist.map((item) => (
        <div key={item.id} style={{ marginBottom: "12px" }}>
          {item.name} - ₹{item.price}

          <button
            onClick={() => dispatch(moveToCart(item.id))}
            style={{ marginLeft: "10px" }}
          >
            Move to Cart
          </button>

          <button
            onClick={() => dispatch(removeFromWishlist(item.id))}
            style={{ marginLeft: "5px" }}
          >
            Remove
          </button>
        </div>
      ))}

      <hr />

      <h2>Shopping Cart ({cart.length} products)</h2>

      {cart.length === 0 && <p>Cart is empty.</p>}

      {cart.map((item) => (
        <div key={item.id} style={{ marginBottom: "12px" }}>
          {item.name} - ₹{item.price} × {item.quantity}

          <button
            onClick={() => dispatch(removeFromCart(item.id))}
            style={{ marginLeft: "10px" }}
          >
            Remove
          </button>
        </div>
      ))}

      <h3>Total: ₹{totalPrice}</h3>
    </div>
  );
}

export default WishlistCart;
