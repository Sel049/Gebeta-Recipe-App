import React from 'react'

const CookingSteps = ({ steps= [] }) => {
  return (
    <div className="lg:col-span-2">
      <h2 className="font-display text-3xl font-bold">How to Cook</h2>

      <p className="mt-2 text-gray-500 dark:text-cream/60">
        Follow the steps and bring your dish to life.
      </p>

      <div className="mt-8 space-y-8">
        {steps.map((step, index) => (
          <div key={step.title} className="flex gap-5">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-orange font-bold text-white">
              {String(index + 1).padStart(2, '0')}
            </div>

            <div>
              <h3 className="font-display text-xl font-bold">
              Step {index + 1}
              </h3>

              <p className="mt-2 leading-relaxed text-gray-600 dark:text-cream/80">
                {step}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CookingSteps