import React, { Fragment, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Loading from "../ui/Loading";
import "./Filter.css";

const Filter = (props) => {
    const [filterParams, setFilterParams] = useState({
        filterBy: "",
        id: "",
        name: "",
    });

    const clickCategoryHandler = (e) => {
        setFilterParams((prevValue) => {
            return {
                ...prevValue,
                filterBy: "category",
                id: e.target.value,
                name: e.target.name,
            };
        });
        props.clickedFilterHandler();
    };
    const clickAuthortHandler = (e) => {
        setFilterParams((prevValue) => {
            return {
                ...prevValue,
                filterBy: "author",
                id: e.target.value,
                name: e.target.name,
            };
        });
        props.clickedFilterHandler();
    };

    const clickStarHandler = (e) => {
        setFilterParams((prevValue) => {
            return {
                ...prevValue,
                filterBy: "star",
                id: e.target.value,
                name: e.target.name,
            };
        });
        props.clickedFilterHandler();
    };

    

    useEffect(() => {
        props.onChangeFilterParamsHandler(filterParams);
        return () => {
            props.changePage(1);
        };
    }, [filterParams]);

    return (
        <Fragment>
            <div className="filter">
                {!props.success && <Loading />}
                {props.success && (
                    <>
                        <p>
                            <b>Filter By</b>
                        </p>
                        <div className="wrapper-filter">
                            <div>
                                <p>
                                    <b>Category</b>
                                </p>
                                {props.bookFilterData.categories.map(
                                    (category) => {
                                        return (
                                            <Button
                                                onClick={clickCategoryHandler}
                                                value={category.id}
                                                name={category.category_name}
                                                className={
                                                    category.category_name ==
                                                        props.filterParams
                                                            .name && "btn-text"
                                                }
                                                key={category.id}
                                            >
                                                {category.category_name
                                                    .charAt(0)
                                                    .toUpperCase() +
                                                    category.category_name.slice(
                                                        1
                                                    )}
                                            </Button>
                                        );
                                    }
                                )}
                            </div>
                        </div>
                    </>
                )}
                {props.success && (
                    <div className="filter">
                        <div className="wrapper-filter">
                            <div>
                                <p>
                                    <b>Author</b>
                                </p>
                                {props.bookFilterData.authors.map((author) => {
                                    return (
                                        <Button
                                            onClick={clickAuthortHandler}
                                            value={author.id}
                                            name={author.author_name}
                                            className={
                                                author.author_name ==
                                                    props.filterParams.name &&
                                                "btn-text"
                                            }
                                            key={author.id}
                                        >
                                            {author.author_name
                                                .charAt(0)
                                                .toUpperCase() +
                                                author.author_name.slice(1)}
                                        </Button>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                )}
                {props.success && (
                    <div className="filter">
                        <div className="wrapper-filter">
                            <div>
                                <p>
                                    <b>Rating Review</b>
                                </p>
                                {props.bookFilterData.stars.map(
                                    (star, index) => {
                                        return (
                                            <Button
                                                onClick={clickStarHandler}
                                                value={index}
                                                name={`${star} Star`}
                                                className={
                                                    `${star} Star` ==
                                                        props.filterParams
                                                            .name && "btn-text"
                                                }
                                                key={index}
                                            >
                                                {star} Star
                                            </Button>
                                        );
                                    }
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </Fragment>
    );
};

export default Filter;
