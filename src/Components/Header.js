import React, { useContext, useEffect } from "react";
import WebFont from "webfontloader";
import { Link } from "react-router-dom";
import EcommerceContext from "../Context/EcommerceContext";
import { Navbar, Nav } from "react-bootstrap";

function Header() {
  const context = useContext(EcommerceContext);
  const styles = {
    header: {
      position: "sticky",
      top: "0px",
      padding: "0 10px",
      display: "flex",
      alignItems: "center",
      backgroundColor: "black",
    },
    title: {
      fontFamily: "Lobster",
      fontSize: "32px",
      margin: "0",
      padding: "0",
      textDecoration: "none",
      color: "white",
    },
    linksToSections: {
      fontSize: "20px",
      marginRight: "20px",
      textDecoration: "none",
      color: "white",
    },
    separator: {
      marginLeft: "auto",
    },
    hamburgerMenuColor: {
      backgroundColor: "white",
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
    <Navbar style={styles.header} expand="lg">
      <Navbar.Brand style={styles.title}> My Fake E-Commerce</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" style={styles.hamburgerMenuColor} />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link>
            <Link to="/react_ecommerce" style={{ ...styles.separator, ...styles.linksToSections }}>
              Products
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/Login" style={styles.linksToSections}>
              Login
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/Register" style={styles.linksToSections}>
              Register
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="ShoppingCart" style={styles.linksToSections}>
              Shopping Cart ({context.shoppingList.length})
            </Link>
          </Nav.Link>
        </Nav>
        ;
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
