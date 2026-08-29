import React from 'react'
import RecipeCard from './RecipeCard'
import { featuredRecipes } from '../data/recipes'


const FeaturedRecipes = () => {
  return (
    <section className="mt-12">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="font-display text-3xl font-bold">Featured Recipes</h2>
        <button className="rounded-full bg-white/70 px-4 py-2 text-sm font-semibold shadow-glass">
          View all
        </button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {featuredRecipes.map((recipe) => (
          <RecipeCard key={recipe.title} {...recipe} />
        ))}
      </div>
    </section>
  )
}

export default FeaturedRecipes