import React from 'react'
import './LeavesSectionStyle.css'
import { Link } from 'react-router-dom'

const LeavesSection = () => {
    return (
        <div className='Leaves-Section-main-div'>
            <div className='Leaves-Section-sub-div'>
                <div className='Leaves-Section-top-div'>
                    <Link to={'/TeachersHome'} style={{ textDecoration: 'none' }}><i className="fa-solid fa-angle-left"></i></Link>
                    <h2>Leaves</h2>
                </div>
                <div className='Leaves-Section-add-leaves-div'>
                    <Link to={'/AddLeavesPage'} className='Leaves-Section-add-leaves-button'>
                        <i className="fa-solid fa-plus"></i>
                    </Link>
                </div>
                <div className='Leaves-Section-show-leaves-div-main'>
                    <p>January 2024</p>
                    <div className='Leaves-Section-show-leaves-div'>
                        <div className='Leaves-Section-show-leaves-div-left'>
                            <p className='Leaves-Section-show-leaves-div-left-para-one'>Wed, 09th Jan</p>
                            <p className='Leaves-Section-show-leaves-div-left-para-two'>
                                <span><i className="fa-regular fa-calendar-days"></i> casual</span>
                                <span><i className="fa-regular fa-calendar-days"></i> Full Day Leave</span>
                            </p>
                            <button style={{border:'1px solid #ff9933', color:'#ff9933'}}>Pending</button>
                        </div>
                    </div>
                    <div className='Leaves-Section-show-leaves-div'>
                        <div className='Leaves-Section-show-leaves-div-left'>
                            <p className='Leaves-Section-show-leaves-div-left-para-one'>Wed, 09th Jan</p>
                            <p className='Leaves-Section-show-leaves-div-left-para-two'>
                                <span><i className="fa-regular fa-calendar-days"></i> casual</span>
                                <span><i className="fa-regular fa-calendar-days"></i> Full Day Leave</span>
                            </p>
                            <button style={{border:'1px solid #ce181e', color:'#ce181e'}}>Cancelled</button>
                        </div>
                    </div>
                    <div className='Leaves-Section-show-leaves-div'>
                        <div className='Leaves-Section-show-leaves-div-left'>
                            <p className='Leaves-Section-show-leaves-div-left-para-one'>Wed, 09th Jan</p>
                            <p className='Leaves-Section-show-leaves-div-left-para-two'>
                                <span><i className="fa-regular fa-calendar-days"></i> casual</span>
                                <span><i className="fa-regular fa-calendar-days"></i> Full Day Leave</span>
                            </p>
                            <button style={{border:'1px solid green', color:'green'}}>Approvred</button>
                        </div>
                    </div>

                </div>
                <div className='Leaves-Section-show-leaves-div-main'>
                    <p>Dec 2023</p>
                    <div className='Leaves-Section-show-leaves-div'>
                        <div className='Leaves-Section-show-leaves-div-left'>
                            <p className='Leaves-Section-show-leaves-div-left-para-one'>Wed, 09th Dec</p>
                            <p className='Leaves-Section-show-leaves-div-left-para-two'>
                                <span><i className="fa-regular fa-calendar-days"></i> casual</span>
                                <span><i className="fa-regular fa-calendar-days"></i> Full Day Leave</span>
                            </p>
                            <button style={{border:'1px solid green', color:'green'}}>Approved</button>
                        </div>
                    </div>
                    <div className='Leaves-Section-show-leaves-div'>
                        <div className='Leaves-Section-show-leaves-div-left'>
                            <p className='Leaves-Section-show-leaves-div-left-para-one'>Wed, 09th Dec</p>
                            <p className='Leaves-Section-show-leaves-div-left-para-two'>
                                <span><i className="fa-regular fa-calendar-days"></i> casual</span>
                                <span><i className="fa-regular fa-calendar-days"></i> Full Day Leave</span>
                            </p>
                            <button style={{border:'1px solid #ff9933', color:'#ff9933'}}>Pending</button>
                        </div>
                    </div>
                    <div className='Leaves-Section-show-leaves-div'>
                        <div className='Leaves-Section-show-leaves-div-left'>
                            <p className='Leaves-Section-show-leaves-div-left-para-one'>Wed, 09th Dec</p>
                            <p className='Leaves-Section-show-leaves-div-left-para-two'>
                                <span><i className="fa-regular fa-calendar-days"></i> casual</span>
                                <span><i className="fa-regular fa-calendar-days"></i> Full Day Leave</span>
                            </p>
                            <button style={{border:'1px solid green', color:'green'}}>Approved</button>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default LeavesSection