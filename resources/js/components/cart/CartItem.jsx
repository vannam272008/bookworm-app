import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const CartItem = () => {
  return (
    <Link to="/detail" className='link-item'>
        <Fragment>
          <img src="./images/bookcover/book1.jpg"/>
          <div className='content'>
              <h5><b>Book Title</b></h5>
              <a>Author name</a>
          </div>
        </Fragment>
    </Link> 
    
  )
}

export default CartItem