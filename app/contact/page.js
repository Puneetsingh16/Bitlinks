"use client"
import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you can add actual form submission logic
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <main className="bg-purple-50 min-h-screen py-8 md:py-16">
      <div className="mx-auto max-w-2xl px-4 md:px-6">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-purple-900 mb-4 md:mb-8 text-center">Contact Us</h1>
        
        <p className="text-center text-gray-700 text-base md:text-lg mb-8 md:mb-12">
          Have a question or feedback? We'd love to hear from you! Fill out the form below and we'll get back to you as soon as possible.
        </p>

        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
          {submitted && (
            <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
              Thank you for your message! We'll get back to you soon.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm md:text-base font-semibold text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm md:text-base font-semibold text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm md:text-base font-semibold text-gray-700 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="What is this about?"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm md:text-base font-semibold text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                className="w-full px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                placeholder="Your message here..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-purple-500 hover:bg-purple-600 transition text-white font-bold py-2 md:py-3 px-4 rounded-lg text-base md:text-lg"
            >
              Send Message
            </button>
          </form>

          <div className="mt-8 md:mt-12 pt-8 border-t border-gray-200">
            <h2 className="text-xl md:text-2xl font-bold text-purple-700 mb-4">Other Ways to Reach Us</h2>
            <p className="text-gray-700 text-base md:text-lg mb-4">
              Email: <a href="mailto:support@bitlinks.com" className="text-purple-500 hover:underline">support@bitlinks.com</a>
            </p>
            <p className="text-gray-700 text-base md:text-lg">
              Follow us on <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-purple-500 hover:underline">GitHub</a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Contact
