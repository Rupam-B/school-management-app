import React, { useState } from 'react'
import './SeeHomeWorkStyle.css'
import { Link } from 'react-router-dom'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const SeeHomeWorkStatus = () => {
    const [startSelectedDate, setStartSelectedDate] = useState(null);

    const handleStartDateChange = (date) => {
        setStartSelectedDate(date);
    };


    return (
        <div className='See-Home-Work-main-div'>
            <div className='See-Home-Work-sub-div'>
                <div className='See-Home-Work-top-div'>
                    <Link to={'/HomeWorkPage'} style={{ textDecoration: 'none' }}><i className="fa-solid fa-angle-left"></i></Link>
                    <h2>Home Work Status</h2>
                </div>
                <div className='See-Home-Work-mid-div'>
                    <select className='See-Home-Work-mid-div-select' name="" id="">
                        <option value="">7th A</option>
                        <option value="">8th A</option>
                        <option value="">9th A</option>
                    </select>
                    <DatePicker
                        className='See-Home-Work-mid-div-date-select'
                        selected={startSelectedDate}
                        onChange={handleStartDateChange}
                        dateFormat="MMMM d, yyyy"
                        placeholderText='Select Date'
                    />
                </div>
                <div className='See-Home-Work-bottom-div'>
                    <div className='See-Home-Work-bottom-div-inner'>
                        <div className='See-Home-Work-bottom-div-individual-inner'>
                            <div className='See-Home-Work-bottom-div-individual-inner-sub'>
                                <div className='See-Home-Work-bottom-div-individual-inner-sub-image'>
                                    <img src="https://images.pexels.com/photos/341970/pexels-photo-341970.jpeg?cs=srgb&dl=pexels-raydar-341970.jpg&fm=jpg" alt="" />
                                </div>
                                <div className='See-Home-Work-bottom-div-individual-inner-sub-data'>
                                    <p>Ananya Pandey</p>
                                </div>
                            </div>
                            <div style={{border:'1px solid green', padding:'0.1vh 1.2vw', borderRadius:'50%'}}>
                            <i className="fa-solid fa-check" style={{color:'green'}}></i>
                            </div>

                        </div>
                        <div className='See-Home-Work-bottom-div-individual-inner'>
                            <div className='See-Home-Work-bottom-div-individual-inner-sub'>
                                <div className='See-Home-Work-bottom-div-individual-inner-sub-image'>
                                    <img src="https://images.pexels.com/photos/341970/pexels-photo-341970.jpeg?cs=srgb&dl=pexels-raydar-341970.jpg&fm=jpg" alt="" />
                                </div>
                                <div className='See-Home-Work-bottom-div-individual-inner-sub-data'>
                                    <p>Reena Chowdhary</p>
                                </div>
                            </div>
                            <div style={{border:'1px solid green', padding:'0.1vh 1.2vw', borderRadius:'50%'}}>
                            <i className="fa-solid fa-check" style={{color:'green'}}></i>
                            </div>

                        </div>
                        <div className='See-Home-Work-bottom-div-individual-inner'>
                            <div className='See-Home-Work-bottom-div-individual-inner-sub'>
                                <div className='See-Home-Work-bottom-div-individual-inner-sub-image'>
                                    <img src="https://images.pexels.com/photos/341970/pexels-photo-341970.jpeg?cs=srgb&dl=pexels-raydar-341970.jpg&fm=jpg" alt="" />
                                </div>
                                <div className='See-Home-Work-bottom-div-individual-inner-sub-data'>
                                    <p>Shirley Gomes</p>
                                </div>
                            </div>
                            <div style={{border:'1px solid gray', padding:'0.1vh 1.2vw', borderRadius:'50%'}}>
                            <i className="fa-solid fa-check" style={{color:'gray'}}></i>
                            </div>

                        </div>
                        <div className='See-Home-Work-bottom-div-individual-inner'>
                            <div className='See-Home-Work-bottom-div-individual-inner-sub'>
                                <div className='See-Home-Work-bottom-div-individual-inner-sub-image'>
                                    <img src="https://images.pexels.com/photos/341970/pexels-photo-341970.jpeg?cs=srgb&dl=pexels-raydar-341970.jpg&fm=jpg" alt="" />
                                </div>
                                <div className='See-Home-Work-bottom-div-individual-inner-sub-data'>
                                    <p>Rishika Patel</p>
                                </div>
                            </div>
                            <div style={{border:'1px solid green', padding:'0.1vh 1.2vw', borderRadius:'50%'}}>
                            <i className="fa-solid fa-check" style={{color:'green'}}></i>
                            </div>

                        </div>
                        <div className='See-Home-Work-bottom-div-individual-inner'>
                            <div className='See-Home-Work-bottom-div-individual-inner-sub'>
                                <div className='See-Home-Work-bottom-div-individual-inner-sub-image'>
                                    <img src="https://images.pexels.com/photos/341970/pexels-photo-341970.jpeg?cs=srgb&dl=pexels-raydar-341970.jpg&fm=jpg" alt="" />
                                </div>
                                <div className='See-Home-Work-bottom-div-individual-inner-sub-data'>
                                    <p>Mehul Sharma</p>
                                </div>
                            </div>
                            <div style={{border:'1px solid gray', padding:'0.1vh 1.2vw', borderRadius:'50%'}}>
                            <i className="fa-solid fa-check" style={{color:'gray'}}></i>
                            </div>

                        </div>
                        <div className='See-Home-Work-bottom-div-individual-inner'>
                            <div className='See-Home-Work-bottom-div-individual-inner-sub'>
                                <div className='See-Home-Work-bottom-div-individual-inner-sub-image'>
                                    <img src="https://images.pexels.com/photos/341970/pexels-photo-341970.jpeg?cs=srgb&dl=pexels-raydar-341970.jpg&fm=jpg" alt="" />
                                </div>
                                <div className='See-Home-Work-bottom-div-individual-inner-sub-data'>
                                    <p>Ritik Chourasiya</p>
                                </div>
                            </div>
                            <div style={{border:'1px solid green', padding:'0.1vh 1.2vw', borderRadius:'50%'}}>
                            <i className="fa-solid fa-check" style={{color:'green'}}></i>
                            </div>

                        </div>
                        <div className='See-Home-Work-bottom-div-individual-inner'>
                            <div className='See-Home-Work-bottom-div-individual-inner-sub'>
                                <div className='See-Home-Work-bottom-div-individual-inner-sub-image'>
                                    <img src="https://images.pexels.com/photos/341970/pexels-photo-341970.jpeg?cs=srgb&dl=pexels-raydar-341970.jpg&fm=jpg" alt="" />
                                </div>
                                <div className='See-Home-Work-bottom-div-individual-inner-sub-data'>
                                    <p>Anam Sahu</p>
                                </div>
                            </div>
                            <div style={{border:'1px solid gray', padding:'0.1vh 1.2vw', borderRadius:'50%'}}>
                            <i className="fa-solid fa-check" style={{color:'gray'}}></i>
                            </div>

                        </div>
                        <div className='See-Home-Work-bottom-div-individual-inner'>
                            <div className='See-Home-Work-bottom-div-individual-inner-sub'>
                                <div className='See-Home-Work-bottom-div-individual-inner-sub-image'>
                                    <img src="https://images.pexels.com/photos/341970/pexels-photo-341970.jpeg?cs=srgb&dl=pexels-raydar-341970.jpg&fm=jpg" alt="" />
                                </div>
                                <div className='See-Home-Work-bottom-div-individual-inner-sub-data'>
                                    <p>Ananya Pandey</p>
                                </div>
                            </div>
                            <div style={{border:'1px solid green', padding:'0.1vh 1.2vw', borderRadius:'50%'}}>
                            <i className="fa-solid fa-check" style={{color:'green'}}></i>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SeeHomeWorkStatus