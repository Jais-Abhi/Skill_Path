import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import FeatureCard from '../components/FeatureCard'
import TestimonialSection from '../components/TestimonialSection'
import CTABanner from '../components/CTABanner'
import Footer from '../components/Footer'

const Landing = () => {
  const features = [
    {
      icon: '🤖',
      title: 'AI-Powered Learning Guidance',
      description: 'Our advanced AI analyzes your learning style and creates personalized paths tailored just for you.',
    },
    {
      icon: '🎯',
      title: 'Personalized Skill Learning',
      description: 'Focus on the skills that matter to you with customized learning modules and real-world projects.',
    },
    {
      icon: '💬',
      title: 'Interactive AI Chat Support',
      description: 'Get instant help from our AI mentor available 24/7 to answer your questions and guide your learning.',
    },
    {
      icon: '✨',
      title: 'Beginner-Friendly Experience',
      description: 'Start from scratch with no prior experience needed. Our platform grows with you at every step.',
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose SkillPath?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Experience the future of learning with our AI-powered platform designed for your success.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </div>
        </section>

        <TestimonialSection />
        <CTABanner />
      </main>
      <Footer />
    </div>
  )
}

export default Landing
