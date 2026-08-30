import React from 'react'

const categories = [
  {
    image:
      'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=500&auto=format&fit=crop&q=60',
    label: 'Breakfast',
  },
  {
    image:
      'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=500&auto=format&fit=crop&q=60',
    label: 'Lunch',
  },
  {
    image:
      'https://images.unsplash.com/photo-1547573854-74d2a71d0826?w=500&auto=format&fit=crop&q=60',
    label: 'Dinner',
  },
  {
    image:
      'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=500&auto=format&fit=crop&q=60',
    label: 'Dessert',
  },
  {
    image:
      'https://plus.unsplash.com/premium_photo-1668143363099-1d9e04d4a3f7?w=500&auto=format&fit=crop&q=60',
    label: 'Seafood',
  },
  {
    image:
      'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=500&auto=format&fit=crop&q=60',
    label: 'Vegetarian',
  },
  {
    image:
      'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=500&auto=format&fit=crop&q=60',
    label: 'Drinks',
  },
  {
    image:
      'https://images.unsplash.com/photo-1701341404788-b85484ca379e?w=500&auto=format&fit=crop&q=60',
    label: 'Snacks',
  },
]

const Catagories = () => {
  return (
    <section className="mt-10">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="font-display text-3xl font-bold">Popular Categories</h2>
      </div>

      <div className="grid grid-cols-2 gap-5 md:grid-cols-4 lg:grid-cols-4">
        {categories.map((item) => (
          <div
            key={item.label}
            className="group flex flex-col items-center rounded-[28px] border border-white/60 bg-white/60 p-4 text-center shadow-glass transition duration-300 hover:-translate-y-1 hover:scale-[1.02]"
          >
            <img
              src={item.image}
              alt={item.label}
              className="mb-4 h-28 w-full rounded-[22px] object-cover"
            />
            <span className="text-base font-semibold text-charcoal">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Catagories