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
        <div className='Lecture-Section-show-leaves-div-main'>
                    <div className='Lecture-Section-show-leaves-div'>
                        <div className='Lecture-Section-show-leaves-div-left'>
                            <p className='Lecture-Section-show-leaves-div-left-para-one'>Mathematics Period</p>
                            <p className='Lecture-Section-show-leaves-div-left-para-two'>
                                <span><i className="fa-regular fa-clock"></i>10am to 11:30am</span>
                                <span></span>
                            </p>
                            
                        </div>
                    </div>
                    <div className='Lecture-Section-show-leaves-div'>
                        <div className='Lecture-Section-show-leaves-div-left'>
                            <p className='Lecture-Section-show-leaves-div-left-para-one'>Science Period</p>
                            <p className='Lecture-Section-show-leaves-div-left-para-two'>
                                <span><i className="fa-regular fa-clock"></i>11:30am to 12:30pm</span>
                                <span></span>
                            </p>
                            
                        </div>
                    </div>
                    <div className='Lecture-Section-show-leaves-div'>
                        <div className='Lecture-Section-show-leaves-div-left'>
                            <p className='Lecture-Section-show-leaves-div-left-para-one'>Social Studies</p>
                            <p className='Lecture-Section-show-leaves-div-left-para-two'>
                                <span><i className="fa-regular fa-clock"></i>12:30pm to 1:30pm</span>
                                <span></span>
                            </p>
                            
                        </div>
                    </div>
                    <div className='Lecture-Section-show-leaves-div'>
                        <div className='Lecture-Section-show-leaves-div-left'>
                            <p className='Lecture-Section-show-leaves-div-left-para-one'>Hindi Period
                            </p>
                            <p className='Lecture-Section-show-leaves-div-left-para-two'>
                                <span><i className="fa-regular fa-clock"></i>2:30pm to 3:30pm</span>
                                <span></span>
                            </p>
                            
                        </div>
                    </div>
                    <div className='Lecture-Section-show-leaves-div'>
                        <div className='Lecture-Section-show-leaves-div-left'>
                            <p className='Lecture-Section-show-leaves-div-left-para-one'>Sanskrit Period</p>
                            <p className='Lecture-Section-show-leaves-div-left-para-two'>
                                <span><i className="fa-regular fa-clock"></i>3:30pm to 4:30pm</span>
                                <span></span>
                            </p>
                            
                        </div>
                    </div>
                    <div className='Lecture-Section-show-leaves-div'>
                        <div className='Lecture-Section-show-leaves-div-left'>
                            <p className='Lecture-Section-show-leaves-div-left-para-one'>Physical Ed Period</p>
                            <p className='Lecture-Section-show-leaves-div-left-para-two'>
                                <span><i className="fa-regular fa-clock"></i>4:30pm to 5:30pm</span>
                                <span></span>
                            </p>
                            
                        </div>
                    </div>
                    

                </div>
      </div>
    </div>
  )
}

export default Lectures