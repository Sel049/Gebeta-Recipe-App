import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import Footer from '../components/Footer'

const NotFoundPage = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 flex items-center justify-center px-4 py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">

          {/* 404 Number */}
          <div className="mb-4">
            <span className="font-display text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange to-amber">
              404
            </span>
          </div>

          {/* Glass Card */}
          <div className="overflow-hidden rounded-[40px] border border-white/60 dark:border-white/10 bg-white/60 dark:bg-charcoal/40 shadow-glass p-8 md:p-12 backdrop-blur-lg">

            {/* Icon */}
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-orange/10 text-4xl">
              🍽️
            </div>

            {/* Heading */}
            <h1 className="font-display text-3xl font-bold text-charcoal dark:text-cream md:text-4xl">
              Oops! Page Not Found
            </h1>

            <p className="mx-auto mt-4 max-w-md text-base text-charcoal/60 dark:text-cream/60">
              The page you're looking for seems to have wandered off to the kitchen.
              Don't worry — we'll help you get back on track.
            </p>

            {/* Divider */}
            <div className="mx-auto mt-8 h-px w-24 bg-gradient-to-r from-transparent via-orange/40 to-transparent" />

            {/* Buttons */}
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <button
                onClick={() => navigate(-1)}
                className="flex items-center gap-2 rounded-full bg-charcoal dark:bg-cream dark:text-charcoal px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:scale-105 hover:shadow-lg"
              >
                <FiArrowLeft />
                Go Back
              </button>

              <Link
                to="/"
                className="rounded-full bg-orange px-8 py-3 text-sm font-semibold text-white shadow-md transition hover:scale-105 hover:shadow-lg hover:bg-orange/90"
              >
                Back to Home
              </Link>
            </div>

            {/* Suggested links */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm">
              <span className="text-charcoal/50 dark:text-cream/50">Try these instead:</span>
              <Link
                to="/categories"
                className="rounded-full bg-white/70 dark:bg-charcoal/80 px-4 py-2 text-charcoal dark:text-cream transition hover:text-orange hover:scale-105"
              >
                📂 Categories
              </Link>
              <Link
                to="/randomrecipe"
                className="rounded-full bg-white/70 dark:bg-charcoal/80 px-4 py-2 text-charcoal dark:text-cream transition hover:text-orange hover:scale-105"
              >
                🎲 Random Recipe
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default NotFoundPage