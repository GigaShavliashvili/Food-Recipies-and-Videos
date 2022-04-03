import React,{useState, useEffect} from 'react';
import axios from "axios"
import { Swiper, SwiperSlide } from "swiper/react";
import {HomeSliderBanner} from "../../assetsData"
import Button from '../Button/Button';
import "./homeSlider.scss"
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation,  Autoplay  } from "swiper";

const baseURL = "https://www.themealdb.com/api/json/v1/1/search.php?f=a"


const HomeSlider = () => {
    const [data, setData] = useState([])
     useEffect(() => {
    // invalid url will trigger an 404 error
    axios.get(`${baseURL}`).then((response) => {
    setData(response.data.meals.slice(0 ,5));
    }).catch(error => {
      console.log(error);
    });
  }, []);

  return <div className='homeSlider'>
       <Swiper
        slidesPerView={1}
        speed={1000}
        spaceBetween={0}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        autoplay={{delay: 7000,  disableOnInteraction: false}}
        className="mySwiper"
        
      >
          {
          HomeSliderBanner.map((item,i) => (
 <SwiperSlide key={i}>
     {({ isActive }) => (
        <SliderContent item={item} className={`${isActive ? "active" : null }`}/>
           )} 
  </SwiperSlide>
          ))
          }
      </Swiper>
  </div>;
};

const SliderContent = props =>{
const item = props.item;

return <div className='banner' style={{backgroundImage:`url(${item.img})`}}>
    <div className='banner__content'>
<p>OutStanding Food</p>
<h1>{item.text}</h1>
<Button className="SlideBtn">
    Get Started
</Button>
</div>
</div>
}

export default HomeSlider;
