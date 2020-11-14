// Use parts from portfolio to make an individual part
// Create a Classes component to hold all of the Classes Itrms

import React from 'react';
import './ClassesItem.css';

function ClassesItem(props) {
    return (
        <> <div className="classes-item">
            <section className="about-me" id="about">
                <h2 className="section-title-about">{props.classesName}</h2>
    <p className="section-subtitle-about">Experience Level: {props.level}</p>

                <div className="about-me-body">
    <p>{props.description}</p>

                </div>
                <img src={props.src} alt="classes" className="about-img" />

            </section>
            </div>
        </>
    );
}

export default ClassesItem;
