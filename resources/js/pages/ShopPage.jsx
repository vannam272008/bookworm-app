import React, { Fragment, useCallback, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Filter from "../components/filter/Filter";
import Paginate from "../components/paginate/Paginate";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import ShopTitle from "../components/shopTitle/ShopTitle";
import Loading from "../components/ui/Loading";
import Wrapper from "../components/wrapper/Wrapper";
import { fetchBookFilterData } from "../services/BookFilterService";
import {
    fetchBookShopData,
    fetchBookShopFilterData,
} from "../services/BookShopService";
import "./ShopPage.css";

const ShopPage = () => {
    const dispatch = useDispatch();
    const bookFilterData = useSelector((state) => state.bookFilter.bookFilter);
    const bookShopData = useSelector((state) => state.bookShop.bookShop);
    const success = useSelector((state) => state.bookFilter.success);
    const successBookShop = useSelector((state) => state.bookShop.success);
    const meta = useSelector((state) => state.bookShop.meta);

    //catch events changeParams
    const [params, setParams] = useState({
        sort: "sale",
        show: 20,
    });
    const changeParamsHandler = (new_param) => {
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
        filterBy: "",
        id: "",
        name: "",
    });
    const onChangeFilterParamsHandler = (new_filter_param) => {
        setFilterParams((prevValue) => {
            return {
                ...prevValue,
                filterBy: new_filter_param.filterBy,
                id: new_filter_param.id,
                name: new_filter_param.name,
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

    //catch events changePages
    const [page, setPage] = useState(1);
    const changePage = (number_page) => {
        setPage(number_page);
    };

    //useEffect
    useEffect(() => {
        dispatch(fetchBookFilterData());
    }, []);

    useEffect(() => {
        if (isClickedFilter && filterParams.filterBy !== "") {
            return dispatch(
                fetchBookShopFilterData(
                    filterParams.filterBy,
                    filterParams.id,
                    params.sort,
                    params.show,
                    page
                )
            );
        }
        dispatch(fetchBookShopData(params.sort, params.show, page));
    }, [params, page, filterParams, isClickedFilter]);

    return (
        <Fragment>
            <Header />
            <Container className="container-shop-show-book">
                <ShopTitle
                    noneClickedFilterHandler={noneClickedFilterHandler}
                    isClickedFilter={isClickedFilter}
                    filterParams={filterParams}
                    setFilterParams={setFilterParams}
                />
                <Row>
                    <Col sm={3} md={3} className="wrapper-filter-shop">
                        <Filter
                            success={success}
                            bookFilterData={bookFilterData}
                            clickedFilterHandler={clickedFilterHandler}
                            onChangeFilterParamsHandler={
                                onChangeFilterParamsHandler
                            }
                            changePage={changePage}
                            filterParams={filterParams}
                        />
                    </Col>
                    <Col sm={9} md={9}>
                        {!successBookShop && <Loading />}
                        {successBookShop && (
                            <>
                                <Wrapper
                                    changePage={changePage}
                                    onChangeParam={changeParamsHandler}
                                    success={successBookShop}
                                    bookShopData={bookShopData}
                                />
                                <Paginate
                                    meta={meta}
                                    page={page}
                                    changePage={changePage}
                                />
                            </>
                        )}
                    </Col>
                </Row>
            </Container>
            <Footer />
        </Fragment>
    );
};
export default ShopPage;
