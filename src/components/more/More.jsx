import React, { useEffect, useState } from "react";
import ProductItem from "../productItem/ProductItem";
import "../products/products.css";

function More() {
  const [productsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://68d6bbe4c2a1754b426bbe49.mockapi.io/app/v1/product")
      .then((res) => res.json())
      .then((data) => setProductsData(data))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="container">
      <h2 className="products-title">Featured Products</h2>

      <div className="products-grid">
        {productsData.map((product, index) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            image={product.img?.[0]}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

export default More;

