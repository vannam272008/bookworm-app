import React from 'react'
import { Col, Container, Row, Table } from 'react-bootstrap'
import "./Cart.css"
import CartItems from './Product'
import CartTotals from './CartTotals'

const Cart = () => {
  return (
    <Container>
        <h4>Your cart: 3 items</h4>
        <hr/>
        <Row>
            <Col md={8}>
                <CartItems/>
            </Col>
            <Col md={4}>
                <CartTotals/>  
            </Col>
        </Row>
    </Container>
    
  )
}

export default Cart