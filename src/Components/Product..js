import React from "react";
import { Button } from "react-bootstrap";

function Product(props) {
  const { title, price, image } = props.products;
  const style = {
    centerItems: {
      display: "flex",
      justifyContent: "center",
      margin: "20px 0",
    },
    border: {
      border: "1px solid gray",
      borderRadius: "10px",
      padding: "10px",
    },
    h2: {
      fontSize: "18px",
      height: "90px",
    },
    buttonSpacing: {
      float: "right",
    },
  };
  console.log(props.products);
  return (
    <div style={style.border}>
      <div style={style.centerItems}>
        <img src={image} alt={title} height="150px" />
      </div>
      <h2 style={style.h2}>{title}</h2>
      <p>U${price}</p>
      <Button variant="outline-primary">Details</Button>
      <Button variant="success" style={style.buttonSpacing}>
        Add to Cart
      </Button>
    </div>
  );
}

export default Product;
