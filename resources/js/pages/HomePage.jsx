import React, { Fragment } from 'react'
import { Container } from 'react-bootstrap'
import Feature from '../components/feature/Feature'
import Banner from '../components/banner/Banner'
// import Footer from '../components/footer/Footer'
// import Header from '../components/header/Header'


const HomePage = () => {
  return (
    <Fragment>
    
        {/* <Header/> */}
        <Container>
          <Banner/>
          <Feature/>
        </Container>
        {/* <Footer/> */}
        
    </Fragment>
  )
}

export default HomePage
