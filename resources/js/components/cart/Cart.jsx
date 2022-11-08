import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Cart.css";
import CartTotals from "./CartTotals";
import CartItems from "./CartItems";

const Cart = () => {
    const booksOrderStorage = JSON.parse(localStorage.getItem("booksOrder"));
    return (
        <Container className="container">
            <h4>
                <b>
                    Your cart:{" "}
                    {booksOrderStorage == null ? 0 : booksOrderStorage.length}{" "}
                    items
                </b>
            </h4>
            <hr />
            <Row>
                <Col md={8}>
                    <CartItems />
                </Col>
                <Col md={4}>
                    <CartTotals />
                </Col>
            </Row>
        </Container>
    );
};

export default Cart;
