import React from 'react'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import {
    Routes,
    Route,
  } from "react-router-dom";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<ShopPage />}/>
      <Route path="/shop" element={<ShopPage />}/>
      {/* <Route path="/about" element={<About />}/>
      <Route path="/cart" element={<Cart />}/> */}
    </Routes>
  )
}
export default App
