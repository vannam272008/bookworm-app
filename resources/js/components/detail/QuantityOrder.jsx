import React, { useEffect, useState } from "react";
import "./QuantityOrder.css";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "react-bootstrap";

const QuantityOrder = (props) => {
    const bookStorage = JSON.parse(localStorage.getItem("booksOrder"));
    const booksOrder = [];

    if (bookStorage !== null) {
        bookStorage.map((book) => {
            booksOrder.push(book);
        });
    }
    const [quantity, setQuantity] = useState(1);
    const onSubQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const onAddQuantity = () => {
        if (quantity < 8) {
            setQuantity(quantity + 1);
        }
    };

    const bookDetail = {
        book_id: props.bookInfo.id,
        book_cover_photo: props.bookInfo.book_cover_photo,
        author_name: props.bookInfo.author.author_name,
        book_title: props.bookInfo.book_title,
        book_price: props.bookInfo.book_price,
        final_price: props.bookInfo.final_price,
        quantity: 0,
    };
    console.log(quantity);

    const onAddTotalQuantity = () => {
        var flag = false;
        if (booksOrder.length === 0) {
            booksOrder.push(bookDetail);
            localStorage.setItem("booksOrder", JSON.stringify(booksOrder));
        }
        booksOrder.map((book) => {
            if (book.book_id == bookDetail.book_id) {
                if (book.quantity < 8) {
                    book.quantity = book.quantity + quantity;
                }
                if (book.quantity > 8) {
                    book.quantity = 8;
                }

                localStorage.setItem("booksOrder", JSON.stringify(booksOrder));
                flag = true;
            }
        });
        if (flag == false) {
            bookDetail.quantity = quantity;
            booksOrder.push(bookDetail);
            localStorage.setItem("booksOrder", JSON.stringify(booksOrder));
        }
    };

    return (
        <div className="order">
            <div className="order-price">
                <span>
                    {props.bookInfo.book_price !== props.bookInfo.final_price
                        ? props.bookInfo.book_price
                        : ""}
                </span>
                <a>
                    <b> {props.bookInfo.final_price}</b>
                </a>
                <hr />
            </div>

            <div className="order-quantity">
                <a>Quantity</a>
                <div className="quantity">
                    <Button className="btn-sub" onClick={onSubQuantity}>
                        <FontAwesomeIcon
                            icon={faMinus}
                            size="1x"
                            className="icon-sub"
                        />
                    </Button>
                    <span>
                        <b>{quantity}</b>
                    </span>
                    <Button className="btn-plus" onClick={onAddQuantity}>
                        <FontAwesomeIcon
                            icon={faPlus}
                            size="1x"
                            className="icon-plus"
                        />
                    </Button>
                </div>
                <div className="order-add">
                    <Button className="btn-add" onClick={onAddTotalQuantity}>
                        <b>Add to Cart</b>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default QuantityOrder;
