import React from 'react'

const RecipeStats = ({ recipe }) => {
  const stats = [
    {
      label: 'Prep Time',
      value: `${recipe.prepTimeMinutes ?? recipe.prepTime ?? 0} min`,
    },
    {
      label: 'Cook Time',
      value: `${recipe.cookTimeMinutes ?? recipe.cookTime ?? 0} min`,
    },
    {
      label: 'Servings',
      value: `${recipe.servings ?? 0} people`,
    },
    {
      label: 'Difficulty',
      value: recipe.difficulty,
    },
  ]

  return (
    <section className="mx-auto max-w-7xl px-6 py-8">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-2xl bg-white dark:bg-charcoal/40 dark:border dark:border-white/10 p-5">
            <p className="text-sm text-gray-400 dark:text-cream/60">{stat.label}</p>
            <p className="mt-1 text-lg font-semibold text-charcoal dark:text-cream">{stat.value}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default RecipeStats