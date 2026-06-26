import React from 'react'
import { Link } from 'react-router'
import { FiArrowRight } from 'react-icons/fi'

const CTABanner = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Start Your Learning Journey?
        </h2>
        <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
          Join thousands of learners mastering new skills with personalized AI guidance. Your next breakthrough is just one click away.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:shadow-lg transition flex items-center justify-center"
          >
            Get Started Now
            <FiArrowRight className="ml-2" />
          </Link>
          <Link
            to="/about"
            className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CTABanner
