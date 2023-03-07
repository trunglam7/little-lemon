import React from 'react'
import './Confirmation.css'
const Confirmation = ({name, email, numPeople, date, setConfirm}) => {
  return (
    <div className='confirm-container'>
        <p>Thank You <span style={{'fontWeight': 'bold'}}>{name}</span> for Reserving with Us for <span style={{'fontWeight': 'bold'}}>{numPeople}</span> people</p>
        <p>On <span style={{'fontWeight': 'bold'}}>{date}</span></p>
        <p>Your confirmation is sent to your email at: <span style={{'fontWeight': 'bold'}}>{email}</span></p>
        <button className='form-submit-btn' onClick={() => setConfirm(false)}>Back</button>
    </div>
  )
}

export default Confirmation