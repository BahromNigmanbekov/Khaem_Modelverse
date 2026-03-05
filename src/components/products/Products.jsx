import React, { useEffect, useState } from "react";
import ProductItem from "../productItem/ProductItem";
import "./products.css";

function Products() {
  const [productsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://6923266609df4a4923247a93.mockapi.io/api/v1/product")
      .then((res) => res.json())
      .then((data) => setProductsData(data))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;

  // 👇 HAR BIR TURDAN BITTADAN OLISH
  const getOneByType = (keyword) =>
    productsData.find((p) =>
      p.title.toLowerCase().includes(keyword)
    );

  const featuredProducts = [
    getOneByType("isabella"),
    getOneByType("liam"),
    getOneByType("ethan"),
    getOneByType("mia"),
    getOneByType("sophia "),
    getOneByType("ava"),
  ].filter(Boolean); 

  return (
    <div className="container">
      <h2 className="products-title">Featured Products</h2>

      <div className="products-grid">
        {featuredProducts.map((product, index) => (
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

export default Products;
