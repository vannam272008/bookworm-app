import React, { Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Filter from '../components/filter/Filter'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import ShopTitle from '../components/shopTitle/ShopTitle'
import Wrapper from '../components/wrapper/Wrapper'

const ShopPage = () => {
  return (
    <Fragment>
        <Header/>
        <Container>
        <ShopTitle/>
        <Row>
            <Col sm={3} md={3}>
                <Filter/>
            </Col>
            <Col sm={9} md={9}>
                <Wrapper/>
            </Col>      
            
        </Row>
        
        </Container>
        <Footer/>
    </Fragment>
    
  )
}
export default ShopPage
