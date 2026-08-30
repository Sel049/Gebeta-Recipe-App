import React from 'react'
import { NavLink } from 'react-router-dom'
import CategoriesPage from '../pages/CategoriesPage'
import RandomRecipe from '../pages/RandomRecipe'

function NavBar() {
  const navItemClass = ({ isActive }) =>
    `text-sm font-semibold transition ${
      isActive
        ? 'text-orange'
        : 'text-charcoal/80 hover:text-orange'
    }`
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
          <NavLink to="/" className={navItemClass}>Home</NavLink>
          <NavLink to ="/categories" className={navItemClass}>Categories</NavLink>
          <NavLink to="/RandomRecipe" className={navItemClass}>Random Recipe</NavLink>
        </nav>

        <div className="flex items-center gap-3">
          <button className="rounded-full bg-white/70 px-4 py-2 text-sm font-semibold">Dark</button>
        </div>
      </header>
    </>
  )
}

export default NavBar