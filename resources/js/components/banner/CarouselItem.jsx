import React from 'react'
import imgBook from "../../../assets/bookcover/book1.jpg";
import { Carousel, Col, Row , Card, Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCaretLeft, faCaretRight} from '@fortawesome/free-solid-svg-icons'

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
        
      </Carousel.Item>

      <Carousel.Item>
      <Row>
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

      </Carousel.Item>

      <Carousel.Item>
      <Row>
      <Col>
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
      
      <Col>
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
      <Col>
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
      <Col>
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
      </Carousel.Item>
    </Carousel>
  )
}

export default CarouselItem
