import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Homepage from './pages/homepage/Homepage'
import Cart from './pages/cart/Cart'
import Todo from './pages/Todo/Todo'
import App from './App'
import RouteApp from './pages/routing-page/App'
import Home from './pages/routing-page/Home'
import About from './pages/routing-page/About'
import Contact from './pages/routing-page/Contact'

// Functional component Router for managing routes
export default function Router() {
  return (
    <div>
      {/* Define all the routes using the Routes component */}
      <Routes>
        {/* Route for the homepage, which renders the App component */}
        <Route path="/" element={<App />} />

        {/* Route for the Todo page */}
        <Route path="1/todo" element={<Todo />} />

        {/* Route for the cart homepage */}
        <Route path="2/cart-home" element={<Homepage />} />

        {/* Route for the cart page */}
        <Route path="2/cart" element={<Cart />} />

        {/* Route for the routing-page application */}
        <Route path="3/" element={<RouteApp />} />

        {/* Route for the home page of the routing-page application */}
        <Route path="3/homepage" element={<Home />} />

        {/* Route for the about page of the routing-page application */}
        <Route path="3/about" element={<About />} />

        {/* Route for the contact page of the routing-page application */}
        <Route path="3/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}
