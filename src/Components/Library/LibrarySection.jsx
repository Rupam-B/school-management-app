import React from 'react'
import { Link } from 'react-router-dom'
import './LibraryStyle.css'

const LibrarySection = () => {
    return (
        <div className='Library-Section-main-div'>
            <div className='Library-Section-sub-div'>
                <div className='Library-Section-top-div'>
                    <Link to={'/TeachersHome'} style={{ textDecoration: 'none' }}><i className="fa-solid fa-angle-left"></i></Link>
                    <h2>Library</h2>
                </div>
            </div>
        </div>
    )
}

export default LibrarySection