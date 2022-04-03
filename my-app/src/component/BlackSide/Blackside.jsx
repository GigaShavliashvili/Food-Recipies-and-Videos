import React from 'react';
import "./Blackside.scss"
import SectionHeader from '../sectionHeader/SectionHeader';
import PopularDishes from '../PooularDishes/PopularDishes';
const Blackside = () => {
  return <div className='blackside'>
<Banner/>
<SectionHeader color={'white'}/>
<PopularDishes/>
  </div>;
};

export default Blackside;


const Banner = props =>{
    return <div className='bleckside__banner'
     style={{background:`url(https://www.unox.com/media/upBoxImages/1018/1595402719.webp)`}}>
         <div className='bleckside__banner__content'>
         <p>II frigo Caldo</p>
         <h1>EVEREO®</h1>
         </div>
          </div>
}