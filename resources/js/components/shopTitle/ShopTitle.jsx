import React, { Fragment } from "react";
import "./ShopTitle.css";

const ShopTitle = (props) => {
    const nonClickHandler = (e) => {
        props.setFilterParams((prevValue) => {
            return {
                ...prevValue,
                name: e.target.value,
            };
        });
        props.noneClickedFilterHandler();
    };
    return (
        <Fragment>
            <div className="main-title">
                <div className="main-title-information">
                    <b
                        className="main-title-information-1"
                        onClick={nonClickHandler}
                        value=""
                    >
                        Books
                    </b>
                    {props.isClickedFilter && (
                        <span className="ml-3">
                            {" "}
                            (Filtered by {props.filterParams.name})
                        </span>
                    )}
                </div>
                <hr />
            </div>
        </Fragment>
    );
};

export default ShopTitle;
