import React,{ useState }  from 'react'


const RecipeHero = ({recipe}) => {
  const title = recipe.name || recipe.title
  const category = recipe.cuisine || recipe.category ||'Popular'
  const description =recipe.description ||recipe.summary ||
  'A delicious recipe worth trying.'

  const totalTime =
    recipe.totalTime ||
    `${(recipe.prepTimeMinutes ?? 0) + (recipe.cookTimeMinutes ?? 0)} min`
    
  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div className="relative">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="h-[520px] w-full rounded-[32px] object-cover shadow-xl"
          />

        </div>

        <div>
          <span className="inline-flex rounded-full bg-orange/10 px-4 py-2 text-sm font-semibold text-orange">
            {category}
          </span>

          <h1 className="mt-5 font-display text-5xl font-bold leading-tight md:text-6xl">
            {title}
          </h1>

          <p className="mt-5 text-lg leading-relaxed text-gray-600 dark:text-cream/80">
            {description}
          </p>

          <div className="mt-7 flex flex-wrap gap-4">
            <div className="rounded-2xl bg-white dark:bg-charcoal/40 dark:border dark:border-white/10 px-5 py-3 shadow-sm">
              <span className="text-yellow-500">★</span>{' '}
              <span className="font-semibold">{recipe.rating}</span>{' '}
              <span className="text-sm text-gray-500 dark:text-cream/50">rating</span>
            </div>

            <div className="rounded-2xl bg-white dark:bg-charcoal/40 dark:border dark:border-white/10 px-5 py-3 shadow-sm">
              🕒 <span className="font-semibold">{totalTime}</span>
            </div>

            <div className="rounded-2xl bg-white dark:bg-charcoal/40 dark:border dark:border-white/10 px-5 py-3 shadow-sm">
              👨‍🍳 <span className="font-semibold">{recipe.difficulty}</span>
            </div>
          </div>

          
        </div>
      </div>
    </section>
  )
}

export default RecipeHero


