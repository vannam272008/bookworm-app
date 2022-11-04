import React from 'react'
import Pagination from 'react-bootstrap/Pagination';
import './Paginate.css'

const Paginate = () => {
  return (
    <Pagination className='paginate'>
      <Pagination.First />
      <Pagination.Prev />
      <Pagination.Item>{1}</Pagination.Item>
      <Pagination.Item>{2}</Pagination.Item>
      <Pagination.Item>{3}</Pagination.Item>
      <Pagination.Next />
      <Pagination.Last />
    </Pagination>
  )
}

export default Paginate