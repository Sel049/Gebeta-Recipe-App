import React from 'react'
import { Link } from 'react-router-dom'
import Catagories from './Catagories'
import Favorites from '../pages/Favorites'

function NavBar() {
  return (
    <>
    <header
        className="glass sticky top-4 z-20 mb-8 flex items-center justify-between rounded-full border border-white/60 px-4 py-3 shadow-glass"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange ">
          🍽️
          </div>
          <div>
            <div className="font-display text-xl font-bold">Recipe Finder</div>
          </div>
        </div>

        <nav className="hidden items-center gap-7 md:flex">
          <a href="/" className="text-sm font-semibold text-charcoal/80">Home</a>
          <a href ="/Catagories" className="text-sm font-semibold text-charcoal/80">Categories</a>
          <a href="#" className="text-sm font-semibold text-charcoal/80">Favorites</a>
          <a href="#" className="text-sm font-semibold text-charcoal/80">Random Recipe</a>
        </nav>

        <div className="flex items-center gap-3">
          <button className="rounded-full bg-white/70 px-4 py-2 text-sm font-semibold">Dark</button>
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-charcoal text-sm font-bold text-white">
            A
          </div>
        </div>
      </header>
    </>
  )
}

export default NavBar