import React from 'react';

import HomeSlider from '../component/HomeSlider/HomeSlider';
import About from "../component/About/About"
import SectionHeader from '../component/sectionHeader/SectionHeader';
import FoodList from '../component/FoodList/FoodList';
import Footer from '../component/Footer/Footer';
import Blackside from '../component/BlackSide/Blackside';
import Sine from "../component/authorSine/Sine"

const Home = () => {
const text1 = "Popular Dishes"


  return <div className='home'>
  
<HomeSlider/>
<About/>
<SectionHeader color={"black"}/>
<FoodList/>
<Blackside />
  </div>;
};

export default Home;
