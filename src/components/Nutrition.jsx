import React from 'react'

const Nutrition = ({ nutrition }) => {
  if (!nutrition) return null

  const nutritionItems = [
    { label: 'Calories', value: `${nutrition.calories ?? 'N/A'} kcal` },
    { label: 'Protein', value: `${nutrition.protein ?? 'N/A'} g` },
    { label: 'Carbs', value: `${nutrition.carbohydrates ?? 'N/A'} g` },
    { label: 'Fat', value: `${nutrition.fat ?? 'N/A'} g` },
  ]

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="font-display text-3xl font-bold">Nutrition</h2>

        <div className="mt-7 grid grid-cols-2 gap-4 md:grid-cols-4">
          {nutritionItems.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl bg-cream p-6 text-center"
            >
              <p className="text-sm text-gray-500">{item.label}</p>
              <p className="mt-1 text-2xl font-bold">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Nutrition