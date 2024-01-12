import React from 'react'
import { Link } from 'react-router-dom'
import './CalenderStyle.css'

const CalenderSection = () => {
    return (
        <div className='Calender-Section-main-div'>
            <div className='Calender-Section-sub-div'>
                <div className='Calender-Section-top-div'>
                    <Link to={'/TeachersHome'} style={{ textDecoration: 'none' }}><i className="fa-solid fa-angle-left"></i></Link>
                    <h2>Calender</h2>
                </div>
            </div>
        </div>
    )
}

export default CalenderSection