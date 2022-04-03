import React, { useState } from 'react';
import "./about.scss"
import AboutImage from "../../assets/about-img.png" 
import Button from "../Button/Button"

import LocalBarOutlinedIcon from '@mui/icons-material/LocalBarOutlined'
import DinnerDiningOutlinedIcon from '@mui/icons-material/DinnerDiningOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
const About = () => {
const [state, setState] = useState(false)
const handlerButton = () =>{
   setState(!state)
}

  return <div className='about section' id="/about">
      <div className='about__image '
       style={{backgroundImage:`url(${AboutImage})`}}></div>
      <div className='about__content'>
          <h1>Welcome To Our Restorant</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi 
              alias voluptate enim accusamus, commodi harum vel aperiam ipsa necessitatibus
               reprehenderit quidem odit nam qui odio rerum dolorum
                illo cum repellendus.
                </p>
{state ? <p>Lorem ipsum dolor sit amet consectetur 
    adipisicing elit. Quasi magni aliquam incidunt nobis, labo
    re atque ipsum sunt voluptas. Placeat autem el
    igendi alias mollitia molestias paria
    tur temporibus nostrum quo numquam tempora!</p> : ""}
                <Button className="about-btn" onClick={handlerButton} >{state ?  `Read Less` : "Read More"}</Button>
           
                <div className='about__content__icons'>
<div className='about-icon'>
<LocalBarOutlinedIcon  style={{fontSize:"45px",fontWeight:"100", color:"#0799ee"}}/>
<p>Quality Food</p>
</div>
<div className='about-icon'>
<DinnerDiningOutlinedIcon  style={{fontSize:"45px", color:"#0799ee"}}/>
<p>Food {"&"} Drink</p>
</div>
<div className='about-icon '>
<MenuBookOutlinedIcon style={{fontSize:"45px", color:"#0799ee"}}/>
<p>Expert Chefs</p>
</div>
                </div>
      </div>
  </div>;
};

export default About;
