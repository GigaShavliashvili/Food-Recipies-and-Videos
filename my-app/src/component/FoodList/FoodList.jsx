import React,{useEffect, useState, useRef} from 'react';
import axios from 'axios';
import "./foodList.scss"
import {Autoplay} from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import video from "../../assets/video.mp4"
import FoodCard   from "../FoodCard/FoodCard";
import Button from '../Button/Button';
import 'animate.css';
import AOS, { init } from 'aos';
import 'aos/dist/aos.css';
    const PoplarURL = "https://www.themealdb.com/api/json/v1/1/search.php?f=t"
   const LaterUrl = "https://www.themealdb.com/api/json/v1/1/search.php?f=b"


const FoodList = props => {
const SpanActive = useRef(null)
useEffect(() =>{
   AOS.init({duration:1000})
},[])




    const [data, setData] = useState([])
     useEffect(() => {
    axios.get(`${PoplarURL}`).then((response) => {
    setData(response.data.meals.slice(0 ,8));
    }).catch(error => {
      console.log(error);
    });
  }, []);

      const [data2, setData2] = useState([])
     useEffect(() => {
    axios.get(`${LaterUrl}`).then((response) => {
    setData2(response.data.meals.slice(0 ,8));
    }).catch(error => {
      console.log(error);
    });
  }, []);

  return <div className='foodlist__section' style={{backgroundImage:`url(${video})`}}>
<video autoPlay loop muted src={video} className='video'>
    
</video>
<div className='foodlist__section__content'>
    <div className='foodlist__section__content__item' data-aos="fade-up" data-aos-delay="200">
                  <div className='foodlist__header'>
               <h3>Popular Food</h3>
<Button className="foodlist__btn">See More</Button>
          </div>
     <Swiper

           grabCursor={true}
        spaceBetween={20}
         slidesPerView={'auto'}
        modules={[Autoplay]}
      autoplay={{delay: 3000, disableOnInteraction: false}}

      >
          {
          data.map((item,i) => (
 <SwiperSlide key={i} className='foodlist__section__content__slider'>
 
        <FoodCard item={item} />
  </SwiperSlide>
          ))
          }
      </Swiper>
      </div>
      <div className='foodlist__section__content__item ' data-aos="fade-up" data-aos-delay="350">
          <div className='foodlist__header'>
              <h3>Latest Food</h3>
<Button className="foodlist__btn">See More</Button>
          </div>
           
           <Swiper

           grabCursor={true}
        spaceBetween={20}
         slidesPerView={'auto'}
        modules={[Autoplay]}
      autoplay={{delay: 4000, disableOnInteraction: false}}

      >
          {
          data2.map((item,i) => (
 <SwiperSlide key={i} className='foodlist__section__content__slider'>
        <FoodCard item={item} />
  </SwiperSlide>
          ))
          }
      </Swiper>
         </div>
  </div>;
</div>
 
};

export default FoodList;
