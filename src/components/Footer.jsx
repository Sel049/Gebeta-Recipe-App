import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
   
<footer className="mt-8 border-t border-charcoal/10 dark:border-white/10 pt-8 pb-8">

  <div className="grid gap-10 md:grid-cols-4">

    {/* Brand */}
    <div className="md:col-span-2">

      <div className="flex items-center gap-3">

        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-orange text-white">
          🍽️
        </div>

        <h2 className="font-display text-2xl font-bold">
        Recipe Finder
        </h2>

      </div>

      <p className="mt-4 max-w-md text-sm leading-6 text-charcoal/60 dark:text-cream/60">
        Discover delicious recipes from the world. Find something you love, save it, and
        bring everyone to the table.
      </p>

    </div>


    {/* Explore */}
    <div>

      <h3 className="font-semibold">
        Explore
      </h3>

      <div className="mt-4 space-y-3 text-sm text-charcoal/60 dark:text-cream/60">

        <Link
          to="/"
          className="block transition hover:text-orange"
        >
          Recipes
        </Link>

        <Link
          to="/categories"
          className="block transition hover:text-orange"
        >
          Categories
        </Link>

        <Link
          to="/"
          className="block transition hover:text-orange"
        >
          Cuisines
        </Link>

      </div>

    </div>


    {/* Company */}
    <div>

      <h3 className="font-semibold">
      Recipe Finder
      </h3>

      <div className="mt-4 space-y-3 text-sm text-charcoal/60 dark:text-cream/60">

        <Link
          to="https://github.com/Sel049"
          className="block transition hover:text-orange"
        >
          About
        </Link>

        <Link
          to="https://github.com/Sel049"
          className="block transition hover:text-orange"
        >
          Contact
        </Link>

        <Link
          to="https://github.com/Sel049"
          className="block transition hover:text-orange"
        >
          GitHub
        </Link>


      </div>

    </div>

  </div>


  {/* Bottom */}
  <div className="mt-12 flex flex-col gap-3 border-t border-charcoal/10 dark:border-white/10 pt-6 text-sm text-charcoal/50 dark:text-cream/50 md:flex-row md:items-center md:justify-between">

    <p>
      © {currentYear} Recipe Finder.
    </p>

    <p>
      Recipes that bring people together.
    </p>

  </div>

</footer>
  )
}

export default Footer