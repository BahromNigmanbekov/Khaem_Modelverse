import React, { useEffect, useState } from "react";
import "./Card.css";
import { useParams } from "react-router-dom";

function Card() {
  let { id } = useParams();

  const [data, setData] = useState(null);
  const [mainImg, setMainImg] = useState(null);


  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [date, setDate] = useState("");
  const [address, setAddress] = useState("");


  const [quantity, setQuantity] = useState(1);

  const BOT_TOKEN = "8700685048:AAEF0I0WWPwYQ5s8vVTZBejZfffReVqnA1E";
  const CHAT_ID = "6877805958";

  useEffect(() => {
    fetch(`https://6923266609df4a4923247a93.mockapi.io/api/v1/product/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        setMainImg(res.img);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const sendToTelegram = () => {
    if (!name || !surname || !address) {
      alert("Iltimos barcha maydonlarni to‘ldiring");
      return;
    }

    const totalPrice = data.price * quantity;

    const message = `
🛒 Yangi Booking!

📦 Booking : ${data.title}

🆔 ID: ${data.id}


🔢 Booking qilingan: ${quantity} soat

💰 1 soat Booking narx: ${data.price}.000 So'm 

💵 Jami Booking: ${totalPrice}.000 So'm



👤 Ism: ${name}
🕒 Vaqti: ${surname}
📅 Sana: ${date}
📍 Manzil: ${address}

    `;

    fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
      }),
    })
      .then(() => {
        alert("Buyurtma yuborildi ✅");
        setShowForm(false);
        setName("");
        setSurname("");
        setAddress("");
        setQuantity(1);
      })
      .catch(() => alert("Xatolik yuz berdi ❌"));
  };

  return (
    <section className="section">
      <div className="container">
        <div className="productContainer">
          <div className="productCenter">
            <div className="leftContainer">
              <img className="productLeftImg" src={mainImg} alt="product" />
            </div>

            <div className="productRightContainer">
              <h2>{data?.title}</h2>
              <p className="desc">{data?.desc}</p>
              <p className="price">{data?.price}$</p>

           <div className="county">
               {/* QUANTITY */}
              <div className="quantityBox">
                <button
                  onClick={() =>
                    quantity > 1 && setQuantity(quantity - 1)
                  }
                >
                  −
                </button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)}>
                  +
                </button>
              </div>

              {/* BUY BUTTON */}
              <button className="buyBtn" onClick={() => setShowForm(true)}>
                Booking
              </button>
           </div>

              {/* FORM */}
              {showForm && (
                <div className="buyForm">
                  <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <input
                    type="time"
                    placeholder="Time"
                    value={surname}
                    onChange={(e) => setSurname(e.target.value)}
                  />
                  <input
                    type="date"
                    placeholder="Date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                  <textarea
                    placeholder="Address \ Please enter your address correctly and do not provide false information"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  ></textarea>

                  <button onClick={sendToTelegram}>
                    Send Massages
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Card;
