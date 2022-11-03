import React, { Fragment } from 'react'
import { Container } from 'react-bootstrap'
import Detail from '../components/detail/Detail'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'

const DetailPage = () => {
  return (
    <Fragment>
        <Header/>
        <Container>
          <Detail/>
        </Container>
        <Footer/>
    </Fragment>
  )
}

export default DetailPage