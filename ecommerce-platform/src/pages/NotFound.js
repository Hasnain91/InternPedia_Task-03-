import React from "react";
import "../styles/NotFound.css";

function NotFound() {
  return (
    <div className="not-found">
      <h1>404</h1>
      <p>Page Not Found</p>
      <a href="/">Go Back to Home</a>
    </div>
  );
}

export default NotFound;
