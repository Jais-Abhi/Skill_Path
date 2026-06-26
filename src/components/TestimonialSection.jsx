import React from 'react'
import { FaStar } from 'react-icons/fa'
import { FiMessageCircle } from 'react-icons/fi'

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Software Developer',
      company: 'Stripe',
      image: '👩‍💻',
      rating: 5,
      text: 'SkillPath completely changed how I approach learning. The AI coach knew exactly what I needed to focus on — I went from zero to landing a dev job in 6 months. Incredible platform.',
    },
    {
      id: 2,
      name: 'Marcus Chen',
      role: 'Senior Data Analyst',
      company: 'Notion',
      image: '👨‍💼',
      rating: 5,
      text: 'The personalized roadmap saved me months of confusion. Instead of scattered tutorials, I had a clear, structured path. The AI chat mentor is genuinely helpful — not just a glorified search bar.',
    },
    {
      id: 3,
      name: 'Elena Rodriguez',
      role: 'Product Manager',
      company: 'Figma',
      image: '👩‍🎨',
      rating: 5,
      text: "I've tried every learning platform out there. SkillPath is the only one that actually adapts to how I learn. My team noticed my growth within weeks. Worth every penny.",
    },
  ]

  return (
    <section className="py-28 px-4 sm:px-6 lg:px-8 bg-[#0a0a0f] relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-4">Social Proof</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-5">
            Real People, Real Results
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Thousands of learners have transformed their skills and careers with SkillPath.
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="glass-card rounded-2xl p-7 flex flex-col justify-between hover:border-amber-500/15 hover:bg-amber-500/3 transition-all duration-300 hover:-translate-y-1 group"
            >
              {/* Quote icon */}
              <div>
                <FiMessageCircle className="text-amber-500/40 mb-4" size={28} />

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <FaStar key={i} className="text-amber-400" size={14} />
                  ))}
                </div>

                <p className="text-slate-300 text-base leading-relaxed mb-6">
                  "{t.text}"
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-white/5">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500/20 to-orange-500/10 border border-amber-500/20 flex items-center justify-center text-xl">
                  {t.image}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-slate-500 text-xs">{t.role} · {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom brand trust row */}
        <div className="mt-16 text-center">
          <p className="text-slate-600 text-sm mb-8">Learners now working at</p>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            {['Google', 'Stripe', 'Notion', 'Figma', 'Vercel', 'Linear', 'Airbnb'].map((brand) => (
              <span key={brand} className="text-slate-600 font-semibold text-lg hover:text-slate-400 transition-colors cursor-default">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialSection
