import React from 'react'
import imgBook from "../../../assets/bookcover/book1.jpg";
import { Carousel, Col, Row , Card, Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCaretLeft, faCaretRight} from '@fortawesome/free-solid-svg-icons'
import Item from '../item/Item';

const CarouselItem = () => {
  return (
    <Carousel 
        prevLabel={""}
        nextLabel={""}
        prevIcon=
        {
            <FontAwesomeIcon
                icon={faCaretLeft}
                size='6x'
                className='icon-banner'
            />
        }
        nextIcon=
        {
            <FontAwesomeIcon
                icon={faCaretRight}
                size='6x'
                className='icon-banner'
            />
        }
        
    >
    
      <Carousel.Item>
      <Row>
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
        
      </Carousel.Item>

      <Carousel.Item>
      <Row>
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

      </Carousel.Item>

      <Carousel.Item>
      <Row>
      <Col>
        <Item/>
      </Col>
      
      <Col>
        <Item/>
      </Col>
      <Col>
        <Item/>
      </Col>
      <Col>
        <Item/>
      </Col>
      </Row>
      </Carousel.Item>
    </Carousel>
  )
}

export default CarouselItem
