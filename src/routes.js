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

export default function Router() {
  return (
    <div >
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="1/todo" element={<Todo />} />
        <Route path="2/cart-home" element={<Homepage />} />
        <Route path="2/cart" element={<Cart />} />
        <Route path="3/" element={<RouteApp />} />
        <Route path="3/homepage"  element={<Home/>} />
        <Route path="3/about" element={<About/>} />
        <Route path="3/contact" element={<Contact/>} />
      </Routes>
    </div>
  )
}
