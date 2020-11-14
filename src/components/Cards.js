import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import ImgMMA from './Images/img-mma.jpg';
import ImgBJJ from './Images/img-bjj.jpg';
import ImgFitness from './Images/img-fitness.jpg';
import ImgBoxing from './Images/img-boxing.jpg';
import Img1to1 from './Images/img-1to1.jpg';


function Cards() {
  return (
    <div className='cards'>
      <h1>Check out our available classes</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
        <ul className='cards__items'>
            <CardItem
              src={ImgMMA}
              text='Mixed Martial Arts'
             
              path='/services'
            />
            <CardItem
              src={ImgBJJ}
              text='Brazilian Jiu Jitsu'
              label='Beginner'
              path='/services'
            />
          
          
            <CardItem
              src={ImgFitness}
              text='MMA Fitness'
              label='All Fitness Levels'
              path='/services'
            />
            
           </ul>
           <ul className='cards__items'>
            <CardItem
              src={ImgBoxing}
              text='Boxing'
              label='All Levels'
              path='/services'
            />
            <CardItem
              src={ImgBoxing}
              text='Kids Classes'
              label='All Levels'
              path='/services'
            />
            <CardItem
              src={Img1to1}
              text='1 - 1 Training'
              label='All Levels'
              path='/services'
            />
           </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;