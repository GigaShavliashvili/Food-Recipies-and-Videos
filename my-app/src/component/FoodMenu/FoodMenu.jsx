import React,{useEffect, useState} from 'react';
import "./foodMenu.scss"
import axios from 'axios';
import {Link} from "react-router-dom"
import 'animate.css';
import AOS, { init } from 'aos';
import 'aos/dist/aos.css';
import { useGlobalContext } from '../../Context';
const FoodMenu = () => {

const [data, setData] = useState([])
const {setGridinfo} = useGlobalContext();


      useEffect(() => {
    // invalid url will trigger an 404 error
    axios.get(`https://www.themealdb.com/api/json/v1/1/categories.php`).then((response) => {
    setData(response.data.categories.slice(0,14));
    }).catch(error => {
      console.log(error);
    });
  }, []);

useEffect(() =>{
   AOS.init({duration:300})
},[])


  return   <div className="foodMenu container">

        <div className="nav-menu" data-aos="fade-up">
            {data.map((item) =>{
       return   <Link key={item.idCategory} to="/Menu" style={{backgroundImage:`url(${item.strCategoryThumb})`}} className="nav-menu-item" 
       onClick={() => setGridinfo([item.strCategory,item.strCategory,item.strCategoryThumb ])} /* categoryFilter(item.strCategory, item.strCategory,item.strCategoryThumb)} */>
        <div>
            <p  className="nav-menu-link">{item.strCategory}</p>
          </div>
                </Link>

            })} 
             </div>
    </div>

};

export default FoodMenu;
