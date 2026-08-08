import React from 'react'
import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import Catagories from './components/Catagories'
import FeaturedRecipes from './components/FeaturedRecipes'

const name = 'customers'

const App = () => {
  return (
  <>
  <div className="min-h-screen text-charcoal antialiased">
    <div className="mx-auto max-w-7xl px-4 py-6 md:px-8 lg:px-10">   
    <NavBar/>
    <HeroSection/>
    <Catagories/>
    <FeaturedRecipes/>

      <section className="mt-12 rounded-[32px] border border-white/60 bg-white/55 p-6 shadow-glass">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-bold">Ingredients</h2>
            <div className="mt-5 space-y-3">
              <label className="flex items-center gap-3 rounded-2xl bg-white/70 px-4 py-3">
                <input type="checkbox" className="h-4 w-4 rounded" />
                <span>2 cups flour</span>
              </label>
              <label className="flex items-center gap-3 rounded-2xl bg-white/70 px-4 py-3">
                <input type="checkbox" className="h-4 w-4 rounded" />
                <span>1 tbsp olive oil</span>
              </label>
              <label className="flex items-center gap-3 rounded-2xl bg-white/70 px-4 py-3">
                <input type="checkbox" className="h-4 w-4 rounded" />
                <span>Fresh basil and parmesan</span>
              </label>
            </div>
          </div>

          <div>
            <h2 className="font-display text-3xl font-bold">Steps</h2>
            <div className="mt-5 space-y-4">
              <div className="flex gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-orange text-sm font-bold text-white">1</div>
                <p className="pt-1 text-sm text-charcoal/80">Mix the dough and rest for 10 minutes.</p>
              </div>
              <div className="flex gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-orange text-sm font-bold text-white">2</div>
                <p className="pt-1 text-sm text-charcoal/80">Add olive oil and herbs for a soft texture.</p>
              </div>
              <div className="flex gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-orange text-sm font-bold text-white">3</div>
                <p className="pt-1 text-sm text-charcoal/80">Bake until golden and serve with a light drizzle.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-12 grid gap-6 md:grid-cols-3">
        <div className="rounded-[28px] border border-white/60 bg-white/55 p-5 shadow-glass">
          <h3 className="font-display text-2xl font-bold">Nutrition</h3>
          <p className="mt-3 text-sm text-charcoal/70">Calories 420 • Protein 18g • Carbs 34g • Fat 16g</p>
        </div>

        <div className="rounded-[28px] border border-white/60 bg-white/55 p-5 shadow-glass">
          <h3 className="font-display text-2xl font-bold">Chef Tips</h3>
          <p className="mt-3 text-sm text-charcoal/70">Use fresh herbs and let the sauce rest before serving.</p>
        </div>

        <div className="rounded-[28px] border border-white/60 bg-white/55 p-5 shadow-glass">
          <h3 className="font-display text-2xl font-bold">Related Recipes</h3>
          <p className="mt-3 text-sm text-charcoal/70">Lemon pasta, grilled vegetables, and herb focaccia.</p>
        </div>
      </section>
    </div>
  </div>
</>
  )
}

export default App