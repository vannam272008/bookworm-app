import React from 'react'
import { Dropdown} from 'react-bootstrap'
import "./DropdownReview.css"

const DropdownReview = () => {
  return (
    <div className='dropdown-title'>
                <p>Showing 1-12 of 126 of books</p>
            <div className='dropdown'>
                <Dropdown className='dropdown-sort'>
                    <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                    Sort by date: newest to oldest
                    </Dropdown.Toggle>

                    <Dropdown.Menu >
                    <Dropdown.Item href="#/action-1" active>
                    Sort by date: newest to oldest
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Sort by date: oldest to newest</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown className='dropdown-show'>
                    <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                    Show 20
                    </Dropdown.Toggle>

                    <Dropdown.Menu >
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

export default DropdownReview