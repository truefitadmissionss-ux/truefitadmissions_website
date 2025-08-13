"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GraduationCap, FileText, Lightbulb, Users, CheckCircle } from "lucide-react"

export default function Services() {
  const openCalendly = () => {
    window.open("https://calendly.com/truefit-admissionss/30min", "_blank")
  }

  const services = [
    {
      icon: GraduationCap,
      title: "Senior Launch Package",
      subtitle: "Ideal for 12th graders",
      color: "blue",
      features: [
        "College list finalization",
        "Personal Statement + Supplementals (UCs + Common App)",
        "Strategic EC additions (last-minute impact)",
        "Deadline/project planning",
      ],
    },
    {
      icon: FileText,
      title: "Essay Coaching & Review",
      subtitle: "Perfect your narrative",
      color: "green",
      features: [
        "Brainstorming & outlining support",
        "Multiple rounds of edits",
        "Narrative development & positioning",
        "Voice and authenticity coaching",
      ],
    },
    {
      icon: Lightbulb,
      title: "Passion Project Incubator",
      subtitle: "Build something meaningful",
      color: "teal",
      features: [
        "1:1 coaching to explore interests",
        "Brainstorm and build custom, standout extracurriculars",
        "Timeline, mentorship, publishing/execution advice",
        "Impact measurement and documentation",
      ],
    },
    {
      icon: Users,
      title: "Full Journey Mentorship",
      subtitle: "Grades 9–12 comprehensive support",
      color: "emerald",
      features: [
        "Long-term mentorship for younger students",
        "Quarterly strategy meetings",
        "Course selection, summer planning, EC strategy",
        "Career exploration + major identification",
        "Includes Senior Launch and Essay services",
      ],
    },
  ]

  const colorClasses = {
    blue: {
      icon: "text-blue-600",
      border: "border-blue-300",
      gradient: "from-blue-100 to-blue-200",
      hover: "hover:border-blue-400",
    },
    green: {
      icon: "text-green-600",
      border: "border-green-300",
      gradient: "from-green-100 to-green-200",
      hover: "hover:border-green-400",
    },
    teal: {
      icon: "text-teal-600",
      border: "border-teal-300",
      gradient: "from-teal-100 to-teal-200",
      hover: "hover:border-teal-400",
    },
    emerald: {
      icon: "text-emerald-600",
      border: "border-emerald-300",
      gradient: "from-emerald-100 to-emerald-200",
      hover: "hover:border-emerald-400",
    },
  }

  return (
    <section id="services" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-6 tracking-tight">
            Our{" "}
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-slate-700 max-w-3xl mx-auto">
            Comprehensive support tailored to your unique journey, from freshman year through college acceptance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const colors = colorClasses[service.color as keyof typeof colorClasses]
            const Icon = service.icon

            return (
              <Card
                key={index}
                className={`bg-gradient-to-br ${colors.gradient} ${colors.border} ${colors.hover} border-2 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center mb-4">
                    <Icon className={`h-8 w-8 ${colors.icon} mr-3`} />
                    <div>
                      <CardTitle className="text-xl font-bold text-slate-800">{service.title}</CardTitle>
                      <p className="text-sm text-slate-700 mt-1">{service.subtitle}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-700 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-800">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    onClick={() => {
                      const element = document.getElementById("contact")
                      if (element) element.scrollIntoView({ behavior: "smooth" })
                    }}
                    className="w-full bg-white/80 hover:bg-white text-slate-800 border border-slate-400 hover:border-slate-500 transition-all"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Button
            onClick={openCalendly}
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            Schedule Your Free Consultation
          </Button>
        </div>
      </div>
    </section>
  )
}
