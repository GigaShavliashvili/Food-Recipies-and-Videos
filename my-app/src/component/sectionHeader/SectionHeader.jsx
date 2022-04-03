import React,{useEffect,useRef} from 'react';
import "./sectionHeader.scss"
import 'animate.css';
import AOS, { init } from 'aos';
import 'aos/dist/aos.css';

const SectionHeader = props => {


  return <div  className='header__wrapper' data-aos="fade">
<h1 className="home-title"  >
  <span  >Popular Dishes</span>
  <span style={{color:`${props.color}`}}>Our Delicious Food</span>
</h1>
  </div>;
};

export default SectionHeader;
