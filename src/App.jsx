import React from 'react'

const name = 'customers'

const App = () => {
  return (
  <>
  <body class="min-h-screen text-charcoal antialiased">
    <div class="mx-auto max-w-7xl px-4 py-6 md:px-8 lg:px-10">
      <header
        class="glass sticky top-4 z-20 mb-8 flex items-center justify-between rounded-full border border-white/60 px-4 py-3 shadow-glass"
      >
        <div class="flex items-center gap-3">
          <div class="flex h-10 w-10 items-center justify-center rounded-full bg-orange text-lg font-bold text-white">
            R
          </div>
          <div>
            <div class="font-display text-xl font-bold">Recipe Finder</div>
          </div>
        </div>

        <nav class="hidden items-center gap-7 md:flex">
          <a href="#" class="text-sm font-semibold text-charcoal/80">Home</a>
          <a href="#" class="text-sm font-semibold text-charcoal/80">Categories</a>
          <a href="#" class="text-sm font-semibold text-charcoal/80">Favorites</a>
          <a href="#" class="text-sm font-semibold text-charcoal/80">Random Recipe</a>
        </nav>

        <div class="flex items-center gap-3">
          <button class="rounded-full bg-white/70 px-4 py-2 text-sm font-semibold">Dark</button>
          <div class="flex h-10 w-10 items-center justify-center rounded-full bg-charcoal text-sm font-bold text-white">
            A
          </div>
        </div>
      </header>

      <section class="hero-image relative overflow-hidden rounded-[32px] px-6 py-10 text-white shadow-glass md:px-12 md:py-16">
        <div class="absolute inset-0 bg-gradient-to-r from-orange/30 via-transparent to-mint/20"></div>

        <div class="relative z-10 mx-auto max-w-3xl text-center">
          <p class="mb-4 inline-flex rounded-full bg-white/15 px-4 py-1 text-xs font-semibold tracking-[0.22em] uppercase backdrop-blur-md">
            Curated food experiences
          </p>

          <h1 class="font-display text-4xl font-bold md:text-6xl">
            Discover Recipes You'll Love.
          </h1>

          <p class="mx-auto mt-4 max-w-2xl text-sm text-white/85 md:text-base">
            Explore gourmet dishes, handpicked favorites, and beautifully simple recipes made for every mood.
          </p>

          <div class="mx-auto mt-8 flex max-w-2xl items-center overflow-hidden rounded-full bg-white/95 shadow-lg">
            <span class="px-4 text-orange">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-4.35-4.35m1.85-5.15a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Search recipes, ingredients, cuisines..."
              class="w-full bg-transparent px-2 py-4 text-sm text-charcoal outline-none placeholder:text-charcoal/50"
            />
            <button class="bg-orange px-6 py-4 text-sm font-semibold text-white">
              Search
            </button>
          </div>
        </div>
      </section>

      <section class="mt-10">
        <div class="mb-6 flex items-center justify-between">
          <h2 class="font-display text-3xl font-bold">Popular Categories</h2>
        </div>

        <div class="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-8">
          <div class="group flex flex-col items-center rounded-[24px] border border-white/60 bg-white/55 px-4 py-5 text-center shadow-glass transition duration-300 hover:-translate-y-1 hover:scale-105">
            <div class="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-orange/10 text-2xl">🍳</div>
            <span class="text-sm font-semibold">Breakfast</span>
          </div>

          <div class="group flex flex-col items-center rounded-[24px] border border-white/60 bg-white/55 px-4 py-5 text-center shadow-glass transition duration-300 hover:-translate-y-1 hover:scale-105">
            <div class="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-amber/20 text-2xl">🥗</div>
            <span class="text-sm font-semibold">Lunch</span>
          </div>

          <div class="group flex flex-col items-center rounded-[24px] border border-white/60 bg-white/55 px-4 py-5 text-center shadow-glass transition duration-300 hover:-translate-y-1 hover:scale-105">
            <div class="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-mint/20 text-2xl">🍽️</div>
            <span class="text-sm font-semibold">Dinner</span>
          </div>

          <div class="group flex flex-col items-center rounded-[24px] border border-white/60 bg-white/55 px-4 py-5 text-center shadow-glass transition duration-300 hover:-translate-y-1 hover:scale-105">
            <div class="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-orange/20 text-2xl">🍰</div>
            <span class="text-sm font-semibold">Dessert</span>
          </div>

          <div class="group flex flex-col items-center rounded-[24px] border border-white/60 bg-white/55 px-4 py-5 text-center shadow-glass transition duration-300 hover:-translate-y-1 hover:scale-105">
            <div class="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-sky-100 text-2xl">🦐</div>
            <span class="text-sm font-semibold">Seafood</span>
          </div>

          <div class="group flex flex-col items-center rounded-[24px] border border-white/60 bg-white/55 px-4 py-5 text-center shadow-glass transition duration-300 hover:-translate-y-1 hover:scale-105">
            <div class="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-2xl">🥬</div>
            <span class="text-sm font-semibold">Vegetarian</span>
          </div>

          <div class="group flex flex-col items-center rounded-[24px] border border-white/60 bg-white/55 px-4 py-5 text-center shadow-glass transition duration-300 hover:-translate-y-1 hover:scale-105">
            <div class="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-amber/40 text-2xl">🥤</div>
            <span class="text-sm font-semibold">Drinks</span>
          </div>

          <div class="group flex flex-col items-center rounded-[24px] border border-white/60 bg-white/55 px-4 py-5 text-center shadow-glass transition duration-300 hover:-translate-y-1 hover:scale-105">
            <div class="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-orange/10 text-2xl">🥨</div>
            <span class="text-sm font-semibold">Snacks</span>
          </div>
        </div>
      </section>

      <section class="mt-12">
        <div class="mb-6 flex items-center justify-between">
          <h2 class="font-display text-3xl font-bold">Featured Recipes</h2>
          <button class="rounded-full bg-white/70 px-4 py-2 text-sm font-semibold shadow-glass">View all</button>
        </div>

        <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <article class="group overflow-hidden rounded-[28px] border border-white/60 bg-white/55 shadow-glass transition duration-300 hover:-translate-y-2 hover:scale-[1.01]">
            <div class="relative">
              <img
                src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80"
                alt="Truffle pasta"
                class="h-64 w-full object-cover"
              />
              <button class="absolute right-4 top-4 rounded-full bg-white/90 p-2 text-orange">❤</button>
            </div>
            <div class="p-5">
              <div class="mb-3 flex items-center justify-between">
                <span class="rounded-full bg-orange/10 px-3 py-1 text-xs font-semibold text-orange">Italian</span>
                <span class="text-sm text-charcoal/60">45 min</span>
              </div>

              <h3 class="font-display text-2xl font-bold">Truffle Pasta</h3>
              <p class="mt-2 text-sm text-charcoal/70">
                Creamy truffle comfort with roasted parmesan and basil.
              </p>

              <div class="mt-4 flex items-center justify-between text-sm text-charcoal/70">
                <span>⭐ 4.9</span>
                <span>Easy</span>
              </div>

              <button class="mt-5 w-full rounded-full bg-charcoal px-4 py-3 text-sm font-semibold text-white">
                View Recipe
              </button>
            </div>
          </article>

          <article class="group overflow-hidden rounded-[28px] border border-white/60 bg-white/55 shadow-glass transition duration-300 hover:-translate-y-2 hover:scale-[1.01]">
            <div class="relative">
              <img
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80"
                alt="Salmon dish"
                class="h-64 w-full object-cover"
              />
              <button class="absolute right-4 top-4 rounded-full bg-white/90 p-2 text-orange">❤</button>
            </div>
            <div class="p-5">
              <div class="mb-3 flex items-center justify-between">
                <span class="rounded-full bg-mint/15 px-3 py-1 text-xs font-semibold text-mint">Seafood</span>
                <span class="text-sm text-charcoal/60">30 min</span>
              </div>

              <h3 class="font-display text-2xl font-bold">Citrus Salmon</h3>
              <p class="mt-2 text-sm text-charcoal/70">
                Tender Salmon glazed with orange and dill for a bright finish.
              </p>

              <div class="mt-4 flex items-center justify-between text-sm text-charcoal/70">
                <span>⭐ 4.8</span>
                <span>Medium</span>
              </div>

              <button class="mt-5 w-full rounded-full bg-charcoal px-4 py-3 text-sm font-semibold text-white">
                View Recipe
              </button>
            </div>
          </article>

          <article class="group overflow-hidden rounded-[28px] border border-white/60 bg-white/55 shadow-glass transition duration-300 hover:-translate-y-2 hover:scale-[1.01]">
            <div class="relative">
              <img
                src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=900&q=80"
                alt="Berry dessert"
                class="h-64 w-full object-cover"
              />
              <button class="absolute right-4 top-4 rounded-full bg-white/90 p-2 text-orange">❤</button>
            </div>
            <div class="p-5">
              <div class="mb-3 flex items-center justify-between">
                <span class="rounded-full bg-amber/20 px-3 py-1 text-xs font-semibold text-amber">Dessert</span>
                <span class="text-sm text-charcoal/60">20 min</span>
              </div>

              <h3 class="font-display text-2xl font-bold">Berry Cloud</h3>
              <p class="mt-2 text-sm text-charcoal/70">
                A light layered dessert with whipped cream and warm berries.
              </p>

              <div class="mt-4 flex items-center justify-between text-sm text-charcoal/70">
                <span>⭐ 4.7</span>
                <span>Easy</span>
              </div>

              <button class="mt-5 w-full rounded-full bg-charcoal px-4 py-3 text-sm font-semibold text-white">
                View Recipe
              </button>
            </div>
          </article>
        </div>
      </section>

      <section class="mt-12 rounded-[32px] border border-white/60 bg-white/55 p-6 shadow-glass">
        <div class="grid gap-8 md:grid-cols-2">
          <div>
            <h2 class="font-display text-3xl font-bold">Ingredients</h2>
            <div class="mt-5 space-y-3">
              <label class="flex items-center gap-3 rounded-2xl bg-white/70 px-4 py-3">
                <input type="checkbox" class="h-4 w-4 rounded" />
                <span>2 cups flour</span>
              </label>
              <label class="flex items-center gap-3 rounded-2xl bg-white/70 px-4 py-3">
                <input type="checkbox" class="h-4 w-4 rounded" />
                <span>1 tbsp olive oil</span>
              </label>
              <label class="flex items-center gap-3 rounded-2xl bg-white/70 px-4 py-3">
                <input type="checkbox" class="h-4 w-4 rounded" />
                <span>Fresh basil and parmesan</span>
              </label>
            </div>
          </div>

          <div>
            <h2 class="font-display text-3xl font-bold">Steps</h2>
            <div class="mt-5 space-y-4">
              <div class="flex gap-3">
                <div class="flex h-9 w-9 items-center justify-center rounded-full bg-orange text-sm font-bold text-white">1</div>
                <p class="pt-1 text-sm text-charcoal/80">Mix the dough and rest for 10 minutes.</p>
              </div>
              <div class="flex gap-3">
                <div class="flex h-9 w-9 items-center justify-center rounded-full bg-orange text-sm font-bold text-white">2</div>
                <p class="pt-1 text-sm text-charcoal/80">Add olive oil and herbs for a soft texture.</p>
              </div>
              <div class="flex gap-3">
                <div class="flex h-9 w-9 items-center justify-center rounded-full bg-orange text-sm font-bold text-white">3</div>
                <p class="pt-1 text-sm text-charcoal/80">Bake until golden and serve with a light drizzle.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="mt-12 grid gap-6 md:grid-cols-3">
        <div class="rounded-[28px] border border-white/60 bg-white/55 p-5 shadow-glass">
          <h3 class="font-display text-2xl font-bold">Nutrition</h3>
          <p class="mt-3 text-sm text-charcoal/70">Calories 420 • Protein 18g • Carbs 34g • Fat 16g</p>
        </div>

        <div class="rounded-[28px] border border-white/60 bg-white/55 p-5 shadow-glass">
          <h3 class="font-display text-2xl font-bold">Chef Tips</h3>
          <p class="mt-3 text-sm text-charcoal/70">Use fresh herbs and let the sauce rest before serving.</p>
        </div>

        <div class="rounded-[28px] border border-white/60 bg-white/55 p-5 shadow-glass">
          <h3 class="font-display text-2xl font-bold">Related Recipes</h3>
          <p class="mt-3 text-sm text-charcoal/70">Lemon pasta, grilled vegetables, and herb focaccia.</p>
        </div>
      </section>
    </div>
  </body>
</>
  )
}

export default App