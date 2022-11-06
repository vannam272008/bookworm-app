import React, { Fragment, useEffect, useState } from "react";
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
import { fetchBookShopData } from "../services/BookShopService";
import "./ShopPage.css";

const ShopPage = () => {
    const dispatch = useDispatch();
    const bookFilterData = useSelector((state) => state.bookFilter.bookFilter);
    const bookShopData = useSelector((state) => state.bookShop.bookShop);
    const success = useSelector((state) => state.bookFilter.success);
    const successBookShop = useSelector((state) => state.bookShop.success);
    const [params, setParams] = useState({
        sort: "sale",
        show: 20,
    });

    const [page, setPage] = useState(1);
    const meta = useSelector((state) => state.bookShop.meta);

    const changePage = (number_page) => {
        setPage(number_page);
    };
    const changeParamsHandler = (new_param) => {
        setParams((prevValue) => {
            return {
                ...prevValue,
                sort: new_param.sort !== "" ? new_param.sort : prevValue.sort,
                show: new_param.show !== "" ? new_param.show : prevValue.show,
            };
        });
    };

    useEffect(() => {
        dispatch(fetchBookFilterData());
    }, []);

    useEffect(() => {
        // if(clickFilter){
        //     return  dispatch(fetchBookShopDataFilter(params.sort, params.show, page, type, id));
        // }
        dispatch(fetchBookShopData(params.sort, params.show, page));
    }, [params, page]);
    return (
        <Fragment>
            <Header />
            <Container className="container-shop-show-book">
                <ShopTitle />
                <Row>
                    <Col sm={3} md={3} className="wrapper-filter-shop">
                        <Filter
                            success={success}
                            bookFilterData={bookFilterData}
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
