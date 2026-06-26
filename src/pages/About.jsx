import React from 'react'

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">SkillPath</span>
          </h1>
          <p className="text-lg text-gray-600 text-center">
            Empowering learners worldwide through personalized AI-guided skill development.
          </p>
        </div>
      </section>

      {/* What is SkillPath */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What is SkillPath?</h2>
          <p className="text-lg text-gray-700 mb-4">
            SkillPath is an innovative AI-powered learning platform designed to help individuals discover and master new skills at their own pace. We believe that everyone deserves access to high-quality, personalized education regardless of their background or experience level.
          </p>
          <p className="text-lg text-gray-700">
            Our platform combines cutting-edge artificial intelligence with intuitive user experience to create learning paths that adapt to each learner's unique needs, pace, and goals.
          </p>
        </div>
      </section>

      {/* Our Purpose */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Purpose</h2>
          <p className="text-lg text-gray-700 mb-4">
            In a rapidly changing world, the ability to learn new skills is more important than ever. Our purpose is to democratize education by making world-class learning guidance accessible to everyone through artificial intelligence.
          </p>
          <p className="text-lg text-gray-700">
            We aim to break down barriers to learning and help individuals transform their careers and lives through continuous skill development.
          </p>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-blue-900 mb-3">🤖 AI Guidance</h3>
              <p className="text-gray-700">
                Our intelligent AI analyzes your learning patterns and provides real-time guidance to optimize your learning journey.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-purple-900 mb-3">🎯 Personalized Paths</h3>
              <p className="text-gray-700">
                Receive customized learning paths based on your goals, skill level, and learning preferences.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-green-900 mb-3">💬 24/7 Support</h3>
              <p className="text-gray-700">
                Get instant answers and guidance from our AI mentor available around the clock to support your learning.
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-pink-900 mb-3">✨ Beginner-Friendly</h3>
              <p className="text-gray-700">
                No prior experience needed. Start your learning journey from anywhere and progress at your own pace.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl mb-4">
            To empower learners worldwide by providing accessible, personalized, and effective AI-guided learning experiences that help them master new skills and achieve their goals.
          </p>
          <p className="text-lg text-blue-100">
            We're committed to creating a future where quality education is available to everyone, everywhere.
          </p>
        </div>
      </section>
    </>
  )
}

export default About
