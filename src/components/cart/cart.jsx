import React, { useState, useEffect } from "react";
import Header from './headerCart.jsx';
import "./cart.css";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "OnePlus 12",
      price: 799,
      image: "/src/assets/12.png",
      quantity: 1,
    },
    {
      id: 2,
      name: "Samsung Galaxy S24",
      price: 799,
      image: "/src/assets/s24.webp",
      quantity: 2,
    },
  ]);

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Add delay to trigger smooth fade-in animation
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className={`cart-page ${isLoaded ? 'loaded' : ''}`}>
      <Header />
      <div className="cart-container">
        <h1>Shopping Cart</h1>
        <div className="cart-items">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <h2>{item.name}</h2>
                  <p>Price: ${item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
              </div>
            ))
          ) : (
            <p>Your cart is empty.</p>
          )}
        </div>
        <div className="cart-summary">
          <h2>Total: ${totalAmount}</h2>
          <button className="checkout-btn">Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
