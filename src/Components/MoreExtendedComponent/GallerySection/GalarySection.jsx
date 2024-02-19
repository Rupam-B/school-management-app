import React, { useEffect } from 'react'
// import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
import axios from 'axios'
import './GalarySectionStyle.css'
const GalarySection = () => {
    // const [storedDatas, setStoredDatas] = useState([])
    // const [selectedImage, setSelectedImage] = useState(null);

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
                // setStoredDatas(data);
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

  // const openModal = (image) => {
  //   setSelectedImage(image);
  //   console.log("modal clicked")
  //   console.log(selectedImage)
  // };

  // const closeModal = () => {
  //   setSelectedImage(null);
  // };

//   const openPdf = (pdfLink) => {
//     window.open(pdfLink);
// };
// console.log(selectedImage,'Outside Selected')

 return (
        <div className='Achivement-section-main-div'>
          <h1>Gallery</h1>
            
        </div>
    )
}

export default GalarySection