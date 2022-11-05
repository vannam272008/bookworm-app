import React from 'react'
import { Col, Container, Row} from 'react-bootstrap'
import "./Cart.css"
import CartTotals from './CartTotals'
import CartItems from './CartItems'

const Cart = () => {
  return (
    <Container className='container'>
        <h4><b>Your cart: 3 items</b></h4>
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