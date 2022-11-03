import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./Detail.css"

const Detail = () => {
  return (
    <Container>
        <h3>Category name</h3>
        <hr/>
        <Row>
            <Col md={8}>
                <Row className='row-book-detail'>
                    <Col md={4} sm={5} className="col-img">
                        <img src="./images/bookcover/book1.jpg"/>
                        <div className='col-span'>
                            <span>By (author)</span><b>Anna Banks</b>
                        </div>
                        
                    </Col>
                    <Col md={8} sm={7} className='col-content'>
                        <h4>Book Title</h4>
                        <h5>Book description</h5>
                        <a>Voluptatem et suscipit ea voluptatibus. Et aspernatur laborum quo accusantium. Accusamus nemo ea illum velit sit.</a>
                    </Col>
                </Row>
            </Col>
            <Col md={4}>

            </Col>
        </Row>
    </Container>
  )
}

export default Detail