import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { TodoProvider } from "./context/TodoContext";
import Router from "./routes";
import { GlobalCartProvider } from "./context/CartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

// Rendering the main application component with context providers and router
root.render(
  <BrowserRouter>
    <React.StrictMode>
      {/* Wrapping the application with TodoProvider to manage Todo state */}
      <TodoProvider>
        {/* Wrapping the application with GlobalCartProvider to manage Cart state */}
        <GlobalCartProvider>
          {/* Rendering the Router component to manage routes */}
          <Router />
        </GlobalCartProvider>
      </TodoProvider>
    </React.StrictMode>
  </BrowserRouter>
);
