import React from 'react'
import './HomeStyle.css'
import NavbarMain from '../Navbar/NavbarMain';
import { Link} from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';

const TeachersHome = () => {


  const TeachersSelector = useSelector((state)=>state.VerifyTypeOfUser)

  const handleAlert = ()=>{

    const userResponse = window.confirm('Do You Want to send an alert message for ID: 300123456?');

    if (userResponse) {
      toast.error('An alert as been sent to the School Security Department, You will get a call Soon regarding!', {
        position: toast.POSITION.TOP_CENTER,
        style: {
          top: '50%',
          transform: 'translateY(300%)',
        },
      });
    }
  }


  return (
    <div className='Student-Home-main-div'>
      <div className='Student-Home-sub-div'>
        <div className='Student-Home-header-div'>
          <div className='Student-Home-header-div-one'>
          {TeachersSelector?
            <p>Teacher's ID : 324BG76</p>
            :
            <p>Student's ID : 324BG76</p>
          }
            <h5>Good Morning, Robert</h5>
          </div>
          <div className='Student-Home-header-div-two'>
            <i className="fa-regular fa-bell"></i>
            <div className='Student-Home-header-div-two-second-icon'>
              <img src="https://play-lh.googleusercontent.com/C9CAt9tZr8SSi4zKCxhQc9v4I6AOTqRmnLchsu1wVDQL0gsQ3fmbCVgQmOVM1zPru8UH=w240-h480-rw" alt="" />
            </div>

          </div>


        </div>

        {/* <div className='Student-Home-searchbar-div'>
          <input type="text" placeholder='Search . . .' />
        </div> */}

        <div className='Student-Home-carousel-div'>
          <div className='Student-Home-carousel'>
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active" >
                  {/* <img src="https://st3.depositphotos.com/7865540/13809/i/450/depositphotos_138091320-stock-photo-business-workplace-with-concept.jpg" className="d-block w-100" alt="..." /> */}
                  <img src="https://dpsbilaspur.edu.in/templates/dps-bilaspur/images/banner2.jpg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  {/* <img src="https://t3.ftcdn.net/jpg/01/18/69/72/360_F_118697270_gewuVonZoJ0Aj277xenlnTRjpA5ArevO.jpg" className="d-block w-100" alt="..." /> */}
                  <img src="https://st3.depositphotos.com/7865540/13809/i/450/depositphotos_138091320-stock-photo-business-workplace-with-concept.jpg" className="d-block w-100" alt="..." />
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
          {TeachersSelector?(
          <div className='Student-Home-Main-icons'>
            <Link to={'/StudentAttendance'} style={{ backgroundColor: '#f8d5da' }} className='Student-Home-Main-icons-inner-div'>
            <i className="fa-solid fa-clipboard-user"></i>
            </Link>
            <p>Attendance</p>
          </div>
          ):
          (
            <div className='Student-Home-Main-icons'>
            <Link onClick={handleAlert} style={{ backgroundColor: 'rgb(255, 0, 0,0.05)',textDecoration:'none' }} className='Student-Home-Main-icons-inner-div'>
            <i style={{color:'red'}} className="fa-solid fa-shield-halved"></i>
            </Link>
            <p>Alert</p>
          </div>
          )}
          {TeachersSelector?(
            <div className='Student-Home-Main-icons'>
            <Link to={'/TeachersAlert'} style={{ backgroundColor: 'rgb(255, 0, 0,0.05)',textDecoration:'none',position:'relative' }} className='Student-Home-Main-icons-inner-div'>
              <div className='Student-Home-Main-Teachers-Alert'></div>
            <i style={{color:'red'}} className="fa-solid fa-shield-halved"></i>
            </Link>
            <p>Alert</p>
          </div>
          ):(
            <div className='Student-Home-Main-icons'>
            <Link to={TeachersSelector?'/TeachersFeeCheck':'/FeeSection'} style={{ backgroundColor: '#d8edf1',textDecoration:'none' }} className='Student-Home-Main-icons-inner-div'>
            <i className="fa-solid fa-indian-rupee-sign"></i>
            </Link>
            <p>Fee section</p>
          </div>
          )}
          
          <div className='Student-Home-Main-icons'>
            <Link to={'/LeaveSection'} style={{ backgroundColor: '#e7dfd6',textDecoration:'none' }} className='Student-Home-Main-icons-inner-div'>
            <i className="fa-solid fa-person-through-window"></i>
            </Link>
            <p>Leave</p>
          </div>
          <div className='Student-Home-Main-icons'>
            <Link to={'/BusLocation'} style={{ backgroundColor: '#ffe1f2',textDecoration:'none' }} className='Student-Home-Main-icons-inner-div'>
            <i className="fa-solid fa-bus"></i>
            </Link>
            <p>Bus Location</p>
          </div>
          <div className='Student-Home-Main-icons'>
            <Link to={TeachersSelector?'/HomeWorkPage':'/StudentHomeWork'} style={{ backgroundColor: '#e7eee8 ',textDecoration:'none' }} className='Student-Home-Main-icons-inner-div'>
            <i className="fa-solid fa-house-user"></i>
            </Link>
            <p>Home Work</p>
          </div>
          <div  className='Student-Home-Main-icons'>
            <Link to={TeachersSelector?'/StudentInfo':'/ProfileView'} style={{ backgroundColor: '#e1e0fa',textDecoration:'none' }} className='Student-Home-Main-icons-inner-div' >
            <i className="fa-solid fa-graduation-cap"></i>
            </Link>
            <p>Student Info</p>
          </div>
          <div className='Student-Home-Main-icons'>
            <Link to={'/MessageList'} style={{ backgroundColor: '#faf4d1', textDecoration:'none' }} className='Student-Home-Main-icons-inner-div'>
            <i className="fa-solid fa-message"></i>
            </Link>
            <p>Message</p>
          </div>
          <div className='Student-Home-Main-icons'>
            <Link to={'/NoticeSection'} style={{ backgroundColor: '#d3ffe2',textDecoration:'none' }} className='Student-Home-Main-icons-inner-div'>
              <i className="fa-regular fa-calendar"></i>
            </Link>
            <p>Notice</p>
          </div>
          <div className='Student-Home-Main-icons'>
            <Link to={'/LibrarySection'} style={{ backgroundColor: '#e7dfd6',textDecoration:'none' }} className='Student-Home-Main-icons-inner-div'>
            <i className="fa-solid fa-book"></i>
            </Link>
            <p>Library</p>
          </div>
          <div className='Student-Home-Main-icons'>
            <Link to={'/CalenderSection'} style={{ backgroundColor: '#ffe1f2',textDecoration:'none' }} className='Student-Home-Main-icons-inner-div'>
            <i className="fa-regular fa-calendar-days"></i>
            </Link>
            <p>Calender</p>
          </div>
          <div className='Student-Home-Main-icons'>
            <Link to={'/MoreExtended'} style={{ backgroundColor: '#f8d5da',textDecoration:'none' }} className='Student-Home-Main-icons-inner-div'>
            {/* <Link to={'/TeachersHome'} style={{ backgroundColor: 'white',textDecoration:'none' }} className='Student-Home-Main-icons-inner-div'> */}
            <i style={{fontSize:'2.2rem'}} className="fa-solid fa-ellipsis"></i>
            </Link>
            <p>More</p>
          </div>
          <div className='Student-Home-Main-icons'>
            {/* <Link to={'/TeachersHome'} style={{ backgroundColor: '#e1e0fa',textDecoration:'none' }} className='Student-Home-Main-icons-inner-div'> */}
            <Link to={'/TeachersHome'} style={{ backgroundColor: 'white',textDecoration:'none' }} className='Student-Home-Main-icons-inner-div'>
              {/* <i className="fa-regular fa-calendar"></i> */}
            </Link>
            <p></p>
          </div>
          


        </div>


        <div className='Student-Home-Lectures-content-div'>
          <div className='Student-Lectures-content-div-top'>
            {TeachersSelector?
            <h4>Today's Lectures</h4>
            :
            <h4>Today's Classes</h4>
          }
            <Link style={{textDecoration:'none'}} to={'/LectureList'}><p>view all</p></Link>
          </div>
          <div className='Student-Lectures-content-div-bottom'>
            <div className='Student-Lectures-content-div-bottom-one'>
              {TeachersSelector?
            <h6>Math Lecture in 7th B</h6>
            :
            <h6>Maths Period</h6>
          }
              <p><i className="fa-regular fa-clock"></i> 10 am to 11:30 am</p>

            </div>
            <div className='Student-Lectures-content-div-bottom-one'>
              {TeachersSelector?
            <h6>Chemistry Lecture in 11th A</h6>
            :
            <h6>Chemistry Period</h6>
          }
              <p><i className="fa-regular fa-clock"></i> 12 pm to 1:30 pm</p>
            </div>
            <div className='Student-Lectures-content-div-bottom-one'>
              {TeachersSelector?
            <h6>Physics Lecture in 12th B</h6>
            :
            <h6>Physics Period</h6>
          }
              <p><i className="fa-regular fa-clock"></i> 2 pm to 3:30 pm</p>
            </div>
          </div>


        </div>
        <div className='Student-Home-Lectures-content-div'>
        </div>
      </div>
      < NavbarMain />
    </div>
  )
}

export default TeachersHome