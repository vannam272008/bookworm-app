import React from 'react'
import { Button, ButtonGroup, Container } from 'react-bootstrap'
import { Col, Row} from 'react-bootstrap';
import "./Feature.css"
import Item from '../item/Item';

const Feature = () => {

  return (
    <Container className='feature-select tex'>
    <div className='btn-featured-books'>
        <h3>Featured Books</h3>
        <ButtonGroup>
          <Button variant="light" className='recommend'>Recommend</Button>
          <Button variant="light" className='popular'>Popular</Button>
        </ButtonGroup>
    </div>
      
      
    {/* Items Books */}
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
    </div>
      
    </Container>

    
    
  )
}

export default Feature
