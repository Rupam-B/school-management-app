import React, { useState } from 'react'
import './NavbarStyle.css'

const NavbarMain = () => {


  const [activeHome,setActiveHome] = useState(true)
  const [activeStudent,setActiveStudent] = useState(false)
  const [activeMessage,setActiveMessage] = useState(false)
  const [activeProfile,setActiveProfile] = useState(false)

  const handleActiveHome = ()=>{
    setActiveHome(true)
    setActiveMessage(false)
    setActiveProfile(false)
    setActiveStudent(false)
  }
  const handleActiveStudent = ()=>{
    setActiveHome(false)
    setActiveMessage(false)
    setActiveProfile(false)
    setActiveStudent(true)
  }
  const handleActiveMessage = ()=>{
    setActiveHome(false)
    setActiveMessage(true)
    setActiveProfile(false)
    setActiveStudent(false)
  }
  const handleActiveProfile = ()=>{
    setActiveHome(false)
    setActiveMessage(false)
    setActiveProfile(true)
    setActiveStudent(false)
  }
  return (
    <div className='Navbar-main-div'>
      <div className='Navbar-sub-div'>
        <div className='Navbar-content-div'>
          <div className='Navbar-icons-div'>
            <i onClick={handleActiveHome} style={{color:activeHome?'#ffaaaa':'black'}} className="fa-solid fa-house"></i>
            <p>Home</p>
          </div>
          <div className='Navbar-icons-div'>
          <i onClick={handleActiveStudent} style={{color:activeStudent?'#ffaaaa':'black'}} className="fa-regular fa-address-card"></i>
          <p>Student Data</p>
          </div>
          <div className='Navbar-icons-div'>
            <i onClick={handleActiveMessage} style={{color:activeMessage?'#ffaaaa':'black'}} className="fa-regular fa-message"></i>
            <p>Message</p>
          </div >
          <div className='Navbar-icons-div'>
            <i onClick={handleActiveProfile} style={{color:activeProfile?'#ffaaaa':'black'}} className="fa-regular fa-user"></i>
            <p>Profile</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default NavbarMain