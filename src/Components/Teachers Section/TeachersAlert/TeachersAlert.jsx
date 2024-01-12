import React, { useEffect, useState } from 'react'
import './TeachersAlertStyle.css'
import { Link } from 'react-router-dom'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const TeachersAlert = () => {

    const [circleWidth, setCircleWidth] = useState(30);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCircleWidth((prevWidth) => (prevWidth === 30 ? 60 : 30));
        }, 2000);
        return () => clearInterval(intervalId);
    }, []);



    return (
        <div className='Teachers-Alert-main-div'>
            <div className='Teachers-Alert-sub-div'>
                <div className='Teachers-Alert-top-div'>
                    <Link to={'/TeachersHome'} style={{ textDecoration: 'none' }}><i className="fa-solid fa-angle-left"></i></Link>
                    <h2>Student Alert</h2>
                </div>
                <div className='Teachers-Alert-mid-div'>
                    <div className='Teachers-Alert-mid-div-inner'>
                        <div style={{ width: `${circleWidth}%`, transition: 'width 1s ease-in-out' }}>
                            <CircularProgressbar
                                value={100}
                                strokeWidth={12}
                                styles={buildStyles({
                                    pathColor: `red`,
                                    textColor: 'gray',
                                    trailColor: 'red',
                                    trailWidth: 12,
                                })}
                            />
                        </div>
                    </div>
                    <div className='Teachers-Alert-lower-div-inner'>
                        <h6>Student name : Jasveer Singh</h6>
                        <p>Class 7th B</p>
                        <p>Id : 334TGF67</p>
                        <p>Call : 9876543210</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeachersAlert