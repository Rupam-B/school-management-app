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
            <div className='Student-infoDetails-mid-three-div-para row'>
              <p className='Student-infoDetails-mid-three-div-para-one col-5'>Date of Birth</p>
              <p className='Student-infoDetails-mid-three-div-para-two col-7'>20.12.2003</p>
            </div>
            <div className='Student-infoDetails-mid-three-div-para row'>
              <p className='Student-infoDetails-mid-three-div-para-one col-5'>Gender</p>
              <p className='Student-infoDetails-mid-three-div-para-two col-7'>Male</p>
            </div>
            <div className='Student-infoDetails-mid-three-div-para row'>
              <p className='Student-infoDetails-mid-three-div-para-one col-5'>Class</p>
              <p className='Student-infoDetails-mid-three-div-para-two col-7'>7th / B</p>
            </div>
            <div className='Student-infoDetails-mid-three-div-para row'>
              <p className='Student-infoDetails-mid-three-div-para-one col-5'>Roll No</p>
              <p className='Student-infoDetails-mid-three-div-para-two col-7'>04</p>
            </div>
            <div className='Student-infoDetails-mid-three-div-para row'>
              <p className='Student-infoDetails-mid-three-div-para-one col-5'>Phone No</p>
              <p className='Student-infoDetails-mid-three-div-para-two col-7'>9876543210</p>
            </div>
            <div className='Student-infoDetails-mid-three-div-para row'>
              <p className='Student-infoDetails-mid-three-div-para-one col-5'>Father's Name</p>
              <p className='Student-infoDetails-mid-three-div-para-two col-7'>Doanld Henrick</p>
            </div>
            <div className='Student-infoDetails-mid-three-div-para row'>
              <p className='Student-infoDetails-mid-three-div-para-one col-5'>Address</p>
              <p className='Student-infoDetails-mid-three-div-para-two col-7'>LandMark Complex Old Bus Stand Bilaspur Chhattisgarh</p>
            </div>
            <div className='Student-infoDetails-mid-three-div-para row'>
              <p className='Student-infoDetails-mid-three-div-para-one col-5'>Performance</p>
              <p className='Student-infoDetails-mid-three-div-para-two col-7'>Good</p>
            </div>

          </div>


          <div className='Student-infoDetails-mid-four-div'>
            <div className='Student-infoDetails-show-sem-results'>
            <div className='Student-infoDetails-show-sem-results-left'>
                <p className='Student-infoDetails-show-sem-results-left-para-one'>First Term Results</p>
                <p className='Student-infoDetails-show-sem-results-left-para-two'><i className="fa-regular fa-clock"></i> 12th Jan 12:30 pm</p>
              </div>
              <div className='Student-infoDetails-show-sem-results-right'>
              <Link to={'/StudentResults'}><i  className="fa-solid fa-angle-right"></i></Link>
              </div>
            </div>
            <div className='Student-infoDetails-show-sem-results'>
            <div className='Student-infoDetails-show-sem-results-left'>
                <p className='Student-infoDetails-show-sem-results-left-para-one'>Quaterly Results</p>
                <p className='Student-infoDetails-show-sem-results-left-para-two'><i className="fa-regular fa-clock"></i> 12th Jan 12:30 pm</p>
              </div>
              <div className='Student-infoDetails-show-sem-results-right'>
              <Link to={'/StudentResults'}><i  className="fa-solid fa-angle-right"></i></Link>
              </div>
            </div>
            <div className='Student-infoDetails-show-sem-results'>
              <div className='Student-infoDetails-show-sem-results-left'>
                <p className='Student-infoDetails-show-sem-results-left-para-one'>Half Yearly Results</p>
                <p className='Student-infoDetails-show-sem-results-left-para-two'><i className="fa-regular fa-clock"></i> 12th Jan 12:30 pm</p>
              </div>
              <div className='Student-infoDetails-show-sem-results-right'>
              <Link to={'/StudentResults'}><i  className="fa-solid fa-angle-right"></i></Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default StudentInfoDetails