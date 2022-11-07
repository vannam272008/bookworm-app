import React, { useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";
import "./DropdownReview.css";

const DropdownReview = (props) => {
    const meta = props.meta;
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
        props.onChangeParams(newParams);
        return () => {
            props.onChangePage(1);
        };
    }, [newParams]);
    return (
        <div className="dropdown-title">
            <p>
                Showing {meta.from}-{meta.to} of {meta.total} of books
            </p>
            <div className="dropdown">
                <Dropdown
                    className="dropdown-sort"
                    onSelect={selectSortHandler}
                >
                    <Dropdown.Toggle
                        id="dropdown-button"
                        variant="secondary"
                    >
                        {newParams.sort === "" &&
                            "Sort by date: newest to oldest"}
                        {newParams.sort === "desc" &&
                            "Sort by date: newest to oldest"}
                        {newParams.sort === "asc" &&
                            "Sort by date: oldest to newest"}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item eventKey="desc" active>
                            Sort by date: newest to oldest
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="asc">
                            Sort by date: oldest to newest
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown
                    className="dropdown-show"
                    onSelect={selectShowtHandler}
                >
                    <Dropdown.Toggle
                        id="dropdown-button-dark-example1"
                        variant="secondary"
                    >
                        {newParams.show === "" && "Show 20"}
                        {newParams.show === "5" && "Show 5"}
                        {newParams.show === "15" && "Show 15"}
                        {newParams.show === "20" && "Show 20"}
                        {newParams.show === "25" && "Show 25"}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
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

export default DropdownReview;
