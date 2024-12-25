import React from "react";
import { useNavigate } from "react-router-dom";
import useFetchProducts from "../hooks/useFetchProducts";
import "../styles/ProductListing.css";

function ProductListing() {
  const { products, loading, error } = useFetchProducts();
  const navigate = useNavigate(); // Hook for navigation

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>{error}</p>;

  const handleViewDetails = (id) => {
    navigate(`/product/${id}`); // Navigate to the details page
  };

  return (
    <div className="product-listing">
      <h2>Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <button
              className="button"
              onClick={() => handleViewDetails(product.id)}
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductListing;
