import React, { Fragment } from 'react'
import { Col, Container, Dropdown, Row } from 'react-bootstrap'
import "./WrapperTitle.css"

const WrapperTitle = () => {
  return (
    <div className='wrapper-title'>
                <p>Showing 1-12 of 126 of books</p>
            <div className='wrapper-dropdown'>
                <Dropdown className='dropdown-sort'>
                    <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                    Sort by on sale
                    </Dropdown.Toggle>

                    <Dropdown.Menu variant="dark">
                    <Dropdown.Item href="#/action-1" active>
                    Sort by on sale
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Sort by popularity</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Sort by price: low to high</Dropdown.Item>
                    <Dropdown.Item href="#/action-4">Sort by price: high to low</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown className='dropdown-show'>
                    <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                    Show 20
                    </Dropdown.Toggle>

                    <Dropdown.Menu variant="dark">
                    <Dropdown.Item href="#/action-1" active>
                    Show 5
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Show 15</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Show 20</Dropdown.Item>
                    <Dropdown.Item href="#/action-4">Show 25</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
            
        
    </div>
  )
}

export default WrapperTitle