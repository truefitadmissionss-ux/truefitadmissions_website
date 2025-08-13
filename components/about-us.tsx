"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users, Target, BookOpen, Star } from "lucide-react"

export default function AboutUs() {
  return (
    <section
      id="about-us"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-50 via-blue-50 to-green-50"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-4">
              <Heart className="h-8 w-8 text-red-500 fill-current" />
              <Users className="h-8 w-8 text-blue-600 fill-current" />
              <Star className="h-8 w-8 text-green-600 fill-current" />
            </div>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-blue-700 to-green-700 bg-clip-text text-transparent">About Us</span>
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto mb-8"></div>
        </div>

        {/* Condensed Story Section */}
        <div className="max-w-5xl mx-auto mb-16">
          <Card className="bg-white/80 backdrop-blur-sm border-blue-200 shadow-lg">
            <CardContent className="p-8 lg:p-12">
              <div className="flex items-center mb-6">
                <BookOpen className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-slate-800">Our Story</h3>
              </div>

              <div className="space-y-6 text-slate-700 leading-relaxed">
                <p>
                  As former students at Mission San Jose High School, we experienced firsthand the stress and fear that
                  comes with college admissions. When our GPAs took a hit during junior year AP courses, we felt like
                  our stats would prevent us from reaching our dream programs.
                </p>

                <p>
                  After successfully getting into the schools we wanted, we realized there had to be a better way for
                  students to approach high school and college applications without being consumed by fear over every
                  grade and test score.
                </p>

                <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-6 border-l-4 border-blue-500">
                  <p className="text-xl font-semibold text-slate-800 text-center">
                    That's why we started TrueFit: to give students the tools, strategies, and confidence we wish we had
                    from the very beginning.
                  </p>
                </div>

                <p>
                  Our goal is to help every student see beyond numbers, understand their unique strengths and passions,
                  and use them to their full potential. We're not just focused on getting students into their dream
                  schools; we're focused on helping them discover who they want to be once they get there.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-gradient-to-br from-white/90 to-blue-100/60 backdrop-blur-sm border-blue-300 hover:shadow-lg transition-all">
            <CardContent className="p-6 text-center">
              <Heart className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <h4 className="font-bold text-slate-800 mb-3 text-lg">Empathy First</h4>
              <p className="text-sm text-slate-700">
                We understand the stress and fear because we've been there. Every student deserves compassionate
                guidance.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-white/90 to-teal-100/60 backdrop-blur-sm border-teal-300 hover:shadow-lg transition-all">
            <CardContent className="p-6 text-center">
              <Users className="h-12 w-12 text-teal-600 mx-auto mb-4" />
              <h4 className="font-bold text-slate-800 mb-3 text-lg">Authentic Stories</h4>
              <p className="text-sm text-slate-700">
                We help students discover and tell their unique stories, not create artificial personas for college
                apps.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-white/90 to-green-100/60 backdrop-blur-sm border-green-300 hover:shadow-lg transition-all">
            <CardContent className="p-6 text-center">
              <Target className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h4 className="font-bold text-slate-800 mb-3 text-lg">Beyond Numbers</h4>
              <p className="text-sm text-slate-700">
                We see potential where others see statistics. Every student has strengths that go beyond test scores.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-xl text-slate-700 mb-6 max-w-3xl mx-auto">
            Ready to discover your unique story and build confidence in your college journey?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => {
                const element = document.getElementById("contact")
                if (element) element.scrollIntoView({ behavior: "smooth" })
              }}
              className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              Start Your Journey
            </button>
            <p className="text-sm text-slate-600 italic">Join the students who've found their spark</p>
          </div>
        </div>
      </div>
    </section>
  )
}
