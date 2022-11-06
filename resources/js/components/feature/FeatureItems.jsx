import React from "react";
import { Col, Row } from "react-bootstrap";
import Item from "../item/Item";
import Loading from "../ui/Loading";
import "./FeaturedItems.css";
import { chunk } from "lodash";

const FeatureItems = (props) => {
    return (
        <div className="card-items">
            <Row className="row-card-items">
                {!props.success && <Loading />}
                {props.success &&
                    props.bookFeaturedData.map((book) => {
                        return (
                            <Col
                                sm={12}
                                md={6}
                                lg={3}
                                key={book.id}
                                className="col-item"
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

export default FeatureItems;
