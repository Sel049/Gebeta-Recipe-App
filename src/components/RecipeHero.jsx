import React,{ useState }  from 'react'


const RecipeHero = () => {
    const [isSaved, setIsSaved] = useState(false)
  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div className="relative">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="h-[520px] w-full rounded-[32px] object-cover shadow-xl"
          />

          <button
            type="button"
            onClick={() => setIsSaved(!isSaved)}
            className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-xl shadow-lg transition hover:scale-110"
            aria-label={isSaved ? 'Remove from favorites' : 'Save recipe'}
          >
            {isSaved ? '♥' : '♡'}
          </button>
        </div>

        <div>
          <span className="inline-flex rounded-full bg-orange/10 px-4 py-2 text-sm font-semibold text-orange">
            {recipe.category}
          </span>

          <h1 className="mt-5 font-display text-5xl font-bold leading-tight md:text-6xl">
            {recipe.title}
          </h1>

          <p className="mt-5 text-lg leading-relaxed text-gray-600">
            {recipe.description}
          </p>

          <div className="mt-7 flex flex-wrap gap-4">
            <div className="rounded-2xl bg-white px-5 py-3 shadow-sm">
              <span className="text-yellow-500">★</span>{' '}
              <span className="font-semibold">{recipe.rating}</span>{' '}
              <span className="text-sm text-gray-500">rating</span>
            </div>

            <div className="rounded-2xl bg-white px-5 py-3 shadow-sm">
              🕒 <span className="font-semibold">{recipe.totalTime}</span>
            </div>

            <div className="rounded-2xl bg-white px-5 py-3 shadow-sm">
              👨‍🍳 <span className="font-semibold">{recipe.difficulty}</span>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <button
              type="button"
              className="rounded-2xl bg-orange px-7 py-4 font-semibold text-white shadow-lg shadow-orange/20 transition hover:scale-105"
            >
              Start Cooking →
            </button>

            <button
              type="button"
              onClick={() => setIsSaved(!isSaved)}
              className="rounded-2xl bg-white px-7 py-4 font-semibold shadow-sm transition hover:shadow-md"
            >
              {isSaved ? '♥ Saved Recipe' : '♡ Save Recipe'}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RecipeHero


