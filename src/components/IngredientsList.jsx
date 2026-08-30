import React, { useState } from 'react'

const IngredientsList = ({ ingredients, initialServings }) => {
  const [servings, setServings] = useState(initialServings)

  const decreaseServings = () => {
    setServings((currentServings) => Math.max(1, currentServings - 1))
  }

  const increaseServings = () => {
    setServings((currentServings) => currentServings + 1)
  }

  return (
    <div>
      <h2 className="font-display text-3xl font-bold">Ingredients</h2>

      <p className="mt-2 text-gray-500">
        Everything you need for this recipe.
      </p>

      <div className="mt-5 space-y-3">
        {ingredients.map((ingredient) => (
          <label
            key={`${ingredient.amount}-${ingredient.name}`}
            className="flex cursor-pointer items-center gap-4 rounded-2xl bg-white p-4 transition hover:shadow-sm"
          >
            <input type="checkbox" className="h-5 w-5 accent-orange" />

            <span>
              <strong>{ingredient.amount}</strong> {ingredient.name}
            </span>
          </label>
        ))}
      </div>
    </div>
  )
}

export default IngredientsList