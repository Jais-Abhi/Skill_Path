import React from 'react'
import { Link } from 'react-router'
import { FiArrowRight, FiZap } from 'react-icons/fi'

const CTABanner = () => {
  return (
    <section className="py-28 px-4 sm:px-6 lg:px-8 bg-[#0a0a0f] relative overflow-hidden">
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/8 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-orange-500/5 rounded-full blur-2xl" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="border-gradient rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
          {/* Inner glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-orange-500/5 pointer-events-none rounded-3xl" />

          {/* Icon */}
          <div className="inline-flex w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 items-center justify-center mb-6 shadow-lg shadow-amber-500/30">
            <FiZap size={26} className="text-white" />
          </div>

          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
            Ready to accelerate<br />
            <span className="text-gradient">your learning?</span>
          </h2>

          <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Join over 50,000 learners who are building real skills with personalized AI guidance. Your first path is completely free.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold text-base hover:shadow-2xl hover:shadow-amber-500/30 hover:scale-105 transition-all duration-200"
            >
              Get Started — It's Free
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" size={17} />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-white/10 text-slate-300 font-semibold text-base hover:border-amber-500/30 hover:text-white hover:bg-white/5 transition-all duration-200"
            >
              Explore Features
            </Link>
          </div>

          {/* Micro-trust signals */}
          <div className="flex flex-wrap justify-center gap-6 text-slate-500 text-sm">
            {['No credit card required', 'Cancel anytime', '5-minute setup', '98% satisfaction rate'].map((item) => (
              <span key={item} className="flex items-center gap-1.5">
                <span className="text-amber-500 font-bold">✓</span>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTABanner
