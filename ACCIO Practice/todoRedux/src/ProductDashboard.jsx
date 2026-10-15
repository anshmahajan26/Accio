import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./productApiSlice.js";

function ProductDashboard() {
  const dispatch = useDispatch();

  // Read API data and request status from Redux
  const { products, loading, error } = useSelector(
    (state) => state.products
  );

  // Fetch products when the component first loads
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // Show a message while the API request is running
  if (loading) {
    return <h2>Loading products...</h2>;
  }

  // Show an error if the API request fails
  if (error) {
    return <h2>Error: {error}</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Product Dashboard</h2>

      {/* Display the products received from the API */}
      {products.map((product) => (
        <div
          key={product.id}
          style={{
            border: "1px solid gray",
            padding: "12px",
            marginBottom: "12px"
          }}
        >
          <h3>{product.title}</h3>
          <p>Price: ${product.price}</p>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductDashboard;