import React, { Fragment } from "react";
import { Button, Form } from "react-bootstrap";
import "./PostReview.css";

const PostReview = () => {
    return (
        <div className="post-review">
            <div className="write-review">
                <h5>Write a Review</h5>
                <hr />
            </div>

            <Form className="form-review">
                <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                >
                    <Form.Label>Add a title</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
                <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                >
                    <Form.Label>
                        Details pleseas! Your reviews help other shoppers
                    </Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Select a rating start</Form.Label>
                    <Form.Control as="select">
                        <option value="1">1 Star</option>
                        <option value="2">2 Star</option>
                        <option value="3">3 Star</option>
                        <option value="3">4 Star</option>
                        <option value="3">5 Star</option>
                    </Form.Control>
                </Form.Group>

                <div className="submit-review">
                    <Button className="btn-submit" variant="secondary">
                        Submit Review
                    </Button>
                </div>
            </Form>
        </div>
    );
};

export default PostReview;
