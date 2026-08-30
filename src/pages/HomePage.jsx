import React from 'react'
import HeroSection from '../components/HeroSection'
import Catagories from '../components/Catagories'  
import FeaturedRecipes from '../components/FeaturedRecipes'
import ExploreCuisines from '../components/ExploreCuisines'


const HomePage = () => {
  return (
    <>
    <HeroSection/>
    <Catagories/>
    <FeaturedRecipes isHome/>
    <ExploreCuisines/>
    </>
  )
}

export default HomePage