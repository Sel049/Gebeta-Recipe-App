import React from 'react'

const HeroSection = ({title="Discover Recipes You'll Love.",subtitle_1="Curated food experiences",subtitle_2="Explore gourmet dishes, handpicked favorites, and beautifully simple recipes made for every mood."}) => {
  return (
    <section className="hero-image relative overflow-hidden rounded-[32px] px-6 py-10 text-white shadow-glass md:px-12 md:py-16">
        <div className="absolute inset-0 bg-gradient-to-r from-orange/30 via-transparent to-mint/20"></div>

        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <p className="mb-4 inline-flex rounded-full bg-white/15 px-4 py-1 text-xs font-semibold tracking-[0.22em] uppercase backdrop-blur-md">
            {subtitle_1}
          </p>

          <h1 className="font-display text-4xl font-bold md:text-6xl">
            {title}
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm text-white/85 md:text-base">
            {subtitle_2}
          </p>

          <div className="mx-auto mt-8 flex max-w-2xl items-center overflow-hidden rounded-full bg-white/95 shadow-lg">
            <span className="px-4 text-orange">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-4.35-4.35m1.85-5.15a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Search recipes, ingredients, cuisines..."
              className="w-full bg-transparent px-2 py-4 text-sm text-charcoal outline-none placeholder:text-charcoal/50"
            />
            <button className="bg-orange px-6 py-4 text-sm font-semibold text-white">
              Search
            </button>
          </div>
        </div>
      </section>
  )
}

export default HeroSection