import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Item.css";

const Item = (props) => {
    return (
        <Link to={`/detail/${props.id}`} className="link-item">
            <Card style={{ width: "auto" }}>
                <Card.Img
                    className="card-img"
                    variant="top"
                    src={`./images/bookcover/${
                        props.bookCoverPhoto ? props.bookCoverPhoto : "book1"
                    }.jpg`}
                />
                <Card.Body>
                    <Card.Title>{props.bookTitle}</Card.Title>
                    <Card.Text>{props.authorName}</Card.Text>
                </Card.Body>
                <hr></hr>
                <Card.Text className="card-price">
                    {props.bookPrice !== props.finalPrice && (
                        <span>{props.bookPrice}</span>
                    )}

                    <b>{props.finalPrice}</b>
                </Card.Text>
            </Card>
        </Link>
    );
};

export default Item;
