import React, { Fragment } from 'react'
import { Container } from 'react-bootstrap'
import About from '../components/about/About'
// import Footer from '../components/footer/Footer'
// import Header from '../components/header/Header'

const AboutPage = () => {
  return (
    <Fragment>
        {/* <Header/> */}
        <Container>
          <About/>
        </Container>
        {/* <Footer fixed="bottom"/> */}
        
    </Fragment>
  )
}

export default AboutPage