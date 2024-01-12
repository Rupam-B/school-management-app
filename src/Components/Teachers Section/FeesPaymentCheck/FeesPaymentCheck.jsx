import React, { useState } from 'react'
import './FeesPaymentCheckStyle.css'
import { Link } from 'react-router-dom'

const FeesPaymentCheck = () => {

    const [isLoading, setIsLoading] = useState(false);
    
    const handleStartClassChange = () => {
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
        }, 2000);
    };



    return (
        <div className='Fee-Payment-Check-main-div'>
            <div className='Fee-Payment-Check-sub-div'>
                <div className='Fee-Payment-Check-top-div'>
                    <Link to={'/TeachersHome'} style={{ textDecoration: 'none' }}><i className="fa-solid fa-angle-left"></i></Link>
                    <h2>Fee Payment Details</h2>
                </div>
                <div className='Fee-Payment-Check-mid-div'>
                    <select onChange={handleStartClassChange} className='Fee-Payment-Check-mid-div-select' name="" id="">
                        <option value="">7th A</option>
                        <option value="">8th A</option>
                        <option value="">9th A</option>
                    </select>
                    <select onChange={handleStartClassChange} className='Fee-Payment-Check-mid-div-select' name="" id="">
                        <option value="">Jan</option>
                        <option value="">Feb</option>
                        <option value="">Mar</option>
                        <option value="">Apr</option>
                        <option value="">May</option>
                        <option value="">June</option>
                        <option value="">July</option>
                        <option value="">Aug</option>
                        <option value="">Sep</option>
                        <option value="">Oct</option>
                        <option value="">Nov</option>
                        <option value="">Dec</option>
                    </select>
                    
                </div>
                <div className='Fee-Payment-Check-mid-second-div'>
                <div className='Fee-Payment-Check-mid-second-div-inner'>
                    <p className='Fee-Payment-Check-mid-second-div-inner-p'>Name</p>
                    <div className='Fee-Payment-Check-mid-second-div-inner-div'>
                        <p>P</p>
                        <p>NP</p>
                    </div>


                </div>
                </div>


                {isLoading?(
                    <div className='Fee-Payment-Check-is-Loading'>
                        <h4>Loading...</h4>

                    </div>
                ):(

                <div className='Fee-Payment-Check-bottom-div'>
                    <div className='Fee-Payment-Check-bottom-div-inner'>
                        <div className='Fee-Payment-Check-bottom-div-individual-inner'>
                            <div className='Fee-Payment-Check-bottom-div-individual-inner-sub'>
                                <div className='Fee-Payment-Check-bottom-div-individual-inner-sub-image'>
                                    <img src="https://images.pexels.com/photos/341970/pexels-photo-341970.jpeg?cs=srgb&dl=pexels-raydar-341970.jpg&fm=jpg" alt="" />
                                </div>
                                <div className='Fee-Payment-Check-bottom-div-individual-inner-sub-data'>
                                    <p>Ananya Pandey</p>
                                </div>
                            </div>
                            <i className="fa-solid fa-check" style={{color:'rgb(0, 0, 0,0.1)',fontSize:'1.1rem'}}></i>
                            <i className="fa-solid fa-circle" style={{color:'red'}}></i>
                            
            

                        </div>
                        <div className='Fee-Payment-Check-bottom-div-individual-inner'>
                            <div className='Fee-Payment-Check-bottom-div-individual-inner-sub'>
                                <div className='Fee-Payment-Check-bottom-div-individual-inner-sub-image'>
                                    <img src="https://images.pexels.com/photos/341970/pexels-photo-341970.jpeg?cs=srgb&dl=pexels-raydar-341970.jpg&fm=jpg" alt="" />
                                </div>
                                <div className='Fee-Payment-Check-bottom-div-individual-inner-sub-data'>
                                    <p>Reena Chowdhary</p>
                                </div>
                            </div>
                            
                            <i className="fa-solid fa-check" style={{color:'green',fontSize:'1.1rem'}}></i>

                            <i className="fa-solid fa-circle" style={{color:'rgb(0, 0, 0,0.1)'}}></i>

                        </div>
                        <div className='Fee-Payment-Check-bottom-div-individual-inner'>
                            <div className='Fee-Payment-Check-bottom-div-individual-inner-sub'>
                                <div className='Fee-Payment-Check-bottom-div-individual-inner-sub-image'>
                                    <img src="https://images.pexels.com/photos/341970/pexels-photo-341970.jpeg?cs=srgb&dl=pexels-raydar-341970.jpg&fm=jpg" alt="" />
                                </div>
                                <div className='Fee-Payment-Check-bottom-div-individual-inner-sub-data'>
                                    <p>Shirley Gomes</p>
                                </div>
                            </div>
                            
                            <i className="fa-solid fa-check" style={{color:'green',fontSize:'1.1rem'}}></i>
                           
                            <i className="fa-solid fa-circle" style={{color:'rgb(0, 0, 0,0.1)'}}></i>

                        </div>
                        <div className='Fee-Payment-Check-bottom-div-individual-inner'>
                            <div className='Fee-Payment-Check-bottom-div-individual-inner-sub'>
                                <div className='Fee-Payment-Check-bottom-div-individual-inner-sub-image'>
                                    <img src="https://images.pexels.com/photos/341970/pexels-photo-341970.jpeg?cs=srgb&dl=pexels-raydar-341970.jpg&fm=jpg" alt="" />
                                </div>
                                <div className='Fee-Payment-Check-bottom-div-individual-inner-sub-data'>
                                    <p>Rishika Patel</p>
                                </div>
                            </div>
                            
                            <i className="fa-solid fa-check" style={{color:'green',fontSize:'1.1rem'}}></i>
                            <i className="fa-solid fa-circle" style={{color:'rgb(0, 0, 0,0.1)'}}></i>

                        </div>
                        <div className='Fee-Payment-Check-bottom-div-individual-inner'>
                            <div className='Fee-Payment-Check-bottom-div-individual-inner-sub'>
                                <div className='Fee-Payment-Check-bottom-div-individual-inner-sub-image'>
                                    <img src="https://images.pexels.com/photos/341970/pexels-photo-341970.jpeg?cs=srgb&dl=pexels-raydar-341970.jpg&fm=jpg" alt="" />
                                </div>
                                <div className='Fee-Payment-Check-bottom-div-individual-inner-sub-data'>
                                    <p>Mehul Sharma</p>
                                </div>
                            </div>
                            <i className="fa-solid fa-check" style={{color:'rgb(0, 0, 0,0.1)',fontSize:'1.1rem'}}></i>
                            <i className="fa-solid fa-circle" style={{color:'red'}}></i>

                        </div>
                        <div className='Fee-Payment-Check-bottom-div-individual-inner'>
                            <div className='Fee-Payment-Check-bottom-div-individual-inner-sub'>
                                <div className='Fee-Payment-Check-bottom-div-individual-inner-sub-image'>
                                    <img src="https://images.pexels.com/photos/341970/pexels-photo-341970.jpeg?cs=srgb&dl=pexels-raydar-341970.jpg&fm=jpg" alt="" />
                                </div>
                                <div className='Fee-Payment-Check-bottom-div-individual-inner-sub-data'>
                                    <p>Ritik Chourasiya</p>
                                </div>
                            </div>
                            <i className="fa-solid fa-check" style={{color:'green',fontSize:'1.1rem'}}></i>
                            <i className="fa-solid fa-circle" style={{color:'rgb(0, 0, 0,0.1)'}}></i>

                        </div>
                        <div className='Fee-Payment-Check-bottom-div-individual-inner'>
                            <div className='Fee-Payment-Check-bottom-div-individual-inner-sub'>
                                <div className='Fee-Payment-Check-bottom-div-individual-inner-sub-image'>
                                    <img src="https://images.pexels.com/photos/341970/pexels-photo-341970.jpeg?cs=srgb&dl=pexels-raydar-341970.jpg&fm=jpg" alt="" />
                                </div>
                                <div className='Fee-Payment-Check-bottom-div-individual-inner-sub-data'>
                                    <p>Anam Sahu</p>
                                </div>
                            </div>
                            <i className="fa-solid fa-check" style={{color:'green',fontSize:'1.1rem'}}></i>
                            <i className="fa-solid fa-circle" style={{color:'rgb(0, 0, 0,0.1)'}}></i>

                        </div>
                        <div className='Fee-Payment-Check-bottom-div-individual-inner'>
                            <div className='Fee-Payment-Check-bottom-div-individual-inner-sub'>
                                <div className='Fee-Payment-Check-bottom-div-individual-inner-sub-image'>
                                    <img src="https://images.pexels.com/photos/341970/pexels-photo-341970.jpeg?cs=srgb&dl=pexels-raydar-341970.jpg&fm=jpg" alt="" />
                                </div>
                                <div className='Fee-Payment-Check-bottom-div-individual-inner-sub-data'>
                                    <p>Ananya Pandey</p>
                                </div>
                            </div>
                            <i className="fa-solid fa-check" style={{color:'rgb(0, 0, 0,0.1)',fontSize:'1.1rem'}}></i>
                            <i className="fa-solid fa-circle" style={{color:'red'}}></i>

                        </div>

                    </div>
                </div>

                )}

                <div className='Fee-Payment-Check-bottom-space-adder-div'>

                </div>
            </div>
        </div>
    )
}

export default FeesPaymentCheck