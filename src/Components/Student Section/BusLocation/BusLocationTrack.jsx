import React from 'react'
import './BusLocationStyle.css'
import { Link } from 'react-router-dom'

const BusLocationTrack = () => {
  return (
    <div className='Bus-Location-main-div'>
    <div className='Bus-Location-sub-div'>
        <div className='Bus-Location-top-div'>
        <Link to={'/TeachersHome'} style={{ textDecoration: 'none' }}><i className="fa-solid fa-angle-left"></i></Link>
            <h2>Track Bus Location</h2>
        </div>
        <div className='Bus-Location-mid-div'>
            <div className='Bus-Location-mid-div-inner'>
                <div className='Bus-Location-mid-div-inner-fees'>
                    <h5>Bus No. 1</h5>
                    <div className='Bus-Location-mid-div-inner-fees-status'>
                        <p style={{backgroundColor:'rgba(0, 163, 0, 0.05)'}}>Running</p>
                       <Link to={'/TrackBusExtended'}><i className="fa-solid fa-angle-right"></i></Link> 
                    </div>
                    
                </div>
                <div className='Bus-Location-mid-div-inner-fees'>
                    <h5>Bus No. 2</h5>
                    <div className='Bus-Location-mid-div-inner-fees-status'>
                        <p style={{backgroundColor:'rgb(255, 6, 6,0.1)'}}>N A</p>
                       <Link to={'/TrackBusExtended'}><i className="fa-solid fa-angle-right"></i></Link> 
                    </div>
                    
                </div>
                <div className='Bus-Location-mid-div-inner-fees'>
                    <h5>Bus No. 3</h5>
                    <div className='Bus-Location-mid-div-inner-fees-status'>
                        <p style={{backgroundColor:'rgba(0, 163, 0, 0.05)'}}>Running</p>
                       <Link to={'/TrackBusExtended'}><i className="fa-solid fa-angle-right"></i></Link> 
                    </div>
                    
                </div>
                <div className='Bus-Location-mid-div-inner-fees'>
                    <h5>Bus No. 4</h5>
                    <div className='Bus-Location-mid-div-inner-fees-status'>
                        <p style={{backgroundColor:'rgba(0, 163, 0, 0.05)'}}>Running</p>
                       <Link to={'/TrackBusExtended'}><i className="fa-solid fa-angle-right"></i></Link> 
                    </div>
                    
                </div>
                <div className='Bus-Location-mid-div-inner-fees'>
                    <h5>Bus No. 5</h5>
                    <div className='Bus-Location-mid-div-inner-fees-status'>
                        <p style={{backgroundColor:'rgba(0, 163, 0, 0.05)'}}>Running</p>
                       <Link to={'/TrackBusExtended'}><i className="fa-solid fa-angle-right"></i></Link> 
                    </div>
                    
                </div>
                <div className='Bus-Location-mid-div-inner-fees'>
                    <h5>Bus No. 6</h5>
                    <div className='Bus-Location-mid-div-inner-fees-status'>
                        <p style={{backgroundColor:'rgba(0, 163, 0, 0.05)'}}>Running</p>
                       <Link to={'/TrackBusExtended'}><i className="fa-solid fa-angle-right"></i></Link> 
                    </div>
                    
                </div>
                <div className='Bus-Location-mid-div-inner-fees'>
                    <h5>Bus No. 7</h5>
                    <div className='Bus-Location-mid-div-inner-fees-status'>
                        <p style={{backgroundColor:'rgba(0, 163, 0, 0.05)'}}>Running</p>
                       <Link to={'/TrackBusExtended'}><i className="fa-solid fa-angle-right"></i></Link> 
                    </div>
                    
                </div>
                <div className='Bus-Location-mid-div-inner-fees'>
                    <h5>Bus No. 8</h5>
                    <div className='Bus-Location-mid-div-inner-fees-status'>
                        <p style={{backgroundColor:'rgba(0, 163, 0, 0.05)'}}>Running</p>
                       <Link to={'/TrackBusExtended'}><i className="fa-solid fa-angle-right"></i></Link> 
                    </div>
                    
                </div>
                <div className='Bus-Location-mid-div-inner-fees'>
                    <h5>Bus No. 9</h5>
                    <div className='Bus-Location-mid-div-inner-fees-status'>
                        <p style={{backgroundColor:'rgb(255, 6, 6,0.1)'}}>N A</p>
                       <Link to={'/TrackBusExtended'}><i className="fa-solid fa-angle-right"></i></Link> 
                    </div>
                    
                </div>

                <div className='Bus-Location-space-adder'>

                </div>
            </div>

        </div>
    </div>
</div>
  )
}

export default BusLocationTrack