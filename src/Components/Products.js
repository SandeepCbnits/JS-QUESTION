import React from "react";

const Products = ({ products , addToCart}) => {
  return (
    <div>
      {products.map((product) => {
        return (
          <div>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <button onClick={()=>addToCart(product)}>AddToCart</button>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
