import React, { useState } from 'react'
import './HomeWorkStyle.css'
import { Link } from 'react-router-dom'

const HomeWorkPage = () => {
    const [createHomeWork, setCreateHomeWork] = useState(true)


    return (
        <div className='Home-Work-main-div'>
            <div className='Home-Work-sub-div'>
                <div className='Home-Work-top-div'>
                    <Link to={'/TeachersHome'} style={{ textDecoration: 'none' }}><i className="fa-solid fa-angle-left"></i></Link>
                    <h2>Home Work</h2>
                </div>

                <div className='Home-Work-mid-button-div'>
                    <button onClick={() => setCreateHomeWork(true)} className={createHomeWork ? 'Home-Work-mid-button-div-button-active' : 'Home-Work-mid-button-div-button-inactive'}>Create Homework</button>
                    <button onClick={() => setCreateHomeWork(false)} className={createHomeWork ? 'Home-Work-mid-button-div-button-inactive' : 'Home-Work-mid-button-div-button-active'}>Check Homework</button>
                </div>
                <div className='Home-Work-mid-messages-div'>


                    {createHomeWork ? (

                        /* --------------Create Home Work------------ */
                        <div className='Home-Work-mid-Create-home-work-div'>
                            <select className='Home-Work-mid-Create-select' name="" id="">
                                <option value="" >Select Class</option>
                                <option value="casual leave">7th</option>
                                <option value="sick leave">8th</option>
                                <option value="sick leave">9th</option>
                            </select>
                            <select className='Home-Work-mid-Create-select' name="" id="">
                                <option value="">Select Section</option>
                                <option value="casual leave">A</option>
                                <option value="sick leave">B</option>
                                <option value="sick leave">C</option>
                            </select>
                            <select className='Home-Work-mid-Create-select' name="" id="">
                                <option value="">Select Subject</option>
                                <option value="casual leave">Maths</option>
                                <option value="sick leave">Science</option>
                                <option value="sick leave">Hindi</option>
                            </select>
                            {/* <input type="file" name="" id="fileInput" /> */}
                            <div className="Home-Work-mid-Create-custom-file-input">
                                <input type="file" name="" id="fileInput" />
                                <label htmlFor="fileInput"><i className="fa-solid fa-paperclip"></i> Attachment if any</label>
                            </div>
                            <textarea name="" id="" cols="30" rows="10" placeholder='Home Work description'></textarea>
                            <button className='Home-Work-mid-Create-button'>Create</button>

                        </div>
                    )
                        :
                        (


                            /* ------------------Check Home work------------------- */
                            <div className='Home-Work-Check-div-main'>
                                <div className='Home-Work-Check-div'>
                                    <div className='Home-Work-Check-div-left'>
                                        <p className='Home-Work-Check-div-left-para-two'>
                                            <span><i className="fa-regular fa-calendar-days"></i> English</span>
                                            <span><i className="fa-regular fa-calendar-days"></i> 03 Jan 2024</span>
                                        </p>
                                        <p className='Home-Work-Check-div-left-para-one'>Chapter 2 Summary</p>
                                        <Link to={'/SeeHomeWorkStatus'} style={{ border: '1px solid #ff9933', color: '#ff9933' }}>Pending</Link>
                                    </div>
                                </div>
                                <div className='Home-Work-Check-div'>
                                    <div className='Home-Work-Check-div-left'>
                                        <p className='Home-Work-Check-div-left-para-two'>
                                            <span><i className="fa-regular fa-calendar-days"></i> Maths</span>
                                            <span><i className="fa-regular fa-calendar-days"></i> 31st Dec 2023</span>
                                        </p>
                                        <p className='Home-Work-Check-div-left-para-one'>Algebra</p>
                                        <Link to={'/SeeHomeWorkStatus'} style={{ border: '1px solid #ff9933', color: '#ff9933' }}>Pending</Link>
                                    </div>
                                </div>
                                <div className='Home-Work-Check-div'>
                                    <div className='Home-Work-Check-div-left'>
                                        <p className='Home-Work-Check-div-left-para-two'>
                                            <span><i className="fa-regular fa-calendar-days"></i> Science</span>
                                            <span><i className="fa-regular fa-calendar-days"></i> 28th Dec 2023</span>
                                        </p>
                                        <p className='Home-Work-Check-div-left-para-one'>Nuclear Physics</p>
                                        <Link to={'/SeeHomeWorkStatus'} style={{ border: '1px solid green', color: 'green' }}>Completed</Link>
                                    </div>
                                </div>
                                <div className='Home-Work-Check-div'>
                                    <div className='Home-Work-Check-div-left'>
                                        <p className='Home-Work-Check-div-left-para-two'>
                                            <span><i className="fa-regular fa-calendar-days"></i> Hindi</span>
                                            <span><i className="fa-regular fa-calendar-days"></i> 24th Dec 2023</span>
                                        </p>
                                        <p className='Home-Work-Check-div-left-para-one'>Bazar Darshan</p>
                                        <Link to={'/SeeHomeWorkStatus'} style={{ border: '1px solid green', color: 'green' }}>Completed</Link>
                                    </div>
                                </div>
                                <div className='Home-Work-Check-div'>
                                    <div className='Home-Work-Check-div-left'>
                                        <p className='Home-Work-Check-div-left-para-two'>
                                            <span><i className="fa-regular fa-calendar-days"></i> S St</span>
                                            <span><i className="fa-regular fa-calendar-days"></i> 20th Dec 2023</span>
                                        </p>
                                        <p className='Home-Work-Check-div-left-para-one'>Story of Gulf</p>
                                        <Link to={'/SeeHomeWorkStatus'} style={{ border: '1px solid green', color: 'green' }}>Completed</Link>
                                    </div>
                                </div>

                            </div>


                        )}

                    <div className='Home-Work-space-adder-div'></div>

                </div>
            </div>
        </div>
    )
}

export default HomeWorkPage