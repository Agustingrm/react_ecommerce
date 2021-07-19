import React, { useContext, useEffect } from "react";
import WebFont from "webfontloader";
import { Link } from "react-router-dom";
import EcommerceContext from "../Context/EcommerceContext";

function Header() {
  const context = useContext(EcommerceContext);
  const styles = {
    header: {
      position: 'sticky',
      top: '0px',
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
      <Link to="/Login" style={{ ...styles.separator, ...styles.loginAndCart }}>
        Login
      </Link>
      <Link to="/Register" style={styles.loginAndCart}>
        Register
      </Link>
      <Link to="ShoppingCart" style={styles.loginAndCart}>
        Shopping Cart ({context.shoppingList.length})
      </Link>
    </div>
  );
}

export default Header;
