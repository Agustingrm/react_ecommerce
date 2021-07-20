import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import EcommerceContext from "../Context/EcommerceContext";

function ShoppingCartComponent(props) {
  const context = useContext(EcommerceContext);
  const product = props.product;
  const number = props.number;
  const style = {
    buttonMargin: {
      marginBottom: '20px'
    }
  }

  const handleClick = () => {
    context.deleteItemInCart(number)
  };

  return (
    <div>
      <p><strong>Product Name: </strong>{product.name}</p>
      <p><strong>Price: </strong>U${product.price}</p>
      <Button variant="danger" style={style.buttonMargin} onClick={handleClick}>
        Delete item
      </Button>
    </div>
  );
}

export default ShoppingCartComponent;
