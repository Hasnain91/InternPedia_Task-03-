import React from "react";
import "../styles/Home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <h1>Welcome to E-Shop</h1>
      <p>Your one-stop shop for amazing products!</p>
      <button onClick={() => navigate("/products")}>Start Shopping</button>
    </div>
  );
}

export default Home;
