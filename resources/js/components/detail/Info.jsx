import React from 'react'
import { Col, Row } from 'react-bootstrap'
import "./Info.css"

const Info = () => {
  return (
    <Row className='row-book-detail'>
        <Col md={3} sm={5} className="col-img">
            <img src="./images/bookcover/book1.jpg"/>
            <div className='col-span'>
                <span>By (author)</span><b>Anna Banks</b>
            </div>
            
        </Col>
        <Col md={9} sm={7} className='col-content'>
            <h4>Book Title</h4>
            <a>Book description</a>
            <br/>
            <a>Voluptatem et suscipit ea voluptatibus. Et aspernatur laborum quo accusantium. Accusamus nemo ea illum velit sit.</a>
        </Col>
    </Row>
  )
}

export default Info