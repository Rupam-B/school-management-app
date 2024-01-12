import React from 'react'
import './ProfileViewStyle.css'
import Navbar from '../../Navbar/NavbarMain'
import { Link } from 'react-router-dom'

const ProfileView = () => {
    return (
        <div className='Profile-View-main-div'>
      <div className='Profile-View-sub-div'>
        <div className='Profile-View-top-div'>
          <Link to={'/TeachersHome'} style={{ textDecoration: 'none' }}><i className="fa-solid fa-angle-left"></i></Link>
          <h2>User Profile</h2>
        </div>
        <div className='Profile-View-mid-div'>
          <div className='Profile-View-mid-one-div'>
            <div className='Profile-View-mid-one-div-image'>
              <img src="https://thumbs.dreamstime.com/b/portrait-confident-indian-teenage-girl-looking-camera-smile-indoor-image-beautiful-happy-indian-girl-looking-191359170.jpg" alt="" />
            </div>
            <div className='Profile-View-mid-one-div-infos'>
              <h6>Angelina Rodrigus</h6>
              <p >Id: 332415</p>
              <p>class: 7th B</p>
            </div>

          </div>
          <div className='Profile-View-mid-two-div row m-auto'>
            <div style={{marginRight:'1vw', backgroundColor: '#d8edf1'}} className='Profile-View-mid-two-div-results col'>

              <p className='Profile-View-mid-two-div-Attendance'>Attendance</p>
              <p className='Profile-View-mid-two-div-Attendance-percent'>78%</p>

            </div>
            <div style={{marginRight:'2vw',marginLeft:'2vw',  backgroundColor: '#e7dfd6'}} className='Profile-View-mid-two-div-results col'>
            <p className='Profile-View-mid-two-div-Attendance'>Average Score</p>
              <p className='Profile-View-mid-two-div-Attendance-percent'>87%</p>
            </div>
            <div style={{marginLeft:'1vw',backgroundColor: '#ffe1f2'}} className='Profile-View-mid-two-div-results col'>
            <p className='Profile-View-mid-two-div-Attendance'>Fee Due</p>
              <p className='Profile-View-mid-two-div-Attendance-percent'>70%</p>
            </div>
              
          </div>

          <div className='Profile-View-mid-three-div'>
            <div className='Profile-View-mid-three-div-para row'>
              <p className='Profile-View-mid-three-div-para-one col-5'>Date of Birth</p>
              <p className='Profile-View-mid-three-div-para-two col-7'>20.12.2003</p>
            </div>
            <div className='Profile-View-mid-three-div-para row'>
              <p className='Profile-View-mid-three-div-para-one col-5'>Gender</p>
              <p className='Profile-View-mid-three-div-para-two col-7'>Male</p>
            </div>
            <div className='Profile-View-mid-three-div-para row'>
              <p className='Profile-View-mid-three-div-para-one col-5'>Class</p>
              <p className='Profile-View-mid-three-div-para-two col-7'>7th / B</p>
            </div>
            <div className='Profile-View-mid-three-div-para row'>
              <p className='Profile-View-mid-three-div-para-one col-5'>Roll No</p>
              <p className='Profile-View-mid-three-div-para-two col-7'>04</p>
            </div>
            <div className='Profile-View-mid-three-div-para row'>
              <p className='Profile-View-mid-three-div-para-one col-5'>Phone No</p>
              <p className='Profile-View-mid-three-div-para-two col-7'>9876543210</p>
            </div>
            <div className='Profile-View-mid-three-div-para row'>
              <p className='Profile-View-mid-three-div-para-one col-5'>Father's Name</p>
              <p className='Profile-View-mid-three-div-para-two col-7'>Doanld Henrick</p>
            </div>
            <div className='Profile-View-mid-three-div-para row'>
              <p className='Profile-View-mid-three-div-para-one col-5'>Address</p>
              <p className='Profile-View-mid-three-div-para-two col-7'>LandMark Complex Old Bus Stand Bilaspur Chhattisgarh</p>
            </div>
            <div className='Profile-View-mid-three-div-para row'>
              <p className='Profile-View-mid-three-div-para-one col-5'>Performance</p>
              <p className='Profile-View-mid-three-div-para-two col-7'>Good</p>
            </div>

          </div>
          


          
        </div>

        <div className='Profile-View-space-adder-div'>

        </div>
      </div>
      <Navbar/>
    </div>
    )
}

export default ProfileView