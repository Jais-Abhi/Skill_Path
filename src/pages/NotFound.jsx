import React from 'react'
import { Link } from 'react-router'

const NotFound = () => {
  return (
    <div className="flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center max-w-lg">
        <h1 className="text-6xl md:text-8xl font-bold text-blue-600 mb-4">404</h1>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Page Not Found</h2>
        <p className="text-lg text-gray-600 mb-8">
          Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
        </p>
        <div className="space-y-4">
          <p className="text-4xl">🔍</p>
          <Link
            to="/"
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound
