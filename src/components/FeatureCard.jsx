import React from 'react'

const FeatureCard = ({ icon, title, description, index }) => {
  return (
    <div className="group relative glass-card rounded-2xl p-7 hover:border-amber-500/20 transition-all duration-300 hover:bg-amber-500/3 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-500/5">
      {/* Subtle number */}
      <div className="absolute top-5 right-6 text-6xl font-black text-white/3 font-display select-none leading-none">
        {String(index + 1).padStart(2, '0')}
      </div>

      {/* Icon */}
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-500/10 border border-amber-500/20 flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>

      <h3 className="text-lg font-bold text-white mb-3 leading-snug">{title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed">{description}</p>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  )
}

export default FeatureCard
