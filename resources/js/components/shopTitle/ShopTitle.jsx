import React, { Fragment } from 'react'
import "./ShopTitle.css"

const ShopTitle = () => {
  return (
    <Fragment>
        <div className="main-title">
            <div className="main-title-information">
                <b className="main-title-information-1">Books</b>
                <span className="ml-3"> (Filtered by Category #1)</span>
            </div>
            <hr/>
        </div>
    </Fragment>
    
  )
}

export default ShopTitle