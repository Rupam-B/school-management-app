import React from 'react'
import './LectureStyle.css'
import { Link } from 'react-router-dom'

const Lectures = () => {
  return (
    <div className='Lecture-Section-main-div'>
      <div className='Lecture-Section-sub-div'>
        <div className='Lecture-Section-top-div'>
          <Link to={'/TeachersHome'} style={{ textDecoration: 'none' }}><i className="fa-solid fa-angle-left"></i></Link>
          <h2>Lectures</h2>
        </div>
      </div>
    </div>
  )
}

export default Lectures