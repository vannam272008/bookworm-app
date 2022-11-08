import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import "./CartTotals.css";
import { placeOrder, isChangeShow } from "../../services/BookCartService";
import { useParams } from "react-router-dom";

const CartTotals = () => {
    const userId = useParams().userId;
    const booksOrderStorage =
        JSON.parse(localStorage.getItem("booksOrder")) !== null
            ? JSON.parse(localStorage.getItem("booksOrder"))
            : [];
    let totalPrice = 0.0;
    const dispatch = useDispatch();
    const show = useSelector((state) => state.bookCart.show);

    const onPlaceOrder = () => {
        dispatch(placeOrder(booksOrderStorage, userId));
        localStorage.clear();
        dispatch(isChangeShow());
    };

    return (
        <div className="cart-totals">
            <div className="cart-title">
                <a>
                    <b>Cart Totals</b>
                </a>
            </div>
            <div className="cart-content">
                <h4>
                    <b>
                        {show
                            ? 0
                            : booksOrderStorage.map((book) => {
                                  totalPrice =
                                      totalPrice +
                                      parseFloat(book.final_price) *
                                          book.quantity;
                              }) && `$${Math.floor(totalPrice * 100) / 100}`}
                    </b>
                </h4>
                <Button variant="secondary" onClick={onPlaceOrder}>
                    <b>Place order</b>
                </Button>
            </div>
        </div>
    );
};

export default CartTotals;
