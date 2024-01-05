import React, { useEffect, useState } from 'react'
import './NavbarStyle.css'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'

const NavbarMain = () => {

  const navLoaction =useLocation()


  const [activeHome,setActiveHome] = useState(true)
  const [activeStudent,setActiveStudent] = useState(false)
  const [activeMessage,setActiveMessage] = useState(false)
  const [activeProfile,setActiveProfile] = useState(false)


  useEffect(()=>{

    if(navLoaction.pathname==='/TeachersHome'){
      setActiveHome(true)
    setActiveMessage(false)
    setActiveProfile(false)
    setActiveStudent(false)
    }

    else if(navLoaction.pathname==='/StudentInfo'){
      setActiveHome(false)
    setActiveMessage(false)
    setActiveProfile(false)
    setActiveStudent(true)
    }

    else if(navLoaction.pathname==='/MessageList'){
      setActiveHome(false)
    setActiveMessage(true)
    setActiveProfile(false)
    setActiveStudent(false)
    }

    else if(navLoaction.pathname==='/Profile'){
      setActiveHome(false)
    setActiveMessage(false)
    setActiveProfile(false)
    setActiveStudent(true)
    }

    else{
      setActiveHome(false)
    setActiveMessage(false)
    setActiveProfile(true)
    setActiveStudent(false)
    }

  },[navLoaction])

  // const handleActiveHome = ()=>{
  //   setActiveHome(true)
  //   setActiveMessage(false)
  //   setActiveProfile(false)
  //   setActiveStudent(false)
  // }
  // const handleActiveStudent = ()=>{
  //   setActiveHome(false)
  //   setActiveMessage(false)
  //   setActiveProfile(false)
  //   setActiveStudent(true)
  // }
  // const handleActiveMessage = ()=>{
  //   setActiveHome(false)
  //   setActiveMessage(true)
  //   setActiveProfile(false)
  //   setActiveStudent(false)
  // }
  // const handleActiveProfile = ()=>{
  //   setActiveHome(false)
  //   setActiveMessage(false)
  //   setActiveProfile(true)
  //   setActiveStudent(false)
  // }
  return (
    <div className='Navbar-main-div'>
      <div className='Navbar-sub-div'>
        <div className='Navbar-content-div'>
          <Link to={'/TeachersHome'} style={{textDecoration:'none'}} className='Navbar-icons-div'>
            <i  style={{color:activeHome?'#ffaaaa':'black'}} className="fa-solid fa-house"></i>
            <p>Home</p>
          </Link>
          <Link to={'/StudentInfo'} style={{textDecoration:'none'}} className='Navbar-icons-div'>
          <i  style={{color:activeStudent?'#ffaaaa':'black'}} className="fa-regular fa-address-card"></i>
          <p>Student Data</p>
          </Link>
          <Link to={'/MessageList'} style={{textDecoration:'none'}} className='Navbar-icons-div'>
            <i  style={{color:activeMessage?'#ffaaaa':'black'}} className="fa-regular fa-message"></i>
            <p>Message</p>
          </Link >
          <Link to={'/ProfileView'} style={{textDecoration:'none'}} className='Navbar-icons-div'>
            <i  style={{color:activeProfile?'#ffaaaa':'black'}} className="fa-regular fa-user"></i>
            <p>Profile</p>
          </Link>
          

        </div>
      </div>
    </div>
  )
}

export default NavbarMain