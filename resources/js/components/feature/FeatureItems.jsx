import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Item from '../item/Item'
import Loading from '../ui/Loading'
import "./FeaturedItems.css"
import { chunk } from 'lodash';

const FeatureItems = (props) => {
  return (
    <div className='card-items'>
    {!props.success && <Loading/>} 
    {props.success && 
      chunk(props.bookFeaturedData, 4)
      .map((arrayBook, index) => {
        return (
        <Row className='row-card-items' key={index}>
          {arrayBook.map((book) => {
            return (
              <Col sm={6} md={3} key={book.id}>
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
          })
          }
        </Row>
      )})
    }
    

      {/* <Row className='row-card-items'>
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
      </Row> */}
    </div>
  )
}

export default FeatureItems