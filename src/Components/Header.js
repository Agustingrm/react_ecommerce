import { useEffect } from "react";
import WebFont from "webfontloader";

function Header() {
  const styles = {
    header: {
      display: "flex",
      alignItems: "center",
      backgroundColor: "blue",
      height: "60px",
    },
    title: {
      fontFamily: "Lobster",
      fontSize: "40px",
      marginLeft: "20px",
    },
    loginAndCart: {
      fontSize: "20px",
      marginRight: "20px",
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
      <div style={styles.title}>My Fake E-Commerce</div>
      <div style={{ ...styles.separator, ...styles.loginAndCart }}>Login</div>
      <div style={styles.loginAndCart}>Shopping Cart</div>
    </div>
  );
}

export default Header;
