import React from 'react'
import './NoticeStyle.css'
import { Link } from 'react-router-dom'

const Notice = () => {
  return (
    <div className='Notice-Section-main-div'>
    <div className='Notice-Section-sub-div'>
        <div className='Notice-Section-top-div'>
            <Link to={'/TeachersHome'} style={{ textDecoration: 'none' }}><i className="fa-solid fa-angle-left"></i></Link>
            <h2>Notice</h2>
        </div>
        <div className='Notice-Section-list-div'>
            <div className='Notice-Section-show-list-div'>
                <div className='Notice-Section-show-list-div-left'>
                    <p className='Notice-Section-show-list-div-left-para-two'><i className="fa-regular fa-calendar-days"></i>13th Jan , 2024</p>
                    <p className='Notice-Section-show-list-div-left-para-one'>Makar Shankranti Holiday</p>
                </div>
            </div>
            <div className='Notice-Section-show-list-div'>
                <div className='Notice-Section-show-list-div-left'>
                    <p className='Notice-Section-show-list-div-left-para-two'><i className="fa-regular fa-calendar-days"></i> 26th Jan , 2024</p>
                    <p className='Notice-Section-show-list-div-left-para-one'>Republic Day Celebration</p>
                </div>
            </div>
            <div className='Notice-Section-show-list-div'>
                <div className='Notice-Section-show-list-div-left'>
                    <p className='Notice-Section-show-list-div-left-para-two'><i className="fa-regular fa-calendar-days"></i> 4th Feb , 2024</p>
                    <p className='Notice-Section-show-list-div-left-para-one'>Saraswati Puja Function</p>
                </div>
            </div>
            <div className='Notice-Section-show-list-div'>
                <div className='Notice-Section-show-list-div-left'>
                    <p className='Notice-Section-show-list-div-left-para-two'><i className="fa-regular fa-calendar-days"></i> 15th Jan , 2024</p>
                    <p className='Notice-Section-show-list-div-left-para-one'>Annual Sports Celwebration</p>
                </div>
            </div>

        </div>
    </div>
</div>
  )
}

export default Notice