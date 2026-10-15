
import { useDispatch, useSelector } from "react-redux";

import {
  nextPage,
  previousPage
} from "./paginationSlice.js";

function Pagination() {
  const dispatch = useDispatch();

  // Get product data and pagination settings from Redux
  const { products, currentPage, itemsPerPage } = useSelector(
    (state) => state.pagination
  );

  // Calculate the total number of pages
  const totalPages = Math.ceil(
    products.length / itemsPerPage
  );

  // Find the starting and ending positions of the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Show only the products belonging to this page
  const currentProducts = products.slice(startIndex, endIndex);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Product Pagination</h2>

      {/* Display products for the current page */}
      {currentProducts.map((product) => (
        <div key={product.id} style={{ marginBottom: "12px" }}>
          <strong>{product.name}</strong>
          <p>Price: ₹{product.price}</p>
        </div>
      ))}

      <hr />

      {/* Disable Previous on the first page */}
      <button
        onClick={() => dispatch(previousPage())}
        disabled={currentPage === 1}
      >
        Previous
      </button>

      <span style={{ margin: "0 15px" }}>
        Page {currentPage} of {totalPages}
      </span>

      {/* Disable Next on the last page */}
      <button
        onClick={() => dispatch(nextPage())}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
