import React,{useEffect} from 'react';
import bg from "../../assets/footer.jpg"
import { Link } from 'react-router-dom';
import "./footer.scss"
import FastfoodIcon from '@mui/icons-material/Fastfood';
import 'animate.css';
import AOS, { init } from 'aos';
import 'aos/dist/aos.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PinterestIcon from '@mui/icons-material/Pinterest';
const Footer = () => {

useEffect(() =>{
   AOS.init({duration:1000})
},[])


  return   <div className='footer' >
    <div className='footer__content'>
      <div className='footer__content__logo' data-aos="fade-down" data-aos-delay="200">
     <FastfoodIcon style={{fontSize:"70px"}}/>
  <h1>Mana-Papuri</h1>
      </div>
      <div className='footer__content__menus'  data-aos="fade-up"data-aos-delay="200">
                    <div className="footer__content__menu">
                        <Link to="/">Home</Link>
                        <Link to="/">Contact us</Link>
                        <Link to="/">Term of services</Link>
                        <Link to="/">About us</Link>
                    </div> 
                    <div className="footer__content__menu">
                        <Link to="/">Live</Link>
                        <Link to="/">FAQ</Link>
                        <Link to="/">Premium</Link>
                        <Link to="/">Pravacy policy</Link>
                    </div>
                    <div className="footer__content__menu">
                        <Link to="/">You must watch</Link>
                        <Link to="/">Recent release</Link>
                        <Link to="/">Top IMDB</Link>
                    </div>
      </div>
      <div className='footer__content__icons' data-aos="fade-up">
        <div className='icon'>
<FacebookIcon/>
        </div>
             <div className='icon'>
<InstagramIcon/>
        </div>
             <div className='icon'>
<TwitterIcon/>
        </div>
             <div className='icon'>
<YouTubeIcon/>
        </div>
             <div className='icon'>
<PinterestIcon/>
        </div>
      </div>
    </div>
  </div>;;
};

export default Footer;
