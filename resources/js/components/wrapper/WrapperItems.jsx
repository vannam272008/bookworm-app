import React from 'react'
import { Col, Row , Card} from 'react-bootstrap';
import "./WrapperItems.css"
import Item from '../item/Item';

const WrapperItems = () => {
  return (
    <div className='card-items'>
    <Row className='row-card-items'>
      <Col sm={6} md={3}>
        <Item/>
      </Col>
      
      <Col sm={6} md={3}>
      <Item/>
      </Col>

      <Col sm={6} md={3}>
      <Item/>
      </Col>
      <Col sm={6} md={3}>
        <Item/>
      </Col>
      </Row>

      <Row className='row-card-items'>
      <Col sm={6} md={3}>
        <Item/>
      </Col>
      
      <Col sm={6} md={3}>
      <Item/>
      </Col>

      <Col sm={6} md={3}>
      <Item/>
      </Col>
      <Col sm={6} md={3}>
        <Item/>
      </Col>
      </Row>
      <Row className='row-card-items'>
      <Col sm={6} md={3}>
        <Item/>
      </Col>
      
      <Col sm={6} md={3}>
      <Item/>
      </Col>

      <Col sm={6} md={3}>
      <Item/>
      </Col>
      <Col sm={6} md={3}>
        <Item/>
      </Col>
      </Row>
      <Row className='row-card-items'>
      <Col sm={6} md={3}>
        <Item/>
      </Col>
      
      <Col sm={6} md={3}>
      <Item/>
      </Col>

      <Col sm={6} md={3}>
      <Item/>
      </Col>
      <Col sm={6} md={3}>
        <Item/>
      </Col>
      </Row>
    </div>
      
  )
}

export default WrapperItems