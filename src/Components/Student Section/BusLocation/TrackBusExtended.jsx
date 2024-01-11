import React, { useEffect, useState } from 'react'
import './TrackBusStyle.css'
import { Link } from 'react-router-dom'
// import { GoogleMap, Marker } from '@react-google-maps/api';

const TrackBusExtended = () => {


    const [waitLoading, setWaitLoading] = useState(true)

    //     const mapContainerStyle = {
    //       width: '100%',
    //       height: '100%',
    //     };

    //     const center = { lat: 0, lng: 0 };

    // const vehicles = [
    //     { id: 1, name: 'Vehicle 1', latitude: 37.7749, longitude: -122.4194 },
    //   ];

    useEffect(()=>{
        setTimeout(()=>{
            setWaitLoading(false)
        },1500)
    },[])


    return (
        <div className='Track-Bus-Extended-main-div'>
            <div className='Track-Bus-Extended-sub-div'>
                <div className='Track-Bus-Extended-top-div'>
                    <Link to={'/BusLocation'} style={{ textDecoration: 'none' }}><i className="fa-solid fa-angle-left"></i></Link>
                    <h2>Track Bus Location</h2>
                </div >
                <div className='Track-Bus-Extended-Bus-Number'>
                    <h5>Bus No. 1</h5>

                </div>
                <div className='Track-Bus-Extended-mid-div'>
                    <div className='Track-Bus-Extended-mid-sub-div'>
                        {/* <GoogleMap
                            mapContainerStyle={mapContainerStyle}
                            center={center}
                            zoom={10} // Set the initial zoom level
                        >
                            {vehicles.map((vehicle) => (
                                <Marker
                                    key={vehicle.id}
                                    position={{ lat: vehicle.latitude, lng: vehicle.longitude }}
                                    title={vehicle.name} // Optionally, display vehicle name as a tooltip
                                />
                            ))}
                        </GoogleMap> */}
                        {waitLoading?

                        (<h4>Loading...</h4>)
                        
                    :
                    
                       ( <iframe
                            title="Google Map Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3697.2963562948303!2d82.15697667577395!3d22.07649635096951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a280b179a6cb1e7%3A0x5bc1b08afc80beea!2sSiddhi%20Softwares!5e0!3m2!1sen!2sin!4v1704955800173!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: "0" }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                       )

                    }

                    </div>
                </div>

            </div>
        </div>
    )
}

export default TrackBusExtended



