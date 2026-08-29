import React from 'react'
import { Link } from 'react-router-dom'

const RecipeCard = ({
  id,
  image,
  category,
  time,
  title,
  description,
  rating,
  difficulty,
}) => {
  return (
    <article className="group overflow-hidden rounded-[28px] border border-white/60 bg-white/55 shadow-glass transition duration-300 hover:-translate-y-2 hover:scale-[1.01]">
      <div className="relative">
        <img src={image} alt={title} className="h-64 w-full object-cover" />
      </div>

      <div className="flex flex-col p-5">
        <div className="mb-3 flex items-center justify-between">
          <span className="rounded-full bg-orange/10 px-3 py-1 text-xs font-semibold text-orange">
            {category}
          </span>
          <span className="text-sm text-charcoal/60">{time}</span>
        </div>

        <h3 className="font-display text-2xl font-bold">{title}</h3>
        <p className="mt-2 text-sm text-charcoal/70">{description}</p>

        <div className="mt-4 flex items-center justify-between text-sm text-charcoal/70">
          <span>⭐ {rating}</span>
          <span>{difficulty}</span>
        </div>

        <Link
          to={`/recipe/${id}`}
          className="mt-6 block w-full rounded-full bg-charcoal px-4 py-3 text-center text-sm font-semibold text-white"
        >
          View Recipe
        </Link>
      </div>
    </article>
  )
}

export default RecipeCard