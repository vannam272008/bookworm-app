import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./Product.css";

const Product = (props) => {
    const hostname = window.location.host;
    return (
        <Link to={`/detail/${props.book.book_id}`} className="link-item">
            <Fragment>
                <img
                    className="img-product"
                    src={`http://${hostname}/images/bookcover/${
                        props.book.book_cover_photo !== null
                            ? props.book.book_cover_photo
                            : "book_1"
                    }.jpg`}
                />
                <div className="content">
                    <h5>
                        <b>{props.book.book_title}</b>
                    </h5>
                    <p>{props.book.author_name}</p>
                </div>
            </Fragment>
        </Link>
    );
};

export default Product;
