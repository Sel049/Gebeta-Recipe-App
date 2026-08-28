import React from 'react'
import RecipeHero from '../components/RecipeHero'
import RecipeStats from '../components/RecipeStats'
import IngredientsList from '../components/IngredientsList'
import CookingSteps from '../components/CookingSteps'
import Nutrition from '../components/Nutrition'
import ChefTip from '../components/ChefTip'
import { recipes } from '../data/recipes'

const RecipeDetails = () => {
  const recipe = recipes.doroWat

  return (
    <div className="min-h-screen bg-cream text-charcoal">
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