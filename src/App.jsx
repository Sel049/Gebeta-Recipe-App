import React from 'react'
import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import Catagories from './components/Catagories'

const name = 'customers'

const App = () => {
  return (
  <>
  <div className="min-h-screen text-charcoal antialiased">
    <div className="mx-auto max-w-7xl px-4 py-6 md:px-8 lg:px-10">   
    <NavBar/>
    <HeroSection/>
    <Catagories/>
      

      <section className="mt-12">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="font-display text-3xl font-bold">Featured Recipes</h2>
          <button className="rounded-full bg-white/70 px-4 py-2 text-sm font-semibold shadow-glass">View all</button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <article className="group overflow-hidden rounded-[28px] border border-white/60 bg-white/55 shadow-glass transition duration-300 hover:-translate-y-2 hover:scale-[1.01]">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80"
                alt="Truffle pasta"
                className="h-64 w-full object-cover"
              />
              <button className="absolute right-4 top-4 rounded-full bg-white/90 p-2 text-orange">❤</button>
            </div>
            <div className="p-5">
              <div className="mb-3 flex items-center justify-between">
                <span className="rounded-full bg-orange/10 px-3 py-1 text-xs font-semibold text-orange">Italian</span>
                <span className="text-sm text-charcoal/60">45 min</span>
              </div>

              <h3 className="font-display text-2xl font-bold">Truffle Pasta</h3>
              <p className="mt-2 text-sm text-charcoal/70">
                Creamy truffle comfort with roasted parmesan and basil.
              </p>

              <div className="mt-4 flex items-center justify-between text-sm text-charcoal/70">
                <span>⭐ 4.9</span>
                <span>Easy</span>
              </div>

              <button className="mt-5 w-full rounded-full bg-charcoal px-4 py-3 text-sm font-semibold text-white">
                View Recipe
              </button>
            </div>
          </article>

          <article className="group overflow-hidden rounded-[28px] border border-white/60 bg-white/55 shadow-glass transition duration-300 hover:-translate-y-2 hover:scale-[1.01]">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80"
                alt="Salmon dish"
                className="h-64 w-full object-cover"
              />
              <button className="absolute right-4 top-4 rounded-full bg-white/90 p-2 text-orange">❤</button>
            </div>
            <div className="p-5">
              <div className="mb-3 flex items-center justify-between">
                <span className="rounded-full bg-mint/15 px-3 py-1 text-xs font-semibold text-mint">Seafood</span>
                <span className="text-sm text-charcoal/60">30 min</span>
              </div>

              <h3 className="font-display text-2xl font-bold">Citrus Salmon</h3>
              <p className="mt-2 text-sm text-charcoal/70">
                Tender Salmon glazed with orange and dill for a bright finish.
              </p>

              <div className="mt-4 flex items-center justify-between text-sm text-charcoal/70">
                <span>⭐ 4.8</span>
                <span>Medium</span>
              </div>

              <button className="mt-5 w-full rounded-full bg-charcoal px-4 py-3 text-sm font-semibold text-white">
                View Recipe
              </button>
            </div>
          </article>

          <article className="group overflow-hidden rounded-[28px] border border-white/60 bg-white/55 shadow-glass transition duration-300 hover:-translate-y-2 hover:scale-[1.01]">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=900&q=80"
                alt="Berry dessert"
                className="h-64 w-full object-cover"
              />
              <button className="absolute right-4 top-4 rounded-full bg-white/90 p-2 text-orange">❤</button>
            </div>
            <div className="p-5">
              <div className="mb-3 flex items-center justify-between">
                <span className="rounded-full bg-amber/20 px-3 py-1 text-xs font-semibold text-amber">Dessert</span>
                <span className="text-sm text-charcoal/60">20 min</span>
              </div>

              <h3 className="font-display text-2xl font-bold">Berry Cloud</h3>
              <p className="mt-2 text-sm text-charcoal/70">
                A light layered dessert with whipped cream and warm berries.
              </p>

              <div className="mt-4 flex items-center justify-between text-sm text-charcoal/70">
                <span>⭐ 4.7</span>
                <span>Easy</span>
              </div>

              <button className="mt-5 w-full rounded-full bg-charcoal px-4 py-3 text-sm font-semibold text-white">
                View Recipe
              </button>
            </div>
          </article>
        </div>
      </section>

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