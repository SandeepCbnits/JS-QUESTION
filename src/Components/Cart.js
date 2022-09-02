import React from "react";

const Cart = ({ carts , deleteHandler}) => {
  return (
    <div>
      {carts.map((cart) => (
        <div>
          <span>{cart.description}</span>
          <span>{cart.quantity}</span>
          <button onClick={()=>deleteHandler(cart)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
