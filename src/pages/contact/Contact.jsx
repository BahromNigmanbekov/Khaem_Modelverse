import React, { useState } from "react";
import { BiStore } from "react-icons/bi";
import "./Contact.css";
import { LuPhone } from "react-icons/lu";
import { HiOutlineMail } from "react-icons/hi";
import soft from "../../assets/bag.jpg"

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [number, setNumber] = useState("");

  const BOT_TOKEN = "8273722997:AAFJ4Zwp-81cj-uhzAG1JjnBznYr-8vLcEY";
  const CHAT_ID = "6877805958";

  const handleSubmit = (e) => {
    e.preventDefault();

    let text = "Foydalanuvchidan Xabar: %0A%0A";
    text += `Ismi: ${name}%0A`;
    text += `Email Addresi: ${email}%0A`;
    text += `Telefon Nomeri: ${number}%0A`;
    text += `Xabari: ${message}%0A`;

    let url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${text}`;
    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();

    setEmail("");
    setMessage("");
    setName("");
    setNumber("");
  };

  return (
    <div className="container">
      <div className="contactSectionBox">
        <div className="sl">
            <h2 data-aos="zoom-in-down" className="contactUsBigText">
            Contact Us
          </h2>
        </div>
        <div className="sectionTop">
          <div className="sectionTopCarsList">
            <div className="sectionTopCartItem">
              <BiStore className="sectionTopCartItemImgs" />
              <h3>ADDRESS</h3>
              <p>Toshkent , Shayhontoxur , Shumanay 2-tor kocha</p>
            </div>
            <div className="sectionTopCartItem">
              <LuPhone className="sectionTopCartItemImgs" />
              <h3>CONTACT US</h3>
              <p>+998 87 053 01 11</p>
            </div>
            <div className="sectionTopCartItem">
              <HiOutlineMail className="sectionTopCartItemImgs" />
              <h3>EMAIL</h3>
              <p>paxtaclothes@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="sectionBottom">
          <form onSubmit={handleSubmit} action="" className="sectionBottomForm">
            <div className="sectionFormContentsBox">
              <h3>FULL NAME</h3>
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="sectionFormContentsBox">
              <h3>EMAIL ADDRESS</h3>
              <input
                type="text"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="sectionFormContentsBox">
              <h3>PHONE NUMBER</h3>
              <input
                type="text"
                placeholder="Your Number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>
            <div className="sectionFormContentsBox">
              <h3>MESSAGE</h3>
              <textarea
                rows={5}
                name=""
                id=""
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <button className="sectionBottomBtn">Send Message</button>
          </form>
          <div className="salom">
            <img src={soft} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
