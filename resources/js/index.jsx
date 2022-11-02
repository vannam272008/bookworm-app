import React from 'react'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";


const index = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/shop" element={<Shop />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/cart" element={<Cart />}/>
    </Routes>
  )
}
export default index
