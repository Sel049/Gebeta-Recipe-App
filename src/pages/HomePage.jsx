import React, { useState } from 'react'
import HeroSection from '../components/HeroSection'
import Catagories from '../components/Catagories'  
import FeaturedRecipes from '../components/FeaturedRecipes'
import ExploreCuisines from '../components/ExploreCuisines'


const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <>
    <HeroSection searchTerm={searchTerm} onSearchChange={setSearchTerm} />
    <FeaturedRecipes isHome searchTerm={searchTerm} />
    <Catagories/>
    <ExploreCuisines/>
    </>
  )
}

export default HomePage