import React from 'react'
import Classes from '../Classes';
import PageHeroSection from '../PageHeroSection';
import Img from '../Images/img-class.jpg';

function Services() {
    return (
        <>
            <PageHeroSection 
            src={Img}
            pageName="Classes"
            pageDesc="We have classes available for all fitness and experience levels"
            />
            <Classes />
        </>
    )
}

export default Services
