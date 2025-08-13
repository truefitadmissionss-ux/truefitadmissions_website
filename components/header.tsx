"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const openCalendly = () => {
    window.open("https://calendly.com/truefit-admissionss/30min", "_blank")
  }

  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b border-blue-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="text-2xl font-bold">
              <span className="bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                TrueFit
              </span>{" "}
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Admissions
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => {
                const element = document.getElementById("about-us")
                if (element) element.scrollIntoView({ behavior: "smooth" })
              }}
              className="text-slate-700 hover:text-teal-600 font-medium transition-colors"
            >
              About Us
            </button>
            <button
              onClick={() => {
                const element = document.getElementById("services")
                if (element) element.scrollIntoView({ behavior: "smooth" })
              }}
              className="text-slate-700 hover:text-blue-600 font-medium transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => {
                const element = document.getElementById("testimonials")
                if (element) element.scrollIntoView({ behavior: "smooth" })
              }}
              className="text-slate-700 hover:text-green-600 font-medium transition-colors"
            >
              Testimonials
            </button>
            <Button
              onClick={openCalendly}
              className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white shadow-lg hover:shadow-xl transition-all"
            >
              Free Consultation
            </Button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-blue-200">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => {
                  const element = document.getElementById("about-us")
                  if (element) element.scrollIntoView({ behavior: "smooth" })
                  setIsMenuOpen(false)
                }}
                className="text-left text-slate-700 hover:text-teal-600 font-medium transition-colors"
              >
                About Us
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById("services")
                  if (element) element.scrollIntoView({ behavior: "smooth" })
                  setIsMenuOpen(false)
                }}
                className="text-left text-slate-700 hover:text-blue-600 font-medium transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById("testimonials")
                  if (element) element.scrollIntoView({ behavior: "smooth" })
                  setIsMenuOpen(false)
                }}
                className="text-left text-slate-700 hover:text-green-600 font-medium transition-colors"
              >
                Testimonials
              </button>
              <Button
                onClick={() => {
                  openCalendly()
                  setIsMenuOpen(false)
                }}
                className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white w-full shadow-lg hover:shadow-xl transition-all"
              >
                Free Consultation
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
