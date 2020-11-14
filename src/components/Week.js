import React from 'react'
import Day from './Day';
import './Day.css';


function Week() {
    return (
        <> <div className="week">
         <h1 className="day">Monday</h1>
         <Day 
            classes="MMA"
            time="6:00PM - 7:00PM"
            />
            <Day 
            classes="Brazilian Jiu Jitsu"
            time="7:00PM - 8:00PM"
            />
            <h1 className="day">Tuesday</h1>
            <Day 
            classes="Boxing"
            time="6:00PM - 7:00PM"
            />
            <Day 
            classes="MMA Fitness"
            time="7:00PM - 8:00PM"
            />
            <h1 className="day">Wednesday</h1>
            <Day 
            classes="MMA"
            time="6:00PM - 7:00PM"
            />
            <Day 
            classes="Brazilian Jiu Jitsu"
            time="7:00PM - 8:00PM"
            />
            <h1 className="day">Thursday</h1>
            <Day 
            classes="Boxing"
            time="6:00PM - 7:00PM"
            />
            <Day 
            classes="MMA Fitness"
            time="7:00PM - 8:00PM"
            />
            <h1 className="day">Friday</h1>
            <Day 
            classes="Boxing"
            time="6:00PM - 7:00PM"
            />
            <Day 
            classes="Bag Work"
            time="7:00PM - 8:00PM"
            />
            <h1 className="day">Saturday</h1>
            <h1 className="day">Sunday</h1>
            </div>
        </>
    )
}

export default Week
