import React,{useState, useEffect, useRef} from 'react';
import axios from 'axios';
import "./foodGrid.scss"
import StarIcon from '@mui/icons-material/Star';
import Button from '../Button/Button';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import { useGlobalContext } from '../../Context';
import SearchIcon from '@mui/icons-material/Search';
import gridImage from "../../assets/gridimg.jpg"
import {Link} from "react-router-dom"
const Url = 'https://www.themealdb.com/api/json/v1/1/search.php?f=b'
const FoodGrid = () => {

  const [data, setData] = useState([])
   const [meals, setMeals] = useState([])
const [search, setSearch] = useState([1])
const [searchedMeal, setSearchedMeal] = useState([]);
console.log(searchedMeal);

  useEffect(() =>{
    axios.get(Url).then((response) => {
      setData(response.data.meals);
    }).catch(error => {
      console.log(error);
    });
   
  },[])

    useEffect(() =>{
    axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`).then((response) => {
       setSearchedMeal(response.data.meals);
    }).catch(error => {
      console.log(error);
    });
   
  },[search])
  
  const {categoryFilter} =useGlobalContext();
 const {Meal,gridInfo} = useGlobalContext();
console.log(gridInfo);

  useEffect(() =>{
categoryFilter(gridInfo[0])
  },[])


  const SearchOpen = useRef("")
    const SearchOpen2 = useRef("")

const openSearch = () =>{
SearchOpen.current.classList.add("searchBanner-active")
SearchOpen2.current.classList.add("prodict-wrapper-active")
}
const closeSearch = () => {
SearchOpen.current.classList.remove("searchBanner-active")
SearchOpen2.current.classList.remove("prodict-wrapper-active")
}


  return <div className="food-menu">


  {
   
    ((gridInfo[1] ? 
       <div style={{paddingTop:"5rem"}}>
    <div className='food-menu__banner' style={{backgroundImage:`url(${gridInfo[2]})`}}>
  <h1>{gridInfo[1]}</h1>
 <Link to="/Food"> <Button>Back Menu</Button></Link>
</div> 
</div> : <div>
  <div className='food-menu__Allsbanner' style={{backgroundImage:`url(${gridImage})`}}>
  <h1>ALL CATEGORY</h1>
 <Link to="/Food"><Button className="gridBtn" >Open Menu</Button></Link>
  <div className='food-menu__Allsbanner__search'>
  <div className='food-menu__Allsbanner__search__input'>
    <input type="text" placeholder='Search...' onClick={() => openSearch()} onChange={(e) => setSearch(e.target.value)}/>
    <SearchIcon className='icon'/>
  </div>


       <div className='prodict-wrapper' ref={SearchOpen2}>
         <h4>results: {(searchedMeal ? searchedMeal.length : "0")}</h4>
{
(searchedMeal ?  searchedMeal.map((item) =>{
 return <div> 
   <div  className="search-item-box" key={item.idMeal}>
       <Link to={`/Detail/${item.idMeal}`}>
          <img src={item.strMealThumb} alt="" />
            <h3>{item.strMeal}</h3>
            </Link>
      </div>
      </div>
  }) : <p>Search...</p>)
 
}
</div>   
</div>
<div className='SearchBanner' ref={SearchOpen} onClick={() => closeSearch()}>
</div>
</div>
</div>

 ))
  }

   <div className="box-container">

{
    (Meal ? Meal : data).map((item) =>{
 
    return  <div  className="box" key={item.idMeal}>
      <Link to={`/Detail/${item.idMeal}`}>
          <img src={item.strMealThumb} alt="" />
          </Link>
         <div className="content">
          <div className="white-bg jagged-border"></div>
            <div className="stars">
          <StarIcon/>
          <StarIcon/>
          <StarIcon/>
          <StarIcon/>
          <StarHalfIcon/>
            </div>
            <h3>{item.strMeal}</h3>
            <div className="price">$0</div>
            <span className='line'></span>
            <Button className="menu-btn" >add to cart</Button>
         </div>
      </div>
    })
}



  </div>
  </div>

};

export default FoodGrid;
