import React from 'react'
import CarouselItem from './CarouselItem'
import "./Banner.css"
import { Container, Row } from 'react-bootstrap'
import BannerTitle from './BannerTitle'

const Banner = () => {
  return (
        <Container className="banner mt-4">
            <BannerTitle/>
            <CarouselItem />
        </Container>
      
    
  )
}

export default Banner
