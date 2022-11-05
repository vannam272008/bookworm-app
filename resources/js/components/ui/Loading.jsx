import React from 'react'
import { Spinner } from 'react-bootstrap'
import "./Loading.css"

const Loading = () => {
  return (
    <div className='loading'>
        <Spinner animation="border" role="status" variant="secondary">
        </Spinner>
    </div>
    
  )
}

export default Loading