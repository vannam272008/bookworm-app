import React from "react";
import "./QuantityOrder.css";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "react-bootstrap";

const QuantityOrder = (props) => {
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
                    <button className="sub">
                        <FontAwesomeIcon
                            icon={faMinus}
                            size="1x"
                            className="icon-sub"
                        />
                    </button>
                    <span>
                        <b>1</b>
                    </span>
                    <button className="plus">
                        <FontAwesomeIcon
                            icon={faPlus}
                            size="1x"
                            className="icon-plus"
                        />
                    </button>
                </div>
                <div className="order-add">
                    <Button className="btn-add">
                        <b>Add to Cart</b>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default QuantityOrder;
