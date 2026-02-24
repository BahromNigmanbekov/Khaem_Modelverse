import React from "react";
import "./salePrice.css";

import { NavLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import fet from "../../assets/tim.png";
function SalePrice() {
  return (
    <section>
      <div className="saleBoxList grayy">
        <img className="imge" src={fet} alt="" />
        <div className="text">
          <span>SALE UP TO 35% OFF</span>
          <h2>Khaem Modelverse. </h2>
          <p>
            BOOK TOP MODELS – UP TO 35% OFF

            Discover our exclusive selection of models on Khaem Modelverse, where talent meets professionalism. Enjoy special offers on select profiles and book top models to elevate your campaigns with style, creativity, and confidence. Perfect for fashion shoots, lifestyle campaigns, and editorial projects.
          </p>

          <button>
            <NavLink to={"/shop"}>
              Book Now <FaArrowRight />
            </NavLink>
          </button>
        </div>
      </div>
    </section>
  );
}

export default SalePrice;
