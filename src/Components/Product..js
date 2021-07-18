import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function Product(props) {
  const { title, price, image, id } = props.products;
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
    image: {
      height: "150px",
    },
    linkStyle: {
      textDecoration: "none",
      color: "inherit",
    },
  };
  return (
    <div style={style.border}>
      <div style={style.centerItems}>
        <img src={image} alt={title} style={style.image} />
      </div>
      <h2 style={style.h2}>{title}</h2>
      <p>U${price}</p>
      <Button variant="outline-secondary">
        <Link to={"product/" + id} style={style.linkStyle}>Details</Link>
      </Button>
      <Button variant="success" style={style.buttonSpacing}>
        Add to Cart
      </Button>
    </div>
  );
}

export default Product;
