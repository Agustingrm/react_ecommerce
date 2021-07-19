import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import EcommerceContext from "../Context/EcommerceContext";

function ShoppingCartComponent(props) {
  const context = useContext(EcommerceContext);
  const product = props.product;
  const number = props.number;

  const handleClick = () => {
    context.shoppingList = context.shoppingList.filter((i) => i !== number);
  };

  return (
    <div>
      <p>{product.name}</p>
      <p>U${product.price}</p>
      <Button variant="danger" onClick={handleClick}>
        Delete item
      </Button>
    </div>
  );
}

export default ShoppingCartComponent;
