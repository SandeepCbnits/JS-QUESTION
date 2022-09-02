import React, { useState } from "react";
import Cart from "./Components/Cart";
import Header from "./Components/Header/Header";
import Products from "./Components/Products";
import items from "./items";

const App = () => {
  const [products, setProducts] = useState(items);
  const [carts, setCarts] = useState([]);

  const addToCartHandler=(data)=>{
    setCarts((privesData)=>{     
      let oldData = [...privesData];
      oldData.push({...data , quantity: 1})
      return oldData;
    })
 
 }
 const deleteHandler=(id)=>{
console.log(id)
setCarts((priveData)=>{
  let oldData = [...priveData];
  oldData.slice(0, 1)//
  return oldData;
})
 }
  return (
    <div>
      <Header count={carts.length}/>
      <Cart carts={carts} deleteHandler={deleteHandler}/>
      <Products products={products} addToCart={addToCartHandler} deleteHandler={deleteHandler}/>
    </div>
  );
};

export default App;
