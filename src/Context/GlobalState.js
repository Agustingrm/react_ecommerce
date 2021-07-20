import React, { useState } from "react";
import EcommerceContext from "./EcommerceContext";

function GlobalState({ children }) {
  const [userLogin, setUserLogin] = useState(localStorage.getItem("login"));
  const [shoppingList, setShoppingList] = useState([]);

  const loginUser = () => {
    setUserLogin(true);
    localStorage.setItem("login", true);
  };

  const logoutUser = () => {
    setUserLogin(false);
    localStorage.removeItem("login");
  };

  const addToCart = (item) => {
    setShoppingList((shoppingList) => [...shoppingList, item]);
  };

  const deleteItemInCart = (num) => {
    let itemToDelete = shoppingList.splice(num, 1);
    let arrayWithoutItem = shoppingList.filter((article) => article !== itemToDelete);
    setShoppingList(arrayWithoutItem);
  };

  return (
    <EcommerceContext.Provider value={{ userLogin, loginUser, logoutUser, shoppingList, addToCart, deleteItemInCart }}>{children}</EcommerceContext.Provider>
  );
}

export default GlobalState;
