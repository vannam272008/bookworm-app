import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import { Provider } from "react-redux";
import Index from "./index";
import store from "./reducers/store";
import "../css/app.css";

import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Index />
        </BrowserRouter>
        ,
    </Provider>,
    document.getElementById("root")
);
