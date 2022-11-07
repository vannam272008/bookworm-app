import React, { useState, useEffect } from "react";
import Pagination from "react-bootstrap/Pagination";
import "./Paginate.css";

const Paginate = (props) => {
    // const [clickPage, setClickPage] = useState({ page: "" });
    const [numberPage, setNumberPage] = useState(1);

    const handlerClick = (e) => {
        setNumberPage(e.target.text);
    };

    const prevHandlerClick = () => {
        if (numberPage !== 1) setNumberPage(numberPage - 1);
    };

    const nextHandlerClick = () => {
        if (numberPage < props.meta.links.length - 1)
            setNumberPage(numberPage + 1);
    };
    useEffect(() => {
        props.changePage(numberPage);
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
            props.changePage(props.page);
        }
    }, [props.page]);
    // console.log(props.meta.links);

    return (
        <Pagination className="paginate">
            <Pagination.Prev onClick={prevHandlerClick} />
            {props.meta.links
                .filter((e, i) => {
                    return i != 0 && i < props.meta.links.length - 1;
                })
                .map((page, index) => {
                    return (
                        <Pagination.Item
                            key={index}
                            onClick={handlerClick}
                            className={
                                page.label == props.page && "page-current"
                            }
                        >
                            {page.label}
                        </Pagination.Item>
                    );
                })}
            <Pagination.Next onClick={nextHandlerClick} />
        </Pagination>
    );
};

export default Paginate;
