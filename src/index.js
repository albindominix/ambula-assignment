import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { TodoProvider } from "./context/TodoContext";
import Router from "./routes";
import { GlobalCartProvider } from "./context/CartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <TodoProvider>
      <GlobalCartProvider>
        <Router />
        </GlobalCartProvider>
      </TodoProvider>
    </React.StrictMode>
  </BrowserRouter>
);
