import React, { useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";
import "./WrapperTitle.css";
import { useSelector } from "react-redux";

const WrapperTitle = (props) => {
    const meta = useSelector((state) => state.bookShop.meta);
    const [newParams, setNewParams] = useState({
        sort: "",
        show: "",
    });

    const selectSortHandler = (e) => {
        setNewParams((prevValue) => {
            return { ...prevValue, sort: e };
        });
    };
    const selectShowtHandler = (e) => {
        setNewParams((prevValue) => {
            return { ...prevValue, show: e };
        });
    };
    useEffect(() => {
        props.onChangeParam(newParams);
        return () => {
            props.changePage(1);
        };
    }, [newParams]);

    return (
        <div className="wrapper-title">
            <p>
                Showing {meta.from}-{meta.to} of {meta.total} of books
            </p>
            <div className="wrapper-dropdown">
                <Dropdown
                    className="dropdown-sort"
                    onSelect={selectSortHandler}
                >
                    <Dropdown.Toggle
                        className="dropdown-button-dark-example1"
                        variant="secondary"
                    >
                        {newParams.sort === "" && "Sort by on sale"}
                        {newParams.sort === "sale" && "Sort by on sale"}
                        {newParams.sort === "popular" &&
                            "Sort by on popularity"}
                        {newParams.sort === "asc" &&
                            "Sort by price: low to high"}
                        {newParams.sort === "desc" &&
                            "Sort by price: high to low"}
                    </Dropdown.Toggle>

                    <Dropdown.Menu variant="dark">
                        <Dropdown.Item eventKey="sale">
                            Sort by on sale
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="popular">
                            Sort by popularity
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="asc">
                            Sort by price: low to high
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="desc">
                            Sort by price: high to low
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown
                    className="dropdown-show"
                    onSelect={selectShowtHandler}
                >
                    <Dropdown.Toggle
                        className="dropdown-button-dark-example1"
                        variant="secondary"
                    >
                        {newParams.show === "" && "Show 20"}
                        {newParams.show === "5" && "Show 5"}
                        {newParams.show === "15" && "Show 15"}
                        {newParams.show === "20" && "Show 20"}
                        {newParams.show === "25" && "Show 25"}
                    </Dropdown.Toggle>

                    <Dropdown.Menu variant="dark">
                        <Dropdown.Item eventKey="5">Show 5</Dropdown.Item>
                        <Dropdown.Item eventKey="15">Show 15</Dropdown.Item>
                        <Dropdown.Item eventKey="20">Show 20</Dropdown.Item>
                        <Dropdown.Item eventKey="25">Show 25</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
    );
};

export default WrapperTitle;
