import React from 'react'
import HeroSection from '../components/HeroSection'
import Catagories from '../components/Catagories'  
import FeaturedRecipes from '../components/FeaturedRecipes'
import ExploreCuisines from '../components/ExploreCuisines'
import Footer from '../components/Footer'

const HomePage = () => {
  return (
    <>
    <HeroSection/>
    <Catagories/>
    <FeaturedRecipes/>
    <ExploreCuisines/>
    </>
  )
}

export default HomePage