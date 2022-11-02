import React from 'react'
import { Button, ButtonGroup, Container } from 'react-bootstrap'
import { Col, Row , Card} from 'react-bootstrap';
import "./Feature.css"
import imgBook from "../../../assets/bookcover/book1.jpg";

const Feature = () => {

  return (
    <Container className='feature-select tex'>
    <div className='btn-featured-books'>
        <h3>Featured Books</h3>
        <ButtonGroup>
          <Button variant="secondary" className='recommend'>Recommend</Button>
          <Button variant="secondary" className='popular'>Popular</Button>
        </ButtonGroup>
    </div>
      
      
    {/* Items Books */}
    <div className='card-items'>
    <Row className='row-card-items'>
      <Col sm={6} md={3}>
        <Card style={{ width: 'auto' }}>
        <Card.Img variant="top" src={imgBook} />
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            </Card.Text>
            <Card.Text>Price</Card.Text>
        </Card.Body>
        </Card>
      </Col>
      
      <Col sm={6} md={3}>
      <Card style={{ width: 'auto' }}>
        <Card.Img variant="top" src={imgBook} />
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            </Card.Text>
            <Card.Text>Price</Card.Text>
        </Card.Body>
        </Card>
      </Col>

      <Col sm={6} md={3}>
      <Card style={{ width: 'auto' }}>
        <Card.Img variant="top" src={imgBook} />
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            </Card.Text>
            <Card.Text>Price</Card.Text>
        </Card.Body>
        </Card>
      </Col>
      <Col sm={6} md={3}>
        <Card style={{ width: 'auto' }}>
            <Card.Img variant="top" src={imgBook} />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Card.Text>Price</Card.Text>
            </Card.Body>
        </Card>
      </Col>
      </Row>

      <Row className='row-card-items'>
      <Col sm={6} md={3}>
        <Card style={{ width: 'auto' }}>
        <Card.Img variant="top" src={imgBook} />
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            </Card.Text>
            <Card.Text>Price</Card.Text>
        </Card.Body>
        </Card>
      </Col>
      
      <Col sm={6} md={3}>
      <Card style={{ width: 'auto' }}>
        <Card.Img variant="top" src={imgBook} />
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            </Card.Text>
            <Card.Text>Price</Card.Text>
        </Card.Body>
        </Card>
      </Col>

      <Col sm={6} md={3}>
      <Card style={{ width: 'auto' }}>
        <Card.Img variant="top" src={imgBook} />
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            </Card.Text>
            <Card.Text>Price</Card.Text>
        </Card.Body>
        </Card>
      </Col>
      <Col sm={6} md={3}>
        <Card style={{ width: 'auto' }}>
            <Card.Img variant="top" src={imgBook} />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Card.Text>Price</Card.Text>
            </Card.Body>
        </Card>
      </Col>
      </Row>
    </div>
      
    </Container>

    
    
  )
}

export default Feature
