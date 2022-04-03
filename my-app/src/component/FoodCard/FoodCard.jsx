import React from 'react';
import "./foodCard.scss"
const FoodCard = props => {
const item = props.item;

  return <div className='foodcard'>
      <div className='foodcard__image' style={{backgroundImage:`url(${item.strMealThumb})`}}>
    
      </div>
      <div className='foodcard__content'>
          <h4>{item.strMeal}</h4>
          <span>16$</span>
      </div>
  </div>;
};

export default FoodCard;
