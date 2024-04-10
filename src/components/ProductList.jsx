// components/ProductList.js
import React from "react";
import Product from "./Product";

function ProductList() {
  const products = [
    { id: 1, name: "Kit de Aniversário", price: "R$ 99,99" },
    { id: 2, name: "Bolo de Aniversário", price: "R$ 199,99" },
    { id: 3, name: "Balão do Homem-Aranha", price: "R$ 50,99" },
    { id: 4, name: "Balão do Homem-Aranha", price: "R$ 50,99" },
    { id: 5, name: "Balão do Homem-Aranha", price: "R$ 50,99" },
    { id: 6, name: "Balão do Homem-Aranha", price: "R$ 50,99" },
    { id: 7, name: "Balão do Homem-Aranha", price: "R$ 50,99" },
    { id: 8, name: "Balão do Homem-Aranha", price: "R$ 50,99" },
  ];

  return (
    <div className="product-list">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
