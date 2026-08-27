import React from 'react'
import RecipeCard from './RecipeCard'

const recipes = [
  {
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80',
    category: 'Ethiopian Cuisine',
    time: '60 min',
    title: 'Doro Wat',
    description: 'A rich Ethiopian chicken stew prepared with berbere, onions, spices, and traditional Ethiopian butter.',
    rating: '4.8',
    difficulty: 'Medium',
  },
  {
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80',
    category: 'Seafood',
    time: '30 min',
    title: 'Citrus Salmon',
    description: 'Tender salmon glazed with orange and dill for a bright finish.',
    rating: '4.8',
    difficulty: 'Medium',
  },
  {
    image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=900&q=80',
    category: 'Dessert',
    time: '20 min',
    title: 'Berry Cloud',
    description: 'A light layered dessert with whipped cream and warm berries.',
    rating: '4.7',
    difficulty: 'Easy',
  },
]

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
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.title} {...recipe} />
        ))}
      </div>
    </section>
  )
}

export default FeaturedRecipes