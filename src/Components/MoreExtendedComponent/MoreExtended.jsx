import React from 'react'
import { Link } from 'react-router-dom'

const MoreExtended = () => {
    return (
        <div>
            <div className='Student-Home-Work-main-div'>
                <div className='Student-Home-Work-sub-div'>
                    <div className='Student-Home-Work-top-div'>
                        <Link to={'/TeachersHome'} style={{ textDecoration: 'none' }}><i className="fa-solid fa-angle-left"></i></Link>
                        {/* <h2>Student HomeWork</h2> */}
                    </div>
                    <div className='Student-Home-Middle-content-div'>
                        <div className='Student-Home-Main-icons'>
                            <Link to={'/DateSheetSection'} style={{ backgroundColor: '#e7dfd6', textDecoration: 'none' }} className='Student-Home-Main-icons-inner-div'>
                            <i className="fa-solid fa-table"></i>
                            </Link>
                            <p>Date Sheet</p>
                        </div>
                        <div className='Student-Home-Main-icons'>
                            <Link to={'/AchivementSection'} style={{ backgroundColor: '#ffe1f2', textDecoration: 'none' }} className='Student-Home-Main-icons-inner-div'>
                            <i className="fa-solid fa-trophy"></i>
                            </Link>
                            <p>Achivements</p>
                        </div>
                        <div className='Student-Home-Main-icons'>
                            <Link to={'/SyllabusSection'} style={{ backgroundColor: '#e7dfd6', textDecoration: 'none' }} className='Student-Home-Main-icons-inner-div'>
                            <i className="fa-brands fa-discourse"></i>
                            </Link>
                            <p>Syllabus</p>
                        </div>
                        <div className='Student-Home-Main-icons'>
                            <Link to={'/TransportSection'} style={{ backgroundColor: '#e7dfd6', textDecoration: 'none' }} className='Student-Home-Main-icons-inner-div'>
                            <i className="fa-solid fa-bus"></i>
                            </Link>
                            <p>Trasport</p>
                        </div>
                        <div className='Student-Home-Main-icons'>
                            <Link to={'/ExtendedFeeSection'} style={{ backgroundColor: '#e7dfd6', textDecoration: 'none' }} className='Student-Home-Main-icons-inner-div'>
                            <i className="fa-solid fa-bus"></i>
                            </Link>
                            <p>Fees</p>
                        </div>
                        <div className='Student-Home-Main-icons'>
                            <Link to={'/TransportSection'} style={{ backgroundColor: '#e7dfd6', textDecoration: 'none' }} className='Student-Home-Main-icons-inner-div'>
                            <i className="fa-solid fa-bus"></i>
                            </Link>
                            <p>Trasport</p>
                        </div>
                        <div className='Student-Home-Main-icons'>
                            <Link to={'/TransportSection'} style={{ backgroundColor: '#e7dfd6', textDecoration: 'none' }} className='Student-Home-Main-icons-inner-div'>
                            <i className="fa-solid fa-bus"></i>
                            </Link>
                            <p>Trasport</p>
                        </div>
                        <div className='Student-Home-Main-icons'>
                            <Link to={'/TransportSection'} style={{ backgroundColor: '#e7dfd6', textDecoration: 'none' }} className='Student-Home-Main-icons-inner-div'>
                            <i className="fa-solid fa-bus"></i>
                            </Link>
                            <p>Trasport</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MoreExtended