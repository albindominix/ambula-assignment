/** @format */

import "./Navbar.css";
import { Link, NavLink, Route, Routes } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="nav">
      <Link to="/2/cart-home">home</Link>
      <Link to="/2/cart">cart</Link>
    </div>
  );
};

export default Navbar;
