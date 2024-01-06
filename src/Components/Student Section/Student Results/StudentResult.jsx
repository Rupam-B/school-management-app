import React, { useEffect, useState } from 'react'
import './StudentResultStyle.css'
import { Link } from 'react-router-dom'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Line } from 'rc-progress';


const StudentResult = () => {

    const [circularPercent, setCircularPercent] =useState(0)
    const [sciencePercent, setSciencePercent] =useState(0)
    const [mathsPercent, setMathsPercent] =useState(0)
    const [socialSciencePercent, setSocialSciencePercent] =useState(0)
    const [hindiPercent, setHindiPercent] =useState(0)
    const [englishPercent, setEnglishPercent] =useState(0)
    const [sanskritPercent, setSsanskritPercent] =useState(0)


    useEffect(() => {
        const interval = setInterval(() => {
          setCircularPercent((prevPercent) => (prevPercent < 80 ? prevPercent + 1 : 80));
          setSciencePercent((prevPercent) => (prevPercent < 56 ? prevPercent + 1 : 56));
          setMathsPercent((prevPercent) => (prevPercent < 90 ? prevPercent + 1 : 90));
          setSocialSciencePercent((prevPercent) => (prevPercent < 82 ? prevPercent + 1 : 82));
          setHindiPercent((prevPercent) => (prevPercent < 67 ? prevPercent + 1 : 67));
          setEnglishPercent((prevPercent) => (prevPercent < 95 ? prevPercent + 1 : 95));
          setSsanskritPercent((prevPercent) => (prevPercent < 85 ? prevPercent + 1 : 85));
        }, 15);
    
        return () => clearInterval(interval);
      }, []);


    return (
        <div className='Student-all-Result-main-div'>
            <div className='Student-all-Result-sub-div'>
                <div className='Student-all-Result-top-div'>
                    <Link to={'/StudentDetails'} style={{ textDecoration: 'none' }}><i className="fa-solid fa-angle-left"></i></Link>
                    <h2>Student Result</h2>
                </div>
                <div className='Student-all-Result-mid-div'>
                    <div className='Student-all-Result-mid-div-avg-score'>
                        <p>Overall Score</p>
                        <p>400/500</p>
                    </div>
                    <div className='Student-all-Result-mid-div-avg-score-circle'>
                        <div style={{ width: '40%' }}>
                            <CircularProgressbar
                                value={circularPercent}
                                text={`${circularPercent}%`}
                                strokeWidth={12}
                                styles={buildStyles({
                                    pathColor: `#c9c3e6`,
                                    textColor: 'gray',
                                    trailColor: '#d6d6d6',
                                    trailWidth: 12,
                                })}
                            />
                        </div>
                    </div>

                </div>
                <div className='Student-all-Result-lower-div'>
                    <div className='Student-all-Result-lower-div-one'>
                        <div className='Student-all-Result-lower-div-one-image'>
                                <img src="https://www.odmps.org/updates/wp-content/uploads/2022/01/3651141-scaled.jpg" alt="" />
                        </div>
                        <div className='Student-all-Result-lower-div-one-content'>
                            <div className='Student-all-Result-lower-div-one-content-one'>
                                <p>science</p>
                                <p>56/100</p>
                            </div>
                            <div className='Student-all-Result-lower-div-one-content-two'>
                            <Line percent={sciencePercent} 
                            strokeWidth={4} 
                            strokeColor="#c9c3e6"
                            trailWidth={4} />
                            </div>
                        </div>

                    </div>
                    <div className='Student-all-Result-lower-div-one'>
                        <div className='Student-all-Result-lower-div-one-image'>
                                <img src="https://png.pngtree.com/png-clipart/20190917/original/pngtree-educational-math-tool-png-learning-flat-png-image_4601288.jpg" alt="" />
                        </div>
                        <div className='Student-all-Result-lower-div-one-content'>
                            <div className='Student-all-Result-lower-div-one-content-one'>
                                <p>Maths</p>
                                <p>90/100</p>
                            </div>
                            <div className='Student-all-Result-lower-div-one-content-two'>
                            <Line percent={mathsPercent} 
                            strokeWidth={4} 
                            strokeColor="#c9c3e6"
                            trailWidth={4} />
                            </div>
                        </div>

                    </div>
                    <div className='Student-all-Result-lower-div-one'>
                        <div className='Student-all-Result-lower-div-one-image'>
                                <img src="https://t3.ftcdn.net/jpg/05/18/90/86/360_F_518908672_tQKY520gnERsKyOFGF8OdtFKtUzNgepp.jpg" alt="" />
                        </div>
                        <div className='Student-all-Result-lower-div-one-content'>
                            <div className='Student-all-Result-lower-div-one-content-one'>
                                <p>Social science</p>
                                <p>82/100</p>
                            </div>
                            <div className='Student-all-Result-lower-div-one-content-two'>
                            <Line percent={socialSciencePercent} 
                            strokeWidth={4} 
                            strokeColor="#c9c3e6"
                            trailWidth={4} />
                            </div>
                        </div>

                    </div>
                    <div className='Student-all-Result-lower-div-one'>
                        <div className='Student-all-Result-lower-div-one-image'>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Hindi.svg/1024px-Hindi.svg.png" alt="" />
                        </div>
                        <div className='Student-all-Result-lower-div-one-content'>
                            <div className='Student-all-Result-lower-div-one-content-one'>
                                <p>Hindi</p>
                                <p>67/100</p>
                            </div>
                            <div className='Student-all-Result-lower-div-one-content-two'>
                            <Line percent={hindiPercent} 
                            strokeWidth={4} 
                            strokeColor="#c9c3e6"
                            trailWidth={4} />
                            </div>
                        </div>

                    </div>
                    <div className='Student-all-Result-lower-div-one'>
                        <div className='Student-all-Result-lower-div-one-image'>
                                <img src="https://st2.depositphotos.com/3591429/5246/i/450/depositphotos_52462701-stock-photo-people-and-english-concept.jpg" alt="" />
                        </div>
                        <div className='Student-all-Result-lower-div-one-content'>
                            <div className='Student-all-Result-lower-div-one-content-one'>
                                <p>English</p>
                                <p>95/100</p>
                            </div>
                            <div className='Student-all-Result-lower-div-one-content-two'>
                            <Line percent={englishPercent} 
                            strokeWidth={4} 
                            strokeColor="#c9c3e6"
                            trailWidth={4} />
                            </div>
                        </div>

                    </div>
                    <div className='Student-all-Result-lower-div-one'>
                        <div className='Student-all-Result-lower-div-one-image'>
                                <img src="https://i0.wp.com/agniveer.com/wp-content/uploads/2010/12/sanskrit1.jpg?fit=602%2C442&ssl=1" alt="" />
                        </div>
                        <div className='Student-all-Result-lower-div-one-content'>
                            <div className='Student-all-Result-lower-div-one-content-one'>
                                <p>sanskrit</p>
                                <p>85/100</p>
                            </div>
                            <div className='Student-all-Result-lower-div-one-content-two'>
                            <Line percent={sanskritPercent} 
                            strokeWidth={4} 
                            strokeColor="#c9c3e6"
                            trailWidth={4} />
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default StudentResult