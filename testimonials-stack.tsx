"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "VP of Engineering",
    company: "TechFlow Inc.",
    content:
      "This solution transformed our workflow efficiency by 300%. The implementation was seamless and the support team exceeded our expectations.",
    rating: 5,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    role: "CTO",
    company: "DataSync Solutions",
    content:
      "Outstanding platform that scales with our business needs. The analytics dashboard provides insights we never had before.",
    rating: 5,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 3,
    name: "Emily Watson",
    role: "Product Manager",
    company: "InnovateLab",
    content:
      "The user experience is intuitive and powerful. Our team adopted it within days, and productivity has increased significantly.",
    rating: 5,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 4,
    name: "David Kim",
    role: "Operations Director",
    company: "GlobalTech Corp",
    content: "Reliable, secure, and feature-rich. This platform has become an essential part of our daily operations.",
    rating: 5,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 5,
    name: "Lisa Thompson",
    role: "Head of Digital",
    company: "FutureWorks",
    content: "The ROI was evident within the first quarter. Exceptional product with world-class customer service.",
    rating: 5,
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

export default function Component() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-slate-800 mb-4">What Our Clients Say</h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Trusted by industry leaders worldwide. See how we've helped businesses transform their operations.
        </p>
      </div>

      <div className="relative h-80 mb-8">
        <div className="absolute inset-0 flex items-center justify-center">
          {testimonials.map((testimonial, index) => {
            const offset = index - currentIndex
            const absOffset = Math.abs(offset)
            const isActive = offset === 0

            return (
              <Card
                key={testimonial.id}
                className={`absolute w-full max-w-2xl transition-all duration-500 ease-out cursor-pointer ${
                  isActive
                    ? "z-30 scale-100 opacity-100 bg-gradient-to-br from-slate-50 to-blue-50 border-slate-200 shadow-xl"
                    : absOffset === 1
                      ? "z-20 scale-95 opacity-70 bg-gradient-to-br from-slate-100 to-slate-200 border-slate-300"
                      : "z-10 scale-90 opacity-40 bg-gradient-to-br from-slate-200 to-slate-300 border-slate-400"
                }`}
                style={{
                  transform: `translateX(${offset * 20}px) translateY(${absOffset * 10}px) scale(${
                    isActive ? 1 : 1 - absOffset * 0.05
                  })`,
                }}
                onClick={() => !isActive && goToTestimonial(index)}
              >
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <blockquote className="text-slate-700 text-lg leading-relaxed mb-6 font-medium">
                    "{testimonial.content}"
                  </blockquote>

                  <div className="flex items-center">
                    <Avatar className="h-12 w-12 mr-4 border-2 border-slate-200">
                      <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                      <AvatarFallback className="bg-gradient-to-br from-slate-100 to-slate-200 text-slate-600">
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-slate-800">{testimonial.name}</div>
                      <div className="text-slate-600 text-sm">
                        {testimonial.role} at {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      <div className="flex items-center justify-center gap-4">
        <Button
          variant="outline"
          size="icon"
          onClick={prevTestimonial}
          className="h-10 w-10 rounded-full border-slate-300 hover:bg-slate-100 hover:border-slate-400 bg-transparent"
        >
          <ChevronLeft className="h-4 w-4 text-slate-600" />
        </Button>

        <div className="flex gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-slate-600 w-8" : "bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>

        <Button
          variant="outline"
          size="icon"
          onClick={nextTestimonial}
          className="h-10 w-10 rounded-full border-slate-300 hover:bg-slate-100 hover:border-slate-400 bg-transparent"
        >
          <ChevronRight className="h-4 w-4 text-slate-600" />
        </Button>
      </div>
    </div>
  )
}
