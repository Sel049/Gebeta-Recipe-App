import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [theme])

  const navItemClass = ({ isActive }) =>
    `text-sm font-semibold transition ${
      isActive
        ? 'text-orange'
        : 'text-charcoal/80 dark:text-cream/80 hover:text-orange dark:hover:text-orange'
    }`

  return (
    <>
    <header
        className="glass sticky top-4 z-20 mb-8 flex items-center justify-between rounded-full border border-white/60 px-4 py-3 shadow-glass"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange">
          🍽️
          </div>
          <div>
            <div className="font-display text-xl font-bold text-charcoal dark:text-cream">Recipe Finder</div>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <NavLink to="/" className={navItemClass} onClick={() => setMenuOpen(false)}>Home</NavLink>
          <NavLink to="/categories" className={navItemClass} onClick={() => setMenuOpen(false)}>Categories</NavLink>
          <NavLink to="/RandomRecipe" className={navItemClass} onClick={() => setMenuOpen(false)}>Random Recipe</NavLink>
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            className="rounded-full bg-white/70 dark:bg-charcoal/80 px-3 py-2 text-sm font-semibold text-charcoal dark:text-cream shadow-sm hover:scale-105 transition-all duration-200"
          >
            {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
          </button>

          {/* Hamburger Button (mobile only) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-full bg-white/70 dark:bg-charcoal/80 gap-[5px]"
          >
            <span className={`block w-4 h-0.5 bg-charcoal dark:bg-cream rounded transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[6px]' : ''}`}></span>
            <span className={`block w-4 h-0.5 bg-charcoal dark:bg-cream rounded transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-4 h-0.5 bg-charcoal dark:bg-cream rounded transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[6px]' : ''}`}></span>
          </button>
        </div>
      </header>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-60 opacity-100 mt-2' : 'max-h-0 opacity-0 mt-0'}`}>
        <nav className="mx-auto max-w-7xl flex flex-col gap-1 rounded-2xl bg-white/70 dark:bg-charcoal/60 backdrop-blur-xl border border-white/60 dark:border-white/10 p-4 shadow-glass">
          <NavLink to="/" className={`${navItemClass({isActive: false})} block text-center py-2 rounded-xl hover:bg-white/50 dark:hover:bg-charcoal/30`} onClick={() => setMenuOpen(false)}>Home</NavLink>
          <NavLink to="/categories" className={`${navItemClass({isActive: false})} block text-center py-2 rounded-xl hover:bg-white/50 dark:hover:bg-charcoal/30`} onClick={() => setMenuOpen(false)}>Categories</NavLink>
          <NavLink to="/RandomRecipe" className={`${navItemClass({isActive: false})} block text-center py-2 rounded-xl hover:bg-white/50 dark:hover:bg-charcoal/30`} onClick={() => setMenuOpen(false)}>Random Recipe</NavLink>
        </nav>
      </div>
    </>
  )
}

export default NavBar
