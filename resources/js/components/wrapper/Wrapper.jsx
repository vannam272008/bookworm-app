import React, { Fragment } from "react";
import WrapperItems from "./WrapperItems";
import WrapperTitle from "./WrapperTitle";
import "./Wrapper.css";

const Wrapper = (props) => {
    return (
        <Fragment>
            <WrapperTitle
                changePage={props.changePage}
                onChangeParam={props.onChangeParam}
            />
            <WrapperItems data={props.bookShopData} />
        </Fragment>
    );
};

export default Wrapper;
