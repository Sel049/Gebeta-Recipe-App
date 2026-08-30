import React from 'react'
import { categories } from '../data/categories'
import CategoryCard from '../components/CategoryCard'

const CategoriesPage = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange">
          Explore
        </p>
        <h1 className="mt-3 font-display text-5xl font-bold">Popular Categories</h1>
        <p className="mt-4 max-w-2xl text-lg text-charcoal/70">
          Discover recipes inspired by every mood, season, and craving.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {categories.map((item) => (
          <CategoryCard
            key={item.id}
            image={item.image}
            label={item.label}
            description={item.description}
          />
        ))}
      </div>
    </section>
  )
}

export default CategoriesPage