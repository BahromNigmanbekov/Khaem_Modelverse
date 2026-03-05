import React from "react";
import { useCart } from "../context/CartContext";

function Checkout() {
  const { cart, totalPrice } = useCart();

  const sendTelegramMessage = async () => {
    const botToken = "8630280247:AAGEQhL4Lrcz0yGuHZXyidmF8rrPW_vhd3s"; 
    const chatId = "8398715237";     

    let message = "✅ New Order!\n\n";
    cart.forEach(item => {
      message += `${item.name} - ${item.quantity} x $${item.price}\n`;
    });
    message += `\nTotal: $${totalPrice}`;

    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    try {
      await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
        }),
      });
      alert("✔️ Order confirmed! Message sent to Telegram.");
    } catch (error) {
      console.error("❌ Telegram message failed:", error);
      alert("Failed to send Telegram message.");
    }
  };

  return (
    <div className="container">
      <div className="h1-check"><h1>Checkout</h1></div>

      {cart.length === 0 ? (
        <p className="empity">Your cart is empty.</p>
      ) : (
        <div className="my-checkout-items">
          {cart.map(item => (
            <div key={item.id} className="my-checkout-item">
              <span>{item.name}</span>
              <span>{item.quantity} x ${item.price}</span>
            </div>
          ))}

          <h2>Total Payment: ${totalPrice}</h2>

          <button className="my-confirm-btn" onClick={sendTelegramMessage}>
            Confirm Order
          </button>
        </div>
      )}
    </div>
  );
}

export default Checkout;