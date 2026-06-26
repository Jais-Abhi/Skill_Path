import React from 'react'
import HeroSection from '../components/HeroSection'
import FeatureCard from '../components/FeatureCard'
import TestimonialSection from '../components/TestimonialSection'
import CTABanner from '../components/CTABanner'
import { FiArrowRight, FiCheckCircle, FiZap } from 'react-icons/fi'
import { Link } from 'react-router'

const Landing = () => {
  const features = [
    {
      icon: '🧠',
      title: 'Adaptive AI Learning Engine',
      description:
        'Our AI continuously analyzes your performance, adjusts difficulty in real time, and curates content that matches your exact learning velocity.',
    },
    {
      icon: '🗺️',
      title: 'Personalized Skill Roadmaps',
      description:
        'Get a structured, milestone-driven path from where you are today to where you want to be — no more guessing what to learn next.',
    },
    {
      icon: '💬',
      title: '24/7 AI Mentor Chat',
      description:
        'Stuck on a concept at 2am? Your AI mentor never sleeps. Ask anything, get clear explanations, and keep moving forward.',
    },
    {
      icon: '📊',
      title: 'Real-Time Progress Analytics',
      description:
        'Track skill acquisition, weekly consistency streaks, and competency levels with beautiful, data-driven dashboards.',
    },
    {
      icon: '🏆',
      title: 'Verified Certifications',
      description:
        'Earn industry-recognized certificates upon completing each skill path — shareable directly to LinkedIn and your portfolio.',
    },
    {
      icon: '🤝',
      title: 'Peer Learning Community',
      description:
        'Collaborate, share, and grow with a global community of motivated learners tackling the same goals as you.',
    },
  ]

  const howItWorks = [
    {
      step: '01',
      title: 'Tell us your goal',
      description: 'Share where you want to go — a new career, a side project, or a specific skill. Our AI does the heavy lifting from there.',
    },
    {
      step: '02',
      title: 'Get your custom roadmap',
      description: 'Receive a personalized, structured learning plan with curated resources, milestones, and time estimates.',
    },
    {
      step: '03',
      title: 'Learn with AI support',
      description: 'Work through your path with an AI mentor by your side — available 24/7 to answer questions and keep you on track.',
    },
    {
      step: '04',
      title: 'Earn & showcase skills',
      description: "Complete milestones, earn verified certificates, and build a skill portfolio you're proud to share.",
    },
  ]

  const pricingPlans = [
    {
      name: 'Starter',
      price: 'Free',
      sub: 'Forever free',
      perks: ['1 Active Learning Path', 'AI Chat (10 msgs/day)', 'Basic Progress Tracking', 'Community Access'],
      cta: 'Start for Free',
      highlight: false,
    },
    {
      name: 'Pro',
      price: '$19',
      sub: 'per month',
      perks: ['Unlimited Learning Paths', 'Unlimited AI Mentor Chat', 'Advanced Analytics', 'Verified Certificates', 'Priority Support'],
      cta: 'Get Started',
      highlight: true,
    },
    {
      name: 'Teams',
      price: '$49',
      sub: 'per seat/month',
      perks: ['Everything in Pro', 'Team Dashboard', 'Custom Skill Paths', 'Manager Insights', 'Dedicated Success Manager'],
      cta: 'Contact Sales',
      highlight: false,
    },
  ]

  return (
    <>
      <HeroSection />

      {/* How It Works */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 bg-[#0a0a0f] relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-4">The Process</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-5">
              From goal to mastery<br />
              <span className="text-slate-500 text-3xl md:text-4xl font-semibold">in 4 simple steps</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-0 relative">
            {/* Connector line */}
            <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-amber-500/10 via-amber-500/30 to-amber-500/10" />

            {howItWorks.map((item, i) => (
              <div key={i} className="relative flex flex-col items-center text-center px-6 py-8 group">
                <div className="w-20 h-20 rounded-2xl glass-card border border-amber-500/15 flex items-center justify-center mb-6 group-hover:border-amber-500/40 group-hover:bg-amber-500/8 transition-all duration-300 z-10 bg-[#0a0a0f]">
                  <span className="font-display text-2xl font-black text-amber-400">{item.step}</span>
                </div>
                <h3 className="text-white font-bold text-lg mb-3">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 bg-[#080810] relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-4">Everything You Need</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-5">
              Built for serious learners
            </h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">
              Every feature is designed to eliminate friction and maximize the time you spend actually learning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 bg-[#0a0a0f] relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/4 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-4">Pricing</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-5">
              Simple, transparent pricing
            </h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">
              No hidden fees. No surprise charges. Start free and upgrade when you're ready.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {pricingPlans.map((plan, i) => (
              <div
                key={i}
                className={`rounded-2xl p-8 relative ${
                  plan.highlight
                    ? 'border-gradient glow-amber-sm bg-amber-500/4'
                    : 'glass-card'
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold uppercase tracking-wider">
                    Most Popular
                  </div>
                )}

                <div className="mb-6">
                  <p className="text-slate-400 text-sm font-medium mb-2">{plan.name}</p>
                  <div className="flex items-baseline gap-1">
                    <span className="font-display text-4xl font-black text-white">{plan.price}</span>
                    {plan.sub && <span className="text-slate-500 text-sm">{plan.sub}</span>}
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.perks.map((perk) => (
                    <li key={perk} className="flex items-start gap-2.5 text-sm text-slate-300">
                      <FiCheckCircle className="text-amber-400 mt-0.5 flex-shrink-0" size={15} />
                      {perk}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-sm transition-all duration-200 ${
                    plan.highlight
                      ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:shadow-lg hover:shadow-amber-500/30 hover:scale-105'
                      : 'border border-white/10 text-slate-300 hover:border-amber-500/30 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {plan.cta}
                  <FiArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialSection />
      <CTABanner />
    </>
  )
}

export default Landing
