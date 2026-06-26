import React from 'react'
import { Link } from 'react-router'
import { FiArrowRight, FiTarget, FiUsers, FiTrendingUp, FiStar, FiCheckCircle } from 'react-icons/fi'

const About = () => {
  const timeline = [
    {
      year: '2022',
      title: 'The Idea',
      description: 'Founded by two educators frustrated with generic online courses, SkillPath was born from a simple belief: learning should be personal.',
    },
    {
      year: '2023',
      title: 'First 10,000 Learners',
      description: 'We launched our beta platform and hit 10,000 active learners within the first six months — validation that people wanted something different.',
    },
    {
      year: '2024',
      title: 'AI Mentor Launch',
      description: 'Introduced our AI mentor system, transforming SkillPath from a course platform into a true learning companion that adapts to each user.',
    },
    {
      year: '2025',
      title: 'Global Expansion',
      description: 'Expanded to 40+ countries, launched team plans, and partnered with leading companies to offer verified skill certifications.',
    },
    {
      year: '2026',
      title: 'Today & Beyond',
      description: "50,000+ learners, 200+ skill paths, and a relentless commitment to building the world's most personalized learning platform.",
    },
  ]

  const values = [
    {
      icon: '🎯',
      title: 'Intentional Learning',
      description: "We believe every minute you spend learning should count. No filler content, no bloated courses — just focused, purposeful skill-building.",
    },
    {
      icon: '🔍',
      title: 'Radical Personalization',
      description: 'One size fits none. We obsess over understanding each learner and building experiences that feel like they were made just for them.',
    },
    {
      icon: '🌱',
      title: 'Growth for Everyone',
      description: "Skill development shouldn't be a privilege. We're committed to making world-class learning accessible regardless of background.",
    },
    {
      icon: '🤝',
      title: 'Honest Partnership',
      description: "We're in your corner. We celebrate your wins, help you through setbacks, and always tell you the truth about what you need to improve.",
    },
  ]

  const teamMembers = [
    { name: 'Priya Sharma', role: 'Co-Founder & CEO', emoji: '👩‍💼', bio: 'Former EdTech researcher at MIT. Passionate about democratizing access to education through technology.' },
    { name: 'James Okafor', role: 'Co-Founder & CTO', emoji: '👨‍💻', bio: 'Ex-Google engineer. Built AI systems that have served over 100 million users globally.' },
    { name: 'Yuki Tanaka', role: 'Head of Learning Design', emoji: '👩‍🎨', bio: 'Cognitive science background with 10+ years designing learning experiences at scale.' },
    { name: 'Ravi Menon', role: 'Head of AI', emoji: '🧑‍🔬', bio: 'PhD in ML from Stanford. Building the adaptive intelligence that makes SkillPath truly personal.' },
  ]

  const metrics = [
    { value: '50K+', label: 'Active Learners', icon: <FiUsers size={20} /> },
    { value: '200+', label: 'Skill Paths', icon: <FiTarget size={20} /> },
    { value: '40+', label: 'Countries', icon: <FiTrendingUp size={20} /> },
    { value: '4.9/5', label: 'Avg. Rating', icon: <FiStar size={20} /> },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center bg-[#0a0a0f] dot-grid pt-24 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-amber-500/6 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 py-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/20 bg-amber-500/8 text-amber-400 text-sm font-medium mb-8">
            Our Story
          </div>

          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6">
            We're on a mission to<br />
            <span className="text-gradient">redefine learning</span>
          </h1>

          <p className="text-slate-400 text-xl leading-relaxed max-w-2xl mx-auto mb-10">
            SkillPath was built by learners for learners. We got tired of one-size-fits-all courses and built the platform we always wished existed — one that truly adapts to you.
          </p>

          <Link
            to="/contact"
            className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold text-base hover:shadow-2xl hover:shadow-amber-500/30 hover:scale-105 transition-all duration-200"
          >
            Join Our Mission
            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Metrics */}
      <section className="bg-[#080810] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5">
            {metrics.map((m, i) => (
              <div key={i} className="bg-[#080810] px-8 py-10 flex flex-col items-center justify-center text-center group hover:bg-amber-500/4 transition-colors duration-300">
                <div className="text-amber-500/60 mb-3 group-hover:text-amber-400 transition-colors">{m.icon}</div>
                <div className="font-display text-4xl font-black text-white mb-1">{m.value}</div>
                <div className="text-slate-500 text-sm">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story — What is SkillPath */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 bg-[#0a0a0f]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-4">What We Do</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Learning that actually<br />works for <em className="text-gradient not-italic">you</em>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-6">
                SkillPath isn't another course marketplace. We're an intelligent learning companion that builds a unique roadmap based on your goals, existing knowledge, preferred learning style, and available time.
              </p>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                Our adaptive AI doesn't just recommend videos. It orchestrates your entire learning journey — adjusting difficulty, switching formats, and nudging you at exactly the right moments to maintain momentum without burnout.
              </p>
              <ul className="space-y-3">
                {['Adapts to your pace in real time', 'Works across 50+ skill categories', 'Integrates with your schedule', 'Tracks deep skill acquisition — not just completion'].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-slate-300">
                    <FiCheckCircle className="text-amber-400 mt-0.5 flex-shrink-0" size={16} />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Visual panel */}
            <div className="relative">
              <div className="glass-card rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-amber-500/8 rounded-full blur-2xl" />
                <p className="text-xs text-amber-400 font-semibold uppercase tracking-wider mb-6">Skill Breakdown</p>
                <div className="space-y-5">
                  {[
                    { skill: 'Web Development', level: 87, color: 'from-amber-500 to-orange-500' },
                    { skill: 'Data Analysis', level: 64, color: 'from-rose-500 to-pink-500' },
                    { skill: 'UX Design', level: 52, color: 'from-violet-500 to-purple-500' },
                    { skill: 'Product Strategy', level: 41, color: 'from-teal-500 to-emerald-500' },
                  ].map((item) => (
                    <div key={item.skill}>
                      <div className="flex justify-between mb-2">
                        <span className="text-slate-300 text-sm font-medium">{item.skill}</span>
                        <span className="text-slate-500 text-sm">{item.level}%</span>
                      </div>
                      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full bg-gradient-to-r ${item.color}`}
                          style={{ width: `${item.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-lg">🧑‍💻</div>
                    <div>
                      <p className="text-white font-semibold text-sm">Alex's Learning Profile</p>
                      <p className="text-slate-500 text-xs">Updated by AI · 3 skills in progress</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 bg-[#080810] relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-4">What Drives Us</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-5">
              Our core values
            </h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">
              Every decision we make comes back to these four beliefs about how learning should work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {values.map((v, i) => (
              <div key={i} className="glass-card rounded-2xl p-8 hover:border-amber-500/15 hover:bg-amber-500/3 transition-all duration-300 group">
                <div className="text-4xl mb-5">{v.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{v.title}</h3>
                <p className="text-slate-400 leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 bg-[#0a0a0f] relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-4">Our Journey</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-5">
              Building the future of learning
            </h2>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-14 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-amber-500/30 via-amber-500/10 to-transparent md:-translate-x-1/2" />

            <div className="space-y-10">
              {timeline.map((item, i) => (
                <div key={i} className={`flex flex-col md:flex-row gap-6 md:gap-12 items-start ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`w-full md:w-1/2 ${i % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'}`}>
                    <div className="glass-card rounded-xl p-6 hover:border-amber-500/15 transition-all duration-300 inline-block w-full">
                      <span className="text-amber-400 font-bold text-sm font-display">{item.year}</span>
                      <h3 className="text-white font-bold text-lg mt-1 mb-2">{item.title}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>

                  {/* Dot */}
                  <div className="hidden md:flex w-6 h-6 rounded-full border-2 border-amber-500 bg-[#0a0a0f] flex-shrink-0 mt-4 relative z-10 md:absolute md:left-1/2 md:-translate-x-1/2 items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-amber-500" />
                  </div>

                  <div className="hidden md:block w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 bg-[#080810] relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-4">The People</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-5">
              Meet the team
            </h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">
              A small, focused team of educators, engineers, and designers who care deeply about learning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {teamMembers.map((member, i) => (
              <div key={i} className="glass-card rounded-2xl p-6 text-center hover:border-amber-500/15 hover:bg-amber-500/3 transition-all duration-300 group">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500/15 to-orange-500/10 border border-amber-500/20 flex items-center justify-center text-3xl mx-auto mb-5">
                  {member.emoji}
                </div>
                <h3 className="text-white font-bold text-base mb-1">{member.name}</h3>
                <p className="text-amber-400 text-xs font-semibold mb-3">{member.role}</p>
                <p className="text-slate-500 text-xs leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Banner */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 bg-[#0a0a0f] relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-amber-500/6 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="border-gradient rounded-3xl p-12 md:p-16 bg-amber-500/3">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              Our mission is simple:<br />
              <span className="text-gradient">Help you grow</span>
            </h2>
            <p className="text-slate-400 text-lg mb-4 max-w-2xl mx-auto leading-relaxed">
              We believe that when people can clearly see their path to mastery and have intelligent support along the way, they achieve things they never thought possible.
            </p>
            <p className="text-slate-500 text-base max-w-xl mx-auto mb-10">
              That's why every line of code, every feature decision, and every learning path we build is done with one question in mind: "Does this help learners grow faster?"
            </p>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold text-base hover:shadow-2xl hover:shadow-amber-500/30 hover:scale-105 transition-all duration-200"
            >
              Start Your Journey
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
