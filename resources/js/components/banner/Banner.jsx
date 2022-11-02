import React from 'react'
import CarouselItem from './CarouselItem'
import "./Banner.css"
import { Container, Row } from 'react-bootstrap'

const Banner = () => {
  return (
        <Container className="banner mt-4">
            <div className="mx-5 mb-2">
                <div className="row">
                    <div className="col-6 mr-auto my-auto">
                        <p className="h4"><b>On Sale</b></p>
                    </div>
                    <div className="col-6 my-auto justify-content-end d-flex">
                        <button type="button" className="btn btn-secondary btn-view-all">
                            View All <i className="fas fa-caret-right"></i>
                        </button>
                    </div>
                </div>
            </div>
            <CarouselItem />
        </Container>
      
    
  )
}

export default Banner
