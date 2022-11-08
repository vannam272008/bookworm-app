import React, { Fragment, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import "./CustomerReview.css";
import DropdownReview from "./DropdownReview";
import Review from "./Review";

const CustomerReview = (props) => {
    const [filterParams, setFilterParams] = useState({
        rating_star: "",
        name: "",
    });

    const clickStarHandler = (e) => {
        setFilterParams((prevValue) => {
            return {
                ...prevValue,
                rating_star: e.target.value,
                name: e.target.value,
            };
        });
        props.clickedFilterHandler();
    };

    const nonClickStarHandler = (e) => {
        setFilterParams((prevValue) => {
            return {
                ...prevValue,
                name: e.target.value,
            };
        });
        props.noneClickedFilterHandler();
    };

    useEffect(() => {
        props.onChangeFilterParamsHandler(filterParams);
        return () => {
            props.onChangePage(1);
        };
    }, [filterParams]);
    return (
        <Fragment>
            <div className="customer-review">
                {props.countStar.map((count, index) => {
                    return (
                        <div key={index} className="count-stars">
                            <div className="title-review">
                                <h4
                                    onClick={nonClickStarHandler}
                                    className={`${
                                        props.isClickedFilter && "title"
                                    }`}
                                >
                                    <b>Customer Review</b>
                                </h4>
                                {props.isClickedFilter && (
                                    <p>
                                        (Filter by{" "}
                                        {props.filterParams.rating_star} star)
                                    </p>
                                )}
                            </div>
                            <div className="avg-star">
                                <a id="avg-star-count">
                                    <b>
                                        {count.avg_star !== null
                                            ? count.avg_star
                                            : 0}
                                    </b>
                                </a>
                                <a>
                                    <b>Star</b>
                                </a>
                            </div>
                            <div className="list-star">
                                <div className="total-star">
                                    <Button
                                        onClick={nonClickStarHandler}
                                        className={
                                            props.filterParams.name == "" &&
                                            "btn-text"
                                        }
                                        value=""
                                    >
                                        (
                                        {count.quantity_star !== null
                                            ? count.quantity_star
                                            : 0}
                                        )
                                    </Button>
                                </div>
                                <p>
                                    <Button
                                        className={
                                            props.filterParams.name == "5" &&
                                            "btn-text"
                                        }
                                        onClick={clickStarHandler}
                                        value="5"
                                    >
                                        5 star (
                                        {count.quantity_5_star !== null
                                            ? count.quantity_5_star
                                            : 0}
                                        )
                                    </Button>{" "}
                                    |{" "}
                                    <Button
                                        className={
                                            props.filterParams.name == "4" &&
                                            "btn-text"
                                        }
                                        onClick={clickStarHandler}
                                        value="4"
                                    >
                                        4 star (
                                        {count.quantity_4_star !== null
                                            ? count.quantity_4_star
                                            : 0}
                                        )
                                    </Button>
                                    |{" "}
                                    <Button
                                        className={
                                            props.filterParams.name == "3" &&
                                            "btn-text"
                                        }
                                        onClick={clickStarHandler}
                                        value="3"
                                    >
                                        3 star (
                                        {count.quantity_3_star !== null
                                            ? count.quantity_3_star
                                            : 0}
                                        )
                                    </Button>{" "}
                                    |{" "}
                                    <Button
                                        className={
                                            props.filterParams.name == "2" &&
                                            "btn-text"
                                        }
                                        onClick={clickStarHandler}
                                        value="2"
                                    >
                                        2 star (
                                        {count.quantity_2_star !== null
                                            ? count.quantity_2_star
                                            : 0}
                                        )
                                    </Button>{" "}
                                    |{" "}
                                    <Button
                                        className={
                                            props.filterParams.name == "1" &&
                                            "btn-text"
                                        }
                                        onClick={clickStarHandler}
                                        value="1"
                                    >
                                        1 star (
                                        {count.quantity_1_star !== null
                                            ? count.quantity_1_star
                                            : 0}
                                        )
                                    </Button>
                                </p>
                            </div>
                        </div>
                    );
                })}
                <DropdownReview
                    meta={props.meta}
                    onChangePage={props.onChangePage}
                    onChangeParams={props.onChangeParams}
                />
                <br></br>
                <br></br>

                <div>
                    {props.reviews.map((review) => {
                        return (
                            <Review
                                key={review.id}
                                review_title={review.review_title}
                                review_date={review.review_date}
                                rating_start={review.rating_start}
                                review_details={review.review_details}
                            />
                        );
                    })}
                </div>
            </div>
        </Fragment>
    );
};

export default CustomerReview;
