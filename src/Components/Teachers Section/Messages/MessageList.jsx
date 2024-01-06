import React, { useState } from 'react'
import './MessageListStyle.css'
import Navbar from '../../Navbar/NavbarMain'
import { Link } from 'react-router-dom'

const MessageList = () => {
  const [messageActive, setMessageActive] = useState(true)

  return (
    <div className='Message-list-main-div'>
      <div className='Message-list-sub-div'>
        <div className='Message-list-top-div'>
          <Link to={'/TeachersHome'} style={{ textDecoration: 'none' }}><i className="fa-solid fa-angle-left"></i></Link>
          <h2>Messages</h2>
        </div>
        <div className='Message-list-mid-button-div'>
          <button onClick={() => setMessageActive(true)} className={messageActive ? 'Message-list-mid-button-div-button-active' : 'Message-list-mid-button-div-button-inactive'}>Individual</button>
          <button onClick={() => setMessageActive(false)} className={messageActive ? 'Message-list-mid-button-div-button-inactive' : 'Message-list-mid-button-div-button-active'}>Group</button>
        </div>
        <div className='Message-list-mid-messages-div'>


          {messageActive?(

          /* --------------Individual Messages------------ */
          <div className='Message-list-mid-individual-messages-div'>
            <div className='Message-list-mid-individual-inner'>
              <div className='Message-list-mid-individual-inner-sub'>
                <div className='Message-list-mid-individual-inner-sub-image'>
                <img src="https://images.unsplash.com/photo-1622782045716-a05bcc4f5ae8?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aW5kaWFuJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                </div>
                <div className='Message-list-mid-individual-inner-sub-data'>
                  <p>Ritu Kumari</p>
                  <p>7th B</p>
                </div>
              </div>
              <i className="fa-solid fa-phone"></i>

            </div>
            <div className='Message-list-mid-individual-inner'>
              <div className='Message-list-mid-individual-inner-sub'>
                <div className='Message-list-mid-individual-inner-sub-image'>
                <img src="https://images.unsplash.com/photo-1622782045716-a05bcc4f5ae8?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aW5kaWFuJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                </div>
                <div className='Message-list-mid-individual-inner-sub-data'>
                  <p>Ritu Kumari</p>
                  <p>7th B</p>
                </div>
              </div>
              <i className="fa-solid fa-phone"></i>

            </div>
            <div className='Message-list-mid-individual-inner'>
              <div className='Message-list-mid-individual-inner-sub'>
                <div className='Message-list-mid-individual-inner-sub-image'>
                <img src="https://images.unsplash.com/photo-1622782045716-a05bcc4f5ae8?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aW5kaWFuJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                </div>
                <div className='Message-list-mid-individual-inner-sub-data'>
                  <p>Ritu Kumari</p>
                  <p>7th B</p>
                </div>
              </div>
              <i className="fa-solid fa-phone"></i>

            </div>
            <div className='Message-list-mid-individual-inner'>
              <div className='Message-list-mid-individual-inner-sub'>
                <div className='Message-list-mid-individual-inner-sub-image'>
                <img src="https://images.unsplash.com/photo-1622782045716-a05bcc4f5ae8?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aW5kaWFuJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                </div>
                <div className='Message-list-mid-individual-inner-sub-data'>
                  <p>Ritu Kumari</p>
                  <p>7th B</p>
                </div>
              </div>
              <i className="fa-solid fa-phone"></i>

            </div>
            <div className='Message-list-mid-individual-inner'>
              <div className='Message-list-mid-individual-inner-sub'>
                <div className='Message-list-mid-individual-inner-sub-image'>
                <img src="https://images.unsplash.com/photo-1622782045716-a05bcc4f5ae8?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aW5kaWFuJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                </div>
                <div className='Message-list-mid-individual-inner-sub-data'>
                  <p>Ritu Kumari</p>
                  <p>7th B</p>
                </div>
              </div>
              <i className="fa-solid fa-phone"></i>

            </div>
          </div>
          )
          :
          (


          /* ------------------Group Messahges------------------- */
          <div className='Message-list-mid-group-messages-div'>
            <div className='Message-list-mid-individual-inner'>
              <div className='Message-list-mid-individual-inner-sub'>
                <div className='Message-list-mid-individual-inner-sub-image'>
                <img src="https://images.unsplash.com/photo-1524069290683-0457abfe42c3?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFuJTIwc2Nob29sc3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
                </div>
                <div className='Message-list-mid-individual-inner-sub-data'>
                  <p>7th B raman house</p>
                  <p>7th B</p>
                </div>
              </div>
              <i className="fa-solid fa-phone"></i>

            </div>
            <div className='Message-list-mid-individual-inner'>
              <div className='Message-list-mid-individual-inner-sub'>
                <div className='Message-list-mid-individual-inner-sub-image'>
                <img src="https://media.istockphoto.com/id/157674368/photo/portrait-of-a-group-elementary-school-students-standing-together.jpg?s=612x612&w=0&k=20&c=5MBVxaN90goRGYeh5jTBh64lsBn4_ZCEb0R5QdSplWI=" alt="" />
                </div>
                <div className='Message-list-mid-individual-inner-sub-data'>
                  <p>10th B Tagore House</p>
                  <p>7th B</p>
                </div>
              </div>
              <i className="fa-solid fa-phone"></i>

            </div>
            <div className='Message-list-mid-individual-inner'>
              <div className='Message-list-mid-individual-inner-sub'>
                <div className='Message-list-mid-individual-inner-sub-image'>
                <img src="https://c8.alamy.com/comp/KX38GH/indian-group-school-students-friends-arms-crossed-standing-together-KX38GH.jpg" alt="" />
                </div>
                <div className='Message-list-mid-individual-inner-sub-data'>
                  <p>9th C Blue House</p>
                  <p>7th B</p>
                </div>
              </div>
              <i className="fa-solid fa-phone"></i>

            </div>
          </div>


)}

<div className='Message-list-space-adder-div'></div>

        </div>
      </div>
      <Navbar />
    </div>
  )
}

export default MessageList