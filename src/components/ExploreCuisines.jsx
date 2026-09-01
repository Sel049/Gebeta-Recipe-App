import React from 'react'
import { Link } from 'react-router-dom'


const ExploreCuisines = () => {
  return (
    
    <section className="mt-20">

      <div className="flex items-end justify-between mb-8">

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange">
            Explore the world
          </p>

          <h2 className="mt-2 font-display text-4xl font-bold">
            Explore Cuisines
          </h2>

          <p className="mt-3 max-w-xl text-charcoal/65">
            Discover delicious recipes and flavors from different
            cultures around the world.
          </p>
        </div>

        <Link to={'/categories'}
          className="hidden md:block text-sm font-semibold text-orange hover:underline"
        >
          View All →
        </Link>

      </div>


      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">

        {/* American */}
        <div className="group relative h-52 overflow-hidden rounded-[28px] ">

          <img
            src="https://images.unsplash.com/photo-1722239317939-914bd940997d?w=500&auto=format&fit=crop&q=60"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

          <div className="absolute bottom-5 left-5 text-white">
            <p className="text-lg font-semibold">
              American
            </p>

            <p className="text-sm text-white/75">
              Traditional flavors
            </p>
          </div>

        </div>


        {/* Italian */}
        <div className="group relative h-52 overflow-hidden rounded-[28px] ">

          <img
            src="https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=700&q=80"
            alt="Italian cuisine"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

          <div className="absolute bottom-5 left-5 text-white">
            <p className="text-lg font-semibold">
              Italian
            </p>

            <p className="text-sm text-white/75">
              Pasta & more
            </p>
          </div>

        </div>


        {/* Mexican */}
        <div className="group relative h-52 overflow-hidden rounded-[28px] ">

          <img
            src="https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?auto=format&fit=crop&w=700&q=80"
            alt="Mexican cuisine"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

          <div className="absolute bottom-5 left-5 text-white">
            <p className="text-lg font-semibold">
              Mexican
            </p>

            <p className="text-sm text-white/75">
              Bold & spicy
            </p>
          </div>

        </div>


        {/* Indian */}
        <div className="group relative h-52 overflow-hidden rounded-[28px] ">

          <img
            src="https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=700&q=80"
            alt="Indian cuisine"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

          <div className="absolute bottom-5 left-5 text-white">
            <p className="text-lg font-semibold">
              Indian
            </p>

            <p className="text-sm text-white/75">
              Aromatic & rich
            </p>
          </div>

        </div>

      </div>

    </section>
  )
}

export default ExploreCuisines