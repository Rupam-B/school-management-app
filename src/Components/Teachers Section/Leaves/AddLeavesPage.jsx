import React, { useState } from 'react'
import './AddLeavesStyle.css'
import { Link } from 'react-router-dom'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


const AddLeavesPage = () => {

    const [startSelectedDate, setStartSelectedDate] = useState(null);
    const [endSelectedDate, setEndSelectedDate] = useState(null);
    // const [selectedDate, setSelectedDate] = useState(null);

    const handleStartDateChange = (date) => {
        setStartSelectedDate(date);
    };
    const handleEndDateChange = (date) => {
        setEndSelectedDate(date);
    };

    return (
        <div className='Add-Leaves-main-div'>
            <div className='Add-Leaves-sub-div'>
                <div className='Add-Leaves-top-div'>
                    <Link to={'/LeaveSection'} style={{ textDecoration: 'none' }}><i className="fa-solid fa-angle-left"></i></Link>
                    <h2>Apply for Leave</h2>
                </div>
                <div className='Add-Leaves-mid-div'>
                    <select className='Add-Leaves-mid-select' name="" id="">
                        <option value="casual leave">casual leave</option>
                        <option value="sick leave">sick leave</option>
                    </select>
                    <DatePicker
                        className='Add-Leaves-mid-select-from-date'
                        selected={startSelectedDate}
                        onChange={handleStartDateChange}
                        dateFormat="MMMM d, yyyy"
                        placeholderText='Start Date'
                    />
                    <DatePicker
                        className='Add-Leaves-mid-select-upto-date'
                        selected={endSelectedDate}
                        onChange={handleEndDateChange}
                        dateFormat="MMMM d, yyyy"
                        placeholderText='End Date'
                    />
                    <textarea className='Add-Leaves-mid-select-reason' rows={10}
                        cols={10}
                        placeholder='Reason for Leave' />

                    <div className='Add-Leaves-mid-select-type'>
                        <label  style={{fontSize:'0.85rem'}}>
                            <input
                                type="radio"
                                name="leaveType"
                                value="halfDay"
                                style={{fontSize:'0.2rem'}}
                            />
                            Half Day Leave
                        </label>
                        <label style={{fontSize:'0.85rem'}}>
                            <input
                                type="radio"
                                name="leaveType"
                                value="fullDay"
                            />
                            Full Day Leave
                        </label>
                    </div>

                    <Link to={'/LeaveSection'} className='Add-Leaves-mid-select-apply-button'>
                        Apply
                    </Link>

                    <div className='Add-Leaves-mid-space-add-on-div'>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddLeavesPage