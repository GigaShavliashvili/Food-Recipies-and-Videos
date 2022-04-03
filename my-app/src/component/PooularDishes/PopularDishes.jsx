import React from 'react';
import "./populardishes.scss"
import {Autoplay} from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";

const PopularDishes = () => {
  return <div className='popilar-dishes'>

        <Swiper

           grabCursor={true}
        spaceBetween={20}
         slidesPerView={1}
        modules={[Autoplay]}
      autoplay={{delay: 3000, disableOnInteraction: false}}
loop={true}
      >
 <SwiperSlide>
<div className='popilar-dishes__header'>
    <h1>Break Fast</h1>
</div>
<div className='popilar-dishes__content'>
    <div className='popilar-dishes__content__item'>
   <div className='texts'>
       <h1>Morning BreakFast</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p> 
   </div>
    <span>19$</span>
    </div>
        <div className='popilar-dishes__content__item'>
   <div className='texts'>
       <h1>Morning BreakFast</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p> 
   </div>
    <span>19$</span>
    </div>
        <div className='popilar-dishes__content__item'>
   <div className='texts'>
       <h1>Morning BreakFast</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p> 
   </div>
    <span>19$</span>
    </div>
        <div className='popilar-dishes__content__item'>
   <div className='texts'>
       <h1>Morning BreakFast</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p> 
   </div>
    <span>19$</span>
    </div>
</div>
  </SwiperSlide>
   <SwiperSlide>
<div className='popilar-dishes__header'>
    <h1>Drink</h1>
</div>
<div className='popilar-dishes__content'>
 <div className='popilar-dishes__content__item'>
   <div className='texts'>
       <h1>Cold Drink</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p> 
   </div>
    <span>19$</span>
    </div>
     <div className='popilar-dishes__content__item'>
   <div className='texts'>
       <h1>Cold Drink</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p> 
   </div>
    <span>19$</span>
    </div>
     <div className='popilar-dishes__content__item'>
   <div className='texts'>
       <h1>Cold Drink</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p> 
   </div>
    <span>19$</span>
    </div>
     <div className='popilar-dishes__content__item'>
   <div className='texts'>
       <h1>Cold Drink</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p> 
   </div>
    <span>19$</span>
    </div>
</div>
  </SwiperSlide>
     <SwiperSlide>
<div className='popilar-dishes__header'>
    <h1>Dessert</h1>
</div>
<div className='popilar-dishes__content'>
 <div className='popilar-dishes__content__item'>
   <div className='texts'>
       <h1>Sweet Dessert</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p> 
   </div>
    <span>19$</span>
    </div>
     <div className='popilar-dishes__content__item'>
   <div className='texts'>
       <h1>Sweet Dessert</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p> 
   </div>
    <span>19$</span>
    </div>
     <div className='popilar-dishes__content__item'>
   <div className='texts'>
       <h1>Sweet Dessert</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p> 
   </div>
    <span>19$</span>
    </div>
     <div className='popilar-dishes__content__item'>
   <div className='texts'>
       <h1>Sweet Dessert</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p> 
   </div>
    <span>19$</span>
    </div>
</div>
  </SwiperSlide>

   
      </Swiper>
  </div>;
};

export default PopularDishes;
