import React, { useState } from 'react'
import './Day.css';


function Day(props) {
const [booked, setBooked] = useState(false);
    const handleClick = () => {
setBooked(!booked)
    }
    return (
        <div className="day-container">
       
    <h2 className="day-name">{props.classes}</h2>
    <h3 className="day-time">{props.time}</h3>
    {!booked && <button type="button" className="btns" onClick={handleClick}>
        Book Now
        </button> }
        {booked && <button type="button" className="btns--booked" onClick={handleClick}>
        Booked
        </button> }
    {/* <Button className="btns" buttonStyle="btn--primary"
                buttonSize="btn--medium">Book Now</Button> */}
        </div>
    )
}

export default Day
