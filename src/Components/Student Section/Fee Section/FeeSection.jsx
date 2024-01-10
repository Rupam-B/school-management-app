import React from 'react'
import './FeeSectionStyle.css'
import { Link } from 'react-router-dom'

const FeeSection = () => {
    return (
        <div className='Fee-Section-main-div'>
            <div className='Fee-Section-sub-div'>
                <div className='Fee-Section-top-div'>
                <Link to={'/TeachersHome'} style={{ textDecoration: 'none' }}><i className="fa-solid fa-angle-left"></i></Link>
                    <h2>Fee Section</h2>
                </div>
                <div className='Fee-Section-mid-div'>
                    <div className='Fee-Section-mid-div-inner'>
                        <div className='Fee-Section-mid-div-inner-fees'>
                            <h5>Tution Fees</h5>
                            <div className='Fee-Section-mid-div-inner-fees-status'>
                                <p style={{backgroundColor:'rgba(0, 163, 0, 0.05)'}}>Paid</p>
                               <Link to={'/FeeDetails'}><i className="fa-solid fa-angle-right"></i></Link> 
                            </div>
                            
                        </div>
                        <div className='Fee-Section-mid-div-inner-fees'>
                            <h5>Bus Fees</h5>
                            <div className='Fee-Section-mid-div-inner-fees-status'>
                                <p style={{backgroundColor:'rgb(255, 6, 6,0.1)'}}>Unpaid</p>
                               <Link to={'/FeeDetails'}><i className="fa-solid fa-angle-right"></i></Link> 
                            </div>
                            
                        </div>
                        <div className='Fee-Section-mid-div-inner-fees'>
                            <h5>Uniform Fees</h5>
                            <div className='Fee-Section-mid-div-inner-fees-status'>
                                <p style={{backgroundColor:'rgba(0, 163, 0, 0.05)'}}>Paid</p>
                               <Link to={'/FeeDetails'}><i className="fa-solid fa-angle-right"></i></Link> 
                            </div>
                            
                        </div>
                        <div className='Fee-Section-mid-div-inner-fees'>
                            <h5>Hostel Fees</h5>
                            <div className='Fee-Section-mid-div-inner-fees-status'>
                                <p style={{backgroundColor:'rgba(0, 163, 0, 0.05)'}}>Paid</p>
                               <Link to={'/FeeDetails'}><i className="fa-solid fa-angle-right"></i></Link> 
                            </div>
                            
                        </div>
                        <div className='Fee-Section-mid-div-inner-fees'>
                            <h5>Exam Fees</h5>
                            <div className='Fee-Section-mid-div-inner-fees-status'>
                                <p style={{backgroundColor:'rgb(255, 6, 6,0.1)'}}>Unpaid</p>
                               <Link to={'/FeeDetails'}><i className="fa-solid fa-angle-right"></i></Link> 
                            </div>
                            
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default FeeSection