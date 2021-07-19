import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import EcommerceContext from "../Context/EcommerceContext";

function Product(props) {
  const { title, price, image, id } = props.products;
  const context = useContext(EcommerceContext);

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

  const handleAddToCart = (event) => {
    event.preventDefault();
    let item = {
      name: title,
      price: price,
    };
    context.addToCart(item);
    console.log(context.shoppingList)
  };
  return (
    <div style={style.border}>
      <div style={style.centerItems}>
        <img src={image} alt={title} style={style.image} />
      </div>
      <h2 style={style.h2}>{title}</h2>
      <p>U${price}</p>
      <Button variant="outline-secondary">
        <Link to={"product/" + id} style={style.linkStyle}>
          Details
        </Link>
      </Button>
      <Button variant="success" style={style.buttonSpacing} onClick={handleAddToCart} >
        Add to Cart
      </Button>
    </div>
  );
}

export default Product;
