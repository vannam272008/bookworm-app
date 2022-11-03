import React, { Fragment } from 'react'
import { Card } from 'react-bootstrap'
import "./Filter.css"

const Filter = () => {
  return (
    <Fragment>
        <b>Filter By</b>
        <Card border="secondary" className='card-filter'>
            <Card.Body className='card-body'>
            <Card.Title>Category</Card.Title>
            <Card.Text className='card-text'>
                Category_name
            </Card.Text>
            <Card.Text className='card-text'>
                Category #1
            </Card.Text>
            <Card.Text className='card-text'>
                Category #2
            </Card.Text>   
            </Card.Body>
        </Card>

        <Card border="secondary" className='card-filter'>
            
            <Card.Body className='card-body'>
            <Card.Title>Author</Card.Title>
            <Card.Text className='card-text'>
                Author_name
            </Card.Text>
            <Card.Text className='card-text'>
                Author #1
            </Card.Text>
            <Card.Text className='card-text'>
                Author #2
            </Card.Text>
            </Card.Body>
        </Card>
        <Card border="secondary" className='card-filter'>
            
            <Card.Body className='card-body'>
            <Card.Title >Star</Card.Title>
            <Card.Text className='card-text'>
                1 Star
            </Card.Text>
            <Card.Text className='card-text'>
                2 Star
            </Card.Text>
            <Card.Text className='card-text'>
                3 Star
            </Card.Text>
            <Card.Text className='card-text'>
                4 Star
            </Card.Text>
            <Card.Text className='card-text'>
                5 Star
            </Card.Text>
            </Card.Body>
        </Card>
    </Fragment>
    
  )
}

export default Filter
