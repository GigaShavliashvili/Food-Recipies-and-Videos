import React,{useEffect, useState, useRef} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import singleBg from "../../assets/singlebg.jfif"
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import YouTube from 'react-youtube';
import "./detail.scss"
const Detail = () => {
const [single, setSingle] = useState([])
const {id} = useParams();
const [recepts, setRecepts] = useState([])
const [name, setName] = useState([]);
const [more , setMore] = useState([false])
useEffect(() =>{{
        axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`).then((response) => {
       getMeals(response.data.meals[0]);
    }).catch(error => {
      console.log(error);
    });    
}}, [])


const getMeals = (meal) =>{
setSingle(meal)
const RecipArray = [];
const NameArray =[];

for(var i = 1; i<=20; i++){
    NameArray.push(`${meal[`strIngredient${i}`]}`)
   RecipArray.push(`${meal[`strMeasure${i}`]}`)
}
setRecepts(RecipArray.filter(e => e!=="" ));
setName(NameArray.filter((e) => e!=="null"))
}




if(single.strYoutube){
 var videoUrl = single.strYoutube.slice(32); 
}else{
  return "";
}


  return <div className='Detail' style={{backgroundImage:`url(${singleBg})`}}>
   <div className='Detail__wrapper'>
     <div className="white-bg jagged-border"></div>
     <div className='Detail__wrapper__row1'>
     <div className='Detail__wrapper__row1__image' >
       <img src={single.strMealThumb} alt="" />
     </div>
     <div className='Detail__wrapper__row1__content'>
       <h2>{single.strMeal} 
                   <div className="stars">
          <StarIcon/>
          <StarIcon/>
          <StarIcon/>
          <StarIcon/>
          <StarHalfIcon/>
            </div>
       </h2>
       <div className='info1'>
         <h3>Category: <span>{single.strCategory}</span> </h3>
         <h3>Area: <span>{single.strArea}</span> </h3>
       </div>

          <h3 style={{ marginTop: "10px"}}>Recept:</h3>
         {more ? <p>{single.strInstructions ? single.strInstructions.slice(0, 500): ""}</p> :
          <p>{single.strInstructions}</p> }
          <span  onClick={() => setMore(!more)}>{more ? "Read More" : "Reade Less"}</span>
     </div>
     </div>
      <h2 className='ingredients'>Ingredients</h2>
      <div className='Detail__wrapper__ingredient'>
       
  {
    name.map((el, i) => {
    return  <div className='Detail__wrapper__ingredient__item' key={i}>
      <img src={`https://www.themealdb.com/images/ingredients/${el}-Small.png`} alt="" />
      <div className='Detail__wrapper__ingredient__item__content'>
        <h3>{el}</h3>
        <p>{recepts[i]}</p>
      </div>
    </div>
    })
  }    
      </div>
        <div className='VideoWrapper'>
          <h2>Video Recipe</h2>
<iframe width="700" height="400" src={`https://www.youtube.com/embed/${videoUrl}`}>
				</iframe>
        </div>
   </div>
  </div>;

        }

export default Detail;
