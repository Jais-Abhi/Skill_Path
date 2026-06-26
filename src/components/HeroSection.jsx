import React from 'react'
import { Link } from 'react-router'
import { FiZap, FiArrowRight, FiStar } from 'react-icons/fi'

const HeroSection = () => {
  const stats = [
    { value: '50K+', label: 'Active Learners' },
    { value: '200+', label: 'Skill Paths' },
    { value: '98%', label: 'Success Rate' },
    { value: '4.9★', label: 'Avg. Rating' },
  ]

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0a0a0f] dot-grid">
      {/* Background ambient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-orange-500/6 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-500/3 rounded-full blur-3xl pointer-events-none" />

      {/* Horizontal line accents */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col items-center text-center pt-24 pb-16">

          {/* Badge */}
          <div className="animate-fade-up mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/20 bg-amber-500/8 text-amber-400 text-sm font-medium">
              <FiStar size={13} className="text-amber-400 animate-pulse-glow" />
              Introducing AI-Powered Skill Learning
              <FiArrowRight size={13} />
            </div>
          </div>

          {/* Headline */}
          <h1 className="animate-fade-up-delay-1 font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] tracking-tight max-w-5xl">
            Learn Any Skill{' '}
            <span className="relative">
              <span className="text-gradient animate-shimmer">Smarter</span>
            </span>
            {' & Faster'}
            <br />
            <span className="text-slate-500 text-4xl md:text-5xl lg:text-6xl font-semibold">
              than Ever Before
            </span>
          </h1>

          {/* Sub-headline */}
          <p className="animate-fade-up-delay-2 mt-8 text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed">
            SkillPath builds a personalized learning roadmap just for you — powered by adaptive AI that understands your pace, goals, and learning style. No fluff, no wasted time.
          </p>

          {/* CTA Buttons */}
          <div className="animate-fade-up-delay-3 mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold text-base hover:shadow-2xl hover:shadow-amber-500/30 hover:scale-105 transition-all duration-200"
            >
              Start Learning Free
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" size={17} />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-white/10 text-slate-300 font-semibold text-base hover:border-amber-500/30 hover:text-white hover:bg-white/5 transition-all duration-200"
            >
              See How It Works
            </Link>
          </div>

          {/* Trust badges */}
          <div className="animate-fade-up-delay-3 mt-10 flex items-center gap-3 text-sm text-slate-500">
            <div className="flex -space-x-2">
              {['🧑‍💻', '👩‍🎓', '👨‍💼', '👩‍🔬', '🧑‍🎨'].map((emoji, i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-slate-800 border-2 border-[#0a0a0f] flex items-center justify-center text-sm">
                  {emoji}
                </div>
              ))}
            </div>
            <span>Trusted by <strong className="text-slate-300">50,000+</strong> learners worldwide</span>
          </div>

          {/* Stats Row */}
          <div className="mt-20 w-full max-w-4xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/5">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="bg-[#0d0d14] px-6 py-6 text-center hover:bg-amber-500/5 transition-colors duration-300 group"
                >
                  <div className="text-3xl md:text-4xl font-bold font-display text-white group-hover:text-gradient-warm transition-all">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Dashboard preview mockup */}
          <div className="mt-16 w-full max-w-4xl animate-float">
            <div className="relative rounded-2xl overflow-hidden border border-white/8 shadow-2xl shadow-black/50 glow-amber">
              {/* Fake browser bar */}
              <div className="bg-[#111118] border-b border-white/5 px-4 py-3 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500/60" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/60" />
                  <span className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
                <div className="flex-1 mx-4 bg-white/5 rounded-md px-3 py-1 text-xs text-slate-500">
                  app.skillpath.io/dashboard
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="bg-[#0d0d14] p-6 grid grid-cols-1 md:grid-cols-3 gap-4 min-h-56">
                {/* Left: Current path */}
                <div className="md:col-span-2 glass-card rounded-xl p-5">
                  <p className="text-xs text-amber-400 font-semibold uppercase tracking-wider mb-3">Your Current Path</p>
                  <h3 className="text-white font-bold text-lg mb-4">Full-Stack Web Development</h3>
                  <div className="space-y-2.5">
                    {[
                      { label: 'HTML & CSS Fundamentals', pct: 100, done: true },
                      { label: 'JavaScript Core', pct: 78, done: false },
                      { label: 'React & Modern Frameworks', pct: 35, done: false },
                    ].map((item, i) => (
                      <div key={i}>
                        <div className="flex justify-between text-xs mb-1">
                          <span className={item.done ? 'text-slate-400 line-through' : 'text-slate-300'}>{item.label}</span>
                          <span className="text-amber-400">{item.pct}%</span>
                        </div>
                        <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"
                            style={{ width: `${item.pct}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: AI Coach */}
                <div className="glass-card-warm rounded-xl p-5 flex flex-col justify-between">
                  <div>
                    <p className="text-xs text-amber-400 font-semibold uppercase tracking-wider mb-2">AI Coach</p>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      "Great progress! Focus on async/await today — it's the key to unlocking modern JavaScript."
                    </p>
                  </div>
                  <div className="mt-4 flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
                      <FiZap size={14} className="text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-white">SkillPath AI</p>
                      <p className="text-xs text-slate-500">Always available</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0f] to-transparent pointer-events-none" />
    </section>
  )
}

export default HeroSection
