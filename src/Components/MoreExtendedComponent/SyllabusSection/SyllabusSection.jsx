import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const SyllabusSection = () => {
    const [storedDatas, setStoredDatas] = useState()

    useEffect(() => {
        const fetchData = async () => {
          try {
            // setIsLoading(true)
            const response = await axios.get(`api/getSyllabus`, {
              headers: {
                Accept: "application/json",
              },
            });
    
            if (response.status >= 200 && response.status < 300) {
              const data = response.data;
              if (data) {
                // console.log(data)
                setStoredDatas(data);
              }
            } else {
              throw new Error("Network response was not ok");
            }
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        //   finally{
        //     setIsLoading(false)
        //   }
        };
    
        fetchData();
      
    },[]);


    const openPdf = (pdfLink) => {
      window.open(pdfLink);
  };
    return (
        <div className='Achivement-section-main-div'>
            <div className='Achivement-section-sub-div'>
                <div className='Achivement-section-top-div'>
                    <Link to={'/MoreExtended'} style={{ textDecoration: 'none' }}><i className="fa-solid fa-angle-left"></i></Link>
                    <h2>Syllabus</h2>
                </div>
                <div className='Achivement-section-mid-div'>
                    <div className='Achivement-section-mid-div-header'>
                        <h5>Event</h5>
                        <h5>File</h5>
                    </div>
                    {storedDatas&&storedDatas.map((items,index)=>(
                    <div key={index} className='Achivement-section-mid-div-content'>
                        <div className='Achivement-section-mid-div-content-one'><p>{items.text}</p></div>
                        <div className='Achivement-section-mid-div-content-two'> <i style={{ color: '#ed1b2e', fontSize:'2rem' }} className="fa-solid fa-file-pdf" onClick={() => openPdf(items.pdf)}></i></div>
                    </div>
                    )) }
                </div>
            </div>
        </div>
    )
}

export default SyllabusSection