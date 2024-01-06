import React from 'react'
import './ProfileViewStyle.css'
import Navbar from '../../Navbar/NavbarMain'
import { Link } from 'react-router-dom'

const ProfileView = () => {
    return (
        <div className='Profile-view-main-div'>
            <div className='Profile-view-sub-div'>
                <div className='Profile-view-top-div'>
                    <Link to={'/TeachersHome'} style={{ textDecoration: 'none' }}><i className="fa-solid fa-angle-left"></i></Link>
                    <h2>Profile</h2>
                </div>
            </div>
            <Navbar />
        </div>
    )
}

export default ProfileView