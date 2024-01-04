

import React, { useState } from 'react'
import './AuthenCompStyle.css'
import { useNavigate } from 'react-router-dom'

const AuthenComp = () => {

    const loginavigate = useNavigate()


    // PAge navigation Control State Data
    const [logInActive, setLogInActive] = useState(true)
    const [showPassword, setShowPassword] = useState(true)
    const [forgotPassword, setForgotPassword] = useState(true)
    const [enterRecoveryNumber, setEnterRecoveryNumber] = useState(false)


    //  Log In state data 
    const [username, setUsername] = useState('')
    const [userpassword, setUserPassword] = useState('')
    //  Sign Up state data 
    const [signUpname, setSignUpname] = useState('')
    const [signUpPassword, setSignUpPassword] = useState('')
    const [signUpEmail, setSignUpEmail] = useState('')
    const [signUpMobile, setSignUpMobile] = useState('')
    //  Forgot Pssword State data
    const [enterRecoveryData, setEnterRecoveryData] = useState('')
    // Verify OTP State data
    const [otpData, setOtpData] = useState('')



    // Handling Functions

    const handleLogin = () => {
        if (username === 'sid' && userpassword === '123') {
            loginavigate('/Studenthome')
        }
        else {
            alert('wrong')
        }
    }
    const handleSignUp= () => {
        alert('Signed Up Successfully')
    }

    const handleBackToForgotPassword = () => {
        setEnterRecoveryNumber(false)
        setForgotPassword(false)
    }
    return (
        <div className='Auth-main-div'>

            {forgotPassword ? (

                logInActive ? (

                    <div className='Auth-sub-div'>
                        <div className='Auth-div-top-section'>
                            <div className='Auth-div-top-section-logo'>
                                <img src="https://png.pngtree.com/png-vector/20230415/ourmid/pngtree-school-logo-design-template-vector-png-image_6705854.png" alt="" />
                            </div>
                            <div className='Auth-div-top-section-name'>
                                {/* <h2>BMS School</h2> */}
                                <h2>Log In</h2>
                                <h6>Hello, Please Login to your account</h6>
                            </div>
                        </div>
                        <div className='Auth-sub-div-lower-block'>
                            <input onChange={(e) => setUsername(e.target.value)} type="text" placeholder='Email / Phone' />
                            <input className='Auth-password-input' onChange={(e) => setUserPassword(e.target.value)} type={showPassword ? "password" : "text"} placeholder='Password' />
                            <i onClick={() => setShowPassword(!showPassword)} className={showPassword ? "fa-solid fa-eye Auth-password-icon" : "fa-solid fa-eye-slash Auth-password-icon"}></i>

                            <p onClick={() => setForgotPassword(false)}>Forgot password?</p>
                            <button onClick={handleLogin}>Login</button>
                        </div>
                        <div className='Auth-sub-div-Footter-block'>
                            <p>Don't have an account?<span onClick={() => setLogInActive(false)}>SignUp</span></p>
                        </div>
                    </div>)
                    :
                    (
                        <div className='Auth-sub-div'>
                            <div className='Auth-div-top-section'>
                                <div className='Auth-div-top-section-logo'>
                                    <img src="https://png.pngtree.com/png-vector/20230415/ourmid/pngtree-school-logo-design-template-vector-png-image_6705854.png" alt="" />
                                </div>
                                <div className='Auth-div-top-section-name'>
                                    {/* <h2>BMS School</h2> */}
                                    <h2>Sign Up</h2>
                                    <h6>Hello, Please Sign Up to create your account</h6>

                                </div>
                            </div>
                            <div className='Auth-sub-div-lower-block'>
                                <input value={signUpname} onChange={(e) => setSignUpname(e.target.value)} type="text" placeholder='Name' />
                                <input value={signUpEmail} onChange={(e) => setSignUpEmail(e.target.value)} type="text" placeholder='Email Address' />
                                <input value={signUpMobile} onChange={(e) => setSignUpMobile(e.target.value)} type="text" placeholder='Phone Number' />
                                <input value={signUpPassword} onChange={(e) => setSignUpPassword(e.target.value)} type="text" placeholder='New Password' />
                                <button onClick={handleSignUp}>SignUp</button>
                            </div>
                            <div className='Auth-sub-div-Footter-block'>
                                <p>Have an account?<span onClick={() => setLogInActive(true)}>Login</span></p>
                            </div>
                        </div>
                    )

            )
                : (


                    enterRecoveryNumber ? (
                        <div className='Auth-sub-div'>
                            <div className='Auth-div-top-section'>
                                <div style={{ width: '100vw' }} className='Auth-div-top-section-name'>
                                    <i onClick={handleBackToForgotPassword} style={{ position: 'absolute', top: '4vh' }} className="fa-solid fa-angle-left"></i>
                                    <h2 style={{ margin: 'auto' }}>Verify OTP</h2>
                                </div>
                            </div>
                            <div className='Auth-sub-div-lower-block'>
                                <input value={otpData} onChange={(e) => setOtpData(e.target.value)} type="text" placeholder='Enter OTP sent to your Mobile No.' />
                                <button onClick={handleLogin}>Verify</button>
                            </div>
                        </div>) : (
                        <div className='Auth-sub-div'>
                            <div className='Auth-div-top-section'>
                                <div style={{ width: '100vw' }} className='Auth-div-top-section-name'>
                                    <i onClick={() => setForgotPassword(true)} style={{ position: 'absolute', top: '4vh' }} className="fa-solid fa-angle-left"></i>
                                    <h2 style={{ margin: 'auto' }}>Forgot Password</h2>
                                </div>
                            </div>
                            <div className='Auth-sub-div-lower-block'>
                                <input value={enterRecoveryData} onChange={(e) => setEnterRecoveryData(e.target.value)} type="number" placeholder='Enter Registered Mobile No.' />
                                <button onClick={() => setEnterRecoveryNumber(true)}>Continue</button>
                            </div>
                        </div>)

                )
            }
        </div>
    )
}

export default AuthenComp