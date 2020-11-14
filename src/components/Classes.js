import React from 'react';
import ClassesItem from './ClassesItem';
import ImgMMA from './Images/img-mma.jpg';
import ImgBJJ from './Images/img-bjj.jpg';
import ImgFitness from './Images/img-fitness.jpg';
import ImgBoxing from './Images/img-boxing.jpg';
import Img1to1 from './Images/img-1to1.jpg';

function Classes() {
    return (
        <>
        <ClassesItem 
            classesName="MMA"
            level="Advanced"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore 
            magna aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris nisi ut aliquip ex ea commodo 
            consequat."
            src={ImgMMA}
            />
            <ClassesItem 
            classesName="Brazilian Jiu Jitsu"
            level="Beginner Friendly"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore 
            magna aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris nisi ut aliquip ex ea commodo 
            consequat."
            src={ImgBJJ}
            />
            <ClassesItem 
            classesName="MMA Fitness"
            level="Beginner Friendly"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore 
            magna aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris nisi ut aliquip ex ea commodo 
            consequat."
            src={ImgFitness}
            />
            <ClassesItem 
            classesName="Boxing"
            level="Beginner Friendly"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore 
            magna aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris nisi ut aliquip ex ea commodo 
            consequat."
            src={ImgBoxing}
            />
            <ClassesItem 
            classesName="Kids"
            level="Beginner Friendly"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore 
            magna aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris nisi ut aliquip ex ea commodo 
            consequat."
            src={ImgBoxing}
            />
            <ClassesItem 
            classesName="1-1 Training"
            level="Beginner Friendly"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore 
            magna aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris nisi ut aliquip ex ea commodo 
            consequat."
            src={Img1to1}
            />
        </>
    )
}

export default Classes
