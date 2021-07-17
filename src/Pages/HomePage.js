import { useEffect, useState } from "react";
import Product from "../Components/Product.";

function HomePage() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const style = {
      grid: {
          display:'grid',
          gridTemplateColumns: 'repeat(auto-fill, 300px)',
          rowGap: '20px',
          columnGap: '20px',
          justifyContent: 'center',
          margin: '40px 0'
      }
  }
  const getProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const productData = await response.json();
      setProducts(productData);
      setLoading(false);
    } catch (e) {}
  };
  useEffect(() => {
    getProducts();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  } else {
    return (
      <div>
        <h1>Products</h1>
        <div style={style.grid}>
          {products.map((product) => (
            <Product products={product} />
          ))}
        </div>
      </div>
    );
  }
}

export default HomePage;
