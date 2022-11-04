import React from 'react'
import "./Review.css"

const Review = () => {
  return (
    <div className='list-review'>
        <div className='review-title'>
            <span className='h5'><b>Review Title</b></span> 
            <span> | 5 starts</span>
        </div>
        <div className='review-content'>
            <p>With supporting text below as a natural lead-in to additional content</p>
        </div>
        <div className='review-date'>
            <p>
                Month Date, Year
            </p>
        </div>
        <hr/>

    </div>
  )
}

export default Review