import { chunk } from "lodash";
import React, { Fragment } from "react";
import { Button, Card } from "react-bootstrap";
import Loading from "../ui/Loading";
import "./Filter.css";

const Filter = (props) => {
    return (
        <Fragment>
            {!props.success && <Loading />}
            {props.success && (
                <div className="filter">
                    <p><b>Filter By</b></p>
                    <div className="wrapper-filter">
                        <div>
                            <p><b>Category</b></p>
                            {props.bookFilterData.categories
                                .map((category) => {
                                    return (
                                        <Button 
                                            className="btn-text"
                                            key={category.id}
                                        >
                                            {category.category_name}
                                        </Button>
                                    );
                                })}
                        </div>
                    </div>
                </div>
            )}
            {props.success && (
                    <Card border="secondary" className="card-filter">
                        <Card.Body className="card-body">
                            <Card.Title>Author</Card.Title>
                            {props.bookFilterData.authors
                            .map((author) => {
                                return (
                                    <Card.Text className="card-text" key={author.id}>
                                        {author.author_name}
                                    </Card.Text>
                                )
                            })
                            }
                            
                        </Card.Body>
                    </Card>
            )}
            {props.success && (       
                    <Card border="secondary" className="card-filter">
                        <Card.Body className="card-body">
                            <Card.Title>Star</Card.Title>
                            {props.bookFilterData.stars
                            .map((star,index) => {
                                return (
                                    <Card.Text key={index} className="card-text">
                                    {star} Star</Card.Text>
                                )
                            })
                            }
                        </Card.Body>
                    </Card>
            )}
        </Fragment>
    );
}

export default Filter;
