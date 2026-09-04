import React, { useEffect, useState } from 'react'
import RecipeCard from './RecipeCard'
import { Link } from 'react-router-dom'


const FeaturedRecipes = ({ isHome, searchTerm = '', recipes: recipesProp, loading: loadingProp }) => {
  const [recipes, setRecipes] = useState([])
  const [internalLoading, setInternalLoading] = useState(true)
  const [error, setError] = useState('')

  // Determine if parent passed recipes as props (e.g., from CategoriesPage)
  const hasParentRecipes = recipesProp !== undefined
  const displayLoading = hasParentRecipes ? loadingProp : internalLoading

  useEffect(() => {
    // If parent already provided recipes, skip internal fetching
    if (hasParentRecipes) {
      setRecipes(recipesProp)
      return
    }

    // Otherwise fetch from API (always fetch all for search support)
    const fetchRecipes = async () => {
      try {
        setInternalLoading(true)
        const response = await fetch('https://dummyjson.com/recipes')

        if (!response.ok) {
          throw new Error('Failed to fetch recipes')
        }

        const data = await response.json()
        setRecipes(data.recipes || [])
      } catch (err) {
        setError('Unable to load recipes. Please try again.')
      } finally {
        setInternalLoading(false)
      }
    }

    fetchRecipes()
  }, [hasParentRecipes, recipesProp])

  // Filter recipes based on search term
  const filteredRecipes = searchTerm
    ? recipes.filter((recipe) =>
        recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        recipe.cuisine.toLowerCase().includes(searchTerm.toLowerCase()) ||
        recipe.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    : recipes

  // When isHome=true and no search, show only first 3
  const displayRecipes = isHome && !searchTerm ? filteredRecipes.slice(0, 3) : filteredRecipes

  // Determine heading
  const heading = searchTerm ? `Search Results for "${searchTerm}"` : 'Featured Recipes'

  if (displayLoading) {
    return (
      <section className="mt-12">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="font-display text-3xl font-bold">Featured Recipes</h2>
        </div>
   
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="animate-pulse overflow-hidden rounded-[28px] border border-white/60 dark:border-white/10 bg-white/55 dark:bg-charcoal/40 shadow-glass"
            >
              <div className="h-64 w-full bg-slate-200 dark:bg-charcoal/60" />
              <div className="space-y-3 p-5">
                <div className="h-4 w-20 rounded-full bg-slate-200 dark:bg-charcoal/60" />
                <div className="h-7 w-2/3 rounded bg-slate-200 dark:bg-charcoal/60" />
                <div className="h-4 w-full rounded bg-slate-200 dark:bg-charcoal/60" />
                <div className="h-4 w-5/6 rounded bg-slate-200 dark:bg-charcoal/60" />
                <div className="h-10 w-full rounded-full bg-slate-200 dark:bg-charcoal/60" />
              </div>
            </div>
          ))}
        </div>
      </section>
    )
  }

  if (error) {
    return <p className="text-center text-lg text-red-500">{error}</p>
  }

  if (!displayRecipes.length) {
    return (
      <section className="mt-12">
        <h2 className="font-display text-3xl font-bold mb-6">{heading}</h2>
        <p className="text-center text-lg">No recipes found{searchTerm ? ` for "${searchTerm}"` : ''}.</p>
      </section>
    )
  }

  return (
    <section className="mt-12">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="font-display text-3xl font-bold">{heading}</h2>
        {!searchTerm && isHome && (
          <Link to='/categories'
          className="rounded-full bg-white/70 dark:bg-charcoal/80 px-4 py-2 text-sm font-semibold text-charcoal dark:text-cream border border-transparent dark:border-white/10 shadow-glass hover:scale-105 transition-all duration-200">
            View all
          </Link>
        )}
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {displayRecipes.map((recipe) => (
          <RecipeCard 
            key={recipe.id}
            id={recipe.id}
            image={recipe.image}
            category={recipe.cuisine || 'Popular'}
            time={`${recipe.prepTimeMinutes + recipe.cookTimeMinutes} min`}
            title={recipe.name}
            description={recipe.summary || 'A delicious recipe worth trying.'}
            rating={recipe.rating}
            difficulty={recipe.difficulty} 
          />
        ))}
      </div>
    </section>
  )
}

export default FeaturedRecipes