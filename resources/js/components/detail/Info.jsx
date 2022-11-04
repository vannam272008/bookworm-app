import React from 'react'
import "./Info.css"

const Info = () => {
  return (
    <div className='row-book-detail'>
        <div className="col-img">
            <img src="./images/bookcover/book1.jpg"/>
            <p>By (author)<b>Anna Banks</b></p>
        </div>
        <div className='col-content'>
            <h4>Book Title</h4>
            <a>Book description</a>
            <br/>
            <a>Voluptatem et suscipit ea voluptatibus. Et aspernatur laborum quo accusantium. Accusamus nemo ea illum velit sit.</a>
        </div>
    </div>
  )
}

export default Info