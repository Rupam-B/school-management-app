import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './GalarySectionStyle.css'
const GalarySection = () => {
    const [storedDatas, setStoredDatas] = useState([])
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
          try {
            // setIsLoading(true)
            const response = await axios.get(`api/getGallery`, {
              headers: {
                Accept: "application/json",
              },
            });
    
            if (response.status >= 200 && response.status < 300) {
              const data = response.data;
              if (data) {
                console.log(data)
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


  //   const openPdf = (pdfLink) => {
  //     window.open(pdfLink);
  // };

  const openModal = (image) => {
    setSelectedImage(image);
    console.log("modal clicked")
    console.log(selectedImage)
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

//   const openPdf = (pdfLink) => {
//     window.open(pdfLink);
// };
// console.log(selectedImage,'Outside Selected')

 return (
        <div className='Achivement-section-main-div'>
            <div style={{paddingBottom:'20vh'}} className='Achivement-section-sub-div'>
                <div className='Achivement-section-top-div'>
                    <Link to={'/MoreExtended'} style={{ textDecoration: 'none' }}><i className="fa-solid fa-angle-left"></i></Link>
                    <h2>Galary</h2>
                </div>
                <div className='Achivement-section-mid-div'>
                    <div className='Achivement-section-mid-div-header'>
                        <h5>Event</h5>
                        {/* <h5>File</h5> */}
                    </div>
                    {storedDatas&&storedDatas.map((items,index)=>(
                    <div key={index} className='Galary-section-mid-div-content'>
                        <div className='Galary-section-mid-div-content-one'><p>{items.title}</p></div>
                        <div  className='Galary-section-mid-div-content-two'>{items.images&&items.images.map((imgs,index)=>(
                          <div key={index} onClick={() => openModal(imgs)}>
                          {/* <div key={index} onClick={() => openPdf(imgs)}> */}
                            <img className='Galary-section-mid-div-images' src={imgs} alt="" />
                          </div>

                        ))} </div>
                    </div>
                    )) }
                    {selectedImage && (
                             <div className="Show-Image">
                                 <span className="Show-Image-close" onClick={closeModal}>&times;</span>
                                <div className="Show-Image-sub">
                                  <img className="Show-Image-modal-image" src={selectedImage} alt="" />
                                </div>
                              </div>
                    )} 

                </div>
            </div>
        </div>
    )
}

export default GalarySection