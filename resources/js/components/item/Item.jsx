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
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            </Card.Text>
            <Card.Text>Price</Card.Text>
        </Card.Body>
      </Card>
    </Link>
    
  )
}

export default Item