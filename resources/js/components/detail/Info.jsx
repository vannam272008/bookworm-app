import React from "react";
import Loading from "../ui/Loading";
import "./Info.css";

const Info = (props) => {
    const hostname = window.location.host;
    return (
        <div className="row-book-detail">
            <div className="col-img">
                <img
                    src={`http://${hostname}/images/bookcover/${props.bookInfo.book_cover_photo}.jpg`}
                />
                <p>
                    By (author)
                    <b>{props.bookInfo.author.author_name}</b>
                </p>
            </div>
            <div className="col-content">
                <h4>{props.bookInfo.book_title}</h4>
                <a>
                    <b>Book description</b>
                </a>
                <br />
                <a>{props.bookInfo.book_summary}</a>
            </div>
        </div>
    );
};

export default Info;
