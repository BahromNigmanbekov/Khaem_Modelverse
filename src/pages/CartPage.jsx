import React from "react";
import { useCart } from "../context/CartContext";
import { NavLink } from "react-router-dom";

function CarttPage() {
  const { cart, increaseQty, decreaseQty, removeFromCart, totalPrice } = useCart();

  return (
    <div className="container">
      <div className="pagecart"><h1>My Cart</h1></div>

      {cart.length === 0 ? (
        <p className="empity">Your cart is empty.</p>
      ) : (
       
          <div className="my-cart-items">

          {cart.map(item => (
            <div key={item.id} className="my-cart-item">

              <img src={item.image} alt={item.name} width="80" />

              <div className="my-cart-item-info">
                <h3>{item.name}</h3>
                <p>${item.price}</p>

                <div className="my-cart-quantity">
                  <button onClick={() => decreaseQty(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQty(item.id)}>+</button>
                </div>

                <button
                  className="my-cart-remove-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>

            </div>
          ))}

          <div className="savat">
            <h2 className="narxi">Total: ${totalPrice}</h2>

          <NavLink to="/checkout" className="my-checkout-btn">
            Proceed to Checkout
          </NavLink>
          </div>

        </div>
      )}
    </div>
  );
}

export default CarttPage;