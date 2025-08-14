"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Calendar, Send } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    grade: "",
    message: "",
  })

  const openCalendly = () => {
    window.open("https://calendly.com/truefit-admissionss/30min", "_blank")
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Basic validation
    if (!formData.name || !formData.email || !formData.grade) {
      alert("Please fill in all required fields.")
      return
    }

    // Create email body with form data
    const emailBody = `
New Consultation Request from TrueFit Admissions Website

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || "Not provided"}
Current Grade: ${formData.grade}

Goals and Concerns:
${formData.message || "No additional message provided"}

---
This request was submitted through the TrueFit Admissions website contact form.
    `.trim()

    // Create mailto link
    const mailtoLink = `mailto:truefit.admissionss@gmail.com?subject=New Consultation Request - ${formData.name}&body=${encodeURIComponent(emailBody)}`

    // Open email client
    window.location.href = mailtoLink

    // Show success message and then open Calendly
    alert(`Thank you ${formData.name}! Your request has been sent. Opening calendar to schedule your consultation.`)

    // Small delay to allow email to open first
    setTimeout(() => {
      openCalendly()
    }, 1000)

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      grade: "",
      message: "",
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section
      id="contact"
      className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 via-purple-600 via-blue-700 to-slate-800"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 tracking-tight px-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto px-4">
            Take the first step toward your dream college. Schedule your free consultation today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-2xl">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl sm:text-2xl font-bold text-slate-800 flex items-center gap-2">
                <Calendar className="h-5 w-5 sm:h-6 sm:w-6 text-blue-500" />
                Contact Us To Learn More
              </CardTitle>
            </CardHeader>
            <CardContent className="px-4 sm:px-6">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Current Grade *</label>
                    <select
                      name="grade"
                      required
                      value={formData.grade}
                      onChange={handleChange}
                      className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                    >
                      <option value="">Select grade</option>
                      <option value="9th">9th Grade</option>
                      <option value="10th">10th Grade</option>
                      <option value="11th">11th Grade</option>
                      <option value="12th">12th Grade</option>
                      <option value="gap">Gap Year</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Tell us about your goals and concerns
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base resize-none"
                    placeholder="What are your dream schools? What challenges are you facing? How can we help?"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-3 text-base sm:text-lg font-semibold flex items-center justify-center gap-2 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  <Send className="h-4 w-4 sm:h-5 sm:w-5" />
                  Submit Request
                </Button>

                <div className="flex items-center gap-4 my-4">
                  <div className="flex-1 h-px bg-slate-300"></div>
                  <span className="text-slate-500 text-sm">or</span>
                  <div className="flex-1 h-px bg-slate-300"></div>
                </div>

                <Button
                  type="button"
                  onClick={openCalendly}
                  variant="outline"
                  className="w-full border-2 border-blue-400 text-blue-600 hover:bg-blue-50 py-3 text-base sm:text-lg font-semibold flex items-center justify-center gap-2 transition-all duration-200 bg-transparent"
                >
                  <Calendar className="h-4 w-4 sm:h-5 sm:w-5" />
                  Schedule Directly
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Get in Touch</h3>
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-center gap-4">
                    <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-blue-200 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-sm sm:text-base">Email</div>
                      <div className="text-blue-100 text-sm sm:text-base break-all">truefit.admissionss@gmail.com</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-blue-200 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-sm sm:text-base">Phone</div>
                      <div className="text-blue-100 text-sm sm:text-base">(510) 517-7250</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-blue-200 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-sm sm:text-base">Serving</div>
                      <div className="text-blue-100 text-sm sm:text-base">Students in the Bay Area, Domestically, and Internationally</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">What to Expect</h3>
                <ul className="space-y-2 sm:space-y-3 text-blue-100">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm sm:text-base">30-minute free consultation call</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm sm:text-base">Personalized assessment of your profile</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm sm:text-base">Custom strategy recommendations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm sm:text-base">No pressure, no commitment</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center mt-8 sm:mt-12 space-y-3 sm:space-y-4 px-4">
          <p className="text-blue-100 text-base sm:text-lg">
            <span className="font-semibold">Remember:</span> You are more than your stats. Let's discover your story
            together.
          </p>
          <p className="text-blue-200 text-sm sm:text-base">
            Contact Mugdha and Anya for more @ TrueFit Admissions by scheduling a meeting or by emailing us at
            truefit.admissionss@gmail.com!
          </p>
        </div>
      </div>
    </section>
  )
}
