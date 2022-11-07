import React, { useEffect, useState } from "react";
import { Pagination } from "react-bootstrap";

const PaginateReview = (props) => {
    var listNumberPage = [];
    for (var i = 1; i <= props.meta.last_page; i++) {
        listNumberPage.push(i);
    }
    const [numberPage, setNumberPage] = useState(1);

    const handlerClick = (e) => {
        setNumberPage(e.target.text);
    };

    const prevHandlerClick = () => {
        if (numberPage !== 1) setNumberPage(numberPage - 1);
    };

    const nextHandlerClick = () => {
        if (numberPage < props.meta.last_page) setNumberPage(numberPage + 1);
    };
    useEffect(() => {
        props.onChangePage(numberPage);

        return () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
                /* you can also use 'auto' behaviour
               in place of 'smooth' */
            });
        };
    }, [numberPage]);

    useEffect(() => {
        if (numberPage !== props.page) {
            setNumberPage(props.page);
            props.onChangePage(props.page);
        }
    }, [props.page]);
    return (
        <Pagination className="paginate">
            <Pagination.Prev onClick={prevHandlerClick} />
            {listNumberPage.map((page, index) => {
                return (
                    <Pagination.Item
                        key={index}
                        onClick={handlerClick}
                        className={page == props.page && "page-current"}
                    >
                        {page}
                    </Pagination.Item>
                );
            })}
            <Pagination.Next onClick={nextHandlerClick} />
        </Pagination>
    );
};

export default PaginateReview;
