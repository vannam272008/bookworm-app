import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import "./Product.css"

const Product = () => {
  return (
    <Link to="/detail" className='link-item'>
        <Fragment>
          <img className='img-product' src="./images/bookcover/book1.jpg"/>
          <div className='content'>
              <h5><b>Book Title</b></h5>
              <p>Author name</p>
          </div>
        </Fragment>
    </Link> 
    
  )
}

export default Product