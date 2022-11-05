import React from 'react'
import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import AboutPage from './pages/AboutPage'

import {
    Routes,
    Route,
    Router,
  } from "react-router-dom";
import CartPage from './pages/CartPage';
import DetailPage from './pages/DetailPage';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Switch from 'react-bootstrap/esm/Switch';



const App = () => {
  return (
    <div>
    <Header/>
    
    <Switch>
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/shop" element={<ShopPage />}/>
      <Route path="/about" element={<AboutPage />}/>
      <Route path="/cart" element={<CartPage />}/>
      <Route path="/detail" element={<DetailPage/>}/>
    </Routes>
      
    </Switch>
    <Footer/>
  
    </div>
    
  )
}
export default App
