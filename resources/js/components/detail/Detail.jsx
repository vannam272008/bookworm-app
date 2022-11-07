import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../ui/Loading";
import CustomerReview from "./CustomerReview";
import "./Detail.css";
import Info from "./Info";
import PostReview from "./PostReview";
import QuantityOrder from "./QuantityOrder";
import {
    fetchBookDetailData,
    fetchBookDetailFilterReviewData,
} from "../../services/BookDetailService";
import { useParams } from "react-router-dom";
import PaginateReview from "./PaginateReview";

const Detail = () => {
    const dispatch = useDispatch();
    const bookInfo = useSelector((state) => state.bookDetail.bookInfo);
    const reviews = useSelector((state) => state.bookDetail.reviews);
    const countStar = useSelector((state) => state.bookDetail.countStar);
    const success = useSelector((state) => state.bookDetail.success);
    const meta = useSelector((state) => state.bookDetail.meta);
    const [params, setParams] = useState({
        sort: "asc",
        show: 20,
    });
    const bookId = useParams().bookId;
    const [page, setPage] = useState(1);

    const changePageReview = (number_page) => {
        setPage(number_page);
    };
    const changeParamsReviewHandler = (new_param) => {
        setParams((prevValue) => {
            return {
                ...prevValue,
                sort: new_param.sort !== "" ? new_param.sort : prevValue.sort,
                show: new_param.show !== "" ? new_param.show : prevValue.show,
            };
        });
    };

    //catch events changeFilterParams
    const [filterParams, setFilterParams] = useState({
        rating_star: "",
    });
    const onChangeFilterParamsHandler = (new_filter_param) => {
        setFilterParams((prevValue) => {
            return {
                ...prevValue,
                rating_star: new_filter_param.rating_star,
            };
        });
    };
    const [isClickedFilter, setIsClickedFilter] = useState(false);

    const clickedFilterHandler = () => {
        setIsClickedFilter(true);
    };

    const noneClickedFilterHandler = () => {
        setIsClickedFilter(false);
    };

    useEffect(() => {
        if (isClickedFilter && filterParams.rating_star !== "") {
            return dispatch(
                fetchBookDetailFilterReviewData(
                    bookId,
                    filterParams.rating_star,
                    params.sort,
                    params.show,
                    page
                )
            );
        }
        dispatch(fetchBookDetailData(bookId, params.sort, params.show, page));
    }, [params, page, filterParams, isClickedFilter]);

    console.log(filterParams);
    return (
        <Container>
            {!success && <Loading />}
            {success && (
                <div className="detail">
                    <h3>
                        {bookInfo.category.category_name
                            .charAt(0)
                            .toUpperCase() +
                            bookInfo.category.category_name.slice(1)}
                    </h3>
                    <hr />
                    <Row>
                        <Col md={8}>
                            <Info bookInfo={bookInfo} />
                            <CustomerReview
                                bookInfo={bookInfo}
                                reviews={reviews}
                                countStar={countStar}
                                meta={meta}
                                onChangePage={changePageReview}
                                onChangeParams={changeParamsReviewHandler}
                                clickedFilterHandler={clickedFilterHandler}
                                noneClickedFilterHandler={
                                    noneClickedFilterHandler
                                }
                                onChangeFilterParamsHandler={
                                    onChangeFilterParamsHandler
                                }
                                filterParams={filterParams}
                                isClickedFilter={isClickedFilter}
                            />
                            <PaginateReview
                                meta={meta}
                                page={page}
                                onChangePage={changePageReview}
                            />
                        </Col>
                        <Col md={4}>
                            <QuantityOrder bookInfo={bookInfo} />
                            <PostReview />
                        </Col>
                    </Row>
                </div>
            )}
        </Container>
    );
};

export default Detail;
