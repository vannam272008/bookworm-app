import React, { Fragment } from 'react'
import { Container } from 'react-bootstrap'
import Cart from '../components/cart/Cart'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'

const CartPage = () => {
  return (
    <Fragment>
        <Header/>
        <Container>
          <Cart/>
        </Container>
        <Footer fixed="bottom"/>
    </Fragment>
  )
}

export default CartPage