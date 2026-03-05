import React from "react";
import { useCart } from "../context/CartContext";

function Checkout() {
  const { cart, totalPrice } = useCart();

  return (
    <div className="container">
      <h1>Checkout</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="my-checkout-items">

          {cart.map(item => (
            <div key={item.id} className="my-checkout-item">
              <span>{item.name}</span>
              <span>{item.quantity} x ${item.price}</span>
            </div>
          ))}

          <h2>Total Payment: ${totalPrice}</h2>

          <button className="my-confirm-btn">
            Confirm Order
          </button>

        </div>
      )}
    </div>
  );
}

export default Checkout;