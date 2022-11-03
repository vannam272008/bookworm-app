import React from 'react'
import { Link } from 'react-router-dom'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const BannerTitle = () => {
  return (
    <div className="mb-2">
                <div className="row">
                    <div className="col-6 mr-auto my-auto">
                        <p className="h4"><b>On Sale</b></p>
                    </div>
                    <div className="col-6 my-auto justify-content-end d-flex">
                    <Link to="/shop">
                        <button type="button" className="btn btn-secondary btn-view-all">
                            View All <FontAwesomeIcon
                                        icon={faCaretRight}
                                        size='1x'
                                        className='icon-viewAll'
                                    />
                        </button>
                    </Link>
                        
                    </div>
                </div>
    </div>
  )
}

export default BannerTitle