import React, { Fragment } from "react";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import AboutPage from "./pages/AboutPage";

import { Routes, Route } from "react-router-dom";
import CartPage from "./pages/CartPage";
import DetailPage from "./pages/DetailPage";

const Index = () => {
    return (
        <Fragment>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/shop" element={<ShopPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/detail/:bookId" element={<DetailPage />} />
            </Routes>
        </Fragment>
    );
};
export default Index;
