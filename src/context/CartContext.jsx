

import { createContext, useReducer } from "react";
import cartReducer from "./CartReducer";

export const Cartcontext = createContext();

// Creating the GlobalCartProvider component to manage cart state
export const GlobalCartProvider = ({ children }) => {
  // Initializing cart state using useReducer and cartReducer
  const [state, dispatch] = useReducer(cartReducer, []);

  // Function to add an item to the cart
  function addItem(item) {
    dispatch({
      type: "ADD_ITEM",
      payload: item,
    });
  }

  // Function to increase the quantity of an item in the cart
  function increaseItem(item) {
    dispatch({
      type: "INCREASE_ITEM",
      payload: item,
    });
  }

  // Function to remove an item from the cart
  function removeItem(item) {
    dispatch({
      type: "REMOVE_ITEM",
      payload: item,
    });
  }

  // Function to decrease the quantity of an item in the cart
  function decreaseItem(item) {
    dispatch({
      type: "DECREASE_ITEM",
      payload: item,
    });
  }
   // Object containing state and cart-related functions to be passed to the context provider
  const info = { state,addItem ,decreaseItem,removeItem,increaseItem };
  return (
    // Returning the Cartcontext.Provider with the info object as the value
    <Cartcontext.Provider value={info}>{children}</Cartcontext.Provider>
  );
};
