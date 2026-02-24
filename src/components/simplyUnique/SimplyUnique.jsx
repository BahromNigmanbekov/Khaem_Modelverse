import React from "react";
import "./simplyUnique.css";

function SimplyUnique() {
  return (
    <section className="section">
      <div className="container">
        <div className="simplyBox">
          <h2
            className="simlpy"
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
          >
            Simply Paxta<span className="gray">/</span>
            <br className="br" />
            Simply Clothes<span className="gray">.</span>
          </h2>

          <p
            className="simplyText"
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
          >
            <span className="simplySpan">Paxta</span>is a clothing brand based in Tashkent, Uzbekistan,<br /> 
              focused on modern design, everyday comfort, and timeless style.
          </p>
        </div>
      </div>
    </section>
  );
}

export default SimplyUnique;
