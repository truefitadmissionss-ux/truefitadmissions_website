"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, Play, Pause, Plus, ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "R.S.",
    school: "University of Maryland '28",
    logo: "UMD",
    logoColor: "text-red-600 bg-red-50",
    previousStats: "3.8 GPA, 1580 SAT",
    content:
      "The project incubator completely transformed my application. TrueFit gave me the clarity and confidence to pour my skills into a cause that truly matters to me. I co-founded an education app for underserved communities, and seeing it make a real difference was incredible.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60&text=RS",
  },
  {
    id: 2,
    name: "S.S.",
    school: "Caltech '29",
    logo: "CALTECH",
    logoColor: "text-orange-600 bg-orange-50",
    previousStats: "3.9 GPA, 1580 SAT",
    content:
      "The passion project incubator changed everything. We turned my love for coding into a nonprofit that taught programming to underserved kids. Caltech saw my impact, not just my numbers.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60&text=SS",
  },
  {
    id: 3,
    name: "M.S.",
    school: "USC '29",
    logo: "USC",
    logoColor: "text-yellow-700 bg-yellow-50",
    previousStats: "3.7 GPA, 1500 SAT",
    content:
      "I wouldn't have gotten into USC without TrueFit! They helped me shape my internships and projects into powerful stories that showed colleges just how meaningful they were to me.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60&text=MS",
  },
  {
    id: 4,
    name: "R.L.",
    school: "Northeastern '28",
    logo: "NORTHEASTERN",
    logoColor: "text-blue-600 bg-blue-50",
    previousStats: "3.4 GPA, 1430 SAT",
    content:
      "The essay coaching was incredible. They helped me turn my struggle with anxiety into a powerful story about mental health advocacy. Northeastern saw my authenticity and admitted me with a scholarship.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60&text=RL",
  },
  {
    id: 5,
    name: "A.S.",
    school: "Mission San Jose High School",
    logo: "MSJHS Parent",
    logoColor: "text-green-600 bg-green-50",
    previousStats: "Parent",
    content:
      "My daughter has long been passionate about medicine, but with my husband and me both working in computer science, we had no idea what she needed to do in high school to prepare for a strong Biology or Chemistry program. We are so grateful for the counselors at TrueFit, whose deep knowledge of the pre-med track and experience crafting competitive pre-med applications guided her every step of the way. Over the past three years, their expertise has made all the difference in shaping her path to higher education.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60&text=AS",
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  const openGoogleForm = () => {
    window.open(
      "https://docs.google.com/forms/d/1HKWv7vjX_DZlyx1Odu-xx7XUnM4NaMzDi7jsV53vrBA/viewform?edit_requested=true",
      "_blank",
    )
  }

  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isPlaying])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section
      id="testimonials"
      className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-100 via-teal-50 to-blue-100"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mb-4 sm:mb-6 tracking-tight">
            Success Stories:{" "}
            <span className="bg-gradient-to-r from-green-700 to-blue-700 bg-clip-text text-transparent">
              Beyond the Numbers
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-700 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
            Real students, real challenges, real acceptances. See how we helped students with various stats get into
            their dream schools.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6 sm:mb-8">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex items-center gap-2 border-blue-400 text-blue-700 hover:bg-blue-50"
            >
              {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              {isPlaying ? "Pause" : "Play"}
            </Button>
            <Button
              onClick={openGoogleForm}
              className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white flex items-center gap-2 shadow-lg hover:shadow-xl transition-all"
            >
              <Plus className="h-4 w-4" />
              Submit Your Story
            </Button>
          </div>
        </div>

        {/* Mobile-first testimonial display */}
        <div className="relative mb-6 sm:mb-8">
          {/* Mobile: Single card display */}
          <div className="block sm:hidden">
            <Card className="bg-white/90 border-blue-300 shadow-lg mx-4">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <blockquote className="text-slate-700 text-base leading-relaxed mb-6 font-medium">
                  "{testimonials[currentIndex].content}"
                </blockquote>

                <div className="flex flex-col space-y-4">
                  <div className="flex items-center">
                    <Avatar className="h-12 w-12 mr-4 border-2 border-blue-300">
                      <AvatarImage
                        src={testimonials[currentIndex].avatar || "/placeholder.svg"}
                        alt={testimonials[currentIndex].name}
                      />
                      <AvatarFallback className="bg-gradient-to-br from-blue-100 to-green-100 text-slate-700 font-semibold">
                        {testimonials[currentIndex].name
                          .split(".")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-bold text-slate-800">{testimonials[currentIndex].name}</div>
                      <div className="text-blue-700 font-semibold text-sm">{testimonials[currentIndex].school}</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className={`px-3 py-1 rounded-full text-xs font-bold ${testimonials[currentIndex].logoColor}`}>
                      {testimonials[currentIndex].logo}
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-slate-600 font-medium">
                        {testimonials[currentIndex].previousStats === "Parent" ? "Parent Review" : "Previous Stats:"}
                      </div>
                      <div className="text-xs text-slate-700">{testimonials[currentIndex].previousStats}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Desktop: Stacked cards display */}
          <div className="hidden sm:block relative h-80 lg:h-96">
            <div className="absolute inset-0 flex items-center justify-center">
              {testimonials.map((testimonial, index) => {
                const offset = index - currentIndex
                const absOffset = Math.abs(offset)
                const isActive = offset === 0

                return (
                  <Card
                    key={testimonial.id}
                    className={`absolute w-full max-w-2xl lg:max-w-3xl transition-all duration-700 ease-out cursor-pointer ${
                      isActive
                        ? "z-30 scale-100 opacity-100 bg-white/90 border-blue-300 shadow-2xl"
                        : absOffset === 1
                          ? "z-20 scale-95 opacity-60 bg-white/80 border-slate-300 shadow-lg"
                          : "z-10 scale-90 opacity-30 bg-white/70 border-slate-400 shadow-md"
                    }`}
                    style={{
                      transform: `translateX(${offset * 30}px) translateY(${absOffset * 15}px) scale(${
                        isActive ? 1 : 1 - absOffset * 0.05
                      })`,
                    }}
                    onClick={() => !isActive && goToTestimonial(index)}
                  >
                    <CardContent className="p-6 lg:p-8">
                      <div className="flex items-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>

                      <blockquote className="text-slate-700 text-base lg:text-lg leading-relaxed mb-6 font-medium">
                        "{testimonial.content}"
                      </blockquote>

                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
                        <div className="flex items-center">
                          <Avatar className="h-12 w-12 lg:h-14 lg:w-14 mr-4 border-2 border-blue-300">
                            <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                            <AvatarFallback className="bg-gradient-to-br from-blue-100 to-green-100 text-slate-700 font-semibold">
                              {testimonial.name
                                .split(".")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-bold text-slate-800 text-base lg:text-lg">{testimonial.name}</div>
                            <div className="text-blue-700 font-semibold text-sm lg:text-base">{testimonial.school}</div>
                          </div>
                        </div>
                        <div className="text-left sm:text-right flex flex-row sm:flex-col items-center sm:items-end space-x-4 sm:space-x-0">
                          <div
                            className={`px-3 py-1 rounded-full text-xs font-bold mb-0 sm:mb-2 ${testimonial.logoColor}`}
                          >
                            {testimonial.logo}
                          </div>
                          <div>
                            <div className="text-xs lg:text-sm text-slate-600 font-medium">
                              {testimonial.previousStats === "Parent" ? "Parent Review" : "Previous Stats:"}
                            </div>
                            <div className="text-xs lg:text-sm text-slate-700">{testimonial.previousStats}</div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 sm:gap-6">
          <Button
            variant="outline"
            size="icon"
            onClick={prevTestimonial}
            className="h-10 w-10 sm:h-12 sm:w-12 rounded-full border-slate-400 hover:bg-slate-100 hover:border-slate-500 bg-transparent"
          >
            <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 text-slate-700" />
          </Button>

          <div className="flex gap-2 sm:gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-blue-600 w-6 sm:w-10" : "bg-slate-400 hover:bg-slate-500"
                }`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={nextTestimonial}
            className="h-10 w-10 sm:h-12 sm:w-12 rounded-full border-slate-400 hover:bg-slate-100 hover:border-slate-500 bg-transparent"
          >
            <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 text-slate-700" />
          </Button>
        </div>
      </div>
    </section>
  )
}
