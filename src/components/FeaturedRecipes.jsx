import React, {useEffect,useState} from 'react'
import RecipeCard from './RecipeCard'
import { Link } from 'react-router-dom'



const FeaturedRecipes = ({isHome}) => {
  const [recipes, setRecipes] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchRecipes = async () => {
      const apiUrl = isHome?'https://dummyjson.com/recipes?limit=3':'https://dummyjson.com/recipes'
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

  if (!recipes.length) {
    return <p className="text-center text-lg">No recipes found.</p>
  }

  return (
    <section className="mt-12">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="font-display text-3xl font-bold">Featured Recipes</h2>
        <Link to='/categories'
        className="rounded-full bg-white/70 dark:bg-charcoal/80 px-4 py-2 text-sm font-semibold text-charcoal dark:text-cream border border-transparent dark:border-white/10 shadow-glass hover:scale-105 transition-all duration-200">
          View all
        </Link>
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