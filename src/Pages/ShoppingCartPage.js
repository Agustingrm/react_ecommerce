import React, { useContext } from "react";
import ShoppingCartComponent from "../Components/ShoppingCartComponent";
import EcommerceContext from "../Context/EcommerceContext";
import { Button } from "react-bootstrap";

function ShoppingCart() {
  const context = useContext(EcommerceContext);
  const style = {
    margin: {
      margin: "20px 60px 20px 60px",
    },
  };

  console.log(context.shoppingList);
  if (context.shoppingList.length === 0) {
    return <h2 style={style.margin}>Please select an Item to buy</h2>;
  } else {
    return (
      <div style={style.margin}>
        <h1>Shopping Cart</h1>
        <div>
          {context.shoppingList.map((product,number) => (
            <ShoppingCartComponent product={product} number={number}/>
          ))}
        </div>
        <Button variant="success">Pay</Button>
      </div>
    );
  }
}

export default ShoppingCart;
