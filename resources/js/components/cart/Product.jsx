import React from 'react'
import { Button, Card, Table } from 'react-bootstrap'
import "./Product.css"
import CartItem from './CartItem'

const Product = () => {
  return (
    <Table className='table'>
        <thead className='thead'>
            <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            </tr>
        </thead>
        <tbody className='tbody'>
            <tr>
            <td className='product'>
                <CartItem/>
            </td>
            <td className='price'>
                <h5><b>$29.99</b></h5>
                <a>$49.99</a>
            </td>
            <td>
                <div className='quantity'>
                    <button className='sub'>-</button>
                    <span>2</span>
                    <button className='plus'>+</button>
                </div>
            </td>
            <td>
                <h5><b>$59.98</b></h5>
            </td>
            </tr>
            <tr>
            <td className='product'>
                <CartItem/>
                
            </td>
            <td className='price'>
                <h5><b>$29.99</b></h5>
                <a>$49.99</a>
            </td>
            <td>
                <div className='quantity'>
                    <button className='sub'>-</button>
                    <span>2</span>
                    <button className='plus'>+</button>
                </div>
            </td>
            <td>
                <h5><b>$59.98</b></h5>
            </td>
            </tr>
        </tbody>
    </Table>
  )
}

export default Product