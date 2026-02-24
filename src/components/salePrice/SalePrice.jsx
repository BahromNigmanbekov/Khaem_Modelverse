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
          <h2>Paxta. </h2>
          <p>
            Discover our exclusive collection of Paxta clothing, where style meets
            comfort. Enjoy up to 35% off on selected items and elevate your wardrobe
            with timeless pieces crafted for everyday elegance.
          </p>

          <button>
            <NavLink to={"/shop"}>
              Shop Now <FaArrowRight />
            </NavLink>
          </button>
        </div>
      </div>
    </section>
  );
}

export default SalePrice;
