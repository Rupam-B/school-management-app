import React from 'react'
import './TeachersNotesStyle.css'
import { Link } from 'react-router-dom'

const TeachersNotes = () => {
    return (
        <div className='Teachers-notes-main-div'>
            <div className='Teachers-notes-sub-div'>
                <div className='Teachers-notes-top-div'>
                    <Link to={'/TeachersHome'} style={{ textDecoration: 'none' }}><i className="fa-solid fa-angle-left"></i></Link>
                    <h2>Teachers Notes</h2>
                </div>
                <div className='Teachers-notes-list-div'>
                    <div className='Teachers-notes-show-list-div'>
                        <div className='Teachers-notes-show-list-div-left'>
                            <p className='Teachers-notes-show-list-div-left-para-two'><i className="fa-regular fa-calendar-days"></i> 12th Jan , 2024</p>
                            <p className='Teachers-notes-show-list-div-left-para-one'>Parent Teachers Meeting</p>
                        </div>
                    </div>
                    <div className='Teachers-notes-show-list-div'>
                        <div className='Teachers-notes-show-list-div-left'>
                            <p className='Teachers-notes-show-list-div-left-para-two'><i className="fa-regular fa-calendar-days"></i> 7th Jan , 2024</p>
                            <p className='Teachers-notes-show-list-div-left-para-one'>Teachers Training</p>
                        </div>
                    </div>
                    <div className='Teachers-notes-show-list-div'>
                        <div className='Teachers-notes-show-list-div-left'>
                            <p className='Teachers-notes-show-list-div-left-para-two'><i className="fa-regular fa-calendar-days"></i> 5th Jan , 2024</p>
                            <p className='Teachers-notes-show-list-div-left-para-one'>Teachers Meeting</p>
                        </div>
                    </div>
                    <div className='Teachers-notes-show-list-div'>
                        <div className='Teachers-notes-show-list-div-left'>
                            <p className='Teachers-notes-show-list-div-left-para-two'><i className="fa-regular fa-calendar-days"></i> 2nd Jan , 2024</p>
                            <p className='Teachers-notes-show-list-div-left-para-one'>Result declaration</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default TeachersNotes