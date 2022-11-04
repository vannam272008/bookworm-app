import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CustomerReview from './CustomerReview'
import "./Detail.css"
import Info from './Info'
import PostReview from './PostReview'
import QuantityOrder from './QuantityOrder'
import Paginate from "../paginate/Paginate"

const Detail = () => {
  return (
    <Container>
        <h3>Category name</h3>
        <hr/>
        <Row>
            <Col md={8}>
                <Info/>
                <CustomerReview/>
                <Paginate/>
            </Col>
            <Col md={4}>
                <QuantityOrder/>
                <PostReview/>
            </Col>
        </Row>
          
    </Container>
  )
}

export default Detail