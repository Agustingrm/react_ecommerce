import { useEffect, useState } from "react";
import LoadingSpinner from "../Components/LoadingSpinner";
import Product from "../Components/Product.";


function HomePage() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const style = {
    title: {
      margin: "20px 60px 0 60px",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, 300px)",
      rowGap: "20px",
      columnGap: "20px",
      justifyContent: "center",
      margin: "20px 0",
    },
  };
  const getProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const productData = await response.json();
      setProducts(productData);
      setLoading(false);
    } catch (e) {
      alert(e);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);

  if (loading) {
    return (
      <LoadingSpinner />
    );
  } else {
    return (
      <div>
        <h1 style={style.title}>Products</h1>
        <div style={style.grid}>
          {products.map((product) => (
            <Product key={product.id} products={product} />
          ))}
        </div>
      </div>
    );
  }
}

export default HomePage;
