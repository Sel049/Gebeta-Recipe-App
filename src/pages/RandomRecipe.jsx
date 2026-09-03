import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import RecipeHero from '../components/RecipeHero'
import RecipeStats from '../components/RecipeStats'
import IngredientsList from '../components/IngredientsList'
import CookingSteps from '../components/CookingSteps'
import Nutrition from '../components/Nutrition'
import ChefTip from '../components/ChefTip'

const RandomRecipe = () => {
  const navigate = useNavigate()
  const [recipe, setRecipe] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const fetchRandomRecipe = async () => {
    try {
      setLoading(true)
      setError('')
      
      // Generate random ID (DummyJSON has recipes 1-50)
      const randomId = Math.floor(Math.random() * 50) + 1
      
      const response = await fetch(`https://dummyjson.com/recipes/${randomId}`)

      if (!response.ok) {
        throw new Error('Recipe not found')
      }

      const data = await response.json()
      setRecipe(data)
    } catch (err) {
      setError('Unable to load recipe. Try another one!')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchRandomRecipe()
  }, [])

  if (loading) {
    return (
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="animate-pulse rounded-[32px] bg-white/60 dark:bg-charcoal/40 border border-transparent dark:border-white/10 p-6 shadow-glass">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="h-[520px] rounded-[32px] bg-slate-200 dark:bg-charcoal/60" />
            <div className="space-y-4">
              <div className="h-8 w-28 rounded-full bg-slate-200 dark:bg-charcoal/60" />
              <div className="h-12 w-3/4 rounded bg-slate-200 dark:bg-charcoal/60" />
              <div className="h-5 w-full rounded bg-slate-200 dark:bg-charcoal/60" />
              <div className="h-5 w-5/6 rounded bg-slate-200 dark:bg-charcoal/60" />
              <div className="flex gap-3">
                <div className="h-14 w-28 rounded-2xl bg-slate-200 dark:bg-charcoal/60" />
                <div className="h-14 w-28 rounded-2xl bg-slate-200 dark:bg-charcoal/60" />
                <div className="h-14 w-28 rounded-2xl bg-slate-200 dark:bg-charcoal/60" />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <p className="mb-6 text-lg text-red-500">{error}</p>
        <button
          onClick={fetchRandomRecipe}
          className="rounded-full bg-orange px-6 py-3 font-semibold text-white transition hover:opacity-90"
        >
          Try Another Recipe
        </button>
      </div>
    )
  }

  if (!recipe) {
    return <p className="text-center text-lg">Recipe not found.</p>
  }

  return (
    <div className="min-h-screen">
      <div className="flex items-center justify-between px-6 pt-6">
        <button
          type="button"
          onClick={() => navigate('/')}
          className="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-md transition hover:bg-gray-100 dark:bg-charcoal/60 dark:text-cream dark:hover:bg-charcoal/40 dark:border dark:border-white/10"
        >
          <FiArrowLeft />
          <span>Back</span>
        </button>

        <button
          onClick={fetchRandomRecipe}
          className="rounded-full bg-orange px-6 py-2 font-semibold text-white transition hover:opacity-90"
        >
          🎲 Get Another Recipe
        </button>
      </div>

      <main>
        <RecipeHero recipe={recipe} />
        <RecipeStats recipe={recipe} />

        <section className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-12 lg:grid-cols-3">
            <IngredientsList
              ingredients={recipe.ingredients}
              initialServings={recipe.servings}
            />

            <CookingSteps steps={recipe.instructions} />
          </div>
        </section>

        <Nutrition nutrition={recipe.nutrition} />
        {recipe.chefTip ? <ChefTip tip={recipe.chefTip} /> : null}
      </main>
    </div>
  )
}

export default RandomRecipe