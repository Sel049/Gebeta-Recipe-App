import React, { useEffect, useState } from 'react'
import { FiArrowLeft } from 'react-icons/fi'
import FeaturedRecipes from '../components/FeaturedRecipes'

const CategoriesPage = () => {
  const [allRecipes, setAllRecipes] = useState([])
  const [cuisines, setCuisines] = useState([])
  const [selectedCuisine, setSelectedCuisine] = useState(null)
  const [filteredRecipes, setFilteredRecipes] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  // Fetch all recipes and extract unique cuisines
  useEffect(() => {
    const fetchAllRecipes = async () => {
      try {
        setLoading(true)
        const response = await fetch('https://dummyjson.com/recipes?limit=200')

        if (!response.ok) {
          throw new Error('Failed to fetch recipes')
        }

        const data = await response.json()
        const recipes = data.recipes || []
        setAllRecipes(recipes)

        // Extract unique cuisines
        const uniqueCuisines = [...new Set(recipes.map((r) => r.cuisine))].filter(
          Boolean
        )
        setCuisines(uniqueCuisines)
      } catch (err) {
        setError('Unable to load cuisines. Please try again.')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchAllRecipes()
  }, [])

  // When a cuisine is selected, filter recipes
  const handleCuisineClick = (cuisine) => {
    setSelectedCuisine(cuisine)
    const filtered = allRecipes.filter((recipe) => recipe.cuisine === cuisine)
    setFilteredRecipes(filtered)
  }

  // Get a representative image for a cuisine
  const getCuisineImage = (cuisine) => {
    const recipe = allRecipes.find((r) => r.cuisine === cuisine)
    return recipe ? recipe.image : 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=500&auto=format&fit=crop&q=60'
  }

  // View showing cuisines grid
  if (!selectedCuisine) {
    return (
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange">
            Explore the world
          </p>
          <h1 className="mt-3 font-display text-5xl font-bold">All Cuisines</h1>
          <p className="mt-4 max-w-2xl text-lg text-charcoal/70 dark:text-cream/70">
            Discover delicious recipes and flavors from different cultures around the world.
          </p>
        </div>

        {loading ? (
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div
                key={item}
                className="animate-pulse h-56 rounded-[28px] bg-slate-200 dark:bg-charcoal/60"
              />
            ))}
          </div>
        ) : error ? (
          <p className="text-center text-lg text-red-500">{error}</p>
        ) : cuisines.length === 0 ? (
          <p className="text-center text-lg">No cuisines found.</p>
        ) : (
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
            {cuisines.map((cuisine) => (
              <div
                key={cuisine}
                onClick={() => handleCuisineClick(cuisine)}
                className="group relative h-56 cursor-pointer overflow-hidden rounded-[28px] transition duration-300 hover:-translate-y-2 hover:scale-[1.02]"
              >
                <img
                  src={getCuisineImage(cuisine)}
                  alt={cuisine}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                <div className="absolute bottom-5 left-5 text-white">
                  <p className="text-xl font-semibold">{cuisine}</p>
                  <p className="text-sm text-white/75">
                    {allRecipes.filter((r) => r.cuisine === cuisine).length} recipes
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    )
  }

  // View showing filtered recipes for selected cuisine
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <button
        onClick={() => {
          setSelectedCuisine(null)
          setFilteredRecipes([])
        }}
        className="mb-8 flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-md transition hover:bg-gray-100 dark:bg-charcoal/60 dark:text-cream dark:hover:bg-charcoal/40 dark:border dark:border-white/10"
      >
        <FiArrowLeft />
        <span>Back to Cuisines</span>
      </button>

      <div className="mb-12">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange">
          Cuisine
        </p>
        <h1 className="mt-3 font-display text-5xl font-bold">{selectedCuisine} Recipes</h1>
        <p className="mt-4 text-lg text-charcoal/70 dark:text-cream/70">
          {filteredRecipes.length} delicious recipes from {selectedCuisine} cuisine
        </p>
      </div>

      <FeaturedRecipes recipes={filteredRecipes} loading={false} />
    </section>
  )
}

export default CategoriesPage