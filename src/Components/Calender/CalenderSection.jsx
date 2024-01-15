import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './CalenderStyle.css'

const CalenderSection = () => {

    const [isLoading, setIsLoading] = useState(false);
    
    const handleStartMonthChange = () => {
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
        }, 1500);
    };


    return (
        <div className='Calender-Section-main-div'>
            <div className='Calender-Section-sub-div'>
                <div className='Calender-Section-top-div'>
                    <Link to={'/TeachersHome'} style={{ textDecoration: 'none' }}><i className="fa-solid fa-angle-left"></i></Link>
                    <h2>Holiday Calender</h2>
                </div>
                <div className='Calender-Section-month-select-div'>
                    <select onChange={handleStartMonthChange} name="" id="">
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

                <div className='Calender-Section-mid-div'>
                    {
                        isLoading?(
                            <div className='Calender-Section-mid-div-Loading'>
                        <h4>Loading...</h4>
                    </div>
                        )
                        :
                        (
                            <div className='Calender-Section-mid-div-content'>
                        <div style={{borderLeft:'4px solid skyblue'}} className='Calender-Section-mid-div-content-holidays'>
                            <div style={{backgroundColor:'skyblue'}} className='Calender-Section-mid-div-content-top-circle'></div>
                            <p>15th January 2024</p>
                            <h6>Pongal</h6>
                        </div>
                        <div style={{borderLeft:'4px solid green'}} className='Calender-Section-mid-div-content-holidays'>
                        <div style={{backgroundColor:'green'}} className='Calender-Section-mid-div-content-top-circle'></div>
                            <p>26th January 2024</p>
                            <h6>Republic Day</h6>
                        </div>
                        <div style={{borderLeft:'4px solid red'}} className='Calender-Section-mid-div-content-holidays'>
                        <div style={{backgroundColor:'red'}} className='Calender-Section-mid-div-content-top-circle'></div>
                            <p>14th Feb 2024</p>
                            <h6>Vasant Panchami</h6>
                        </div>
                        <div style={{borderLeft:'4px solid orange'}} className='Calender-Section-mid-div-content-holidays'>
                        <div style={{backgroundColor:'orange'}} className='Calender-Section-mid-div-content-top-circle'></div>
                            <p>15th January 2024</p>
                            <h6>Pongal</h6>
                        </div>
                        <div style={{borderLeft:'4px solid blue'}} className='Calender-Section-mid-div-content-holidays'>
                        <div style={{backgroundColor:'blue'}} className='Calender-Section-mid-div-content-top-circle'></div>
                            <p>15th January 2024</p>
                            <h6>Pongal</h6>
                        </div>
                        <div style={{borderLeft:'4px solid skyblue'}} className='Calender-Section-mid-div-content-holidays'>
                        <div style={{backgroundColor:'skyblue'}} className='Calender-Section-mid-div-content-top-circle'></div>
                            <p>15th January 2024</p>
                            <h6>Pongal</h6>
                        </div>
                        <div style={{borderLeft:'4px solid skyblue'}} className='Calender-Section-mid-div-content-holidays'>
                        <div style={{backgroundColor:'skyblue'}} className='Calender-Section-mid-div-content-top-circle'></div>
                            <p>15th January 2024</p>
                            <h6>Pongal</h6>
                        </div>
                    </div>

                        )

                    }
                </div>
            </div>
        </div>
    )
}

export default CalenderSection