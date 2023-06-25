import React from 'react'
import '../../../styles/event.css'
import { Link } from 'react-router-dom'
function EventCard(props) {
  return (
    <div>
        <h3 className='event-title'>{props.eventSerialNo }.   {props.eventName} </h3>
        <Link to = {props.eventName}>
        <div className='image-container'>
            <img 
                src = {props.imgLink}
                alt = 'poster'
            />
        </div>
        </Link>
        <br/>
    </div>
  )
}

export default EventCard