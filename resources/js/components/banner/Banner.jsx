import React from 'react'
import CarouselItem from './CarouselItem'
import "./Banner.css"
import { Container, Row } from 'react-bootstrap'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Banner = () => {
  return (
        <Container className="banner mt-4">
            <div className="mb-2">
                <div className="row">
                    <div className="col-6 mr-auto my-auto">
                        <p className="h4"><b>On Sale</b></p>
                    </div>
                    <div className="col-6 my-auto justify-content-end d-flex">
                        <button type="button" className="btn btn-secondary btn-view-all">
                            View All <FontAwesomeIcon
                                        icon={faCaretRight}
                                        size='1x'
                                        className='icon-viewAll'
                                    />
                        </button>
                    </div>
                </div>
            </div>
            <CarouselItem />
        </Container>
      
    
  )
}

export default Banner
