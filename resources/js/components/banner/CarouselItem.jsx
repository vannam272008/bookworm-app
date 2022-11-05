import React from 'react'
import imgBook from "../../../assets/bookcover/book1.jpg";
import { Carousel, Col, Row , Card, Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCaretLeft, faCaretRight} from '@fortawesome/free-solid-svg-icons'
import Item from '../item/Item';
import Loading from '../ui/Loading';

const CarouselItem = (props) => {
  console.log(props.bookData);
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
      {!props.success && <Loading/>} 
      {props.success && (
        <Carousel.Item>
            <Row>
            <Col sm={12} md={6} lg={3}>
              <Item />
            </Col>
            
            <Col sm={12} md={6} lg={3}>
              <Item/>
            </Col>

            <Col sm={12} md={6} lg={3}>
              <Item/>
            </Col>
            <Col sm={12} md={6} lg={3}>
              <Item/>
            </Col>
            </Row>
          
        </Carousel.Item>
      )
       
      }
      
    </Carousel>
  )
}

export default CarouselItem
