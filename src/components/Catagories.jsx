import React from 'react'
const categories = [
    { icon: '🍳', label: 'Breakfast' },
    { icon: '🥗', label: 'Lunch' },
    { icon: '🍽️', label: 'Dinner' },
    { icon: '🍰', label: 'Dessert' },
    { icon: '🦐', label: 'Seafood' },
    { icon: '🥬', label: 'Vegetarian' },
    { icon: '🥤', label: 'Drinks' },
    { icon: '🥨', label: 'Snacks' },
  ]

const Catagories = () => {
  return (
    <section className="mt-10">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="font-display text-3xl font-bold">Popular Categories</h2>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-8">
        {categories.map((item) => (
          <div
            key={item.label}
            className="group flex flex-col items-center rounded-[24px] border border-white/60 bg-white/55 px-4 py-5 text-center shadow-glass transition duration-300 hover:-translate-y-1 hover:scale-105"
          >
            <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-orange/10 text-2xl">
              {item.icon}
            </div>
            <span className="text-sm font-semibold">{item.label}</span>
          </div>
        ))}
      </div>
      </section>
  )
}

export default Catagories