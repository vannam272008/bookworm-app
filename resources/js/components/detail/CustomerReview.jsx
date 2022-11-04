import React, { Fragment } from 'react'
import { Row } from 'react-bootstrap'
import "./CustomerReview.css"
import DropdownReview from './DropdownReview'
import Review from './Review'

const CustomerReview = () => {
  return (
    <Fragment>
<div className='customer-review'>
      <div className='title-review'>
        <h4><b>Customer Review</b></h4>
        <p>(Filter by 5 star)</p>
      </div>
        <div className='avg-star'>
          <a id='avg-star-count'><b>4.6</b></a>
          <a><b>Star</b></a>
        </div>
        <div className='list-star'>
        <div className='total-star'>
          <a>(3.134)</a>
        </div>
          <p>
            <span>5 star (200)</span> | <span>4 star (200)</span>
              | <span>3 star (200)</span> | <span>2 star (200)</span> | <span>1 star (200)</span>
          </p>
        </div>
        <DropdownReview/>
        <br></br>
        <br></br>

        <div>
        <Review/>
        <Review/>
        <Review/>
        </div>
        
      
    </div>
      
    
    
    </Fragment>
    
  )
}

export default CustomerReview