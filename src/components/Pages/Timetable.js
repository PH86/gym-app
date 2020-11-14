import React from 'react';
import Week from '../Week';
import PageHeroSection from '../PageHeroSection';
import Img from '../Images/img-timetable.jpg';


function Timetable() {
    return (         <>
        <PageHeroSection 
        src={Img}
        pageName="Timetable"
        pageDesc="We have classes available for all fitness and experience levels"
        />
        <Week />
    </>
 
    );
}

export default Timetable;