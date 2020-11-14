import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import Vid from './Videos/vid-01.mp4';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src={Vid} autoPlay loop muted />
            <h1>Begin your journey today</h1>
            <p>What are you waiting for?</p>
            <div className="hero-btns">
                <Button className="btns" buttonStyle="btn--outline"
                buttonSize="btn--large">Get Started</Button>
                
            </div>
        </div>
    )
}

export default HeroSection
