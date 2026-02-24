import React from "react";
import "./productItem.css";
import { NavLink } from "react-router-dom";

function ProductItem({ id, image, price, title, index }) {
  const animations = ["fade-up-right", "fade-up-left"];
  const chosenAnimation = animations[index % animations.length];

  return (
    <div className="product-card" data-aos={chosenAnimation}>
      <NavLink to={`/card/${id}`} className="product-link">
        <div className="product-image-box">
          <span className="sold-out-badge">Sold out</span>

          <img src={image} alt={title} />
        </div>

        <h3 className="product-title">{title}</h3>
        <p className="product-price">{price} $</p>
      </NavLink>
    </div>
  );
}

export default ProductItem;
