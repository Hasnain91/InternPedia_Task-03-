import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <h1 className="navbar-brand" onClick={() => navigate("/")}>
        E-Commerce
      </h1>
      <ul className="navbar-links">
        <li>
          <button onClick={() => navigate("/products")}>Products</button>
        </li>
        <li>
          <button onClick={() => navigate("/cart")}>Cart</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
