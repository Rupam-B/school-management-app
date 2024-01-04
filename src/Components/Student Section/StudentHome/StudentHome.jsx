import React from 'react'
import './StudentHomeStyle.css'
import NavbarMain from '../../Navbar/NavbarMain';

const StudentHome = () => {
  return (
    <div className='Student-Home-main-div'>
      <div className='Student-Home-sub-div'>
        <div className='Student-Home-header-div'>
          <div className='Student-Home-header-div-one'>
            <p>ID: 324BG76</p>
            <h4>Good Morning, Robert</h4>
          </div>
          <div className='Student-Home-header-div-two'>
            <i className="fa-regular fa-bell"></i>
            <div className='Student-Home-header-div-two-second-icon'>
              <img src="https://play-lh.googleusercontent.com/C9CAt9tZr8SSi4zKCxhQc9v4I6AOTqRmnLchsu1wVDQL0gsQ3fmbCVgQmOVM1zPru8UH=w240-h480-rw" alt="" />
            </div>

          </div>


        </div>

        <div className='Student-Home-searchbar-div'>
          <input type="text" placeholder='Search . . .' />
        </div>

        <div className='Student-Home-carousel-div'>
          <div className='Student-Home-carousel'>
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="https://st3.depositphotos.com/7865540/13809/i/450/depositphotos_138091320-stock-photo-business-workplace-with-concept.jpg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="https://t3.ftcdn.net/jpg/01/18/69/72/360_F_118697270_gewuVonZoJ0Aj277xenlnTRjpA5ArevO.jpg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="https://assets-global.website-files.com/6156c92cb3f1a26201745fa2/6504476023fbdfa3e6d1d13b_Evolution%20of%20school%20homework.png" className="d-block w-100" alt="..." />
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>


        <div className='Student-Home-Middle-content-div'>
          <div className='Student-Home-Main-icons'>
            <div style={{ backgroundColor: '#f8d5da' }} className='Student-Home-Main-icons-inner-div'>
            <i className="fa-solid fa-clipboard-user"></i>
            </div>
            <p>Attendance</p>
          </div>
          <div className='Student-Home-Main-icons'>
            <div style={{ backgroundColor: '#d8edf1' }} className='Student-Home-Main-icons-inner-div'>
            <i className="fa-brands fa-square-letterboxd"></i>
            </div>
            <p>Teachers Note</p>
          </div>
          <div className='Student-Home-Main-icons'>
            <div style={{ backgroundColor: '#e7dfd6' }} className='Student-Home-Main-icons-inner-div'>
            <i className="fa-solid fa-person-through-window"></i>
            </div>
            <p>Leave</p>
          </div>
          <div className='Student-Home-Main-icons'>
            <div style={{ backgroundColor: '#ffe1f2' }} className='Student-Home-Main-icons-inner-div'>
            <i className="fa-regular fa-note-sticky"></i>
            </div>
            <p>Time Table</p>
          </div>
          <div className='Student-Home-Main-icons'>
            <div style={{ backgroundColor: '#e7eee8 ' }} className='Student-Home-Main-icons-inner-div'>
            <i className="fa-solid fa-house-user"></i>
            </div>
            <p>Home Work</p>
          </div>
          <div className='Student-Home-Main-icons'>
            <div style={{ backgroundColor: '#e1e0fa' }} className='Student-Home-Main-icons-inner-div'>
            <i className="fa-solid fa-graduation-cap"></i>
            </div>
            <p>Student Info</p>
          </div>
          <div className='Student-Home-Main-icons'>
            <div style={{ backgroundColor: '#faf4d1' }} className='Student-Home-Main-icons-inner-div'>
            <i className="fa-solid fa-message"></i>
            </div>
            <p>Message</p>
          </div>
          <div className='Student-Home-Main-icons'>
            <div style={{ backgroundColor: '#d3ffe2' }} className='Student-Home-Main-icons-inner-div'>
              <i className="fa-regular fa-calendar"></i>
            </div>
            <p>Notice</p>
          </div>


        </div>


        <div className='Student-Home-Lectures-content-div'>
          <div className='Student-Lectures-content-div-top'>
            <h3>Today's Lectures</h3>
            <p>view all</p>
          </div>
          <div className='Student-Lectures-content-div-bottom'>
            <div className='Student-Lectures-content-div-bottom-one'>
              <h4>Math Lecture in 7th B</h4>
              <p><i className="fa-regular fa-clock"></i> 10 am to 11:30 am</p>

            </div>
            <div className='Student-Lectures-content-div-bottom-one'>
              <h4>Chemistry Lecture in 11th A</h4>
              <p><i className="fa-regular fa-clock"></i> 12 pm to 1:30 pm</p>
            </div>
            <div className='Student-Lectures-content-div-bottom-one'>
              <h4>Physics Lecture in 12th B</h4>
              <p><i className="fa-regular fa-clock"></i> 2 pm to 3:30 pm</p>
            </div>
          </div>


        </div>
      </div>
      < NavbarMain />
    </div>
  )
}

export default StudentHome