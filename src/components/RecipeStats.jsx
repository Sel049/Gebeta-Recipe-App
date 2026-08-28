import React from 'react'

const RecipeStats = ({ recipe }) => {
  const stats = [
    { label: 'Prep Time', value: recipe.prepTime },
    { label: 'Cook Time', value: recipe.cookTime },
    { label: 'Servings', value: `${recipe.servings} people` },
    { label: 'Difficulty', value: recipe.difficulty },
  ]

  return (
    <section className="mx-auto max-w-7xl px-6 py-8">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-2xl bg-white p-5">
            <p className="text-sm text-gray-400">{stat.label}</p>
            <p className="mt-1 text-lg font-semibold">{stat.value}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default RecipeStats