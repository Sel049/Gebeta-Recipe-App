import React from 'react'

const ChefTip = ({ tip }) => {
  return (
    <section className="mx-auto max-w-4xl px-6 py-8">
      <div className="rounded-[28px] bg-amber/20 p-8 md:p-10">
        <span className="font-semibold text-orange">
          👨‍🍳 Chef's Tip
        </span>

        <h2 className="mt-3 font-display text-3xl font-bold">
          {tip.title}
        </h2>

        <p className="mt-4 leading-relaxed text-gray-600">
          {tip.description}
        </p>
      </div>
    </section>
  )
}

export default ChefTip