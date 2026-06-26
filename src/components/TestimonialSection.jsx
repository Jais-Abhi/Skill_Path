import React from 'react'
import { FaStar } from 'react-icons/fa'

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Software Developer',
      image: '👩‍💼',
      rating: 5,
      text: 'SkillPath helped me transition into web development. The AI guidance was incredibly personalized and the learning path was exactly what I needed.',
    },
    {
      id: 2,
      name: 'Mike Chen',
      role: 'Data Analyst',
      image: '👨‍💼',
      rating: 5,
      text: 'I loved the interactive AI chat support. It made learning complex topics much easier. Highly recommended for anyone serious about upskilling.',
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Product Manager',
      image: '👩‍💼',
      rating: 5,
      text: 'SkillPath is beginner-friendly yet comprehensive. I was able to learn at my own pace with the support of an AI mentor. Fantastic platform!',
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Learners Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of learners who have transformed their careers with SkillPath.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition duration-300 border border-gray-100"
            >
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-3">{testimonial.image}</span>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" size={16} />
                ))}
              </div>

              <p className="text-gray-700 italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialSection
