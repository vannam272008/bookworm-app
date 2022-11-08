import React from "react";
import { Button, Table } from "react-bootstrap";
import "./CartTotals.css";

const CartTotals = () => {
    const booksOrderStorage = JSON.parse(localStorage.getItem("booksOrder"));
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
                        {booksOrderStorage == null
                            ? 0
                            : booksOrderStorage.map((book) => {
                                  let total = 0.0;
                                  total =
                                      total +
                                      parseFloat(book.final_price) *
                                          book.quantity;
                                  return total;
                              })}
                    </b>
                </h4>
                <Button variant="secondary">
                    <b>Place order</b>
                </Button>
            </div>
        </div>
    );
};

export default CartTotals;
