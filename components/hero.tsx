"use client"

import { Button } from "@/components/ui/button"
import { Heart, Star, Users } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  const openCalendly = () => {
    window.open("https://calendly.com/truefit-admissionss/30min", "_blank")
  }

  return (
    <section className="bg-gradient-to-br from-blue-200 via-blue-100 via-green-100 to-green-200 pt-20 sm:pt-24 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-screen flex items-center">
      {/* Subtle background elements - positioned to avoid overlaps */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-32 left-8 w-16 h-16 bg-blue-300 rounded-full blur-xl"></div>
        <div className="absolute top-1/3 right-12 w-20 h-20 bg-green-300 rounded-full blur-xl"></div>
        <div className="absolute bottom-1/4 left-16 w-12 h-12 bg-teal-300 rounded-full blur-lg"></div>
        <div className="absolute bottom-32 right-20 w-24 h-24 bg-blue-200 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative w-full z-10">
        {/* Icons centered across the entire page width */}
        <div className="absolute top-0 left-0 right-0 flex justify-center mb-4 sm:mb-6 z-20">
          <div className="flex items-center space-x-3 sm:space-x-4">
            <Heart className="h-6 w-6 sm:h-8 sm:w-8 text-red-500 fill-current" />
            <Star className="h-6 w-6 sm:h-8 sm:w-8 text-yellow-500 fill-current" />
            <Users className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600 fill-current" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-8 sm:mb-12 pt-12 sm:pt-16">
          {/* Left Content - takes up 6 columns on large screens */}
          <div className="text-center lg:text-left order-2 lg:order-1 lg:col-span-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight px-2 sm:px-0">
              <span className="block bg-gradient-to-r from-blue-700 via-green-600 to-teal-600 bg-clip-text text-transparent">
                You're more than a profile
              </span>
            </h1>

            <div className="space-y-6 sm:space-y-8 mb-8 sm:mb-10 px-2 sm:px-0">
              <p className="text-xl sm:text-2xl lg:text-3xl text-slate-700 leading-relaxed font-medium">
                Whether you're proud of your numbers or unsure they tell the full story,{" "}
                <span className="font-bold bg-gradient-to-r from-blue-700 to-green-600 bg-clip-text text-transparent">
                  we see you.
                </span>
              </p>

              <p className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-800 via-blue-700 to-green-700 bg-clip-text text-transparent leading-relaxed">
                Every student has a story, a spark, and strengths that colleges desire.
              </p>

              <p className="text-xl sm:text-2xl lg:text-3xl text-slate-700 leading-relaxed font-medium">
                Let's uncover your strengths and help colleges see the real{" "}
                <span className="italic font-bold bg-gradient-to-r from-green-700 to-teal-600 bg-clip-text text-transparent">
                  you.
                </span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start items-center mb-6 sm:mb-8 px-4 sm:px-0">
              <Button
                onClick={openCalendly}
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-8 sm:px-10 py-4 sm:py-5 text-lg sm:text-xl font-semibold shadow-lg hover:shadow-xl transition-all w-full sm:w-auto rounded-xl"
              >
                Get Your Free Consultation
              </Button>
              <p className="text-base text-slate-600 italic text-center font-medium">No commitment required</p>
            </div>
          </div>

          {/* Right Illustration - takes up 6 columns on large screens */}
          <div className="flex justify-center lg:justify-center order-1 lg:order-2 lg:col-span-6">
            <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-2xl xl:max-w-3xl">
              <Image
                src="/images/hero-illustration.png"
                alt="Student walking confidently towards college success with lightbulbs and college building"
                width={800}
                height={600}
                className="w-full h-auto drop-shadow-lg"
                priority
              />
            </div>
          </div>
        </div>

        {/* Bottom Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto px-2 sm:px-0">
          <div className="bg-white/70 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-blue-300 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1 sm:mb-2">T20</div>
            <div className="text-slate-700 text-sm sm:text-base">& UC Specialists</div>
          </div>
          <div className="bg-white/70 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-teal-300 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-2xl sm:text-3xl font-bold text-teal-600 mb-1 sm:mb-2">1:1</div>
            <div className="text-slate-700 text-sm sm:text-base">Personalized Support</div>
          </div>
          <div className="bg-white/70 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-green-300 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-2xl sm:text-3xl font-bold text-green-600 mb-1 sm:mb-2">24/7</div>
            <div className="text-slate-700 text-sm sm:text-base">Student Support</div>
          </div>
        </div>
      </div>
    </section>
  )
}
