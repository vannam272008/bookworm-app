import React from 'react'
import {Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Item.css"

const Item = (props) => {
  return (
    <Link to="/detail" className='link-item'>
      <Card style={{ width: 'auto' }} >
        <Card.Img variant="top" src={`./images/bookcover/${props.book_cover_photo}.jpg`} />
        <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text className='card-text'>
            {props.name}
            </Card.Text>
            <Card.Text className='card-text'>
            <span>{props.book_price}</span>
            <b>{props.final_price}</b>
            </Card.Text>
        </Card.Body>
      </Card>
    </Link>
    
  )
}

export default Item