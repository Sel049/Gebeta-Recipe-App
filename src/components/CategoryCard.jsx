import React from 'react'

const CategoryCard = ({ image, label, description }) => {
  return (
    <div className="overflow-hidden rounded-[28px] border border-white/60 dark:border-white/10 bg-white/60 dark:bg-charcoal/40 shadow-glass transition hover:-translate-y-1 hover:scale-[1.01]">
      <img src={image} alt={label} className="h-52 w-full object-cover" />

      <div className="p-5">
        <h3 className="font-display text-2xl font-bold">{label}</h3>
        <p className="mt-2 text-sm text-charcoal/70 dark:text-cream/70">{description}</p>
      </div>
    </div>
  )
}

export default CategoryCard