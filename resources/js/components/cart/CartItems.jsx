import React from 'react'
import { Table } from 'react-bootstrap'
import "./CartItems.css"
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Product from './Product'

const CartItems = () => {
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
                <Product/>
            </td>
            <td className='price'>
                <h5><b>$29.99</b></h5>
                <a>$49.99</a>
            </td>
            <td>
            <div className='quantity'>
                <button className='sub'>
                    <FontAwesomeIcon
                        icon={faMinus}
                        size='1x'
                        className='icon-sub'
                    />
                </button>
                <span><b>1</b></span>
                <button className='plus'>
                    <FontAwesomeIcon
                        icon={faPlus}
                        size='1x'
                        className='icon-plus'
                    />
                </button>
            </div>
                
            </td>
            <td>
                <h5><b>$59.98</b></h5>
            </td>
            </tr>
            <tr>
            <td className='product'>
                <Product/>
                
            </td>
            <td className='price'>
                <h5><b>$29.99</b></h5>
                <a>$49.99</a>
            </td>
            <td>
            <div className='quantity'>
                <button className='sub'>
                    <FontAwesomeIcon
                        icon={faMinus}
                        size='1x'
                        className='icon-sub'
                    />
                </button>
                <span><b>1</b></span>
                <button className='plus'>
                    <FontAwesomeIcon
                        icon={faPlus}
                        size='1x'
                        className='icon-plus'
                    />
                </button>
            </div>
            </td>
            <td>
                <h5><b>$59.98</b></h5>
            </td>
            </tr>
            <tr>
            <td className='product'>
                <Product/>
                
            </td>
            <td className='price'>
                <h5><b>$29.99</b></h5>
                <a>$49.99</a>
            </td>
            <td>
            <div className='quantity'>
                <button className='sub'>
                    <FontAwesomeIcon
                        icon={faMinus}
                        size='1x'
                        className='icon-sub'
                    />
                </button>
                <span><b>1</b></span>
                <button className='plus'>
                    <FontAwesomeIcon
                        icon={faPlus}
                        size='1x'
                        className='icon-plus'
                    />
                </button>
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

export default CartItems