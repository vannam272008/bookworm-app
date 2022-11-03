import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./Detail.css"
import Info from './Info'
import QuantityOrder from './QuantityOrder'

const Detail = () => {
  return (
    <Container>
        <h3>Category name</h3>
        <hr/>
        <Row>
            <Col md={8}>
                <Info/>
            </Col>
            <Col md={4}>
                <QuantityOrder/>
            </Col>
        </Row>
        <Row>
          <Col md={8}>
              <Info/>
          </Col>
          <Col md={4}>
              <QuantityOrder/>
          </Col>
        </Row>
    </Container>
  )
}

export default Detail