import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './LibraryStyle.css'

const LibrarySection = () => {
    const [searchDiv, setSearchDiv]= useState(false)
    const [showResultStatus, setShoeResultStatus]= useState(true)
    const [searchValue, setSearchValue]= useState('')
    


    const handleSearchFunction =(e)=>{
        setSearchDiv(true)
        setSearchValue(e.target.value)
    }
    const handleCloseSearchFunction =()=>{
        setSearchDiv(false)
        setSearchValue('')
    }


    useEffect(()=>{
        setTimeout(()=>{
            setShoeResultStatus(!showResultStatus)
        },1000)
         // eslint-disable-next-line 
    },[searchValue])
    return (
        <div className='Library-Section-main-div'>
            <div className='Library-Section-sub-div'>
                <div className='Library-Section-top-div'>
                    <Link to={'/TeachersHome'} style={{ textDecoration: 'none' }}><i className="fa-solid fa-angle-left"></i></Link>
                    <h2>Library</h2>
                </div>
                <div className='Library-Section-top-lower-div'>
                    <input value={searchValue} onChange={handleSearchFunction} type="text" name='serachLibrary' placeholder='search books in Library'/>
                </div>
                <div className={searchDiv?'Library-Section-top-lower-show-search-result-div':'Library-Section-top-lower-hide-search-result-div'}>
                <i onClick={handleCloseSearchFunction} className="fa-solid" style={{color:'red',fontSize:'1.1rem'}}>^</i>

                {!showResultStatus?(
                    <h3>Searching</h3>
                ):(
                    <h3>No Results Found</h3>
                )}
                
                </div>
                <div className='Library-Section-mid-div'>
                    <div className='Library-Section-mid-div-inner'>
                        <div className='Library-Section-mid-div-inner-head'>
                            <p>Books Issued</p>
                            <p>Date</p>
                            <p className='Library-Section-mid-div-inner-head-R-NR'>
                                <span>R</span>
                                <span>NR</span>
                            </p>
                        </div>
                        <div className='Library-Section-mid-div-inner-content'>
                        <div className='Library-Section-bottom-div-individual-inner'>
                            <div className='Library-Section-bottom-div-individual-inner-sub'>
                                <div className='Library-Section-bottom-div-individual-inner-sub-data'>
                                    <p>Social Studies Class 5th</p>
                                </div>
                                <div className='Library-Section-bottom-div-individual-inner-sub-data-two'>
                                    <p>23/01/2024</p>
                                </div>
                            </div>
                            <div className='Library-Section-bottom-div-individual-inner-sub-bottom'>
                            <i className="fa-solid fa-circle" style={{color:'transparent'}}></i>
                            <i className="fa-solid fa-check" style={{color:'red',fontSize:'1.1rem'}}></i>
                            </div>
                        </div>

                        </div>
                        <div className='Library-Section-mid-div-inner-content'>
                        <div className='Library-Section-bottom-div-individual-inner'>
                            <div className='Library-Section-bottom-div-individual-inner-sub'>
                                <div className='Library-Section-bottom-div-individual-inner-sub-data'>
                                    <p>Maths Class 5th</p>
                                </div>
                                <div className='Library-Section-bottom-div-individual-inner-sub-data-two'>
                                    <p>13/01/2024</p>
                                </div>
                            </div>
                            <div className='Library-Section-bottom-div-individual-inner-sub-bottom'>
                            <i className="fa-solid fa-circle" style={{color:'transparent'}}></i>
                            <i className="fa-solid fa-check" style={{color:'red',fontSize:'1.1rem'}}></i>
                            </div>
                        </div>

                        </div>
                        <div className='Library-Section-mid-div-inner-content'>
                        <div className='Library-Section-bottom-div-individual-inner'>
                            <div className='Library-Section-bottom-div-individual-inner-sub'>
                                <div className='Library-Section-bottom-div-individual-inner-sub-data'>
                                    <p>Science 9th</p>
                                </div>
                                <div className='Library-Section-bottom-div-individual-inner-sub-data-two'>
                                    <p>03/01/2024</p>
                                </div>
                            </div>
                            <div className='Library-Section-bottom-div-individual-inner-sub-bottom'>
                            <i className="fa-solid fa-check" style={{color:'green',fontSize:'1.1rem'}}></i>
                            <i className="fa-solid fa-circle" style={{color:'transparent'}}></i>
                            </div>
                        </div>

                        </div>
                        <div className='Library-Section-mid-div-inner-content'>
                        <div className='Library-Section-bottom-div-individual-inner'>
                            <div className='Library-Section-bottom-div-individual-inner-sub'>
                                <div className='Library-Section-bottom-div-individual-inner-sub-data'>
                                    <p>Sanskrit Class 7th</p>
                                </div>
                                <div className='Library-Section-bottom-div-individual-inner-sub-data-two'>
                                    <p>23/12/2023</p>
                                </div>
                            </div>
                            <div className='Library-Section-bottom-div-individual-inner-sub-bottom'>
                            <i className="fa-solid fa-circle" style={{color:'transparent'}}></i>
                            <i className="fa-solid fa-check" style={{color:'red',fontSize:'1.1rem'}}></i>
                            </div>
                        </div>

                        </div>
                        <div className='Library-Section-mid-div-inner-content'>
                        <div className='Library-Section-bottom-div-individual-inner'>
                            <div className='Library-Section-bottom-div-individual-inner-sub'>
                                <div className='Library-Section-bottom-div-individual-inner-sub-data'>
                                    <p>Ecology Class 11th</p>
                                </div>
                                <div className='Library-Section-bottom-div-individual-inner-sub-data-two'>
                                    <p>13/12/2023</p>
                                </div>
                            </div>
                            <div className='Library-Section-bottom-div-individual-inner-sub-bottom'>
                            <i className="fa-solid fa-check" style={{color:'green',fontSize:'1.1rem'}}></i>
                            <i className="fa-solid fa-circle" style={{color:'transparent'}}></i>
                            </div>
                        </div>

                        </div>
                        <div className='Library-Section-mid-div-inner-content'>
                        <div className='Library-Section-bottom-div-individual-inner'>
                            <div className='Library-Section-bottom-div-individual-inner-sub'>
                                <div className='Library-Section-bottom-div-individual-inner-sub-data'>
                                    <p>Social Studies Class 5th</p>
                                </div>
                                <div className='Library-Section-bottom-div-individual-inner-sub-data-two'>
                                    <p>23/01/2024</p>
                                </div>
                            </div>
                            <div className='Library-Section-bottom-div-individual-inner-sub-bottom'>
                            <i className="fa-solid fa-circle" style={{color:'transparent'}}></i>
                            <i className="fa-solid fa-check" style={{color:'red',fontSize:'1.1rem'}}></i>
                            </div>
                        </div>

                        </div>
                        <div className='Library-Section-mid-div-inner-content'>
                        <div className='Library-Section-bottom-div-individual-inner'>
                            <div className='Library-Section-bottom-div-individual-inner-sub'>
                                <div className='Library-Section-bottom-div-individual-inner-sub-data'>
                                    <p>Social Studies Class 5th</p>
                                </div>
                                <div className='Library-Section-bottom-div-individual-inner-sub-data-two'>
                                    <p>23/01/2024</p>
                                </div>
                            </div>
                            <div className='Library-Section-bottom-div-individual-inner-sub-bottom'>
                            <i className="fa-solid fa-circle" style={{color:'transparent'}}></i>
                            <i className="fa-solid fa-check" style={{color:'red',fontSize:'1.1rem'}}></i>
                            </div>
                        </div>

                        </div>

                    </div>
                </div>
                <div className='Library-Section-space-adder-div'>

                </div>
            </div>
        </div>
    )
}

export default LibrarySection