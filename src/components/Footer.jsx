import React from 'react'
import { Link } from 'react-router'
import { FaGithub, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa'
import { FiZap, FiMail } from 'react-icons/fi'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Product: [
      { name: 'Learning Paths', href: '#' },
      { name: 'AI Coach', href: '#' },
      { name: 'Progress Tracking', href: '#' },
      { name: 'Certifications', href: '#' },
      { name: 'Community', href: '#' },
    ],
    Company: [
      { name: 'About', href: '/about' },
      { name: 'Blog', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Press Kit', href: '#' },
    ],
    Support: [
      { name: 'Contact Us', href: '/contact' },
      { name: 'Help Center', href: '#' },
      { name: 'Status', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Privacy Policy', href: '#' },
    ],
  }

  const socials = [
    { icon: <FaTwitter size={17} />, href: '#', label: 'Twitter' },
    { icon: <FaGithub size={17} />, href: '#', label: 'GitHub' },
    { icon: <FaLinkedin size={17} />, href: '#', label: 'LinkedIn' },
    { icon: <FaYoutube size={17} />, href: '#', label: 'YouTube' },
  ]

  return (
    <footer className="bg-[#070709] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top section */}
        <div className="py-14 grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Brand col */}
          <div className="md:col-span-2 space-y-5">
            <Link to="/" className="flex items-center space-x-2.5 group w-fit">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg shadow-amber-500/20">
                <FiZap className="text-white" size={16} />
              </div>
              <span className="text-xl font-bold font-display text-white tracking-tight">
                Skill<span className="text-gradient-warm">Path</span>
              </span>
            </Link>

            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              The intelligent learning platform that builds a personalized roadmap to your goals — powered by adaptive AI that grows with you.
            </p>

            {/* Newsletter */}
            <div className="pt-2">
              <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-3">Stay in the loop</p>
              <div className="flex gap-2">
                <div className="flex-1 flex items-center gap-2 px-3 py-2.5 glass-card rounded-lg">
                  <FiMail size={14} className="text-slate-500" />
                  <input
                    type="email"
                    placeholder="you@email.com"
                    className="bg-[#0f0f18] text-sm text-slate-300 placeholder-slate-600 outline-none w-full"
                  />
                </div>
                <button className="px-4 py-2.5 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 text-white text-sm font-semibold hover:shadow-lg hover:shadow-amber-500/20 transition-all">
                  Join
                </button>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold text-sm mb-5">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    {link.href.startsWith('/') ? (
                      <Link
                        to={link.href}
                        className="text-slate-500 hover:text-amber-400 text-sm transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="text-slate-500 hover:text-amber-400 text-sm transition-colors duration-200"
                      >
                        {link.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-white/5" />

        {/* Bottom bar */}
        <div className="py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-600 text-sm">
            © {currentYear} SkillPath Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {socials.map(({ icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-8 h-8 glass-card rounded-lg flex items-center justify-center text-slate-500 hover:text-amber-400 hover:border-amber-500/20 transition-all duration-200"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
