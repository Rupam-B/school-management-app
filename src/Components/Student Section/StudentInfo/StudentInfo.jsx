import React, { useState } from 'react'
import './StudentInfoStyle.css'
import Navbar from '../../Navbar/NavbarMain'
import { Link } from 'react-router-dom'

const StudentInfo = () => {

    const [isClassActive, setIsClassActive] =useState(true)
    const [whichClass, setWhichClass] =useState('')

    const handleClassChange = (event) => {
        setWhichClass(event.target.value);
    }
    const handleSelectClass = () => {
        if(whichClass){
            setIsClassActive(false)
        }
        else{
            alert("Please Select Class")
        }
    }


    // console.log(whichClass)
    return (
        <div className='Student-info-main-div'>
            <div className='Student-info-sub-div'>
                <div className='Student-info-top-div'>
                    <Link to={'/TeachersHome'} style={{ textDecoration: 'none' }}><i className="fa-solid fa-angle-left"></i></Link>
                    <h2>Student Info</h2>
                </div>
                <div className='Student-info-serch-div'>
                    <select name="Select Class" id="" onChange={handleClassChange}>
                        <option  value="">Select Class</option>
                        <option  value="7A">7th A</option>
                        <option  value="7B">7th B</option>
                        <option  value="8A">8th A</option>
                        <option  value="8B">8th B</option>
                        <option  value="9A">9th A</option>
                        <option  value="9B">9th B</option>
                    </select>
                </div>
                <div className='Student-info-list-show'>
                    {isClassActive?
                    (
                    <div className='Student-info-list-show-pre'>
                        <div className='Student-info-list-show-pre-image'>
                        <img src="https://w7.pngwing.com/pngs/396/474/png-transparent-teacher-education-school-classroom-computer-icons-teacher-blue-class-logo.png" alt="" />
                        </div>
                        <p className='Student-info-list-show-pre-p-one'>Select Class!!</p>
                        <p className='Student-info-list-show-pre-p-two'>Select Class for viewing student complete details</p>
                        <button onClick={handleSelectClass}>Select Class</button>
                    </div>
                    )
                    :
                    (
                    <div className='Student-info-list-show-post'>
                        <div className='Student-info-list-show-post-classname'>
                           Class : {whichClass}
                        </div>
                        <div className='Student-info-list-show-post-StudentList'>
                           <div className='Student-info-list-show-post-studentName'>
                            <div className='Student-info-list-show-post-studentName-header'>
                            <img src="https://thumbs.dreamstime.com/b/portrait-confident-indian-teenage-girl-looking-camera-smile-indoor-image-beautiful-happy-indian-girl-looking-191359170.jpg" alt="" />
                            <h6>Angelina Rodrigus</h6>
                            </div>
                            <div>
                            <Link to={'/StudentDetails'}><i  className="fa-solid fa-angle-right"></i></Link>
                            </div>
                           </div>
                           <div className='Student-info-list-show-post-studentName'>
                            <div className='Student-info-list-show-post-studentName-header'>
                            <img src="https://thumbs.dreamstime.com/b/portrait-confident-indian-teenage-girl-looking-camera-smile-indoor-image-beautiful-happy-indian-girl-looking-191359170.jpg" alt="" />
                            <h6>Angelina Rodrigus</h6>
                            </div>
                            <div>
                            <i  className="fa-solid fa-angle-right"></i>
                            </div>
                           </div>
                           <div className='Student-info-list-show-post-studentName'>
                            <div className='Student-info-list-show-post-studentName-header'>
                            <img src="https://thumbs.dreamstime.com/b/portrait-confident-indian-teenage-girl-looking-camera-smile-indoor-image-beautiful-happy-indian-girl-looking-191359170.jpg" alt="" />
                            <h6>Angelina Rodrigus</h6>
                            </div>
                            <div>
                            <i  className="fa-solid fa-angle-right"></i>
                            </div>
                           </div>
                           <div className='Student-info-list-show-post-studentName'>
                            <div className='Student-info-list-show-post-studentName-header'>
                            <img src="https://thumbs.dreamstime.com/b/portrait-confident-indian-teenage-girl-looking-camera-smile-indoor-image-beautiful-happy-indian-girl-looking-191359170.jpg" alt="" />
                            <h6>Angelina Rodrigus</h6>
                            </div>
                            <div>
                            <i  className="fa-solid fa-angle-right"></i>
                            </div>
                           </div>
                           <div className='Student-info-list-show-post-studentName'>
                            <div className='Student-info-list-show-post-studentName-header'>
                            <img src="https://thumbs.dreamstime.com/b/portrait-confident-indian-teenage-girl-looking-camera-smile-indoor-image-beautiful-happy-indian-girl-looking-191359170.jpg" alt="" />
                            <h6>Angelina Rodrigus</h6>
                            </div>
                            <div>
                            <i  className="fa-solid fa-angle-right"></i>
                            </div>
                           </div>
                           <div className='Student-info-list-show-post-studentName'>
                            <div className='Student-info-list-show-post-studentName-header'>
                            <img src="https://thumbs.dreamstime.com/b/portrait-confident-indian-teenage-girl-looking-camera-smile-indoor-image-beautiful-happy-indian-girl-looking-191359170.jpg" alt="" />
                            <h6>Angelina Rodrigus</h6>
                            </div>
                            <div>
                            <i  className="fa-solid fa-angle-right"></i>
                            </div>
                           </div>
                           <div className='Student-info-list-show-post-studentName'>
                            <div className='Student-info-list-show-post-studentName-header'>
                            <img src="https://thumbs.dreamstime.com/b/portrait-confident-indian-teenage-girl-looking-camera-smile-indoor-image-beautiful-happy-indian-girl-looking-191359170.jpg" alt="" />
                            <h6>Angelina Rodrigus</h6>
                            </div>
                            <div>
                            <i  className="fa-solid fa-angle-right"></i>
                            </div>
                           </div>
                          
                        </div>
                        
                    </div>
                    )}

                </div>
                <div className='Student-info-last-margin-div'>

                        

                </div>
            </div>
            <Navbar />
        </div>
    )
}

export default StudentInfo