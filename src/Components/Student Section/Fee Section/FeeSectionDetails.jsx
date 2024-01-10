import React from 'react'
import './FeeDetailStyle.css'
import { Link } from 'react-router-dom'

const FeeSectionDetails = () => {
    return (
        <div className='Fee-Details-main-div'>
            <div className='Fee-Details-sub-div'>
                <div className='Fee-Details-top-div'>
                    <Link to={'/FeeSection'} style={{ textDecoration: 'none' }}><i className="fa-solid fa-angle-left"></i></Link>
                    <h2>Fee Details</h2>
                </div>
                <div className='Fee-Details-mid-div'>
                    <div className='Fee-Details-mid-div-inner'>
                        <div className='Fee-Details-mid-div-inner-description'>
                            <p className='Fee-Details-mid-div-inner-description-p1'>Type</p>
                            <p className='Fee-Details-mid-div-inner-description-p2'>Bus Fees</p>
                        </div>
                        <div className='Fee-Details-mid-div-inner-description'>
                            <p className='Fee-Details-mid-div-inner-description-p1'>Total Amount</p>
                            <p className='Fee-Details-mid-div-inner-description-p2'>10,0000</p>
                        </div>
                        <div className='Fee-Details-mid-div-inner-description'>
                            <p className='Fee-Details-mid-div-inner-description-p1'>Amount Paid</p>
                            <p className='Fee-Details-mid-div-inner-description-p2'>3,000</p>
                        </div>
                        <div className='Fee-Details-mid-div-inner-description'>
                            <p className='Fee-Details-mid-div-inner-description-p1'>Pending Amount</p>
                            <p style={{color:'red'}} className='Fee-Details-mid-div-inner-description-p2'>7,000</p>
                        </div>
                        <div className='Fee-Details-mid-div-inner-description'>
                            <p className='Fee-Details-mid-div-inner-description-p1'>Last date</p>
                            <p className='Fee-Details-mid-div-inner-description-p2'>15.01.2024</p>
                        </div>
                        <div className='Fee-Details-mid-div-inner-description'>
                            <p className='Fee-Details-mid-div-inner-description-p1'>Late Fine</p>
                            <p className='Fee-Details-mid-div-inner-description-p2'>20rs / Day</p>
                        </div>
                        <div className='Fee-Details-mid-div-pay-button'>
                        <button >Pay Now</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeeSectionDetails