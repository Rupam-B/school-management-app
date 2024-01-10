import React, { useState } from 'react'
import './StudentAttendanceStyle.css'
import { Link } from 'react-router-dom'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const StudentAttendance = () => {
    const [startSelectedDate, setStartSelectedDate] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    

    const handleStartDateChange = (date) => {
        setStartSelectedDate(date);
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
        }, 2000);
    };
    const handleStartClassChange = () => {
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
        }, 2000);
    };
  return (
    <div className='Student-Attendance-main-div'>
            <div className='Student-Attendance-sub-div'>
                <div className='Student-Attendance-top-div'>
                    <Link to={'/TeachersHome'} style={{ textDecoration: 'none' }}><i className="fa-solid fa-angle-left"></i></Link>
                    <h2>Student Attendance</h2>
                </div>
                <div className='Student-Attendance-mid-div'>
                    <select onChange={handleStartClassChange} className='Student-Attendance-mid-div-select' name="" id="">
                        <option value="">7th A</option>
                        <option value="">8th A</option>
                        <option value="">9th A</option>
                    </select>
                    <DatePicker
                        className='Student-Attendance-mid-div-date-select'
                        selected={startSelectedDate}
                        onChange={handleStartDateChange}
                        dateFormat="MMMM d, yyyy"
                        placeholderText='Today'
                    />
                </div>
                <div className='Student-Attendance-mid-second-div'>
                <div className='Student-Attendance-mid-second-div-inner'>
                    <p className='Student-Attendance-mid-second-div-inner-p'>Name</p>
                    <div className='Student-Attendance-mid-second-div-inner-div'>
                        <p>P</p>
                        <p>A</p>
                    </div>


                </div>
                </div>


                {isLoading?(
                    <div className='Student-Attendance-is-Loading'>
                        <h4>Loading...</h4>

                    </div>
                ):(

                <div className='Student-Attendance-bottom-div'>
                    <div className='Student-Attendance-bottom-div-inner'>
                        <div className='Student-Attendance-bottom-div-individual-inner'>
                            <div className='Student-Attendance-bottom-div-individual-inner-sub'>
                                <div className='Student-Attendance-bottom-div-individual-inner-sub-image'>
                                    <img src="https://images.pexels.com/photos/341970/pexels-photo-341970.jpeg?cs=srgb&dl=pexels-raydar-341970.jpg&fm=jpg" alt="" />
                                </div>
                                <div className='Student-Attendance-bottom-div-individual-inner-sub-data'>
                                    <p>Ananya Pandey</p>
                                </div>
                            </div>
                            <i className="fa-solid fa-circle" style={{color:'rgb(0, 0, 0,0.1)'}}></i>
                            
                            <i className="fa-solid fa-check" style={{color:'green',fontSize:'1.1rem'}}></i>
            

                        </div>
                        <div className='Student-Attendance-bottom-div-individual-inner'>
                            <div className='Student-Attendance-bottom-div-individual-inner-sub'>
                                <div className='Student-Attendance-bottom-div-individual-inner-sub-image'>
                                    <img src="https://images.pexels.com/photos/341970/pexels-photo-341970.jpeg?cs=srgb&dl=pexels-raydar-341970.jpg&fm=jpg" alt="" />
                                </div>
                                <div className='Student-Attendance-bottom-div-individual-inner-sub-data'>
                                    <p>Reena Chowdhary</p>
                                </div>
                            </div>
                            
                            <i className="fa-solid fa-check" style={{color:'green',fontSize:'1.1rem'}}></i>

                            <i className="fa-solid fa-circle" style={{color:'rgb(0, 0, 0,0.1)'}}></i>

                        </div>
                        <div className='Student-Attendance-bottom-div-individual-inner'>
                            <div className='Student-Attendance-bottom-div-individual-inner-sub'>
                                <div className='Student-Attendance-bottom-div-individual-inner-sub-image'>
                                    <img src="https://images.pexels.com/photos/341970/pexels-photo-341970.jpeg?cs=srgb&dl=pexels-raydar-341970.jpg&fm=jpg" alt="" />
                                </div>
                                <div className='Student-Attendance-bottom-div-individual-inner-sub-data'>
                                    <p>Shirley Gomes</p>
                                </div>
                            </div>
                            
                            <i className="fa-solid fa-check" style={{color:'green',fontSize:'1.1rem'}}></i>
                           
                            <i className="fa-solid fa-circle" style={{color:'rgb(0, 0, 0,0.1)'}}></i>

                        </div>
                        <div className='Student-Attendance-bottom-div-individual-inner'>
                            <div className='Student-Attendance-bottom-div-individual-inner-sub'>
                                <div className='Student-Attendance-bottom-div-individual-inner-sub-image'>
                                    <img src="https://images.pexels.com/photos/341970/pexels-photo-341970.jpeg?cs=srgb&dl=pexels-raydar-341970.jpg&fm=jpg" alt="" />
                                </div>
                                <div className='Student-Attendance-bottom-div-individual-inner-sub-data'>
                                    <p>Rishika Patel</p>
                                </div>
                            </div>
                            
                            <i className="fa-solid fa-check" style={{color:'green',fontSize:'1.1rem'}}></i>
                            <i className="fa-solid fa-circle" style={{color:'rgb(0, 0, 0,0.1)'}}></i>

                        </div>
                        <div className='Student-Attendance-bottom-div-individual-inner'>
                            <div className='Student-Attendance-bottom-div-individual-inner-sub'>
                                <div className='Student-Attendance-bottom-div-individual-inner-sub-image'>
                                    <img src="https://images.pexels.com/photos/341970/pexels-photo-341970.jpeg?cs=srgb&dl=pexels-raydar-341970.jpg&fm=jpg" alt="" />
                                </div>
                                <div className='Student-Attendance-bottom-div-individual-inner-sub-data'>
                                    <p>Mehul Sharma</p>
                                </div>
                            </div>
                            <i className="fa-solid fa-circle" style={{color:'rgb(0, 0, 0,0.1)'}}></i>
                            <i className="fa-solid fa-check" style={{color:'green',fontSize:'1.1rem'}}></i>

                        </div>
                        <div className='Student-Attendance-bottom-div-individual-inner'>
                            <div className='Student-Attendance-bottom-div-individual-inner-sub'>
                                <div className='Student-Attendance-bottom-div-individual-inner-sub-image'>
                                    <img src="https://images.pexels.com/photos/341970/pexels-photo-341970.jpeg?cs=srgb&dl=pexels-raydar-341970.jpg&fm=jpg" alt="" />
                                </div>
                                <div className='Student-Attendance-bottom-div-individual-inner-sub-data'>
                                    <p>Ritik Chourasiya</p>
                                </div>
                            </div>
                            <i className="fa-solid fa-check" style={{color:'green',fontSize:'1.1rem'}}></i>
                            <i className="fa-solid fa-circle" style={{color:'rgb(0, 0, 0,0.1)'}}></i>

                        </div>
                        <div className='Student-Attendance-bottom-div-individual-inner'>
                            <div className='Student-Attendance-bottom-div-individual-inner-sub'>
                                <div className='Student-Attendance-bottom-div-individual-inner-sub-image'>
                                    <img src="https://images.pexels.com/photos/341970/pexels-photo-341970.jpeg?cs=srgb&dl=pexels-raydar-341970.jpg&fm=jpg" alt="" />
                                </div>
                                <div className='Student-Attendance-bottom-div-individual-inner-sub-data'>
                                    <p>Anam Sahu</p>
                                </div>
                            </div>
                            <i className="fa-solid fa-check" style={{color:'green',fontSize:'1.1rem'}}></i>
                            <i className="fa-solid fa-circle" style={{color:'rgb(0, 0, 0,0.1)'}}></i>

                        </div>
                        <div className='Student-Attendance-bottom-div-individual-inner'>
                            <div className='Student-Attendance-bottom-div-individual-inner-sub'>
                                <div className='Student-Attendance-bottom-div-individual-inner-sub-image'>
                                    <img src="https://images.pexels.com/photos/341970/pexels-photo-341970.jpeg?cs=srgb&dl=pexels-raydar-341970.jpg&fm=jpg" alt="" />
                                </div>
                                <div className='Student-Attendance-bottom-div-individual-inner-sub-data'>
                                    <p>Ananya Pandey</p>
                                </div>
                            </div>
                            <i className="fa-solid fa-circle" style={{color:'rgb(0, 0, 0,0.1)'}}></i>
                            <i className="fa-solid fa-check" style={{color:'green',fontSize:'1.1rem'}}></i>

                        </div>

                    </div>
                </div>

                )}

                <div className='Student-Attendance-bottom-space-adder-div'>

                </div>
            </div>
        </div>
  )
}

export default StudentAttendance