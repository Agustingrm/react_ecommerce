import { useEffect } from "react";
import WebFont from "webfontloader";
import { Link } from "react-router-dom";

function Header() {
  const styles = {
    header: {
      display: "flex",
      alignItems: "center",
      backgroundColor: "black",
      height: "60px",
    },
    title: {
      fontFamily: "Lobster",
      fontSize: "40px",
      marginLeft: "20px",
      textDecoration: "none",
      color: "white",
    },
    loginAndCart: {
      fontSize: "20px",
      marginRight: "20px",
      textDecoration: "none",
      color: "white",
    },
    separator: {
      marginLeft: "auto",
    },
  };

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Lobster"],
      },
    });
  }, []);

  return (
    <div style={styles.header}>
      <Link to="/react_ecommerce" style={styles.title}>
        My Fake E-Commerce
      </Link>
      <Link to="/Register" style={{ ...styles.separator, ...styles.loginAndCart }}>
        Register
      </Link>
      <div style={styles.loginAndCart}>Shopping Cart</div>
    </div>
  );
}

export default Header;
