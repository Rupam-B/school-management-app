import React, { useState } from 'react'
import './StudentHomeWorkStyle.css'
import { Link } from 'react-router-dom'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const StudentHomeWork = () => {


    const [startSelectedDate, setStartSelectedDate] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    

    const handleStartDateChange = (date) => {
        setStartSelectedDate(date);
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
        }, 2000);
    };

    return (
        <div className='Student-Home-Work-main-div'>
            <div className='Student-Home-Work-sub-div'>
                <div className='Student-Home-Work-top-div'>
                    <Link to={'/TeachersHome'} style={{ textDecoration: 'none' }}><i className="fa-solid fa-angle-left"></i></Link>
                    <h2>Student HomeWork</h2>
                </div>

                <div className='Student-Home-Work-show-leaves-div-main'>
                <DatePicker
                        className='Student-Home-Work-mid-div-date-select'
                        selected={startSelectedDate}
                        onChange={handleStartDateChange}
                        dateFormat="MMMM d, yyyy"
                        placeholderText='Today'
                    />

                </div>


                {isLoading?(
                    <div className='Student-Home-Work-is-Loading'>
                        <h4>Loading...</h4>

                    </div>
                ):(
                <div className='Student-Home-Work-show-leaves-div-main'>
                    <div className='Student-Home-Work-show-leaves-div'>
                        <div className='Student-Home-Work-show-leaves-div-left'>
                            <p className='Student-Home-Work-show-leaves-div-left-para-one'>Mathematics</p>
                            <p className='Student-Home-Work-show-leaves-div-left-para-two'>
                                <span>Chapter 2 Algebra 5 Questions</span>
                                <span></span>
                            </p>
                            <button style={{border:'1px solid #ff9933', color:'#ff9933'}}>Pending</button>
                        </div>
                    </div>
                    <div className='Student-Home-Work-show-leaves-div'>
                        <div className='Student-Home-Work-show-leaves-div-left'>
                            <p className='Student-Home-Work-show-leaves-div-left-para-one'>Science</p>
                            <p className='Student-Home-Work-show-leaves-div-left-para-two'>
                                <span>Chapter 5 Force 5 Questions</span>
                                <span></span>
                            </p>
                            <button style={{border:'1px solid #ff9933', color:'#ff9933'}}>Pending</button>
                        </div>
                    </div>
                    <div className='Student-Home-Work-show-leaves-div'>
                        <div className='Student-Home-Work-show-leaves-div-left'>
                            <p className='Student-Home-Work-show-leaves-div-left-para-one'>Social Studies</p>
                            <p className='Student-Home-Work-show-leaves-div-left-para-two'>
                                <span>Chapter 3 Monuments 5 Questions</span>
                                <span></span>
                            </p>
                            <button style={{border:'1px solid #ff9933', color:'#ff9933'}}>Pending</button>
                        </div>
                    </div>
                    <div className='Student-Home-Work-show-leaves-div'>
                        <div className='Student-Home-Work-show-leaves-div-left'>
                            <p className='Student-Home-Work-show-leaves-div-left-para-one'>Hindi</p>
                            <p className='Student-Home-Work-show-leaves-div-left-para-two'>
                                <span>Chapter 1 Bazar Darshan 5 Questions</span>
                                <span></span>
                            </p>
                            <button style={{border:'1px solid green', color:'green'}}>Completed</button>
                        </div>
                    </div>
                    <div className='Student-Home-Work-show-leaves-div'>
                        <div className='Student-Home-Work-show-leaves-div-left'>
                            <p className='Student-Home-Work-show-leaves-div-left-para-one'>Sanskrit</p>
                            <p className='Student-Home-Work-show-leaves-div-left-para-two'>
                                <span>No homework Today</span>
                                <span></span>
                            </p>
                            <button style={{border:'1px solid green', color:'green'}}>Completed</button>
                        </div>
                    </div>
                    <div className='Student-Home-Work-show-leaves-div'>
                        <div className='Student-Home-Work-show-leaves-div-left'>
                            <p className='Student-Home-Work-show-leaves-div-left-para-one'>Physical Ed</p>
                            <p className='Student-Home-Work-show-leaves-div-left-para-two'>
                                <span>Chapter 3 Speed and endurance 5 Questions</span>
                                <span></span>
                            </p>
                            <button style={{border:'1px solid green', color:'green'}}>Completed</button>
                        </div>
                    </div>
                    

                </div>
                )}
            </div>
        </div>
    )
}

export default StudentHomeWork