import React from 'react'
import { Button, Table } from 'react-bootstrap'
import "./CartTotals.css"

const CartTotals = () => {
  return (
    <div className='cart-totals'>
        <div className='cart-title'>
            <a><b>Cart Totals</b></a>
        </div>
        <div className='cart-content'>
            <h4><b>$99.97</b></h4>
            <Button variant="secondary"><b>Place order</b></Button>
        </div>
    </div>
  )
}

export default CartTotals