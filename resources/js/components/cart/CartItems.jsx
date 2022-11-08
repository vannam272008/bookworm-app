import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import "./CartItems.css";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Product from "./Product";
import { useSelector } from "react-redux";

const CartItems = () => {
    const booksOrderStorage =
        JSON.parse(localStorage.getItem("booksOrder")) !== null
            ? JSON.parse(localStorage.getItem("booksOrder"))
            : [];

    const show = useSelector((state) => state.bookCart.show);

    const onSubQuantity = () => {};
    return (
        <Table className="table">
            <thead className="thead">
                <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody className="tbody">
                {show ? (
                    <></>
                ) : (
                    booksOrderStorage.map((book) => {
                        return (
                            <tr key={book.book_id}>
                                <td className="product">
                                    <Product book={book} />
                                </td>
                                <td className="price">
                                    <h5>
                                        <b>{`$${book.final_price}`}</b>
                                    </h5>
                                    {book.final_price !== book.book_price && (
                                        <a>{`$${book.book_price}`}</a>
                                    )}
                                </td>
                                <td>
                                    <div className="quantity">
                                        <button
                                            className="sub"
                                            onClick={onSubQuantity}
                                        >
                                            <FontAwesomeIcon
                                                icon={faMinus}
                                                size="1x"
                                                className="icon-sub"
                                            />
                                        </button>
                                        <span>
                                            <b>{book.quantity}</b>
                                        </span>
                                        <button className="plus">
                                            <FontAwesomeIcon
                                                icon={faPlus}
                                                size="1x"
                                                className="icon-plus"
                                            />
                                        </button>
                                    </div>
                                </td>
                                <td>
                                    <h5>
                                        <b>
                                            {`$${
                                                book.quantity * book.final_price
                                            }`}
                                        </b>
                                    </h5>
                                </td>
                            </tr>
                        );
                    })
                )}
            </tbody>
        </Table>
    );
};

export default CartItems;
