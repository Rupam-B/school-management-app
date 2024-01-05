import React from 'react'
import './StudentInfoDetailStyle.css'
import { Link } from 'react-router-dom'

const StudentInfoDetails = () => {
  return (
    <div className='Student-infoDetails-main-div'>
      <div className='Student-infoDetails-sub-div'>
        <div className='Student-infoDetails-top-div'>
          <Link to={'/StudentInfo'} style={{ textDecoration: 'none' }}><i className="fa-solid fa-angle-left"></i></Link>
          <h2>Student Profile</h2>
        </div>
        <div className='Student-infoDetails-mid-div'>
          <div className='Student-infoDetails-mid-one-div'>
            <div className='Student-infoDetails-mid-one-div-image'>
              <img src="https://thumbs.dreamstime.com/b/portrait-confident-indian-teenage-girl-looking-camera-smile-indoor-image-beautiful-happy-indian-girl-looking-191359170.jpg" alt="" />
            </div>
            <div className='Student-infoDetails-mid-one-div-infos'>
              <h6>Angelina Rodrigus</h6>
              <p >Roll no: 332415</p>
              <p>class: 7th B</p>
            </div>

          </div>
          <div className='Student-infoDetails-mid-two-div row m-auto'>
            <div style={{marginRight:'1vw', backgroundColor: '#d8edf1'}} className='Student-infoDetails-mid-two-div-results col'>

              <p className='Student-infoDetails-mid-two-div-Attendance'>Attendance</p>
              <p className='Student-infoDetails-mid-two-div-Attendance-percent'>78%</p>

            </div>
            <div style={{marginRight:'2vw',marginLeft:'2vw',  backgroundColor: '#e7dfd6'}} className='Student-infoDetails-mid-two-div-results col'>
            <p className='Student-infoDetails-mid-two-div-Attendance'>Average Score</p>
              <p className='Student-infoDetails-mid-two-div-Attendance-percent'>87%</p>
            </div>
            <div style={{marginLeft:'1vw',backgroundColor: '#ffe1f2'}} className='Student-infoDetails-mid-two-div-results col'>
            <p className='Student-infoDetails-mid-two-div-Attendance'>Fee Due</p>
              <p className='Student-infoDetails-mid-two-div-Attendance-percent'>70%</p>
            </div>
              
          </div>

          <div className='Student-infoDetails-mid-three-div'>
            <div className=''></div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default StudentInfoDetails