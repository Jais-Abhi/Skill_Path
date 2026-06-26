import React, { useState } from 'react'
import { FiMail, FiMessageSquare, FiTwitter, FiLinkedin, FiGithub, FiSend, FiCheckCircle, FiClock, FiArrowRight, FiZap } from 'react-icons/fi'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    type: 'General Inquiry',
  })
  const [submitted, setSubmitted] = useState(false)
  const [focused, setFocused] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      alert('Please fill in all fields')
      return
    }
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '', type: 'General Inquiry' })
      setSubmitted(false)
    }, 4000)
  }

  const inquiryTypes = ['General Inquiry', 'Support', 'Partnership', 'Press', 'Careers']

  const contactChannels = [
    {
      icon: <FiMail size={22} />,
      label: 'Email',
      value: 'hello@skillpath.io',
      sub: 'We reply within 24 hours',
      href: 'mailto:hello@skillpath.io',
    },
    {
      icon: <FiMessageSquare size={22} />,
      label: 'Live Chat',
      value: 'In-app support',
      sub: 'Available 24/7 on the platform',
      href: '#',
    },
    {
      icon: <FiTwitter size={22} />,
      label: 'Twitter / X',
      value: '@skillpathio',
      sub: 'Quick questions & updates',
      href: 'https://twitter.com',
    },
  ]

  const faqs = [
    { q: 'How does the AI personalization work?', a: 'Our AI analyzes your learning style, pace, and goals to continuously adapt your skill path. It adjusts difficulty, suggests resources, and keeps you moving forward without overwhelm.' },
    { q: 'Is there a free plan?', a: 'Yes! The Starter plan is free forever with 1 active learning path and 10 AI mentor messages per day. No credit card required.' },
    { q: 'Can I switch skill paths?', a: 'Absolutely. You can pause, switch, or run multiple paths simultaneously depending on your plan. Your progress is always saved.' },
    { q: 'Are the certificates industry-recognized?', a: 'Our Pro and Teams plan certificates are verified and shareable to LinkedIn, portfolio sites, and resumes. We partner with companies who recognize them.' },
  ]

  const inputBase = (name) =>
    `w-full px-4 py-3.5 rounded-xl border transition-all duration-200 text-slate-200 text-sm placeholder-slate-600 outline-none ${
      focused === name
        ? 'bg-[#12121e] border-amber-500/50 shadow-sm shadow-amber-500/10 caret-amber-400'
        : 'bg-[#0f0f18] border-white/8 hover:border-white/15 hover:bg-[#12121e]'
    }`

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-center bg-[#0a0a0f] dot-grid pt-24 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[250px] bg-amber-500/6 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 py-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/20 bg-amber-500/8 text-amber-400 text-sm font-medium mb-8">
            <FiZap size={13} className="animate-pulse-glow" />
            We respond within 24 hours
          </div>

          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6">
            Let's start a<br />
            <span className="text-gradient">conversation</span>
          </h1>

          <p className="text-slate-400 text-xl leading-relaxed max-w-2xl mx-auto">
            Whether you have a question about features, pricing, a partnership idea, or just want to say hello — we'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0f]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

            {/* Left: Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="glass-card rounded-2xl p-12 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500/20 to-orange-500/10 border border-amber-500/20 flex items-center justify-center text-3xl mx-auto mb-5">
                    <FiCheckCircle className="text-amber-400" size={30} />
                  </div>
                  <h2 className="font-display text-3xl font-bold text-white mb-3">Message Sent!</h2>
                  <p className="text-slate-400 text-base leading-relaxed max-w-sm mx-auto">
                    Thanks for reaching out. We've received your message and will get back to you within 24 hours.
                  </p>
                  <div className="mt-6 flex items-center justify-center gap-2 text-sm text-slate-500">
                    <FiClock size={14} />
                    <span>Typical response time: under 4 hours</span>
                  </div>
                </div>
              ) : (
                <div className="glass-card rounded-2xl p-8">
                  <h2 className="font-display text-2xl font-bold text-white mb-2">Send us a message</h2>
                  <p className="text-slate-500 text-sm mb-8">Fill in the form and we'll be in touch shortly.</p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Inquiry Type */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                        What's this about?
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {inquiryTypes.map((type) => (
                          <button
                            type="button"
                            key={type}
                            onClick={() => setFormData((p) => ({ ...p, type }))}
                            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                              formData.type === type
                                ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40'
                                : 'text-slate-500 border border-white/8 hover:border-white/20 hover:text-slate-300'
                            }`}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Name & Email row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          onFocus={() => setFocused('name')}
                          onBlur={() => setFocused('')}
                          placeholder="Jane Smith"
                          className={inputBase('name')}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          onFocus={() => setFocused('email')}
                          onBlur={() => setFocused('')}
                          placeholder="jane@company.com"
                          className={inputBase('email')}
                        />
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        onFocus={() => setFocused('subject')}
                        onBlur={() => setFocused('')}
                        placeholder="How can we help?"
                        className={inputBase('subject')}
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => setFocused('message')}
                        onBlur={() => setFocused('')}
                        placeholder="Tell us more about what you need..."
                        rows={6}
                        className={`${inputBase('message')} resize-none`}
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="group w-full flex items-center justify-center gap-2.5 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold text-base hover:shadow-xl hover:shadow-amber-500/25 hover:scale-[1.02] transition-all duration-200"
                    >
                      Send Message
                      <FiSend className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" size={16} />
                    </button>
                  </form>
                </div>
              )}
            </div>

            {/* Right: Contact info + Social */}
            <div className="lg:col-span-2 space-y-5">
              {/* Contact channels */}
              <div className="glass-card rounded-2xl p-6">
                <h3 className="font-bold text-white text-lg mb-5">Other ways to reach us</h3>
                <div className="space-y-4">
                  {contactChannels.map((ch, i) => (
                    <a
                      key={i}
                      href={ch.href}
                      className="flex items-start gap-4 p-4 rounded-xl hover:bg-amber-500/5 hover:border-amber-500/15 border border-transparent transition-all duration-200 group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500/15 to-orange-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 flex-shrink-0 group-hover:scale-110 transition-transform">
                        {ch.icon}
                      </div>
                      <div>
                        <p className="text-white text-sm font-semibold">{ch.label}</p>
                        <p className="text-amber-400 text-sm">{ch.value}</p>
                        <p className="text-slate-500 text-xs mt-0.5">{ch.sub}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Social links */}
              <div className="glass-card rounded-2xl p-6">
                <h3 className="font-bold text-white text-base mb-4">Follow us</h3>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { icon: <FiTwitter size={18} />, label: 'Twitter', handle: '@skillpathio' },
                    { icon: <FiLinkedin size={18} />, label: 'LinkedIn', handle: 'SkillPath' },
                    { icon: <FiGithub size={18} />, label: 'GitHub', handle: 'skillpath' },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href="#"
                      className="flex flex-col items-center gap-2 p-3 rounded-xl glass-card hover:border-amber-500/20 hover:bg-amber-500/5 transition-all duration-200 group text-center"
                    >
                      <span className="text-slate-400 group-hover:text-amber-400 transition-colors">{s.icon}</span>
                      <span className="text-slate-500 text-xs">{s.label}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Response time card */}
              <div className="glass-card-warm rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-sm font-semibold text-slate-300">We're online now</span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Our support team is active and typically responds within <strong className="text-amber-400">2–4 hours</strong> on business days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 bg-[#080810] relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-4">FAQ</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-5">
              Common questions
            </h2>
            <p className="text-slate-400 text-lg">
              Can't find the answer? Just send us a message above.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="glass-card rounded-xl p-6 hover:border-amber-500/15 hover:bg-amber-500/3 transition-all duration-300">
                <h3 className="text-white font-semibold text-base mb-3 flex items-start gap-3">
                  <span className="text-amber-500 font-bold mt-0.5 flex-shrink-0">Q.</span>
                  {faq.q}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed pl-6">{faq.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-slate-500 text-sm mb-4">Still have questions?</p>
            <a
              href="mailto:hello@skillpath.io"
              className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-semibold text-sm transition-colors"
            >
              Email us directly
              <FiArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
