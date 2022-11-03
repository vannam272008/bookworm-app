import React, { Fragment } from 'react'
import { Container } from 'react-bootstrap'
import ShopTitle from '../shopTitle/ShopTitle'
import WrapperItems from './WrapperItems'
import WrapperTitle from './WrapperTitle'
import "./Wrapper.css"
import Paginate from '../paginate/Paginate'

const Wrapper = () => {
  return (
    <Fragment>
        <WrapperTitle/>
        <WrapperItems/>
        <Paginate/>
    </Fragment>
        
  )
}

export default Wrapper