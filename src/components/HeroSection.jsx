import React from 'react'

const HeroSection = ({ searchTerm, onSearchChange }) => {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onSearchChange(searchTerm)
    }
  }

  return (
    <section className="hero-image relative overflow-hidden rounded-[40px] px-8 py-12 text-white shadow-glass md:px-16 md:py-20">
      <div className="absolute inset-0 bg-gradient-to-r from-orange/30 via-transparent to-mint/20"></div>

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <p className="mb-4 inline-flex rounded-full bg-white/15 px-4 py-1 text-xs font-semibold tracking-[0.22em] uppercase backdrop-blur-md">
          Curated food experiences
        </p>

        <h1 className="font-display text-5xl font-bold leading-tight text-white md:text-7xl">
          Discover Recipes You'll Love.
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-base text-white/85 md:text-lg">
          Explore Delicious Dishes and beautifully simple recipes made for every mood.
        </p>

        <div className="mx-auto mt-10 flex max-w-2xl items-center overflow-hidden rounded-full bg-white/95 dark:bg-charcoal/90 border border-transparent dark:border-white/10 shadow-lg">
          <span className="px-5 text-orange">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m1.85-5.15a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </span>
          <input
            type="text"
            placeholder="Search recipes, ingredients, cuisines..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            onKeyDown={handleKeyDown}
            className="w-full bg-transparent px-4 py-5 text-sm text-charcoal dark:text-cream outline-none placeholder:text-charcoal/50 dark:placeholder:text-cream/50"
          />
          <button 
            onClick={() => onSearchChange(searchTerm)}
            className="bg-orange px-8 py-5 text-sm font-semibold text-white hover:bg-orange/90 transition-colors"
          >
            Search
          </button>
        </div>
      </div>
    </section>
  )
}

export default HeroSection