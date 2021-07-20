import { useState, useEffect, useContext } from "react";
import { Button } from "react-bootstrap";
import LoadingSpinner from "../Components/LoadingSpinner";
import EcommerceContext from "../Context/EcommerceContext";

function DetailsPage(props) {
  const context = useContext(EcommerceContext);
  const id = props.match.params.id;
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState({});
  const { title, price, image, description, category } = product;
  const style = {
    contentPadding: {
      padding: "20px",
    },
    imageDiv: {
      border: "1px solid gray",
      borderRadius: "10px",
      padding: "10px",
      width: "330px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: "auto",
    },
    image: {
      height: "170px",
    },
  };

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products/" + id);
        const productData = await response.json();
        setProduct(productData);
        setLoading(false);
      } catch (e) {
        alert(e);
      }
    };
    getProduct();
  }, [id]);

  const handleAddToCart = (event) => {
    event.preventDefault();
    let item = {
      name: title,
      price: price,
    };
    context.addToCart(item);
  };

  if (loading) {
    return <LoadingSpinner />;
  } else {
    return (
      <div style={style.contentPadding}>
        <h1>{title}</h1>
        <div style={style.imageDiv}>
          <img src={image} alt={title} style={style.image} />
        </div>
        <p>
          <strong>Price: </strong>U${price}
        </p>
        <p>
          <strong>Description: </strong>
          {description}
        </p>
        <p>
          <strong>Category: </strong>
          {category}
        </p>
        <Button variant="success" style={style.buttonSpacing} onClick={handleAddToCart}>
          Add to Cart
        </Button>
      </div>
    );
  }
}

export default DetailsPage;
