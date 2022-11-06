import React, { useCallback, useEffect, useState } from "react";
import { Button, ButtonGroup, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchBookPopularData } from "../../services/BookPopularService";
import { fetchBookRecommendData } from "../../services/BookRecommendService";
import "./Feature.css";
import FeatureItems from "./FeatureItems";

// props vs state
const Feature = () => {
    const dispatch = useDispatch();
    const bookRecommendData = useSelector(
        (state) => state.bookRecommend.bookRecommend
    );
    const bookPopularData = useSelector(
        (state) => state.bookPopular.bookPopular
    );
    // const bookFeaturedData = useSelector(state => state.bookRecommend.bookRecommend);

    // const [bookFeaturedData, setBookFeaturedData] = useState([]);
    const [isClicked, setIsClicked] = useState("recommend");
    const [success, setSuccess] = useState(false);

    function handleSelectChange(e) {
        setIsClicked(e.target.value);
    }

    useEffect(() => {
        dispatch(fetchBookRecommendData());
        dispatch(fetchBookPopularData());
        setSuccess(true);
    }, []);
    console.log(bookRecommendData);

    const handleOnClickRecommend = useCallback(() => {
        dispatch(fetchBookRecommendData());
    }, [bookRecommendData]);

    const hanldeOnClickPopular = useCallback(() => {
        dispatch(fetchBookPopularData());
    }, [bookPopularData]);

    return (
        <Container className="feature-select tex">
            <div className="btn-featured-books">
                <h3>Featured Books</h3>
                <ButtonGroup
                    typeof="radio"
                    name="options"
                    value={isClicked}
                    onClick={handleSelectChange}
                >
                    <Button
                        variant="light"
                        value="recommend"
                        className="recommend selected"
                        onClick={handleOnClickRecommend}
                    >
                        Recommend
                    </Button>
                    <Button
                        variant="light"
                        value="popular"
                        className="popular"
                        onClick={hanldeOnClickPopular}
                    >
                        Popular
                    </Button>
                </ButtonGroup>
            </div>
            <FeatureItems
                success={success}
                bookFeaturedData={
                    isClicked === "recommend"
                        ? bookRecommendData
                        : isClicked === "popular"
                        ? bookPopularData
                        : []
                }
            />
        </Container>
    );
};

export default Feature;
