import React, { useState, useEffect } from "react";
import "../styles/Checkout.css";

function Checkout() {
  const [cart, setCart] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePlaceOrder = () => {
    if (!formData.name || !formData.email || !formData.address) {
      alert("Please fill in all fields");
      return;
    }

    alert("Order placed successfully!");
    localStorage.removeItem("cart"); // Clear cart
    setCart([]);
    setFormData({ name: "", email: "", address: "" }); // Reset form
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return <p>Your cart is empty. Please add items to proceed.</p>;
  }

  return (
    <div className="checkout-page">
      <h2>Checkout</h2>
      <div className="checkout-cart">
        {cart.map((item) => (
          <div key={item.id} className="checkout-item">
            <img src={item.image} alt={item.title} />
            <div>
              <h3>{item.title}</h3>
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
            </div>
          </div>
        ))}
      </div>
      <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
      <form className="checkout-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <textarea
          name="address"
          placeholder="Your Address"
          value={formData.address}
          onChange={handleInputChange}
        />
        <button type="button" onClick={handlePlaceOrder}>
          Place Order
        </button>
      </form>
    </div>
  );
}

export default Checkout;
