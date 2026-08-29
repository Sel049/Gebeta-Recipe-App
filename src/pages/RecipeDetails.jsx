import React from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import RecipeHero from '../components/RecipeHero'
import RecipeStats from '../components/RecipeStats'
import IngredientsList from '../components/IngredientsList'
import CookingSteps from '../components/CookingSteps'
import Nutrition from '../components/Nutrition'
import ChefTip from '../components/ChefTip'
import { recipeDetails} from '../data/recipes'

const RecipeDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const recipe = recipeDetails.find((item) => item.id === id)

  if (!recipe) {
    return <div className="p-10 text-center">Recipe not found</div>
  }

  return (
    <div className="min-h-screen bg-cream text-charcoal">
      <button
        type="button"
        onClick={() => navigate('/')}
        className="ml-6 mt-6 flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-md transition hover:bg-gray-100"
      >
        <FiArrowLeft />
        <span>Back</span>
      </button>

      <main>
        <RecipeHero recipe={recipe} />
        <RecipeStats recipe={recipe} />

        <section className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-12 lg:grid-cols-3">
            <IngredientsList
              ingredients={recipe.ingredients}
              initialServings={recipe.servings}
            />

            <CookingSteps steps={recipe.steps} />
          </div>
        </section>

        <Nutrition nutrition={recipe.nutrition} />
        <ChefTip tip={recipe.chefTip} />
      </main>
    </div>
  )
}

export default RecipeDetails