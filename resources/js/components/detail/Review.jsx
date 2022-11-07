import React from "react";
import "./Review.css";
import Moment from "moment";

const Review = (props) => {
    let formatDate = props.review_date;
    formatDate = Moment().format("MM/DD/YYYY");
    return (
        <div className="list-review">
            <div className="review-title">
                <span className="h5">
                    <b>{props.review_title}</b>
                </span>
                <span> | {props.rating_start} starts</span>
            </div>
            <div className="review-content">
                <p>{props.review_details}</p>
            </div>
            <div className="review-date">
                <p>{formatDate}</p>
            </div>
            <hr />
        </div>
    );
};

export default Review;
