import React, { Fragment } from 'react'
import { Container } from 'react-bootstrap'
import Banner from '../components/Banner/Banner'
import CarouselItem from '../components/Banner/CarouselItem'
import Feature from '../components/feature/Feature'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'


const HomePage = () => {
  return (
    <Fragment>
        
        <Container>
          <Banner/>
          <Feature/>
        </Container>
        <Footer/>
        
    </Fragment>
  )
}

export default HomePage
