import React from 'react'

const Footer = () => {
  return (
   
<footer className="mt-8 border-t border-charcoal/10 pt-8 pb-8">

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

      <p className="mt-4 max-w-md text-sm leading-6 text-charcoal/60">
        Discover delicious recipes from Ethiopia and around
        the world. Find something you love, save it, and
        bring everyone to the table.
      </p>

    </div>


    {/* Explore */}
    <div>

      <h3 className="font-semibold">
        Explore
      </h3>

      <div className="mt-4 space-y-3 text-sm text-charcoal/60">

        <a
          href="#"
          className="block transition hover:text-orange"
        >
          Recipes
        </a>

        <a
          href="#"
          className="block transition hover:text-orange"
        >
          Categories
        </a>

        <a
          href="#"
          className="block transition hover:text-orange"
        >
          Cuisines
        </a>

        <a
          href="#"
          className="block transition hover:text-orange"
        >
          Favorites
        </a>

      </div>

    </div>


    {/* Company */}
    <div>

      <h3 className="font-semibold">
        Gebeta
      </h3>

      <div className="mt-4 space-y-3 text-sm text-charcoal/60">

        <a
          href="#"
          className="block transition hover:text-orange"
        >
          About
        </a>

        <a
          href="#"
          className="block transition hover:text-orange"
        >
          Contact
        </a>

        <a
          href="#"
          className="block transition hover:text-orange"
        >
          GitHub
        </a>

        <a
          href="#"
          className="block transition hover:text-orange"
        >
          Privacy
        </a>

      </div>

    </div>

  </div>


  {/* Bottom */}
  <div className="mt-12 flex flex-col gap-3 border-t border-charcoal/10 pt-6 text-sm text-charcoal/50 md:flex-row md:items-center md:justify-between">

    <p>
      © 2026 Gebeta. Made with ❤️ and React.
    </p>

    <p>
      Recipes that bring people together.
    </p>

  </div>

</footer>
  )
}

export default Footer