import React from 'react'
// import imgBook from "../../../assets/bookcover/book1.jpg";
import { Carousel, Col, Row} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCaretLeft, faCaretRight} from '@fortawesome/free-solid-svg-icons'
import Item from '../item/Item';
import Loading from '../ui/Loading';
import { chunk } from 'lodash';

const CarouselItem = (props) => {
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
      {props.success && 
            chunk(props.bookBannerData, 4)
            .map((arrayBook, index) => {
              return (
                <Carousel.Item key={index}>
                  <Row>
                    {arrayBook.map((book) => {
                      return (
                        <Col sm={12} md={6} lg={3} key={book.id}>
                          <Item 
                            id = {book.id}
                            bookCoverPhoto = {book.book_cover_photo}
                            bookTitle = {book.book_title}
                            authorName = {book.author.author_name}
                            finalPrice = {book.final_price}
                            bookPrice = {book.book_price}
                          />
                      </Col>
                      )
                      
                    })}
                  </Row>
                </Carousel.Item>
                
              );
            })
      }            
        
            
          
          
        
        
       
      
      {/* {props.success && (
        <Carousel.Item>
          {
            chunk((props.bookBannerData, 4))
            .map((arrayBook, index) => {
              return (
                <Row key={index}>
                {arrayBook.map((book) => {
                  return (
                    <Col sm={12} md={6} lg={3} key={book.id}>
                      <Item 
                        id = {book.id}
                        bookCoverPhoto = {book.book_cover_photo}
                        bookTitle = {book.book_title}
                        authorName = {book.author.author_name}
                        finalPrice = {book.final_price}
                        bookPrice = {book.book_price}
                      />
                  </Col>
                  )
                  
                })}
                </Row>
                
              );
            })
          }            
        </Carousel.Item>
            
            
          
        
        )
       
      } */}
      
    </Carousel>
  )
}

export default CarouselItem
