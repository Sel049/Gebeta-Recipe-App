import React, {useEffect,useState} from 'react'
import RecipeCard from './RecipeCard'



const FeaturedRecipes = ({isHome}) => {
  const [recipes, setRecipes] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchRecipes = async () => {
      const apiUrl = isHome?'https://dummyjson.com/recipes?limit=6':'https://dummyjson.com/recipes'
      try {
        setLoading(true)
        const response = await fetch(apiUrl)

        if (!response.ok) {
          throw new Error('Failed to fetch recipes')
        }

        const data = await response.json()
        setRecipes(data.recipes || [])
      } catch (err) {
        setError('Unable to load recipes. Please try again.')
      } finally {
        setLoading(false)
      }
    }

    fetchRecipes()
  }, [isHome])

  if (loading) {
    return <p className="text-center text-lg">Loading recipes...</p>
  }

  if (error) {
    return <p className="text-center text-lg text-red-500">{error}</p>
  }

  if (!recipes.length) {
    return <p className="text-center text-lg">No recipes found.</p>
  }

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