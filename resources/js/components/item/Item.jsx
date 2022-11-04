import React from 'react'
import {Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Item.css"

const Item = () => {
  return (
    <Link to="/detail" className='link-item'>
      <Card style={{ width: 'auto' }} >
        <Card.Img variant="top" src="./images/bookcover/book1.jpg" />
        <Card.Body>
            <Card.Title>Book Title</Card.Title>
            <Card.Text className='card-text'>
            Author name
            </Card.Text>
            <Card.Text className='card-text'>
            <span>OriginalPrice</span>
            <a><b>Price</b></a>
            </Card.Text>
        </Card.Body>
      </Card>
    </Link>
    
  )
}

export default Item