import React, { useState } from "react";
import EcommerceContext from "./EcommerceContext";

function GlobalState({ children }) {
  const [userLogin, setUserLogin] = useState(localStorage.getItem("login"));
  const [shoppingList, setShoppingList] = useState([])

  const loginUser = () => {
    setUserLogin(true);
    localStorage.setItem("login", true);
  };

  const logoutUser = () => {
    setUserLogin(false);
    localStorage.removeItem("login");
  };

  const addToCart = (item) => {
      setShoppingList(shoppingList => [...shoppingList,item])
  }

  return <EcommerceContext.Provider value={{ userLogin, loginUser, logoutUser, shoppingList, addToCart }}>{children}</EcommerceContext.Provider>;
}

export default GlobalState;
