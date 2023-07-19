/** @format */

import { createContext, useReducer } from "react";
import cartReducer from "./CartReducer";

export const Cartcontext = createContext();
export const GlobalCartProvider = ({ children }) => {

  const [state, dispatch] = useReducer(cartReducer, []);

  function addItem(item){
    dispatch({
      type: "ADD_ITEM",
      payload: item
    });
  }

  function addItem(item){
    dispatch({
      type: "ADD_ITEM",
      payload: item
    });
  }

  function increaseItem(item){
    dispatch({
      type: "INCREASE_ITEM",
      payload: item
    });
  }

  function removeItem(item){
    dispatch({
      type: "REMOVE_ITEM",
      payload: item
    });
  }

  function decreaseItem(item){
    dispatch({
      type: "DECREASE_ITEM",
      payload: item
    });
  }
  const info = { state,addItem ,decreaseItem,removeItem,increaseItem };
  return (
    <Cartcontext.Provider value={info}>{children}</Cartcontext.Provider>
  );
};
