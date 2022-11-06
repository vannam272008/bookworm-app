import React from "react";
import { Col, Row, Card } from "react-bootstrap";
import "./WrapperItems.css";
import Item from "../item/Item";

const WrapperItems = (props) => {
    return (
        <div className="wrapper-items">
            <Row className="row-card-items">
                {props.data.map((book) => {
                    return (
                        <Col
                            sm={12}
                            md={6}
                            lg={3}
                            className="col-item"
                            key={book.id}
                        >
                            <Item
                                id={book.id}
                                bookCoverPhoto={book.book_cover_photo}
                                bookTitle={book.book_title}
                                authorName={book.author.author_name}
                                finalPrice={book.final_price}
                                bookPrice={book.book_price}
                            />
                        </Col>
                    );
                })}
            </Row>
        </div>
    );
};

export default WrapperItems;
