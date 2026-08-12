import React from 'react'
import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import Catagories from './components/Catagories'
import FeaturedRecipes from './components/FeaturedRecipes'
import ExploreCuisines from './components/ExploreCuisines'
import Footer from './components/Footer'

const name = 'customers'

const App = () => {
  return (
  <>
  <div className="min-h-screen bg-cream text-charcoal antialiased font-sans">
    <div className="mx-auto max-w-7xl px-4 py-6 md:px-8 lg:px-10">  
    
    <NavBar/>
    
    <main>
      <HeroSection/>
      <Catagories/>
      <FeaturedRecipes/>
      <ExploreCuisines/>  
    </main>

    <Footer/>

    </div>
  </div>
</>
  )
}

export default App