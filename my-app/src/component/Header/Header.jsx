import React, { useEffect } from 'react';
import { useRef } from 'react';
import Button from '../Button/Button';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import "./header.scss"
import { Link } from 'react-router-dom';
import "./menu.scss"
import { useLocation } from 'react-router-dom';
const HeaderMenu = [
{
display:"Home",
path:"/"
},
{
display:"About",
path:"/About",
color:"black"
},
{
display:"Menu",
path:"/Food"
},
{
display:"Galery",
path:"/Galery"
},
{
display:"Food",
path:"/Menu"
},
{
display:"Order",
path:"/Order"
},

]


const Header = () => {
const {pathname} = useLocation()
const toggle = useRef(null);
const scroll = useRef(null)
const active = HeaderMenu.findIndex((e) => e.path === pathname)

const handlerMenu = () =>{
    toggle.current.classList.toggle("active");
}


useEffect(() =>{
  
window.addEventListener("scroll" ,() =>{
if(window.scrollY > 100 && window.scrollY < 2380){
  scroll.current.classList.add("shrink")
   scroll.current.classList.remove("black-shrink")
} else
if(window.scrollY > 2381){
   scroll.current.classList.add("black-shrink")
}
else
 scroll.current.classList.remove("shrink")
}) 


return () =>{
window.removeEventListener("scroll")
}

},[])


  return <div className='header'  ref={scroll}>
      <div className='header__logo'>
        <Link to="/">
    <FastfoodIcon  style={{color:"#0799ee" ,fontSize:"40px"}}/>
      </Link>
         <span>Mama-Papuri</span>
      </div>
      <div className="header__nav" ref={toggle}>
          <ul className='menu-bar'>
          {HeaderMenu.map((el,i) =>{
          return   <Link to={el.path} key={i}>
                     <li  className={`${i === active ? "active" : ""}`}>
          {el.display}
          </li>
                  </Link>
              
          })}
          </ul>
      </div>
      <Button className='MenuIcon' onClick = {handlerMenu}>
              <MenuOpenIcon style={{fontSize:"20px"}}/>
      </Button>
  </div>;
};

export default Header;
