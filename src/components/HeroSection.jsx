import React from 'react'
import { Link } from 'react-router'
import { FiArrowRight } from 'react-icons/fi'

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Master <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Any Skill</span> with AI Guidance
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              SkillPath uses advanced AI to create personalized learning paths tailored to your goals. Start learning today and transform your future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/about"
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition flex items-center justify-center"
              >
                Get Started
                <FiArrowRight className="ml-2" />
              </Link>
              <Link
                to="/"
                className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="w-full h-80 bg-gradient-to-br from-blue-400 to-purple-500 rounded-3xl shadow-2xl flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🚀</div>
                <p className="text-white text-2xl font-bold">AI-Powered Learning</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
