import React, { Fragment } from 'react'
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